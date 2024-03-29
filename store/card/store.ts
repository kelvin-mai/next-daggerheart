import { create } from 'zustand';

import { ancestry } from '@/constants/initial-cards';
import type { CardState } from './types';
import { setActions } from './actions';

type CardStore = CardState & { actions: ReturnType<typeof setActions> };

const useCardStore = create<CardStore>((set) => ({
  card: ancestry,
  options: {
    boldRulesText: true,
    showBorder: true,
    thresholdsAsText: true,
  },
  actions: setActions(set),
}));

export const useCard = () => useCardStore((state) => state.card);
export const useCardOptions = () => useCardStore((state) => state.options);
export const useCardActions = () => useCardStore((state) => state.actions);
