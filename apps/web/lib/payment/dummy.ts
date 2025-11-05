export interface CreatePaymentIntentParams {
  amount: number;
  currency: string;
  orderId: string;
  metadata?: Record<string, string>;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: 'requires_payment_method' | 'requires_confirmation' | 'requires_action' | 'processing' | 'succeeded' | 'canceled';
  metadata: Record<string, string>;
  client_secret: string;
}

const paymentIntents = new Map<string, PaymentIntent>();

export async function createPaymentIntent(params: CreatePaymentIntentParams): Promise<PaymentIntent> {
  const id = `pi_dummy_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const clientSecret = `${id}_secret_${Math.random().toString(36).substring(2, 15)}`;
  
  const intent: PaymentIntent = {
    id,
    amount: params.amount,
    currency: params.currency,
    status: 'requires_payment_method',
    metadata: {
      orderId: params.orderId,
      ...params.metadata,
    },
    client_secret: clientSecret,
  };
  
  paymentIntents.set(id, intent);
  
  return intent;
}

export async function retrievePaymentIntent(paymentIntentId: string): Promise<PaymentIntent | null> {
  return paymentIntents.get(paymentIntentId) || null;
}

export async function confirmPaymentIntent(paymentIntentId: string, shouldSucceed: boolean = true): Promise<PaymentIntent> {
  const intent = paymentIntents.get(paymentIntentId);
  if (!intent) {
    throw new Error('Payment intent not found');
  }
  
  intent.status = shouldSucceed ? 'succeeded' : 'canceled';
  paymentIntents.set(paymentIntentId, intent);
  
  return intent;
}

export async function refundPayment(paymentIntentId: string, amount?: number): Promise<{ id: string; amount: number; status: string }> {
  const intent = paymentIntents.get(paymentIntentId);
  if (!intent) {
    throw new Error('Payment intent not found');
  }
  
  return {
    id: `re_dummy_${Date.now()}`,
    amount: amount || intent.amount,
    status: 'succeeded',
  };
}

export function constructWebhookEvent(body: string, signature: string): { type: string; data: { object: PaymentIntent } } {
  const payload = JSON.parse(body);
  return payload;
}
