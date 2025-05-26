import { createClient } from '@/lib/database';

export async function GET() {
  const sql = createClient();
  const domainOptions = await sql`select * from domain_options;`;
  const classOptions = await sql`select * from class_options;`;

  return Response.json({
    domains: domainOptions,
    classes: classOptions,
  });
}
