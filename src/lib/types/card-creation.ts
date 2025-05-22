export const cardTypes = [
  'ancestry',
  'community',
  'equipment',
  'domain',
  'class',
  'subclass',
] as const;

export type CardTypes = (typeof cardTypes)[number];

export type CardDetails = {
  name: string;
  type: string;
  image?: string;
  text: string;
  artist: string;
};
