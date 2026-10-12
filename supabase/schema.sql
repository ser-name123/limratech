-- Supabase PostgreSQL Schema for LIMRA Digitech
-- Run this in your Supabase SQL Editor to initialize all tables

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Leads Table (Lead Generation & Service Inquiries)
create table if not exists public.leads (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    full_name text not null,
    email text not null,
    phone text,
    service_needed text,
    budget text,
    message text,
    source_page text default 'home',
    status text default 'new' check (status in ('new', 'contacted', 'qualified', 'closed', 'archived'))
);

-- 2. Contact Inquiries Table
create table if not exists public.contacts (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    email text not null,
    phone text,
    subject text,
    message text not null,
    status text default 'unread' check (status in ('unread', 'in_progress', 'resolved'))
);

-- 3. Newsletter Subscribers
create table if not exists public.newsletter_subscribers (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    email text unique not null,
    is_active boolean default true
);

-- 4. Blogs Table
create table if not exists public.blogs (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    title text not null,
    slug text unique not null,
    excerpt text,
    content text not null,
    cover_image text,
    author text default 'LIMRA Digitech Team',
    category text default 'Digital Marketing',
    read_time text default '5 min read',
    published boolean default true
);

-- 5. Services Table
create table if not exists public.services (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    slug text unique not null,
    title text not null,
    short_description text,
    full_description text,
    icon text,
    features jsonb default '[]'::jsonb,
    tech_stack jsonb default '[]'::jsonb,
    order_index integer default 0
);

-- 6. Portfolio / Case Studies Table
create table if not exists public.portfolio (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    title text not null,
    slug text unique not null,
    category text not null,
    image_url text,
    description text,
    results text,
    live_link text,
    featured boolean default false
);

-- 7. Testimonials Table
create table if not exists public.testimonials (
    id uuid primary key default uuid_generate_v4(),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    client_name text not null,
    company_or_role text,
    avatar text,
    review text not null,
    rating integer default 5,
    platform text default 'Google'
);

-- Row Level Security (RLS) setup
alter table public.leads enable row level security;
alter table public.contacts enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.blogs enable row level security;
alter table public.services enable row level security;
alter table public.portfolio enable row level security;
alter table public.testimonials enable row level security;

-- Public can insert leads, contacts, newsletter
create policy "Allow public insert to leads" on public.leads for insert with check (true);
create policy "Allow public insert to contacts" on public.contacts for insert with check (true);
create policy "Allow public insert to newsletter" on public.newsletter_subscribers for insert with check (true);

-- Public can read published content
create policy "Allow public read blogs" on public.blogs for select using (published = true);
create policy "Allow public read services" on public.services for select using (true);
create policy "Allow public read portfolio" on public.portfolio for select using (true);
create policy "Allow public read testimonials" on public.testimonials for select using (true);
