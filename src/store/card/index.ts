import { create } from 'zustand';

import { CardState, CardStore } from './types';
import { createActions } from './actions';
import { createEffects } from './effects';
import { createComputed } from './computed';

const initialState: CardState = {
  loading: true,
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
    subtype: '',
    subtitle: '',
    level: 1,
    stress: 0,
    evasion: 0,
    domainPrimary: 'custom',
    domainPrimaryColor: '#000000',
    domainSecondary: 'custom',
    domainSecondaryColor: '#000000',
  },
};

export const useCardStore = create<CardStore>((set, get) => ({
  ...initialState,
  computed: createComputed(get),
  actions: createActions(set),
  effects: createEffects(set, get),
}));

export const useCardComputed = () => useCardStore((store) => store.computed);
export const useCardActions = () => useCardStore((store) => store.actions);
export const useCardEffects = () => useCardStore((store) => store.effects);
