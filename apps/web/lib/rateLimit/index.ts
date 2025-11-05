interface RateLimitStore {
  [key: string]: { count: number; resetAt: number };
}

const store: RateLimitStore = {};

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const key = identifier;
  
  if (!store[key] || store[key].resetAt < now) {
    store[key] = {
      count: 1,
      resetAt: now + config.windowMs,
    };
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetAt: store[key].resetAt,
    };
  }
  
  if (store[key].count >= config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: store[key].resetAt,
    };
  }
  
  store[key].count++;
  
  return {
    allowed: true,
    remaining: config.maxRequests - store[key].count,
    resetAt: store[key].resetAt,
  };
}

export const RATE_LIMITS = {
  LOGIN: { maxRequests: 5, windowMs: 15 * 60 * 1000 },
  REGISTER: { maxRequests: 3, windowMs: 60 * 60 * 1000 },
  ORDER: { maxRequests: 10, windowMs: 60 * 60 * 1000 },
  API: { maxRequests: 100, windowMs: 60 * 1000 },
};

export interface VelocityRule {
  maxOrders: number;
  maxValue: number;
  windowMs: number;
}

interface VelocityStore {
  [userId: string]: {
    orders: { timestamp: number; value: number }[];
  };
}

const velocityStore: VelocityStore = {};

export function checkVelocityRules(
  userId: string,
  orderValue: number,
  rule: VelocityRule
): { allowed: boolean; reason?: string } {
  const now = Date.now();
  const windowStart = now - rule.windowMs;
  
  if (!velocityStore[userId]) {
    velocityStore[userId] = { orders: [] };
  }
  
  velocityStore[userId].orders = velocityStore[userId].orders.filter(
    (order) => order.timestamp > windowStart
  );
  
  const recentOrders = velocityStore[userId].orders;
  
  if (recentOrders.length >= rule.maxOrders) {
    return {
      allowed: false,
      reason: `Maximum ${rule.maxOrders} orders per day exceeded`,
    };
  }
  
  const totalValue = recentOrders.reduce((sum, order) => sum + order.value, 0) + orderValue;
  
  if (totalValue > rule.maxValue) {
    return {
      allowed: false,
      reason: `Maximum order value of ${rule.maxValue} per day exceeded`,
    };
  }
  
  velocityStore[userId].orders.push({ timestamp: now, value: orderValue });
  
  return { allowed: true };
}

export const VELOCITY_RULES = {
  NEW_USER: { maxOrders: 3, maxValue: 500, windowMs: 24 * 60 * 60 * 1000 },
  REGULAR_USER: { maxOrders: 10, maxValue: 5000, windowMs: 24 * 60 * 60 * 1000 },
};

const BLACKLIST_DOMAINS = ['tempmail.com', 'guerrillamail.com', '10minutemail.com'];
const BLACKLIST_IPS = ['127.0.0.1'];

export function checkBlacklist(email: string, ip: string): { blocked: boolean; reason?: string } {
  const domain = email.split('@')[1]?.toLowerCase();
  
  if (domain && BLACKLIST_DOMAINS.includes(domain)) {
    return { blocked: true, reason: 'Email domain is blacklisted' };
  }
  
  if (BLACKLIST_IPS.includes(ip)) {
    return { blocked: true, reason: 'IP address is blacklisted' };
  }
  
  return { blocked: false };
}
