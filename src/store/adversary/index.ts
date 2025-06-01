import { create } from 'zustand';

import type { AdversaryState, AdversaryStore } from './types';

const initialState: AdversaryState = {
  loading: true,
  adversary: {
    name: '',
    type: 'adversary',
    thresholds: [5, 17],
    hp: 5,
    stress: 2,
  },
};

export const useAdversaryStore = create<AdversaryStore>((set, get) => ({
  ...initialState,
  actions: {
    setLoading: (loading) => set({ loading }),
    setAdversaryDetails: (details) =>
      set((state) => ({
        ...state,
        adversary: {
          ...state.adversary,
          ...details,
        },
      })),
  },
}));

export const useAdversaryActions = () =>
  useAdversaryStore((store) => store.actions);
