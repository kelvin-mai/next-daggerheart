create table users (
  id text not null primary key,
  name text not null,
  email text not null unique,
  email_verified boolean not null,
  image text,
  created_at timestamp default now(),
  updated_at timestamp
);

create table sessions (
  id text not null primary key,
  expires_at timestamp not null,
  token text not null unique,
  created_at timestamp default now(),
  updated_at timestamp,
  ip_address text,
  user_agent text,
  user_id text not null references users (id)
);

create table accounts (
  id text not null primary key,
  account_id text not null,
  provider_id text not null,
  user_id text not null references users (id),
  access_token text,
  refresh_token text,
  id_token text,
  access_token_expires_at timestamp,
  refresh_token_expires_at timestamp,
  scope text,
  password text,
  created_at timestamp default now(),
  updated_at timestamp
);

create table verification (
  id text not null primary key default gen_random_uuid(),
  identifier text not null,
  value text not null,
  expires_at timestamp not null,
  created_at timestamp default now(),
  updated_at timestamp
);