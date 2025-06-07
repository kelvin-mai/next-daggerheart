import { desc, count, eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

import { db } from '@/lib/database';
import { cardPreviews, userCards, users } from '@/lib/database/schema';
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

    const [result] = await db.select({ count: count() }).from(userCards);

    const meta = { page, pageSize, total: result.count };

    const data = await db
      .select()
      .from(userCards)
      .leftJoin(users, eq(userCards.userId, users.id))
      .leftJoin(cardPreviews, eq(userCards.cardPreviewId, cardPreviews.id))
      .orderBy(desc(userCards.createdAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize);
    return NextResponse.json(
      {
        success: true,
        data: data.map((d) => ({
          userCard: d.user_cards,
          cardPreview: d.card_previews,
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
