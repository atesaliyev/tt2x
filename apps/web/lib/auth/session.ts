import { cookies } from 'next/headers';
import { verifyAccessToken, JWTPayload } from './jwt';

export async function getSession(): Promise<JWTPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;
  
  if (!token) {
    return null;
  }
  
  return verifyAccessToken(token);
}

export async function requireAuth(): Promise<JWTPayload> {
  const session = await getSession();
  
  if (!session) {
    throw new Error('Unauthorized');
  }
  
  return session;
}

export async function requireAdmin(): Promise<JWTPayload> {
  const session = await requireAuth();
  
  if (session.role !== 'ADMIN') {
    throw new Error('Forbidden: Admin access required');
  }
  
  return session;
}
