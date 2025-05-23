import { CardDetails } from '@/lib/types/card-creation';

type CardSettings = {
  border: boolean;
  boldRulesText: boolean;
  artist: boolean;
  credits: boolean;
};

export type CardState = {
  settings: CardSettings;
  card: CardDetails;
};

export type CardActions = {
  setImage(image: string): void;
  setCardText(value: string): void;
  setCardDetails(details: Partial<CardDetails>): void;
  setSettings(settings: Partial<CardSettings>): void;
};

export type CardEffects = {};

export type CardStore = CardState & {
  actions: CardActions;
  effects: CardEffects;
};
