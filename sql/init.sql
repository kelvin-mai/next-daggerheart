create table if not exists domain_options (
  id uuid not null primary key default gen_random_uuid(),
  name text not null unique,
  color text not null,
  source text not null
);

create table if not exists class_options (
  id uuid not null primary key default gen_random_uuid(),
  name text not null unique,
  domain_primary text not null,
  domain_secondary text not null,
  source text not null
);

insert into domain_options (name, color, source) values
('arcana', '#664295', 'Core Set'),
('blade', '#b93035', 'Core Set'),
('bone', '#c1c7cc', 'Core Set'),
('codex', '#3370ab', 'Core Set'),
('grace', '#cb3b90', 'Core Set'),
('midnight', '#2c2c2c', 'Core Set'),
('sage', '#0e854d', 'Core Set'),
('splendor', '#d1b447', 'Core Set'),
('valor', '#dc7a27', 'Core Set'),
('dread', '#654294', 'The Void');

insert into class_options (name, domain_primary, domain_secondary, source) values
('bard', 'grace', 'codex', 'Core Set'),
('druid', 'sage', 'arcana', 'Core Set'),
('guardian', 'valor', 'blade', 'Core Set'),
('ranger', 'bone', 'sage', 'Core Set'),
('rogue', 'midnight', 'grace', 'Core Set'),
('seraph', 'splendor', 'valor', 'Core Set'),
('sorcerer', 'arcana', 'midnight', 'Core Set'),
('warrior', 'blade', 'bone', 'Core Set'),
('wizard', 'codex', 'splendor', 'Core Set'),
('fighter', 'bone', 'valor', 'The Void'),
('warlock', 'dread', 'grace', 'The Void');