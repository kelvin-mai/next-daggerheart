import { create } from 'zustand';

import type { AdversaryProperties } from '@/lib/types';
import type { AdversaryState } from './types';
import { setActions } from './actions';

const initialAdversary: AdversaryProperties = {
  name: 'Vampire',
  flavor: `An intelligent undead with blood-stained lips and a predator's smile`,
  motives: 'Bite, Charm, Deceive, Feed, Intimidate',
  tier: 2,
  role: 'Standard',
  attack: 'Rapier',
  damage: '4d8 Physical',
  modifier: 3,
  difficulty: 16,
  hp: 5,
  stress: 4,
  thresholds: [1, 18, 35],
  experiences: [{ name: 'Nocturnal Hunter', bonus: 3 }],
  moves: [
    {
      name: 'Mistform - Reaction',
      description:
        'When taking physical damagee, this adversary can mark Stress to make a Reaction Roll (13). On a success, they only take half damage from the attack.',
    },
    {
      name: 'Draining Bite - Action (2)',
      description:
        'Make an attack on a target in melee to bite their neck. On a success, the target takes 3d10 physical damage. A target that marks HP from this attack loses a Hope and marks a Stress, then the Vampire clears 1 HP.',
    },
  ],
};

type AdversaryStore = AdversaryState & {
  actions: ReturnType<typeof setActions>;
};

const useAdversaryStore = create<AdversaryStore>((set) => ({
  adversary: initialAdversary,
  actions: setActions(set),
}));

export const useAdversary = () => useAdversaryStore((state) => state.adversary);
export const useAdversaryActions = () =>
  useAdversaryStore((state) => state.actions);
