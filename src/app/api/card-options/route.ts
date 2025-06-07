import { db } from '@/lib/database';
import { classOptions, domainOptions } from '@/lib/database/schema';

export async function GET() {
  const domains = await db.select().from(domainOptions);
  const classes = await db.select().from(classOptions);

  return Response.json({
    domains,
    classes,
  });
}
