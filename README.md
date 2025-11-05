# EPINYA - E-Pin E-Commerce Platform

A complete, production-ready e-commerce platform for selling digital gift cards and game codes (Apple, Steam, PlayStation, PUBG, etc.) built with Next.js, Prisma, and MySQL.

## Features

### Core Features
- 🔐 **Secure Authentication**: Email/password with bcrypt, JWT (access + refresh tokens), server-side session guards
- 🔒 **Code Encryption**: AES-256-GCM encryption at rest for all digital codes
- 💳 **Payment Integration**: Stripe integration with DummyPay provider for development
- ⚡ **Instant Delivery**: Automated code delivery upon successful payment
- 🔄 **Code Reservation**: Atomic code reservation with configurable TTL (default 5 minutes)
- 📊 **Admin Dashboard**: Complete admin panel with analytics, CRUD operations, CSV import
- 🛡️ **Fraud Prevention**: Rate limiting, velocity rules, blacklist/graylist, IP tracking
- 📧 **Email Notifications**: Transactional emails for orders, failures, and account actions
- 🔍 **Audit Logging**: Comprehensive audit trail for all sensitive operations
- 🌍 **Internationalization**: TR/EN language support with currency formatting
- 📱 **Responsive Design**: Apple-like minimal design, mobile-friendly

### Security Features
- Helmet-equivalent security headers
- HttpOnly, SameSite cookies
- CSRF protection
- Input validation with Zod
- No PII in logs
- Code reveal auditing
- 2FA support with TOTP

### Business Features
- Multi-currency support (TRY, USD, EUR)
- Price tiers per product
- Stock management
- Order management
- Refund support
- Invoice generation
- Guest checkout
- User accounts with order history

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: MySQL 8+, Prisma ORM
- **Authentication**: JWT, bcrypt, speakeasy (2FA)
- **Payments**: Stripe, DummyPay (dev)
- **Email**: Nodemailer
- **Deployment**: Docker, Docker Compose

## Project Structure

```
epinya/
├── apps/
│   └── web/                    # Next.js application
│       ├── app/                # App router pages
│       │   ├── api/           # API routes
│       │   ├── (public)/      # Public pages
│       │   └── (admin)/       # Admin pages
│       ├── lib/               # Utilities
│       │   ├── auth/          # Authentication
│       │   ├── crypto/        # Code encryption
│       │   ├── payment/       # Payment providers
│       │   ├── email/         # Email templates
│       │   ├── rateLimit/     # Rate limiting
│       │   └── validation/    # Zod schemas
│       ├── components/        # React components
│       └── middleware.ts      # Auth middleware
└── packages/
    └── db/                    # Prisma package
        ├── prisma/
        │   ├── schema.prisma  # Database schema
        │   └── migrations/    # Database migrations
        ├── seed.ts            # Seed script
        └── index.ts           # Prisma client export
```

## Getting Started

### Prerequisites

- Node.js 20+
- MySQL 8+
- npm or yarn

### Environment Variables

Create a `.env` file in `apps/web/`:

```env
# Database
DATABASE_URL="mysql://root:password@localhost:3306/epinya"

# JWT Secrets (change in production!)
JWT_SECRET="your-jwt-secret-change-in-production"
JWT_REFRESH_SECRET="your-jwt-refresh-secret-change-in-production"

# Code Encryption (32 bytes, change in production!)
CODE_ENC_KEY="your-32-byte-encryption-key-here"

# Stripe (optional, uses DummyPay if not set)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
PAYMENT_PROVIDER="dummy"  # or "stripe"

# SMTP Email (optional for development)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
SMTP_FROM="noreply@epinya.test"

# App Configuration
APP_URL="http://localhost:3000"
RESERVATION_TTL="300"  # seconds
NODE_ENV="development"
```

Create a `.env` file in `packages/db/`:

```env
DATABASE_URL="mysql://root:password@localhost:3306/epinya"
CODE_ENC_KEY="your-32-byte-encryption-key-here"
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd epinya
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install web app dependencies
   cd apps/web
   npm install

   # Install db package dependencies
   cd ../../packages/db
   npm install
   ```

3. **Setup database**
   ```bash
   cd packages/db
   
   # Generate Prisma client
   npm run generate
   
   # Run migrations
   npm run migrate
   
   # Seed database with demo data
   npm run seed
   ```

4. **Start development server**
   ```bash
   cd ../../apps/web
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin
   - Health Check: http://localhost:3000/api/health

### Demo Accounts

After seeding, you can login with:

**Admin Account:**
- Email: `admin@epinya.test`
- Password: `Admin123!`

**User Account:**
- Email: `user@epinya.test`
- Password: `User123!`

## Docker Deployment

### Using Docker Compose

1. **Build and start services**
   ```bash
   docker-compose up -d
   ```

2. **Run migrations**
   ```bash
   docker-compose exec web sh -c "cd packages/db && npx prisma migrate deploy"
   ```

3. **Seed database**
   ```bash
   docker-compose exec web sh -c "cd packages/db && npm run seed"
   ```

4. **Access the application**
   - http://localhost:3000

### Manual Docker Build

```bash
docker build -t epinya .
docker run -p 3000:3000 \
  -e DATABASE_URL="mysql://root:password@host.docker.internal:3306/epinya" \
  -e JWT_SECRET="your-secret" \
  -e CODE_ENC_KEY="your-32-byte-key" \
  epinya
```

## API Documentation

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Products

- `GET /api/products` - List all products
- `GET /api/products/[slug]` - Get product by slug

### Orders

- `POST /api/orders/create` - Create new order
- `GET /api/orders/[id]` - Get order details

### Webhooks

- `POST /api/webhook/payment` - Payment webhook (Stripe/DummyPay)

### Health

- `GET /api/health` - Health check endpoint

## Database Schema

### Key Models

- **User**: User accounts with role-based access
- **Product**: Digital products (gift cards, game codes)
- **PriceTier**: Multi-currency pricing for products
- **Code**: Encrypted digital codes with status tracking
- **Order**: Customer orders with payment tracking
- **OrderItem**: Line items in orders
- **Fulfillment**: Code delivery records
- **CodeReservation**: Temporary code reservations
- **AuditLog**: Audit trail for sensitive operations

## Development

### Running Tests

```bash
cd apps/web
npm test
```

### Database Management

```bash
cd packages/db

# Create new migration
npm run migrate

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npm run studio
```

### Code Quality

```bash
cd apps/web

# Run linter
npm run lint

# Format code
npm run format
```

## Production Deployment

### Security Checklist

- [ ] Change all default secrets (JWT_SECRET, CODE_ENC_KEY)
- [ ] Use strong database passwords
- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Set up proper SMTP for emails
- [ ] Configure Stripe webhooks with proper secrets
- [ ] Enable rate limiting
- [ ] Review and update blacklist/graylist
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy
- [ ] Review security headers

### Environment Variables

Ensure all production environment variables are set:
- Use strong, unique secrets
- Configure production database
- Set up production SMTP
- Configure Stripe production keys
- Set APP_URL to production domain

### Database

- Use connection pooling
- Set up regular backups
- Monitor query performance
- Review indexes

### Monitoring

- Set up application monitoring
- Configure error tracking
- Monitor webhook delivery
- Track payment success rates
- Monitor code inventory

## Features Roadmap

### Implemented ✅
- Core authentication system
- Code encryption and security
- Payment integration (Stripe + DummyPay)
- Order management
- Code reservation system
- Webhook handling
- Rate limiting and fraud prevention
- Email notifications
- Audit logging
- Health check endpoint

### In Progress 🚧
- Complete admin panel UI
- Customer UI pages
- User account features
- 2FA setup
- Invoice generation
- CSV code import
- Internationalization

### Planned 📋
- Advanced analytics
- Bulk operations
- API rate limiting per user
- Webhook retry mechanism
- Advanced fraud detection
- Multi-language support
- Mobile app

## Contributing

This is a production-ready e-commerce platform. For contributions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

Proprietary - All rights reserved

## Support

For support, email support@epinya.test or open an issue in the repository.

## Acknowledgments

- Built with Next.js, Prisma, and MySQL
- Inspired by modern e-commerce platforms
- Security best practices from OWASP

---

**EPINYA** - Your trusted source for digital gift cards and game codes
