export const dice = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];
export const domains = [
  'arcana',
  'blade',
  'bone',
  'codex',
  'grace',
  'midnight',
  'sage',
  'splendor',
  'valor',
];
export const traits = [
  'agility',
  'strength',
  'finesse',
  'instinct',
  'presence',
  'knowledge',
];
export const terms = [
  'action rolls',
  'action roll',
  'spellcast roll',
  'spellcast rolls',
  'adversaries',
  'adversary',
  'advantage',
  'disadvantage',
  'armor slot',
  'armor',
  'domain',
  'attack',
  'spell',
  'ability',
  'trait',
  'close',
  'far',
  'melee',
  'movement',
  'burden',
  'hope',
  'fear',
  'stress',
  'rolls',
  'roll',
  'physical',
  'magical',
  'damage',
];

export const rulesTexts = [...dice, ...domains, ...traits, ...terms];

export const rulesTextRegex = new RegExp(
  [...rulesTexts, '\\d*', '[+-]'].join('|'),
  'gi',
);
