-- LIMRA Digitech — CMS content storage migration
-- Stores the entire editable CMS snapshot (header, footer, hero, services,
-- industries, technologies, blogs, portfolio, testimonials, FAQs, careers,
-- media, clients, team, pricing, SEO registry, etc.) as a single JSON row.
-- Only the server (service_role) reads/writes it, so no public RLS policies.

create table if not exists public.cms_state (
  id text primary key default 'singleton',
  data jsonb not null default '{}'::jsonb,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.cms_state enable row level security;
