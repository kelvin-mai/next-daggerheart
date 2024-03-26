export type CardType = 'ancestry' | 'community' | 'domain' | 'subclass';

export type Feature = {
  name: string;
  description: string;
};

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
  subtitle?: string;
  spellcast?: string;
  sections: CardTextSection[];
};
