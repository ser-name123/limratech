-- LIMRA Digitech — CRM columns migration
-- Run this in the Supabase SQL Editor (after schema.sql) so the admin CRM
-- can persist lead priority, internal notes, and last-updated time to the DB.

alter table public.leads add column if not exists priority text default 'High';
alter table public.leads add column if not exists internal_notes text;
alter table public.leads add column if not exists updated_at timestamp with time zone default timezone('utc'::text, now());

-- Allow the admin console (service_role, server-side) to read/manage all rows.
-- Public (anon) can still only INSERT via the existing schema.sql policies.
do $$
begin
  if not exists (select 1 from pg_policies where tablename = 'leads' and policyname = 'Service role manages leads') then
    create policy "Service role manages leads" on public.leads for all to service_role using (true) with check (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'contacts' and policyname = 'Service role manages contacts') then
    create policy "Service role manages contacts" on public.contacts for all to service_role using (true) with check (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'newsletter_subscribers' and policyname = 'Service role manages newsletter') then
    create policy "Service role manages newsletter" on public.newsletter_subscribers for all to service_role using (true) with check (true);
  end if;
end $$;
