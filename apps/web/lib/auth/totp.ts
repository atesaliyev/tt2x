import speakeasy from 'speakeasy';
import qrcode from 'qrcode';

export function generateTOTPSecret(email: string): { secret: string; otpauthUrl: string } {
  const secret = speakeasy.generateSecret({
    name: `EPINYA (${email})`,
    issuer: 'EPINYA',
  });
  
  return {
    secret: secret.base32,
    otpauthUrl: secret.otpauth_url || '',
  };
}

export async function generateQRCode(otpauthUrl: string): Promise<string> {
  return qrcode.toDataURL(otpauthUrl);
}

export function verifyTOTPToken(secret: string, token: string): boolean {
  return speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token,
    window: 2,
  });
}
