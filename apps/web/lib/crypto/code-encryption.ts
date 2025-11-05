import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;

function getEncryptionKey(): Buffer {
  const key = process.env.CODE_ENC_KEY;
  if (!key) {
    throw new Error('CODE_ENC_KEY environment variable is not set');
  }
  return Buffer.from(key.padEnd(32, '0').slice(0, 32));
}

export function encryptCode(plainCode: string): Buffer {
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  
  let encrypted = cipher.update(plainCode, 'utf8');
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  const authTag = cipher.getAuthTag();
  
  return Buffer.concat([iv, authTag, encrypted]);
}

export function decryptCode(encryptedData: Buffer): string {
  const key = getEncryptionKey();
  
  const iv = encryptedData.subarray(0, IV_LENGTH);
  const authTag = encryptedData.subarray(IV_LENGTH, IV_LENGTH + AUTH_TAG_LENGTH);
  const encrypted = encryptedData.subarray(IV_LENGTH + AUTH_TAG_LENGTH);
  
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  
  return decrypted.toString('utf8');
}

export function maskCode(code: string): string {
  if (code.length <= 8) {
    return code.slice(0, 2) + '****' + code.slice(-2);
  }
  return code.slice(0, 4) + '****' + code.slice(-4);
}

export function hashCode(code: string): string {
  return crypto.createHash('sha256').update(code).digest('hex');
}
