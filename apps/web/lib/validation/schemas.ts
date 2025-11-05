import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  totpToken: z.string().optional(),
});

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[!@#$%^&*]/, 'Password must contain at least one special character'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const productSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens'),
  category: z.string().min(1, 'Category is required'),
  brand: z.string().min(1, 'Brand is required'),
  region: z.string().min(1, 'Region is required'),
  description: z.string().min(1, 'Description is required'),
  imageUrl: z.string().url().optional().or(z.literal('')),
  active: z.boolean().default(true),
});

export const priceTierSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  currency: z.enum(['TRY', 'USD', 'EUR']),
  faceValue: z.number().positive('Face value must be positive'),
  salePrice: z.number().positive('Sale price must be positive'),
});

export const codeImportSchema = z.object({
  code: z.string().min(1, 'Code is required'),
  batch: z.string().min(1, 'Batch is required'),
  productSlug: z.string().min(1, 'Product slug is required'),
});

export const orderSchema = z.object({
  items: z.array(z.object({
    productId: z.string(),
    priceTierId: z.string(),
    qty: z.number().int().positive(),
  })).min(1, 'At least one item is required'),
  currency: z.enum(['TRY', 'USD', 'EUR']),
  email: z.string().email().optional(),
});

export const checkoutSchema = z.object({
  orderId: z.string(),
  paymentProvider: z.enum(['stripe', 'dummy']),
});

export const profileUpdateSchema = z.object({
  email: z.string().email('Invalid email address').optional(),
  currentPassword: z.string().optional(),
  newPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[!@#$%^&*]/, 'Password must contain at least one special character')
    .optional(),
});

export const totpSetupSchema = z.object({
  token: z.string().length(6, 'Token must be 6 digits'),
});

export const refundSchema = z.object({
  orderId: z.string(),
  amount: z.number().positive().optional(),
  reason: z.string().min(1, 'Reason is required'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ProductInput = z.infer<typeof productSchema>;
export type PriceTierInput = z.infer<typeof priceTierSchema>;
export type CodeImportInput = z.infer<typeof codeImportSchema>;
export type OrderInput = z.infer<typeof orderSchema>;
export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
export type TOTPSetupInput = z.infer<typeof totpSetupSchema>;
export type RefundInput = z.infer<typeof refundSchema>;
