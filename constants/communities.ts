import { Feature } from './features';

export type Community = {
  name: string;
  flavor: string;
  features: Feature[];
};

export const communities: Community[] = [
  {
    name: 'Highborne',
    flavor:
      'Being part of a Highborne community means you were born into a life of elegance, opulence, and prestige within the upper echelons of society.',
    features: [
      {
        name: 'Inheritance',
        description:
          'You have advantage on any rolls you make when consorting with nobles, negotiating prices, or leveraging your reputation to get what you want. Take an extra handful of gold at character creation.',
      },
    ],
  },
  {
    name: 'Loreborne',
    flavor:
      'Being part of a Loreborne community means you were brought up in a place that favored strong academic or political prowess.',
    features: [
      {
        name: 'Well-Read',
        description:
          'You have advantage on any rolls you make that deal with the history, culture, or politics of a prominent person or place.',
      },
    ],
  },
  {
    name: 'Orderborne',
    flavor:
      'Being part of an Orderborne community means you were raised in a place of great discipline or faith, and uphold a set of principles that reflect your experience there.',
    features: [
      {
        name: 'Dedicated',
        description:
          'Record three sayings or values your upbringing instilled in you. Once per short rest, when you describe how you’re embodying one of these principles through your current action, you may roll with a d20 as your Hope Die instead of a d12.',
      },
    ],
  },
  {
    name: 'Ridgeborne',
    flavor:
      'Being part of a Ridgeborne community means you call the rocky peaks and sharp cliffs of the mountainside home.',
    features: [
      {
        name: 'Steady',
        description:
          'You have advantage on traversing dangerous cliffs and ledges, navigating harsh environments, and survival knowledge. Also gain +1 to your Armor Score.',
      },
    ],
  },
  {
    name: 'Seaborne',
    flavor:
      'Being part of a Seaborne community means you grew up on or near a large body of water.',
    features: [
      {
        name: 'Safe Harbor',
        description:
          'Once per session, when you take a short or long rest, you may take one additional downtime action.',
      },
    ],
  },
  {
    name: 'Slyborne',
    flavor:
      'Being part of a Slyborne community means growing up in the underbelly of society, surrounded by criminals and con artists.',
    features: [
      {
        name: 'Scoundrel',
        description:
          'You have advantage on any rolls where you’re negotiating with criminals, detecting lies, or finding a safe place to hide.',
      },
    ],
  },
  {
    name: 'Underborne',
    flavor:
      'Being part of an Underborne community means that you’re from a subterranean society.',
    features: [
      {
        name: 'Low Light Living',
        description:
          'When you are in an area with low light or heavy shadow, you have advantage on rolls to hide, investigate, or perceive details.',
      },
    ],
  },
  {
    name: 'Wanderborne',
    flavor:
      'Being part of a Wanderborne community means that you were raised as a nomad, not having a permanent home but experiencing a wide variety of cultures.',
    features: [
      {
        name: 'Nomadic Pack',
        description:
          'Add a Nomadic Pack to your inventory. Once per session, you may spend a Hope to reach into this pack and pull out a common item that is useful in this situation. Work with the GM to figure out what this item is.',
      },
    ],
  },
  {
    name: 'Wildborne',
    flavor:
      'Being part of a Wildborne community means you were raised by a clan deep within the forest.',
    features: [
      {
        name: 'Lightfoot',
        description:
          'Your movement is naturally silent. Gain advantage on any Action Rolls you make to move without being heard. Spend a Hope to also grant this ability to an ally while they stay within very close range of you.',
      },
    ],
  },
];
