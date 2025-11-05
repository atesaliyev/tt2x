import { prisma } from './db';

export interface AuditLogData {
  actorUserId?: string;
  type: string;
  resource: string;
  payload: Record<string, any>;
  ip?: string;
}

export async function createAuditLog(data: AuditLogData) {
  return prisma.auditLog.create({
    data: {
      actorUserId: data.actorUserId,
      type: data.type,
      resource: data.resource,
      payload: JSON.stringify(data.payload),
      ip: data.ip,
    },
  });
}

export const AUDIT_TYPES = {
  CODE_REVEALED: 'CODE_REVEALED',
  CODE_IMPORTED: 'CODE_IMPORTED',
  CODE_REVOKED: 'CODE_REVOKED',
  ORDER_CREATED: 'ORDER_CREATED',
  ORDER_PAID: 'ORDER_PAID',
  ORDER_REFUNDED: 'ORDER_REFUNDED',
  USER_LOGIN: 'USER_LOGIN',
  USER_REGISTER: 'USER_REGISTER',
  USER_2FA_ENABLED: 'USER_2FA_ENABLED',
  USER_2FA_DISABLED: 'USER_2FA_DISABLED',
  PRODUCT_CREATED: 'PRODUCT_CREATED',
  PRODUCT_UPDATED: 'PRODUCT_UPDATED',
  PRODUCT_DELETED: 'PRODUCT_DELETED',
  ADMIN_ACTION: 'ADMIN_ACTION',
};
