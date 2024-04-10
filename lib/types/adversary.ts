import type { Feature } from './common';

export type Experience = {
  name: string;
  bonus: number;
};

export type AdversaryProperties = {
  name: string;
  flavor: string;
  motives: string;
  tier: number;
  role: string;
  attack: string;
  damage: string;
  modifier: number;
  difficulty: number;
  hp: number;
  stress: number;
  thresholds: [number, number, number];
  experiences: Experience[];
  moves: Feature[];
};
