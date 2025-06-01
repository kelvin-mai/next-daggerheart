import type { AdversaryDetails } from '@/lib/types/adversary-creation';

export type AdversaryState = {
  loading: boolean;
  adversary: AdversaryDetails;
  previewStatblock?: React.RefObject<HTMLElement | null>;
};

export type AdversaryActions = {
  setLoading(loading: boolean): void;
  setAdversaryDetails(details: Partial<AdversaryDetails>): void;
  setPreviewStatblockRef(ref: React.RefObject<HTMLDivElement | null>): void;
};

export type AdversaryEffects = {
  downloadStatblock(): void;
};

export type AdversaryStore = AdversaryState & {
  actions: AdversaryActions;
  effects: AdversaryEffects;
};
