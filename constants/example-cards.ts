import type { DaggerHeartCardProps } from '@/components/daggerheart-card';

export const playtestExamples: DaggerHeartCardProps[] = [
  {
    type: 'ancestry',
    title: 'Ribbit',
    image: '/assets/playtest/ribbet.webp',
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
  },
  {
    type: 'community',
    title: 'Orderborne',
    image: '/assets/playtest/orderborne.webp',
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
  },
  {
    type: 'domain',
    title: 'Force of Nature',
    image: '/assets/playtest/sage.webp',
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
  },
  {
    type: 'subclass',
    title: 'Elemental Origin',
    image: '/assets/playtest/sorcerer.webp',
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
  },
  {
    type: 'domain',
    title: 'Force of Nature',
    image: '/assets/playtest/codex.webp',
    domain: 'codex',
    subtype: 'grimoire',
    cost: 2,
    level: 3,
    sections: [
      {
        type: 'feature',
        text: {
          name: 'Mystic Tether',
          description:
            'Make a Spellcast Roll against a target within far range. On a success, they are temporarily prevented from moving. If you target a flying creature, they are instead brought to the ground and are temporarily unable to fly.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Fireball',
          description:
            'Make a Spellcast Roll against a target within very far range. On a success, you throw a sphere of fire towards them that explodes upon impact. The target and all creatures very close to them must make a Reaction Roll (12). On a failure, they take d8 magic damage. On a success, they take half damage (rounded up).',
        },
      },
    ],
  },
];

export const homebrewExamples: DaggerHeartCardProps[] = [
  {
    type: 'ancestry',
    title: 'Sylvaneth',
    image: '/assets/homebrew/sylvaneth.png',
    artist: 'Games Workshop',
    sections: [
      {
        type: 'flavor',
        text: 'Sylvaneth are a species of intelligent, usually humanoid tree spirits created by Alarielle, the goddess of life and nature.',
      },
      {
        type: 'feature',
        text: {
          name: 'Sturdy',
          description:
            "When you should mark armor slot, roll a d6. On a 5+, you don't mark the armor slot but still reduce incoming damage by your armor score.",
        },
      },
    ],
  },
  {
    type: 'domain',
    title: 'Goodberries',
    image: '/assets/homebrew/goodberries.png',
    artist: 'Jake Inferrera',
    domain: 'sage',
    subtype: 'spell',
    cost: 2,
    level: 10,
    sections: [
      {
        type: 'rules',
        text: 'Once per session, you can mark a Stress to conjure a cluster of five radiant berries in your palm.',
      },
      {
        type: 'rules',
        text: 'By ingesting a berry, you and allies can heal one Hit Point or clear 1 Stress.',
      },
      {
        type: 'rules',
        text: 'If you or your ally cannot heal Hit Points or clear any Stress, you will feel full and nourished for two days.',
      },
      {
        type: 'rules',
        text: 'Unused berries lose their power and disappear if not usedby the end of the session.',
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Mousefolk',
    image: '/assets/homebrew/mousefolk.png',
    artist: 'Ryan Lang',
    sections: [
      {
        type: 'flavor',
        text: 'Mousefolks are tiny anthromorphic rodents with long tails and rounded ears.',
      },
      {
        type: 'feature',
        text: {
          name: 'Discrete',
          description:
            'Take advantage on Finesse rolls ot Hide as you are tiny and can pretend to be a regular mouse.',
        },
      },
    ],
  },
  {
    type: 'subclass',
    title: 'Shadow Weaver',
    image: '/assets/homebrew/warlock.png',
    artist: 'MainyuArt',
    domain: 'codex',
    domainSecondary: 'midnight',
    subtitle: 'Foundation',
    subtype: 'Warlock',
    spellcast: 'presence',
    sections: [
      {
        type: 'feature',
        text: {
          name: 'Source of Darkness',
          description:
            'If you are not in direct light, you can spend a point of Hope to immediately become Hidden.',
        },
      },
    ],
  },
  {
    type: 'community',
    title: 'Feyborne',
    image: '/assets/homebrew/feyborne.png',
    artist: 'Tim Shepard',
    sections: [
      {
        type: 'flavor',
        text: 'Being part of a Feyborne community means growing up in the magical wilds of the fey realms.',
      },
      {
        type: 'feature',
        text: {
          name: 'Tricky',
          description:
            'Once per session you have the ability to spend a Hope to gain advantage on an action roll to deceive another creater.',
        },
      },
    ],
  },
];
