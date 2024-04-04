export type CardType =
  | 'ancestry'
  | 'community'
  | 'domain'
  | 'subclass'
  | 'equipment';

export type Feature = {
  name: string;
  description: string;
};

export type SubclassSubType = 'foundation' | 'specialization' | 'mastery';

export type EquipmentSubType =
  | 'primary weapon'
  | 'secondary weapon'
  | 'armor'
  | 'item'
  | 'consumable';

export type CardTextType = 'flavor' | 'feature' | 'rules' | 'list' | 'custom';

export type CardTextListType = 'bullet' | 'number';

export type CardTextSection = {
  type: CardTextType;
} & (
  | {
      type: 'flavor' | 'rules' | 'custom';
      text: string;
    }
  | {
      type: 'feature';
      text: Feature;
    }
  | {
      type: 'list';
      listType: CardTextListType;
      text: string[];
    }
);

export type CardWeaponProperties = {
  trait: string;
  distance: string;
  damageAmount: string;
  damageType: string;
};

export type CardProperties = {
  type: CardType;
  title: string;
  image: string;
  artist?: string;
  domain?: string;
  domainSecondary?: string;
  subtype?: string;
  level?: number;
  cost?: number;
  armor?: number;
  hands?: number;
  subtitle?: string;
  spellcast?: string;
  sections: CardTextSection[];
  thresholds?: [number, number, number];
  weapon?: CardWeaponProperties;
};
