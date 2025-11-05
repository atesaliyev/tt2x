import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'localhost',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(options: EmailOptions) {
  if (process.env.NODE_ENV === 'development' && !process.env.SMTP_HOST) {
    console.log('📧 Email (dev mode):', options);
    return { messageId: 'dev-' + Date.now() };
  }

  return transporter.sendMail({
    from: process.env.SMTP_FROM || 'noreply@epinya.test',
    ...options,
  });
}

export function getVerificationEmailTemplate(email: string, token: string): string {
  const verifyUrl = `${process.env.APP_URL}/verify-email?token=${token}`;
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Verify Your Email</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333;">Welcome to EPINYA!</h1>
        <p>Please verify your email address by clicking the button below:</p>
        <a href="${verifyUrl}" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0;">Verify Email</a>
        <p>Or copy and paste this link into your browser:</p>
        <p style="color: #666; word-break: break-all;">${verifyUrl}</p>
        <p style="color: #999; font-size: 12px; margin-top: 40px;">If you didn't create an account, please ignore this email.</p>
      </body>
    </html>
  `;
}

export function getPasswordResetEmailTemplate(email: string, token: string): string {
  const resetUrl = `${process.env.APP_URL}/reset-password?token=${token}`;
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Reset Your Password</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333;">Reset Your Password</h1>
        <p>You requested to reset your password. Click the button below to proceed:</p>
        <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0;">Reset Password</a>
        <p>Or copy and paste this link into your browser:</p>
        <p style="color: #666; word-break: break-all;">${resetUrl}</p>
        <p style="color: #999; font-size: 12px; margin-top: 40px;">If you didn't request this, please ignore this email. This link will expire in 1 hour.</p>
      </body>
    </html>
  `;
}

export function getOrderSuccessEmailTemplate(orderNumber: string, codes: Array<{ product: string; code: string }>): string {
  const codesHtml = codes.map(item => `
    <div style="background: #f5f5f5; padding: 15px; margin: 10px 0; border-radius: 4px;">
      <strong>${item.product}</strong><br>
      <code style="font-size: 16px; color: #007bff;">${item.code}</code>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Your Order is Ready</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333;">Order Confirmed!</h1>
        <p>Thank you for your purchase. Your order <strong>#${orderNumber}</strong> has been processed successfully.</p>
        <h2 style="color: #333;">Your Codes:</h2>
        ${codesHtml}
        <p style="color: #666; margin-top: 30px;">Please keep these codes safe. You can also view them in your account dashboard.</p>
        <p style="color: #999; font-size: 12px; margin-top: 40px;">Thank you for choosing EPINYA!</p>
      </body>
    </html>
  `;
}

export function getOrderFailedEmailTemplate(orderNumber: string, reason: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Order Failed</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #dc3545;">Order Failed</h1>
        <p>Unfortunately, your order <strong>#${orderNumber}</strong> could not be processed.</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p>If you have any questions, please contact our support team.</p>
        <p style="color: #999; font-size: 12px; margin-top: 40px;">EPINYA Support</p>
      </body>
    </html>
  `;
}

export function getReservationExpiredEmailTemplate(orderNumber: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Order Expired</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #ffc107;">Order Expired</h1>
        <p>Your order <strong>#${orderNumber}</strong> has expired due to incomplete payment.</p>
        <p>The reserved codes have been released back to inventory. You can place a new order anytime.</p>
        <p style="color: #999; font-size: 12px; margin-top: 40px;">EPINYA</p>
      </body>
    </html>
  `;
}
