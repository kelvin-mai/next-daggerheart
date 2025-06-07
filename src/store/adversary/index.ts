import { create } from 'zustand';

import type { AdversaryState, AdversaryStore } from './types';
import { toPng } from 'html-to-image';

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
    setUserAdversary: (userAdversary) => set({ userAdversary }),
    setPreviewStatblockRef: (ref: React.RefObject<HTMLDivElement | null>) =>
      set({ previewStatblock: ref }),
  },
  effects: {
    downloadStatblock: async () => {
      const { previewStatblock, adversary } = get();
      const { name, type } = adversary;
      try {
        if (previewStatblock?.current) {
          await toPng(previewStatblock.current, { cacheBust: true }).then(
            (data) => {
              const link = document.createElement('a');
              link.download = `daggerheart-${type}-${name}.png`;
              link.href = data;
              link.click();
            },
          );
        }
      } catch (e) {
        console.error(e);
      }
    },
    saveAdversaryPreview: async () => {
      try {
        const { adversary, userAdversary } = get();
        console.log({ adversary, userAdversary });
        const res = await fetch(
          `/api/adversary-preview/${userAdversary?.adversaryPreviewId && adversary.id && userAdversary?.adversaryPreviewId === adversary.id ? adversary.id : ''}`,
          {
            method: 'POST',
            body: JSON.stringify({ adversary, userAdversary }),
          },
        );
        const data = await res.json();
        if (!data.success) {
          throw Error(data.error.message);
        }
      } catch (e) {
        throw e;
      }
    },
  },
}));

export const useAdversaryActions = () =>
  useAdversaryStore((store) => store.actions);

export const useAdversaryEffects = () =>
  useAdversaryStore((store) => store.effects);
