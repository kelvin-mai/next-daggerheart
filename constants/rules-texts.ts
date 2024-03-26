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
  'spend hope',
  'hope',
  'fear',
  'stress',
  'attack rolls',
  'attack roll',
  'spellcast rolls',
  'spellcast roll',
  'reaction rolls',
  'reaction roll',
  'repair armor',
];

export const rulesTexts = [...dice, ...domains, ...traits, ...terms];

export const rulesTextRegex = new RegExp(
  [...rulesTexts, '\\d*', '[+-]'].join('|'),
  'gi',
);
