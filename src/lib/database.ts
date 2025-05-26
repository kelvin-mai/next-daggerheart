import { neon } from '@neondatabase/serverless';
import postgres from 'postgres';

import { env } from '@/lib/env';

export const createClient = () => {
  // if (env.ENV === 'production') {
  return neon(env.DATABASE_URL);
  // }
  // return postgres(env.DATABASE_URL);
};
