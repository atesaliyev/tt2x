import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth/session';
import { orderSchema } from '@/lib/validation/schemas';
import { checkRateLimit, RATE_LIMITS, checkVelocityRules, VELOCITY_RULES } from '@/lib/rateLimit';
import { reserveCodes } from '@/lib/reservation';
import { createAuditLog, AUDIT_TYPES } from '@/lib/audit';

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || '';
    
    const rateLimit = checkRateLimit(`order:${ip}`, RATE_LIMITS.ORDER);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many order attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validation = orderSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.errors },
        { status: 400 }
      );
    }

    const { items, currency } = validation.data;
    const session = await getSession();

    let total = 0;
    const orderItems = [];

    for (const item of items) {
      const priceTier = await prisma.priceTier.findUnique({
        where: { id: item.priceTierId },
        include: { product: true },
      });

      if (!priceTier || priceTier.productId !== item.productId) {
        return NextResponse.json(
          { error: `Invalid price tier for product ${item.productId}` },
          { status: 400 }
        );
      }

      if (priceTier.currency !== currency) {
        return NextResponse.json(
          { error: 'All items must be in the same currency' },
          { status: 400 }
        );
      }

      const itemTotal = Number(priceTier.salePrice) * item.qty;
      total += itemTotal;

      orderItems.push({
        productId: item.productId,
        faceValue: priceTier.faceValue,
        unitPrice: priceTier.salePrice,
        qty: item.qty,
      });
    }

    if (session) {
      const user = await prisma.user.findUnique({
        where: { id: session.userId },
      });

      if (user) {
        const velocityRule = user.createdAt > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          ? VELOCITY_RULES.NEW_USER
          : VELOCITY_RULES.REGULAR_USER;

        const velocityCheck = checkVelocityRules(session.userId, total, velocityRule);
        if (!velocityCheck.allowed) {
          return NextResponse.json(
            { error: velocityCheck.reason },
            { status: 429 }
          );
        }
      }
    }

    const order = await prisma.order.create({
      data: {
        userId: session?.userId,
        total,
        currency,
        status: 'PENDING',
        paymentProvider: 'dummy',
        ip,
        userAgent,
        items: {
          create: orderItems,
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    const reservationResult = await reserveCodes({
      orderId: order.id,
      items: items.map(item => ({
        productId: item.productId,
        qty: item.qty,
      })),
    });

    if (!reservationResult.success) {
      await prisma.order.update({
        where: { id: order.id },
        data: { status: 'FAILED' },
      });

      return NextResponse.json(
        { error: reservationResult.error },
        { status: 400 }
      );
    }

    await createAuditLog({
      actorUserId: session?.userId,
      type: AUDIT_TYPES.ORDER_CREATED,
      resource: 'order',
      payload: { orderId: order.id, total, currency },
      ip,
    });

    return NextResponse.json({ order });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
