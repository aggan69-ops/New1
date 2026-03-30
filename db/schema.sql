create table if not exists activities (
  id text primary key,
  type text not null,
  entity_id text not null,
  description text not null,
  created_at timestamptz not null default now()
);

create table if not exists integration_tokens (
  provider text primary key,
  token jsonb,
  updated_at timestamptz not null default now()
);
