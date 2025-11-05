import { prisma } from './db';
import { CodeStatus } from '@prisma/client';

const RESERVATION_TTL = parseInt(process.env.RESERVATION_TTL || '300') * 1000;

export interface ReserveCodesParams {
  orderId: string;
  items: Array<{
    productId: string;
    qty: number;
  }>;
}

export async function reserveCodes(params: ReserveCodesParams): Promise<{ success: boolean; error?: string }> {
  try {
    const expiresAt = new Date(Date.now() + RESERVATION_TTL);

    for (const item of params.items) {
      const availableCodes = await prisma.code.findMany({
        where: {
          productId: item.productId,
          status: CodeStatus.AVAILABLE,
        },
        take: item.qty,
        orderBy: {
          createdAt: 'asc',
        },
      });

      if (availableCodes.length < item.qty) {
        await releaseReservations(params.orderId);
        return {
          success: false,
          error: `Insufficient codes available for product ${item.productId}. Needed: ${item.qty}, Available: ${availableCodes.length}`,
        };
      }

      await prisma.$transaction(
        availableCodes.map((code) =>
          prisma.code.update({
            where: { id: code.id },
            data: { status: CodeStatus.RESERVED },
          })
        )
      );

      await prisma.$transaction(
        availableCodes.map((code) =>
          prisma.codeReservation.create({
            data: {
              codeId: code.id,
              orderId: params.orderId,
              expiresAt,
            },
          })
        )
      );
    }

    return { success: true };
  } catch (error) {
    console.error('Error reserving codes:', error);
    return { success: false, error: 'Failed to reserve codes' };
  }
}

export async function releaseReservations(orderId: string): Promise<void> {
  const reservations = await prisma.codeReservation.findMany({
    where: { orderId },
    include: { code: true },
  });

  await prisma.$transaction([
    ...reservations.map((reservation) =>
      prisma.code.update({
        where: { id: reservation.codeId },
        data: { status: CodeStatus.AVAILABLE },
      })
    ),
    prisma.codeReservation.deleteMany({
      where: { orderId },
    }),
  ]);
}

export async function convertReservationsToSold(orderId: string): Promise<void> {
  const reservations = await prisma.codeReservation.findMany({
    where: { orderId },
  });

  await prisma.$transaction([
    ...reservations.map((reservation) =>
      prisma.code.update({
        where: { id: reservation.codeId },
        data: {
          status: CodeStatus.SOLD,
          soldAt: new Date(),
        },
      })
    ),
    ...reservations.map((reservation) =>
      prisma.fulfillment.create({
        data: {
          orderId,
          codeId: reservation.codeId,
          deliveryChannel: 'SCREEN',
        },
      })
    ),
    prisma.codeReservation.deleteMany({
      where: { orderId },
    }),
  ]);
}

export async function cleanupExpiredReservations(): Promise<void> {
  const expiredReservations = await prisma.codeReservation.findMany({
    where: {
      expiresAt: {
        lt: new Date(),
      },
    },
    include: {
      order: true,
    },
  });

  for (const reservation of expiredReservations) {
    await releaseReservations(reservation.orderId);
    
    await prisma.order.update({
      where: { id: reservation.orderId },
      data: { status: 'FAILED' },
    });
  }
}
