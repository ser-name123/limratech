-- LIMRA Digitech — admin password storage
-- Holds the hashed admin login password once it is changed from the admin panel.
-- Server-side only (service_role); never exposed to the browser.
-- Until a password is set here, login uses the ADMIN_PASSWORD env variable.

create table if not exists public.admin_auth (
  id text primary key default 'singleton',
  username text,
  password_hash text,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);
-- If the table already existed from an earlier version:
alter table public.admin_auth add column if not exists username text;

alter table public.admin_auth enable row level security;
