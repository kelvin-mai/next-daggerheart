import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-serverless';

import { env } from '@/lib/env';

export const createClient = () => {
  if (env.ENV === 'production') {
    return drizzleNeon(env.DATABASE_URL);
  }
  return drizzleNode(env.DATABASE_URL);
};
