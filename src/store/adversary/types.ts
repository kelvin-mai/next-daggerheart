import type { AdversaryDetails } from '@/lib/types/adversary-creation';

export type AdversaryState = {
  loading: boolean;
  adversary: AdversaryDetails;
};

export type AdversaryActions = {
  setLoading(loading: boolean): void;
  setAdversaryDetails(details: Partial<AdversaryDetails>): void;
};

export type AdversaryStore = AdversaryState & {
  actions: AdversaryActions;
};
