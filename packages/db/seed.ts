import { PrismaClient } from './generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  const adminPassword = await bcrypt.hash('Admin123!', 10);
  const userPassword = await bcrypt.hash('User123!', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@epinya.test' },
    update: {},
    create: {
      email: 'admin@epinya.test',
      passwordHash: adminPassword,
      role: 'ADMIN',
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'user@epinya.test' },
    update: {},
    create: {
      email: 'user@epinya.test',
      passwordHash: userPassword,
      role: 'USER',
    },
  });

  console.log('✅ Created users:', { admin: admin.email, user: user.email });

  const products = [
    {
      title: 'Apple Gift Card 100 TRY',
      slug: 'apple-gift-card-100-try',
      category: 'Gift Cards',
      brand: 'Apple',
      region: 'TR',
      description: 'Apple Gift Card can be used for App Store, Apple Music, iCloud, and more.',
      imageUrl: '/images/apple-card.png',
    },
    {
      title: 'Steam Wallet 50 TRY',
      slug: 'steam-wallet-50-try',
      category: 'Gaming',
      brand: 'Steam',
      region: 'TR',
      description: 'Steam Wallet codes can be used to purchase games, software, and more on Steam.',
      imageUrl: '/images/steam-card.png',
    },
    {
      title: 'PlayStation Store 100 TRY',
      slug: 'playstation-store-100-try',
      category: 'Gaming',
      brand: 'PlayStation',
      region: 'TR',
      description: 'PlayStation Store Gift Card for games, add-ons, and PlayStation Plus.',
      imageUrl: '/images/ps-card.png',
    },
    {
      title: 'PUBG Mobile 325 UC',
      slug: 'pubg-mobile-325-uc',
      category: 'Gaming',
      brand: 'PUBG',
      region: 'Global',
      description: 'PUBG Mobile Unknown Cash (UC) for in-game purchases.',
      imageUrl: '/images/pubg-card.png',
    },
    {
      title: 'Google Play 50 TRY',
      slug: 'google-play-50-try',
      category: 'Gift Cards',
      brand: 'Google',
      region: 'TR',
      description: 'Google Play Gift Card for apps, games, movies, and more.',
      imageUrl: '/images/google-play-card.png',
    },
  ];

  for (const productData of products) {
    const product = await prisma.product.upsert({
      where: { slug: productData.slug },
      update: {},
      create: productData,
    });

    await prisma.priceTier.upsert({
      where: { id: `${product.id}-try` },
      update: {},
      create: {
        id: `${product.id}-try`,
        productId: product.id,
        currency: 'TRY',
        faceValue: 100,
        salePrice: 95,
      },
    });

    await prisma.priceTier.upsert({
      where: { id: `${product.id}-usd` },
      update: {},
      create: {
        id: `${product.id}-usd`,
        productId: product.id,
        currency: 'USD',
        faceValue: 10,
        salePrice: 9.5,
      },
    });

    const crypto = await import('crypto');
    const CODE_ENC_KEY = process.env.CODE_ENC_KEY || 'dev-key-32-bytes-long-for-aes256';
    const key = Buffer.from(CODE_ENC_KEY.padEnd(32, '0').slice(0, 32));

    for (let i = 0; i < 10; i++) {
      const rawCode = `${productData.brand.toUpperCase()}-${Math.random().toString(36).substring(2, 10).toUpperCase()}-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
      
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
      let encrypted = cipher.update(rawCode, 'utf8');
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      const authTag = cipher.getAuthTag();
      
      const encryptedCode = Buffer.concat([iv, authTag, encrypted]);
      const maskPreview = rawCode.slice(0, 4) + '****' + rawCode.slice(-4);

      await prisma.code.create({
        data: {
          productId: product.id,
          encryptedCode,
          maskPreview,
          status: 'AVAILABLE',
          batchId: `batch-${Date.now()}`,
        },
      });
    }

    console.log(`✅ Created product: ${product.title} with 10 codes`);
  }

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
