import type { DaggerHeartCardProps } from '@/components/daggerheart-card';

export const ancestry: DaggerHeartCardProps = {
  type: 'ancestry',
  title: 'Ribbit',
  image: '/ribbet-playtest.webp',
  sections: [
    {
      type: 'flavor',
      text: 'Those of ribbet ancestry resemble anthropomorphic frogs with protruding eyes and webbed hands and feet.',
    },
    {
      type: 'feature',
      text: {
        name: 'Amphibious',
        description:
          'You can breathe and move underwater just as easily as on land. ',
      },
    },
    {
      type: 'feature',
      text: {
        name: 'Long Tongue',
        description:
          'You can use your long, powerful tongue to grab onto things close to you. You may also mark Stress to unleash it as a Finesse Close weapon that does d12 physical damage.',
      },
    },
  ],
};

export const community: DaggerHeartCardProps = {
  type: 'community',
  title: 'Orderborne',
  image: '/orderborne-playtest.webp',
  sections: [
    {
      type: 'flavor',
      text: 'Being part of an Orderborne community means you were raised in a place of great discipline or faith, and uphold a set of principles that reflect your experience there.',
    },
    {
      type: 'feature',
      text: {
        name: 'Dedicated',
        description:
          'You can use your long, powerful tongue to grab onto things close to you. You may also mark Stress to unleash it as a Finesse Close weapon that does d12 physical damage.',
      },
    },
  ],
};

export const domain: DaggerHeartCardProps = {
  type: 'domain',
  title: 'Force of Nature',
  image: '/sage-playtest.webp',
  domain: 'sage',
  subtype: 'spell',
  cost: 2,
  level: 10,
  sections: [
    {
      type: 'rules',
      text: 'You can mark a Stress to transform into a hulking nature spirit, gaining the following benefits:',
    },
    {
      type: 'rules',
      text: 'You gain +2 Strength, +2 Agility, and +2 Finesse.',
    },
    {
      type: 'list',
      listType: 'bullet',
      text: [
        'Whenever you successfully hit with an Attack or Spell, you deal an additional 1d10 damage.',
        'When you defeat a creature within close range, you absorb them and clear an Armor Slot.',
        'You cannot be restrained.',
      ],
    },
    {
      type: 'rules',
      text: 'Before you make an Action Roll, you must spend a Hope. If you cannot, you revert to your normal form.',
    },
  ],
};

export const subclass: DaggerHeartCardProps = {
  type: 'subclass',
  title: 'Elemental Origin',
  image: '/sorcerer-playtest.webp',
  domain: 'arcana',
  domainSecondary: 'midnight',
  subtitle: 'Foundation',
  subtype: 'Sorcerer',
  spellcast: 'instinct',
  sections: [
    {
      type: 'rules',
      text: 'Your elemental origin lets you manipulate and shape a certain kind of element.',
    },
    {
      type: 'rules',
      text: 'You can channel this element into unique, harmless effects. You may also spend a Hope to describe how your control over this element helps a current action, and either add +2 to the action roll before making it or +3 to the damage.',
    },
  ],
};
