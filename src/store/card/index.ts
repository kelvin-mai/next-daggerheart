import { create } from 'zustand';

import { CardState, CardStore } from './types';
import { createActions } from './actions';

const initialState: CardState = {
  settings: {
    border: true,
    boldRulesText: true,
    artist: true,
    credits: true,
  },
  card: {
    name: '',
    type: 'ancestry',
    image: undefined,
    text: '',
    artist: '',
    credits: 'Daggerheart © Darrington Press 2025',
  },
};

export const useCardStore = create<CardStore>((set, get) => ({
  ...initialState,
  actions: createActions(set),
  effects: {},
}));

export const useCardActions = () => useCardStore((store) => store.actions);
export const useCardEffects = () => useCardStore((store) => store.effects);
