import type {
  CardProperties,
  CardTextListType,
  CardTextSection,
  CardTextType,
  CardType,
} from '@/lib/types';
import {
  ancestry,
  community,
  domain,
  equipmentPrimaryWeapon,
  subclass,
} from '@/constants/initial-cards';
import { safeParseInt } from '@/lib/utils';
import type { CardAction } from './types';

const getInitialCard = (t: CardType) => {
  switch (t) {
    case 'ancestry':
      return ancestry;
    case 'community':
      return community;
    case 'domain':
      return domain;
    case 'subclass':
      return subclass;
    case 'equipment':
      return equipmentPrimaryWeapon;
    default:
      return ancestry;
  }
};

const getDefaultSectionText = (textType: CardTextType) => {
  switch (textType) {
    case 'feature':
      return { name: '', description: '' };
    case 'list':
      return [''];
    case 'flavor':
    case 'rules':
    case 'custom':
    default:
      return '';
  }
};

export const changeCardType: CardAction<CardType> = (set) => (t) =>
  set((state) => ({
    ...state,
    card: getInitialCard(t),
  }));

export const changeCardStringProperty: CardAction<{
  property: keyof CardProperties;
  value: string;
}> =
  (set) =>
  ({ property, value }) =>
    set((state) => ({ ...state, card: { ...state.card, [property]: value } }));

export const changeCardNumberProperty: CardAction<{
  property: keyof CardProperties;
  value: string;
}> =
  (set) =>
  ({ property, value }) => {
    console.log(value);
    console.log(safeParseInt(value));
    set((state) => ({
      ...state,
      card: { ...state.card, [property]: safeParseInt(value) },
    }));
  };

export const addCardTextSection: CardAction<CardTextType> = (set) => (t) =>
  set((state) => ({
    ...state,
    card: {
      ...state.card,
      sections: [
        ...state.card.sections,
        {
          type: t,
          listType: t === 'list' ? 'bullet' : undefined,
          text: getDefaultSectionText(t),
        } as CardTextSection,
      ],
    },
  }));

export const changeCardTextSection: CardAction<{
  text: any;
  index: number;
  listType?: CardTextListType;
}> =
  (set) =>
  ({ text, index, listType }) =>
    set((state) => ({
      ...state,
      card: {
        ...state.card,
        sections: state.card.sections.map((s, i) =>
          index === i ? { ...s, text, listType } : s,
        ) as CardTextSection[],
      },
    }));

export const removeCardTextSection: CardAction<number> = (set) => (i) =>
  set((state) => ({
    ...state,
    card: {
      ...state.card,
      sections: state.card.sections.filter((_, j) => j !== i),
    },
  }));

export const changeCardOption: CardAction<{
  property: string;
  value: boolean;
}> =
  (set) =>
  ({ property, value }) =>
    set((state) => ({
      ...state,
      options: {
        ...state.options,
        [property]: value,
      },
    }));

export const setActions = (set: any) => ({
  changeCardType: changeCardType(set),
  changeCardStringProperty: changeCardStringProperty(set),
  changeCardNumberProperty: changeCardNumberProperty(set),
  addCardTextSection: addCardTextSection(set),
  changeCardTextSection: changeCardTextSection(set),
  removeCardTextSection: removeCardTextSection(set),
  changeCardOption: changeCardOption(set),
});
