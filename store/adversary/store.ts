import { create } from 'zustand';

import type { AdversaryProperties } from '@/lib/types';
import type { AdversaryState } from './types';
import { setActions } from './actions';

const initialAdversary: AdversaryProperties = {
  name: 'Head Vampire',
  flavor: `A captivating aristocratic undead, dressed in aristocratic finery.`,
  motives: 'Intimidate, Command, Charm, Fly, Create Thralls',
  tier: 2,
  role: 'Leader',
  attack: 'Rapier',
  damage: 'Melee | 5d8 Physical',
  modifier: 5,
  difficulty: 17,
  hp: 8,
  stress: 6,
  thresholds: [1, 23, 40],
  experiences: [{ name: 'Aristocrat', bonus: 3 }],
  moves: [
    {
      name: 'Feed on Followers - Action',
      description: `When this creature is in melee with a follower (any allied adversary), they may deal 1HP to them to clear 2 HP on themselves.`,
    },
    {
      name: 'The Hunt is On - Action',
      description: `Spend a Fear to summon 1d4 Vampires, who appear at Far range. All of these Vampires immediately activate.`,
    },
    {
      name: 'Lifesuck - Reaction',
      description:
        'Every time this adversary activates, roll a d8. On a 6+, all targets within Very Close range loses 1HP',
    },
    {
      name: 'Look Into My Eyes - Reaction',
      description:
        'Any targets who enter melee range of the Head Vampire have to make an Instinct Reaction Roll (19) or place an action token on the tracker.',
      // flavor: "Oh, you got lost for a moment didn't you?"
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
