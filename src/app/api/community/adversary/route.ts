import { desc, count, eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

import { db } from '@/lib/database';
import {
  adversaryPreviews,
  userAdversaries,
  users,
} from '@/lib/database/schema';
import { formatAPIError } from '@/lib/utils';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page')
      ? Number(searchParams.get('page'))
      : 1;
    const pageSize = searchParams.get('page-size')
      ? Number(searchParams.get('page-size'))
      : 10;

    const [result] = await db
      .select({ count: count() })
      .from(userAdversaries)
      .where(eq(userAdversaries.public, true));
    const meta = { page, pageSize, total: result.count };

    const data = await db
      .select()
      .from(userAdversaries)
      .leftJoin(users, eq(userAdversaries.userId, users.id))
      .leftJoin(
        adversaryPreviews,
        eq(userAdversaries.adversaryPreviewId, adversaryPreviews.id),
      )
      .where(eq(userAdversaries.public, true))
      .orderBy(desc(userAdversaries.createdAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize);
    return NextResponse.json(
      {
        success: true,
        data: data.map((d) => ({
          userAdversary: d.user_adversaries,
          adversaryPreview: d.adversary_previews,
          user: d.users,
        })),
        meta,
      },
      { status: 201 },
    );
  } catch (e) {
    return NextResponse.json(
      { success: false, error: formatAPIError(e) },
      {
        status: 500,
      },
    );
  }
}
