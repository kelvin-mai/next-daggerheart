import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { and, eq } from 'drizzle-orm';

import type { CardDetails } from '@/lib/types';
import { db } from '@/lib/database';
import { formatAPIError } from '@/lib/utils';
import { userCards } from '@/lib/database/schema';
import { auth } from '@/lib/auth';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const id = (await params).id;
    const body: { card: Partial<CardDetails> } = await req.json();
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) {
      throw new Error('Unauthorized');
    }
    const [userCard] = await db
      .update(userCards)
      .set({ ...body, updatedAt: new Date() })
      .where(and(eq(userCards.id, id), eq(userCards.userId, session.user.id)))
      .returning();
    if (!userCard) {
      return NextResponse.json(
        {
          success: false,
          error: formatAPIError(Error('Not found')),
        },
        { status: 404 },
      );
    }
    return NextResponse.json(
      {
        success: true,
        data: { userCard },
      },
      { status: 202 },
    );
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        error: formatAPIError(e),
      },
      { status: 500 },
    );
  }
}
