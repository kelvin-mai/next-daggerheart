import { CardDetails } from '@/lib/types/card-creation';

export type CardState = {
  settings: {
    border: boolean;
    boldRulesText: boolean;
    artist: boolean;
  };
  card: CardDetails;
};

export type CardActions = {
  setImage(image: string): void;
  setCardText(value: string): void;
  setCardDetails(details: Partial<CardDetails>): void;
};

export type CardEffects = {};

export type CardStore = CardState & {
  actions: CardActions;
  effects: CardEffects;
};
