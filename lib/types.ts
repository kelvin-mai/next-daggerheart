export type CardType = 'ancestry' | 'community' | 'domain' | 'subclass';

export type Feature = {
  name: string;
  description: string;
};

export type CardTextType = 'flavor' | 'feature' | 'rules' | 'list';

export type CardTextListType = 'bullet' | 'number';

export type CardTextSection = {
  type: CardTextType;
} & (
  | {
      type: 'flavor' | 'rules';
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
