import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getPaymentProvider, DEFAULT_PROVIDER } from '@/lib/payment';
import { convertReservationsToSold, releaseReservations } from '@/lib/reservation';
import { createAuditLog, AUDIT_TYPES } from '@/lib/audit';
import { sendEmail, getOrderSuccessEmailTemplate, getOrderFailedEmailTemplate } from '@/lib/email';
import { decryptCode } from '@/lib/crypto/code-encryption';

const processedEvents = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature') || '';
    
    const provider = getPaymentProvider(DEFAULT_PROVIDER);
    
    let event;
    try {
      event = provider.constructWebhookEvent(body, signature);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    const idempotencyKey = `${event.type}_${event.data.object.id}`;
    if (processedEvents.has(idempotencyKey)) {
      return NextResponse.json({ received: true, cached: true });
    }

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      const orderId = paymentIntent.metadata.orderId;

      if (!orderId) {
        console.error('No orderId in payment intent metadata');
        return NextResponse.json({ error: 'Missing orderId' }, { status: 400 });
      }

      const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: {
          user: true,
          items: {
            include: {
              product: true,
            },
          },
        },
      });

      if (!order) {
        console.error('Order not found:', orderId);
        return NextResponse.json({ error: 'Order not found' }, { status: 404 });
      }

      if (order.status === 'PAID') {
        processedEvents.add(idempotencyKey);
        return NextResponse.json({ received: true, alreadyProcessed: true });
      }

      await prisma.order.update({
        where: { id: orderId },
        data: {
          status: 'PAID',
          paymentRef: paymentIntent.id,
        },
      });

      await convertReservationsToSold(orderId);

      await createAuditLog({
        actorUserId: order.userId || undefined,
        type: AUDIT_TYPES.ORDER_PAID,
        resource: 'order',
        payload: { orderId, paymentRef: paymentIntent.id },
        ip: order.ip || undefined,
      });

      const fulfillments = await prisma.fulfillment.findMany({
        where: { orderId },
        include: {
          code: true,
          order: {
            include: {
              items: {
                include: {
                  product: true,
                },
              },
            },
          },
        },
      });

      const codes = fulfillments.map(f => ({
        product: f.order.items.find(i => i.productId === f.code.productId)?.product.title || 'Unknown',
        code: decryptCode(f.code.encryptedCode),
      }));

      if (order.user?.email) {
        await sendEmail({
          to: order.user.email,
          subject: `Order #${order.id.slice(0, 8)} - Your codes are ready!`,
          html: getOrderSuccessEmailTemplate(order.id.slice(0, 8), codes),
        });
      }

      processedEvents.add(idempotencyKey);
    } else if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object;
      const orderId = paymentIntent.metadata.orderId;

      if (!orderId) {
        console.error('No orderId in payment intent metadata');
        return NextResponse.json({ error: 'Missing orderId' }, { status: 400 });
      }

      const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: { user: true },
      });

      if (!order) {
        console.error('Order not found:', orderId);
        return NextResponse.json({ error: 'Order not found' }, { status: 404 });
      }

      await prisma.order.update({
        where: { id: orderId },
        data: {
          status: 'FAILED',
          paymentRef: paymentIntent.id,
        },
      });

      await releaseReservations(orderId);

      if (order.user?.email) {
        await sendEmail({
          to: order.user.email,
          subject: `Order #${order.id.slice(0, 8)} - Payment failed`,
          html: getOrderFailedEmailTemplate(order.id.slice(0, 8), 'Payment processing failed'),
        });
      }

      processedEvents.add(idempotencyKey);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
