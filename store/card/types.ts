import { CardProperties } from '@/lib/types';

export type CardState = {
  card: CardProperties;
  options: any;
};

export type ZustandSet = (
  partial:
    | CardState
    | Partial<CardState>
    | ((state: CardState) => CardState | Partial<CardState>),
  replace?: boolean | undefined,
) => void;

export type CardAction<T = undefined> = (set: ZustandSet) => (arg: T) => void;
