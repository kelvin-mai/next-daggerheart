import { ZustandSet } from '../types';
import { CardActions, CardState } from './types';

const setImage =
  (set: ZustandSet<CardState>): CardActions['setImage'] =>
  (image) =>
    set((state) => ({ ...state, card: { ...state.card, image: image } }));

const setCardText =
  (set: ZustandSet<CardState>): CardActions['setCardText'] =>
  (value) =>
    set((state) => ({ ...state, card: { ...state.card, text: value } }));

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
  setImage: setImage(set),
  setCardText: setCardText(set),
  setCardDetails: setCardDetails(set),
  setSettings: setSettings(set),
});
