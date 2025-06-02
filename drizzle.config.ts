import { defineConfig } from 'drizzle-kit';

import { env } from '@/lib/env';

export default defineConfig({
  schema: './src/lib/database/schema.ts',
  out: './sql',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
