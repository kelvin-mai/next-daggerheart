export const cardTypes = [
  'ancestry',
  'community',
  'equipment',
  'domain',
  'class',
  'subclass',
] as const;

export const domainAbilityTypes = ['ability', 'spell', 'grimoire'] as const;

export type CardType = (typeof cardTypes)[number];

export type CardDetails = {
  name: string;
  type: CardType;
  image?: string;
  text: string;
  artist: string;
  credits: string;
  subtype: string;
  level: number;
  stress: number;
};
