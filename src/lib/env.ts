import { z } from 'zod';

const schema = z.object({
  PORT: z.coerce.number().min(1000),
  ENV: z
    .union([
      z.literal('development'),
      z.literal('testing'),
      z.literal('production'),
    ])
    .default('development'),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
});

export const env = schema.parse(process.env);
