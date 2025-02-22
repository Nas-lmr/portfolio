import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "60 s"),
  analytics: true,
});

export async function rateLimit(ip: string) {
  return await rateLimiter.limit(ip);
}
