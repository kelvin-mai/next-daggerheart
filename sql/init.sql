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
('arcana', '#664295', 'SRD'),
('blade', '#b93035', 'SRD'),
('bone', '#c1c7cc', 'SRD'),
('codex', '#3370ab', 'SRD'),
('grace', '#cb3b90', 'SRD'),
('midnight', '#2c2c2c', 'SRD'),
('sage', '#0e854d', 'SRD'),
('splendor', '#d1b447', 'SRD'),
('valor', '#dc7a27', 'SRD');

insert into class_options (name, domain_primary, domain_secondary, source) values
('bard', 'grace', 'codex', 'SRD'),
('druid', 'sage', 'arcana', 'SRD'),
('guardian', 'valor', 'blade', 'SRD'),
('ranger', 'bone', 'sage', 'SRD'),
('rogue', 'midnight', 'grace', 'SRD'),
('seraph', 'splendor', 'valor', 'SRD'),
('sorcerer', 'arcana', 'midnight', 'SRD'),
('warrior', 'blade', 'bone', 'SRD'),
('wizard', 'codex', 'splendor', 'SRD');