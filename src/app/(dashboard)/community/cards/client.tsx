'use client';

import * as React from 'react';

import type { ApiResponse, CardDetails, User, UserCard } from '@/lib/types';
import { Pagination, PaginationPageSizeDropdown } from '@/components/common';
import { Skeleton } from '@/components/ui/skeleton';
import { CommunityCard } from '@/components/post';

type Data = { userCard: UserCard; user: User; cardPreview: CardDetails };
type Meta = { page: number; pageSize: number; total: number };

export const CommunityCards = () => {
  const [loading, setLoading] = React.useState(false);
  const [cards, setCards] = React.useState<Data[]>([]);
  const [pagination, setPagination] = React.useState({
    currentPage: 1,
    pageSize: 10,
    total: 100,
  });

  const loadData = async ({
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  }) => {
    setLoading(true);
    const res = await fetch(
      `/api/community/cards?page=${page}&page-size=${pageSize}`,
    );
    const data: ApiResponse<Data[], Meta> = await res.json();
    setCards(data.data);
    setPagination({
      currentPage: data.meta.page,
      pageSize: data.meta.pageSize,
      total: data.meta.total,
    });
    setLoading(false);
  };

  React.useEffect(() => {
    loadData({ page: 1, pageSize: 10 });
  }, []);

  if (loading) {
    return (
      <div className='mb-4 space-y-2'>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className='h-20' />
          ))}
      </div>
    );
  }

  return (
    <div className='mb-2 space-y-2'>
      {cards.map((card) => (
        <CommunityCard
          key={card.userCard.id}
          cardPreview={card.cardPreview}
          user={card.user}
          userCard={card.userCard}
        />
      ))}
      {cards.length > 0 ? (
        <Pagination
          className='justify-end'
          currentPage={pagination.currentPage}
          pages={Math.ceil(pagination.total / pagination.pageSize)}
          onPage={(page) => loadData({ page, pageSize: pagination.pageSize })}
          buttonProps={{ variant: 'ghost' }}
        >
          <PaginationPageSizeDropdown
            pageSize={pagination.pageSize}
            total={pagination.total}
            onPageSize={(pageSize) => loadData({ page: 1, pageSize })}
            buttonProps={{ variant: 'ghost' }}
          />
        </Pagination>
      ) : (
        <div className='bg-card text-muted-foreground rounded-lg border p-4'>
          <p>There are currently no public cards. Please check back later.</p>
        </div>
      )}
    </div>
  );
};
