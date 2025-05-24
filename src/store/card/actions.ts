import { ZustandSet } from '../types';
import { CardActions, CardState } from './types';

const setCardDetails =
  (set: ZustandSet<CardState>): CardActions['setCardDetails'] =>
  (details) =>
    set((state) => ({ ...state, card: { ...state.card, ...details } }));

const setSettings =
  (set: ZustandSet<CardState>): CardActions['setSettings'] =>
  (settings) =>
    set((state) => ({
      ...state,
      settings: { ...state.settings, ...settings },
    }));

export const createActions = (set: ZustandSet<CardState>): CardActions => ({
  setPreviewRef: (ref: any) => set({ preview: ref }),
  setCardDetails: setCardDetails(set),
  setSettings: setSettings(set),
});
