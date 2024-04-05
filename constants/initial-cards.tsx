import type { CardProperties } from '@/lib/types';
import { playtestExamples } from './example-cards';

export const ancestry = playtestExamples[0] as CardProperties;
export const community = playtestExamples[1] as CardProperties;
export const domain = playtestExamples[2] as CardProperties;
export const subclass = playtestExamples[3] as CardProperties;

// testing ...
export const startingClass = {
  type: 'class',
  title: 'Wizard',
  subtitle: 'Primary Weapon',
  image: '/assets/playtest/wizard.webp',
  domain: 'codex',
  domainSecondary: 'splendor',
  thresholds: [2, 7, 12],
  evasion: 8,
  sections: [
    {
      type: 'feature',
      text: {
        name: 'Prestidigitation',
        description:
          'You can perform harmless, subtle magical effects at will. Examples might include changing an object’s color, creating a smell, lighting a candle, floating something small, illuminating a room, repairing a small object, etc.',
      },
    },
    {
      type: 'feature',
      text: {
        name: 'Strange Patterns',
        description:
          'Choose a number between 1-12. Anytime you roll that number on a Duality Die, gain a hope or clear a stress. You may change this number on any long rest.',
      },
    },
  ],
};

export const equipmentPrimaryWeapon: CardProperties = {
  type: 'equipment',
  title: 'Asking-Stone Staff',
  subtitle: 'primary weapon',
  image: '/assets/playtest/arcana.webp',
  hands: 2,
  weapon: {
    trait: 'knowledge',
    distance: 'far',
    damageAmount: 'd12+5',
    damageType: 'physical',
  },
  sections: [
    {
      type: 'feature',
      text: {
        name: 'Curious',
        description:
          'During a rest, you must spend one of your downtime actions answering its questions, or every attack made with it until your next rest is at disadvantage.',
      },
    },
  ],
};

export const equipmentSecondaryWeapon = {
  type: 'equipment',
  title: 'Whip',
  subtitle: 'Secondary Weapon',
  image: '/assets/playtest/arcana.webp',
  hands: 1,
  weapon: {
    trait: 'agility',
    distance: 'very close',
    damageAmount: 'd6',
    damageType: 'physical',
  },
  sections: [
    {
      type: 'feature',
      text: {
        name: 'Whipcrack',
        description:
          'Mark stress to scatter enemies in Melee into close range.',
      },
    },
  ],
};

export const equipmentArmor: CardProperties = {
  type: 'equipment',
  title: 'Emberwoven Armor',
  subtitle: 'armor',
  image: '/assets/playtest/arcana.webp',
  armor: 7,
  sections: [
    {
      type: 'feature',
      text: {
        name: 'Burning',
        description:
          'When an enemy strikes you in Melee, they immediately mark a stress.',
      },
    },
  ],
};

export const equipmentConsumable = {
  type: 'equipment',
  title: 'Death Tea',
  subtitle: 'Consumable',
  image: '/assets/playtest/arcana.webp',
  sections: [
    {
      type: 'rules',
      text: "Any critical successes on an attack roll automatically kill the creature you're facing. If you don't get any critical successes on an attack roll before your next long rest, you die.",
    },
  ],
};

export const equipmentItem = {
  type: 'equipment',
  title: 'Box of Many Goods',
  subtitle: 'Item',
  image: '/assets/playtest/arcana.webp',
  sections: [
    {
      type: 'rules',
      text: 'A small box that can only be opened once per long rest. When it is, roll a d12. If you roll a 1-6, it is empty. If you roll a 7-10, it contains one random consumable. If you roll an 11-12, it contains two random consumables.',
    },
  ],
};

export const classCard: CardProperties = {
  type: 'class',
  title: 'Wizard',
  image: '/assets/playtest/wizard.webp',
  subtype: 'class',
  subtitle: 'class features',
  domain: { name: 'codex' },
  domainSecondary: { name: 'splendor' },
  evasion: 8,
  thresholds: [2, 7, 12],
  sections: [
    {
      type: 'feature',
      text: {
        name: 'Prestidigitation',
        description:
          'You can perform harmless, subtle magical effects at will. Examples might include changing an object’s color, creating a smell, lighting a candle, floating something small, illuminating a room, repairing a small object, etc.',
      },
    },
    {
      type: 'feature',
      text: {
        name: 'Strange Patterns',
        description:
          'Choose a number between 1-12. Anytime you roll that number on a Duality Die, gain a hope or clear a stress. You may change this number on any long rest.',
      },
    },
  ],
};
