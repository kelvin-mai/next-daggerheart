import type { CardProperties } from '@/lib/types';

export const communities: CardProperties[] = [
  {
    type: 'community',
    title: 'Highborne',
    image: '/assets/playtest/communities/highborne.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Being part of a Highborne community means you were born into a life of elegance, opulance, and prestige within the upper echelons of society.',
      },
      {
        type: 'feature',
        text: {
          name: 'Privledge',
          description:
            'You have advantage on rolls you make to consort with nobles, negotiate prices, or leverage your reputation to get what you want.',
        },
      },
    ],
  },
  {
    type: 'community',
    title: 'Loreborne',
    image: '/assets/playtest/communities/loreborne.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Being part of a Loreborne community means you are from a society that favors strong academic or political prowess.',
      },
      {
        type: 'feature',
        text: {
          name: 'Well-Read',
          description:
            'You have advantage on any rolls regarding the history, culture, or politics of a prominent person or place.',
        },
      },
    ],
  },
  {
    type: 'community',
    title: 'Orderborne',
    image: '/assets/playtest/communities/orderborne.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Being part of an Orderborne community means you are from a collective that focuses on discipline or faith, and you uphold a set of principles that reflect your experience there.',
      },
      {
        type: 'feature',
        text: {
          name: 'Dedicated',
          description:
            "Record three sayings or values your upbringing instilled in you. Once per short rest, when you describe how you're embodying one of these principles through your current action, you can roll a d20 as your Hope Die instead of a d12.",
        },
      },
    ],
  },
  {
    type: 'community',
    title: 'Ridgeborne',
    image: '/assets/playtest/communities/ridgeborne.webp',
    sections: [
      {
        type: 'flavor',
        text: "Being part of a Ridgeborne community means you've called the rocky peaks and sharp cliffs of the mountainside home.",
      },
      {
        type: 'feature',
        text: {
          name: 'Steady',
          description:
            'You have advantage on rolls to traverse dangerous cliffs and ledges, navigate harsh environments, and use your survival knowledge. Additionally, gain an Armor Slot at character creation.',
        },
      },
    ],
  },
  {
    type: 'community',
    title: 'Seaborne',
    image: '/assets/playtest/communities/seaborne.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Being part of a Seaborne community means you lived on or near a large body of water.',
      },
      {
        type: 'feature',
        text: {
          name: 'Know the Tide',
          description:
            'You can sense the ebb and flow of life. When you roll with Fear, put a token on this card. You can hold a number of tokens up to your level. Before you make an action roll, you can spend one or more of these tokens to add them as a +1 modifiers to your roll. At the end of session, clear all unused tokens.',
        },
      },
    ],
  },
  {
    type: 'community',
    title: 'Slyborne',
    image: '/assets/playtest/communities/slyborne.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Being part of a Slyborne community means growing up in the underbelly of society, surrounded by criminals and con artists.',
      },
      {
        type: 'feature',
        text: {
          name: 'Scoundrel',
          description:
            'You have advantage on any rolls to negotiate with criminals, detect lies, or find a safe place to hide.',
        },
      },
    ],
  },
  {
    type: 'community',
    title: 'Underborne',
    image: '/assets/playtest/communities/underborne.webp',
    sections: [
      {
        type: 'flavor',
        text: "Being part of an Underborne community means that you're from a subterranean society.",
      },
      {
        type: 'feature',
        text: {
          name: 'Low-Light Living',
          description:
            'When you are in an area with low light or heavy shadow, you have advantage on rolls to hide, investigate, or perceive details within that area.',
        },
      },
    ],
  },
  {
    type: 'community',
    title: 'Wanderborne',
    image: '/assets/playtest/communities/wanderborne.webp',
    sections: [
      {
        type: 'flavor',
        text: "Being part of a Wanderborne community means that you've lived as a nomad, not having a permanent home but experiencing a wide variety of cultures.",
      },
      {
        type: 'feature',
        text: {
          name: 'Nomadic Pack',
          description:
            'Add a Nomadic Pack to your inventory. Once per session, you can spend a Hope to reach into this pack and pull out a common item that is useful to the situation. Work with the GM to figure out what this item is.',
        },
      },
    ],
  },
  {
    type: 'community',
    title: 'Wildborne',
    image: '/assets/playtest/communities/wildborne.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Being part of a Wildborne community menas you lived deep within the forest.',
      },
      {
        type: 'feature',
        text: {
          name: 'Lightfoot',
          description:
            'Your movement is naturally silent. You have advantage on rolls to move without being heard.',
        },
      },
    ],
  },
];
