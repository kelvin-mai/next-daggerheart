'use client';

import * as React from 'react';

import type {
  AdversaryDetails,
  ApiResponse,
  User,
  UserAdversary,
} from '@/lib/types';
import { Pagination, PaginationPageSizeDropdown } from '@/components/common';
import { Skeleton } from '@/components/ui/skeleton';
import { CommunityAdversary } from '@/components/post';

type Data = {
  userAdversary: UserAdversary;
  user: User;
  adversaryPreview: AdversaryDetails;
};
type Meta = { page: number; pageSize: number; total: number };

export const CommunityAdversaries = () => {
  const [loading, setLoading] = React.useState(false);
  const [adversaries, setAdversaries] = React.useState<Data[]>([]);
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
      `/api/community/adversary?page=${page}&page-size=${pageSize}`,
    );
    const data: ApiResponse<Data[], Meta> = await res.json();
    setAdversaries(data.data);
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
    <div className='space-y-2'>
      {adversaries.map((adversary) => (
        <CommunityAdversary
          key={adversary.userAdversary.id}
          adversaryPreview={adversary.adversaryPreview}
          user={adversary.user}
          userAdversary={adversary.userAdversary}
        />
      ))}
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
    </div>
  );
};
