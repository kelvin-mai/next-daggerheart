import { AdversaryProperties } from '@/lib/types';

export type AdversaryState = { adversary: AdversaryProperties };

export type ZustandSet = (
  partial:
    | AdversaryState
    | Partial<AdversaryState>
    | ((state: AdversaryState) => AdversaryState | Partial<AdversaryState>),
  replace?: boolean | undefined,
) => void;

export type AdversaryAction<T> = (set: ZustandSet) => (arg: T) => void;
export type AdversaryActionNoArgs = (set: ZustandSet) => () => void;
