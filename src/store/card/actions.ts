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

const setOptions =
  (set: ZustandSet<CardState>): CardActions['setOptions'] =>
  ({ domains, classes }) =>
    set({ domains, classes });

export const createActions = (set: ZustandSet<CardState>): CardActions => ({
  setLoading: (loading: boolean) => set({ loading }),
  setPreviewRef: (ref: React.RefObject<HTMLDivElement | null>) =>
    set({ preview: ref }),
  setCardDetails: setCardDetails(set),
  setSettings: setSettings(set),
  setOptions: setOptions(set),
});
