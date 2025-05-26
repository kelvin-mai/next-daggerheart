// TODO: migrate to real database

export const domains = [
  { name: 'arcana', color: '#664295', source: 'Core Set' },
  { name: 'blade', color: '#b93035', source: 'Core Set' },
  { name: 'bone', color: '#c1c7cc', source: 'Core Set' },
  { name: 'codex', color: '#3370ab', source: 'Core Set' },
  { name: 'grace', color: '#cb3b90', source: 'Core Set' },
  { name: 'midnight', color: '#2c2c2c', source: 'Core Set' },
  { name: 'sage', color: '#0e854d', source: 'Core Set' },
  { name: 'splendor', color: '#d1b447', source: 'Core Set' },
  { name: 'valor', color: '#dc7a27', source: 'Core Set' },
  { name: 'dread', color: '#654294', source: 'The Void' },
];

export const classes = [
  {
    name: 'bard',
    domainPrimary: 'grace',
    domainSecondary: 'codex',
    source: 'Core Set',
  },
  {
    name: 'druid',
    domainPrimary: 'sage',
    domainSecondary: 'arcana',
    source: 'Core Set',
  },
  {
    name: 'guardian',
    domainPrimary: 'valor',
    domainSecondary: 'blade',
    source: 'Core Set',
  },
  {
    name: 'ranger',
    domainPrimary: 'bone',
    domainSecondary: 'sage',
    source: 'Core Set',
  },
  {
    name: 'rogue',
    domainPrimary: 'midnight',
    domainSecondary: 'grace',
    source: 'Core Set',
  },
  {
    name: 'seraph',
    domainPrimary: 'splendor',
    domainSecondary: 'valor',
    source: 'Core Set',
  },
  {
    name: 'sorcerer',
    domainPrimary: 'arcana',
    domainSecondary: 'midnight',
    source: 'Core Set',
  },
  {
    name: 'warrior',
    domainPrimary: 'blade',
    domainSecondary: 'bone',
    source: 'Core Set',
  },
  {
    name: 'wizard',
    domainPrimary: 'codex',
    domainSecondary: 'splendor',
    source: 'Core Set',
  },
  {
    name: 'fighter',
    domainPrimary: 'bone',
    domainSecondary: 'valor',
    source: 'The Void',
  },
  {
    name: 'warlock',
    domainPrimary: 'dread',
    domainSecondary: 'grace',
    source: 'The Void',
  },
];
