import type { NavCategory } from '@/lib/types';

export const nav: NavCategory[] = [
  {
    name: 'Create',
    children: [
      {
        name: 'Card',
        badge: 'redesigned',
        url: '/card/create',
      },
    ],
  },
  {
    name: 'Reference',
    badge: 'new',
    children: [
      {
        name: 'Ancestries',
        url: '/reference/ancestries',
      },
      {
        name: 'Communities',
        url: '/reference/communities',
      },
    ],
  },
  {
    name: 'Game Master',
    children: [
      {
        name: 'GM Screen',
        badge: 'new',
        url: '/game-master/screen',
      },
    ],
  },
];
