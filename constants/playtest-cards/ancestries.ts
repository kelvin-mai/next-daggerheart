import { CardProperties } from '@/lib/types';

export const ancestries: CardProperties[] = [
  {
    type: 'ancestry',
    title: 'Clank',
    image: '/assets/playtest/ancestries/clank.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Clanks are sentient mechanical beings built from a variety of materials including metal and wood, stone, and clay, to resemble humanoids, animals, or even inanimate objects.',
      },
      {
        type: 'feature',
        text: {
          name: 'Purposeful Design',
          description:
            'Decide who you were created by and for what purpose. Choose an experience you have that reflects this and increase it by +1.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Efficient',
          description:
            'When you take a short rest, you can substitute a long rest move for one of your short rest moves.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Daemon',
    image: '/assets/playtest/ancestries/daemon.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Those of daemon ancestry are humanoids who possess sharp canines, pointed ears, and horns that come in a variety of styles.',
      },
      {
        type: 'feature',
        text: {
          name: 'Fearless',
          description:
            'When you roll with Fear, you can mark 2 Stress to make it a roll with Hope instead.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Dread Visage',
          description:
            'You have advantage on rolls to intimidate a hostile target.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Drakona',
    image: '/assets/playtest/ancestries/drakona.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Drakona resemble wingless dragons in humanoid form and possess a powerful elemental breath.',
      },
      {
        type: 'feature',
        text: {
          name: 'Elemental Breath',
          description:
            'Choose an element for your breath (ice, fire, electricity, etc.). You can use this breath against a target or group of targets within Very Close range, treating it as an Instinct weapon that deals d8 magic damage using your Proficiency.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Scales',
          description:
            'Your natural scales act as protection, increasing your Armor Score by +1.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Dwarf',
    image: '/assets/playtest/ancestries/dwarf.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Dwarves are most easily recognized as short humanoids with square features, dense musculature, and thick hair.',
      },
      {
        type: 'feature',
        text: {
          name: 'Increased Fortitude',
          description:
            'You can spend 3 Hope to halve incoming physical damage.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Thick Skin',
          description:
            'Whenever you permanently incease your Proficiency, also increase your Minor Threshold by the same amount.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Elf',
    image: '/assets/playtest/ancestries/elf.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Elves are typically tall humanoids with pointed ears and acutely attuned senses.',
      },
      {
        type: 'feature',
        text: {
          name: 'Celestial Trance',
          description:
            'During a rest, you can drop into a trance and make an extra downtime move.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Quick Reactions',
          description:
            'You can mark a Stress to take advantage on a Reaction Roll.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Faerie',
    image: '/assets/playtest/ancestries/faerie.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Those of faerie ancestry are winged humanoid creatures with insect-like features.',
      },
      {
        type: 'feature',
        text: {
          name: 'Wings',
          description:
            "You can fly. While flying, mark a Stress before an adversary's attack roll to increase your Evasion by +2 against that attack.",
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Luckbender',
          description:
            'Once per session, after you or an ally in Close range make an Action Roll, you can spend 3 Hope to reroll the Duality Dice. You must take the new result.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Fuan',
    image: '/assets/playtest/ribbet.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Fauns resemble goats in humanoid form, with curving horns, square pupils, and cloven hooves.',
      },
      {
        type: 'feature',
        text: {
          name: 'Leap',
          description:
            'You can easily leap up to a Close range across gaps or chasms without making an Agility roll.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Kick',
          description:
            'On a successful melee attack, you can mark a Stress to kick yourself off of the target, adding 2d6 to the damage and pushing either them or yourself out of Melee range.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Firbolg',
    image: '/assets/playtest/ancestries/firbolg.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Firbolgs resemble cows in humanoid form, typically recognized by their broad nose and long ears.',
      },
      {
        type: 'feature',
        text: {
          name: 'Natural Calm',
          description:
            "Whenever you should mark a Stress, roll a d6. On a result of 6, don't mark it",
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Charge',
          description:
            'When you succeed on an Agility roll to move from Far or Very Far range into Melee with one or more targets, mark a Stress to deal 1d12 physical damage to all targets.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Ribbit',
    image: '/assets/playtest/ancestries/fungril.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Fungrils resemble a mushroom in humanoid form.',
      },
      {
        type: 'feature',
        text: {
          name: 'Fungril Network',
          description:
            'You can make an Instinct Roll (12) to speak with others of your ancestry across any distance using your mycellal array.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Death Connection',
          description:
            'While touching a corpse that died recently, you can mark a Stress to extract one memory related to a specific emotion or sensation.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Galapa',
    image: '/assets/playtest/ancestries/galapa.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Those of galapa ancestry resemble anthropomorphic turtles, with a large, domed shell into which the head and limbs can retract.',
      },
      {
        type: 'feature',
        text: {
          name: 'Shell of Protection',
          description:
            'Your shell provides a natural shield. Add your Proficiency to your armor score.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Slow and Steady',
          description:
            'During combat, you can make an attack roll with advantage by placing an additional token on the action tracker.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Giant',
    image: '/assets/playtest/ancestries/giant.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Giants are very tall humanoids with long arms, broad stature, and one to three eyes.',
      },
      {
        type: 'feature',
        text: {
          name: 'Amphibious',
          description:
            'Gain an additional Hit Point slot at character creation.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Reach',
          description:
            'When you wield a Melee weapon, its range increases to Very Close',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Goblin',
    image: '/assets/playtest/ancestries/goblin.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Those of goblin ancestry are small humanoids typically recognized by their large eyes and massive, membranous ears.',
      },
      {
        type: 'feature',
        text: {
          name: 'Danger Sense',
          description:
            'Once per short rest, mark a Stress to make an adversary reroll an attack against you or an ally within Very Close range of you.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Surefooted',
          description: 'You ignore disadvantage on Agility rolls.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Halfling',
    image: '/assets/playtest/ancestries/halfling.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Halflings are typically smaller humanoids, with large hairy feet and prominent, rounded ears.',
      },
      {
        type: 'feature',
        text: {
          name: 'Youthful Spirit',
          description:
            'At the beginning of each session, give everyone in your party a Hope.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Little Lucky',
          description:
            'When you roll a 1 on your Hope die, you can reroll it, and must take the new result.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Human',
    image: '/assets/playtest/ancestries/human.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Those of human ancestry are most easily recognized by their dexterous hands, rounded ears, and bodies built for endurance.',
      },
      {
        type: 'feature',
        text: {
          name: 'High Stamina',
          description: 'Take an additional Stress slot at character creation.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Adaptability',
          description:
            'When you fail a roll that utilized one of your Experiences, you can mark a Stress to reroll. You must take a new result.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Katari',
    image: '/assets/playtest/ancestries/katari.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Those of katari ancestry are feline humanoids with soft fur and high, triangular ears.',
      },
      {
        type: 'feature',
        text: {
          name: 'Feline Instincts',
          description:
            'When you make an Agility roll, you can mark a Stress to reroll your Hope Die. You must take the new result.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Retracting Claws',
          description:
            'You can make an Agility roll to scratch a target in Melee range. On a success, they become vulnerable.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Katari',
    image: '/assets/playtest/ancestries/orc.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Orcs are most easily recognized as humanoids with square features and boar-like tusks.',
      },
      {
        type: 'feature',
        text: {
          name: 'Sturdy',
          description:
            "When you use armor, roll a number of d6 equal to the armor slots you should mark. For every result of 6, don't mark an armor slot.",
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Tusks',
          description:
            'After making a successful Melee attack, you can mark a Stress to also gore the target with your tusks, adding 1d6 to the damage roll.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Ribbet',
    image: '/assets/playtest/ancestries/ribbet.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Those of ribbit ancestry resemble anthropomorphic frogs with protuding eyes and webbed hands and feet.',
      },
      {
        type: 'feature',
        text: {
          name: 'Amphibious',
          description:
            'You can breathe and move underwater just as easily as on land.',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Long Tongue',
          description:
            'You can use your long tongue to grab onto things Close to you. You can also mark a Stress to unleash it as a Finesse Close weapon that does d12 physical damage using your Proficiency.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Simiah',
    image: '/assets/playtest/ancestries/simiah.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Simiah resemble anthropomorphic monkeys and apes, with long limbs and prehensile feet.',
      },
      {
        type: 'feature',
        text: {
          name: 'Natural Climber',
          description:
            'You have advantage on Agility Rolls that involve balancing and climbing',
        },
      },
      {
        type: 'feature',
        text: {
          name: 'Nimble',
          description: 'Increase your Evasion by +1 at character creation.',
        },
      },
    ],
  },
  {
    type: 'ancestry',
    title: 'Mixed',
    image: '/assets/playtest/ancestries/mixed.webp',
    sections: [
      {
        type: 'flavor',
        text: 'Families within the world of Daggerheart are as unique as the peoples and cultures that inhabit it.',
      },
      {
        type: 'rules',
        text: `When you choose your Ancestry at character creation, write down how your character identifies themself in the Heritage section of your character sheet. Work with your GM to choose two features from any combination of ancestries you're descended from.`,
      },
    ],
  },
];
