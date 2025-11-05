import * as stripeProvider from './stripe';
import * as dummyProvider from './dummy';

export type PaymentProvider = 'stripe' | 'dummy';

export function getPaymentProvider(provider: PaymentProvider) {
  switch (provider) {
    case 'stripe':
      return stripeProvider;
    case 'dummy':
      return dummyProvider;
    default:
      throw new Error(`Unknown payment provider: ${provider}`);
  }
}

export const DEFAULT_PROVIDER: PaymentProvider = 
  process.env.PAYMENT_PROVIDER === 'stripe' ? 'stripe' : 'dummy';
