/* ------------------------------------------------------------------ *
 * Editable text content for the static marketing pages.
 * Stored in the CMS snapshot under `pageSections` (DB-backed, cms_state).
 * Each page is a map of blocks; a block has an optional header
 * (eyebrow/heading/description/description2) and an optional `items` array.
 * Icons, colours and layout stay in code; only text is edited here.
 *
 * `pageContentSchema` drives the admin editor UI generically, so adding a
 * page only needs a default-content entry plus a schema entry.
 * ------------------------------------------------------------------ */

import { content as servicesContent, schema as servicesSchema } from '@/data/pages/services';
import { content as careersContent, schema as careersSchema } from '@/data/pages/careers';
import { content as clientsContent, schema as clientsSchema } from '@/data/pages/clients';
import { content as portfolioContent, schema as portfolioSchema } from '@/data/pages/portfolio';
import { content as privacyContent, schema as privacySchema } from '@/data/pages/privacy';
import { content as termsContent, schema as termsSchema } from '@/data/pages/terms';
import { landingContent, landingSchemas } from '@/data/pages/landings';
import { homeWidgetsContent, homeWidgetsSchema } from '@/data/pages/homeWidgets';
import { legalContent, legalSchemas } from '@/data/pages/legal';

export interface PageBlock {
  eyebrow?: string;
  heading?: string;
  description?: string;
  description2?: string;
  items?: Record<string, any>[];
}

export type PageContent = Record<string, PageBlock>;

export interface PageSchemaBlock {
  key: string;
  label: string;
  fields: ('eyebrow' | 'heading' | 'description' | 'description2')[];
  itemFields?: [string, string][]; // [fieldKey, label]
  itemLabel?: string;
}

export interface PageSchema {
  page: string;
  label: string;
  blocks: PageSchemaBlock[];
}

export const defaultPageSections: Record<string, PageContent> = {
  about: {
    hero: {
      eyebrow: 'WHO WE ARE',
      heading: 'Empowering Businesses Through Strategic Digital Architecture',
      description:
        'At LIMRA Digitech, we combine modern software engineering with aggressive, performance-focused SEO to scale enterprise brands and high-velocity startups nationwide.',
    },
    mission: {
      eyebrow: 'MISSION & PHILOSOPHY',
      heading: 'Eliminating The Performance Divide Between Code & Search Revenue',
      description:
        'Founded with a relentless commitment to technical excellence, LIMRA Digitech has emerged as the premier partner for Indian businesses that reject bloated WordPress templates, sluggish page speeds, and hollow vanity metrics.',
      description2:
        'We engineer bespoke, serverless web platforms backed by Supabase databases and executed with ruthless technical SEO that earns Page 1 Google dominance.',
    },
    missionCard: {
      heading: 'Why Leading Brands Choose LIMRA',
      items: [
        { text: '100% Transparency with real-time performance analytics & direct engineer access' },
        { text: 'Modern serverless tech stack: Next.js 15, TypeScript & Supabase cloud' },
        { text: 'Search engine dominance targeting high-intent commercial keywords' },
        { text: 'Pan-India client operations with rapid turnarounds' },
      ],
    },
    labShowcase: {
      eyebrow: 'OUR COLLABORATIVE LAB',
      heading: 'Inside The LIMRA Tech & Search Engine Hub',
      description:
        'Where cloud engineers, UI/UX researchers, and algorithmic SEO specialists analyze real-time telemetry to engineer organic market leadership.',
    },
    values: {
      eyebrow: 'OUR VALUES',
      heading: 'The Engineering Principles That Guide Every Sprint',
      description:
        'We operate under strict engineering standards that prioritize client revenue, site durability, and algorithmic resilience.',
      items: [
        { title: 'Code-First Engineering', desc: 'We refuse to deliver bloated templates. Every application is hand-crafted with clean TypeScript and modern React.' },
        { title: 'Sub-Second Performance', desc: 'Load speed is the #1 ranking and conversion factor. We benchmark every project against strict 100/100 Core Web Vitals.' },
        { title: 'Commercial Intent SEO', desc: 'Traffic without revenue is vanity. We target high-value commercial keywords that translate directly into qualified sales leads.' },
        { title: 'Radical Transparency', desc: 'Zero hidden retainers or confusing agency jargon. Clients get real-time telemetry, GitHub commits, and direct engineer access.' },
        { title: 'Serverless Edge Architecture', desc: 'We build with Next.js 15 App Router and Supabase cloud clusters, eliminating slow legacy server bottlenecks.' },
        { title: 'Long-Term Partnership', desc: 'We treat your business like our own. Our engineers provide proactive monitoring, algorithm updates, and continuous optimization.' },
      ],
    },
    team: {
      eyebrow: 'TECHNICAL LEADERSHIP',
      heading: 'Led By Full-Stack Engineers & Search Architects',
      description: 'Direct access to senior practitioners — no middlemen or non-technical account reps.',
    },
    milestones: {
      eyebrow: 'OUR JOURNEY',
      heading: 'Milestones On Our Path To Search Engine Dominance',
      description: 'A track record of constant adaptation and pioneering modern web frameworks.',
    },
    infraMoat: {
      eyebrow: 'INFRASTRUCTURE MOAT',
      heading: '100% Serverless. Zero Monolithic Debt.',
      description:
        'By pairing Next.js with Supabase PostgreSQL and Vercel edge caching, our clients enjoy 99.98% uptime, instant global elasticity, and total immunity from database connection pooling choke points.',
    },
    faq: {
      eyebrow: 'COMMON INQUIRIES',
      heading: 'Frequently Asked Questions About LIMRA Digitech',
      description: 'Clear answers to how we structure engagements, teams, and technical delivery.',
      items: [
        { q: 'Where is LIMRA Digitech located?', a: 'LIMRA Digitech is headquartered in New Delhi, India, with remote engineering hubs delivering high-speed solutions for clients across India, UAE, and North America.' },
        { q: 'How does your engineering approach differ from traditional digital agencies?', a: 'Most digital marketing agencies use outsourced WordPress templates and cheap link packages. We are a technical engineering lab: we code bespoke serverless web applications with Next.js 15, build entity schema graphs, and guarantee sub-second load speeds.' },
        { q: 'Can we hire LIMRA Digitech on a monthly sprint retainer?', a: 'Yes. We offer agile monthly engineering and SEO growth retainers that include dedicated developer hours, weekly sprint reviews, and live SERP rank monitoring.' },
        { q: 'What is your typical client engagement size?', a: 'We partner with ambitious startups, growing mid-market brands, and enterprise institutions seeking predictable, data-backed digital growth.' },
      ],
    },
  },
  services: servicesContent,
  careers: careersContent,
  clients: clientsContent,
  portfolio: portfolioContent,
  privacy: privacyContent,
  terms: termsContent,
  ...landingContent,
  ...legalContent,
  homeWidgets: homeWidgetsContent,
};

export const pageContentSchema: PageSchema[] = [
  {
    page: 'about',
    label: 'About Page',
    blocks: [
      { key: 'hero', label: 'Hero', fields: ['eyebrow', 'heading', 'description'] },
      { key: 'mission', label: 'Mission & Philosophy', fields: ['eyebrow', 'heading', 'description', 'description2'] },
      { key: 'missionCard', label: 'Mission Side Card', fields: ['heading'], itemFields: [['text', 'Bullet point']], itemLabel: 'Bullet' },
      { key: 'labShowcase', label: 'Lab Showcase', fields: ['eyebrow', 'heading', 'description'] },
      { key: 'values', label: 'Core Values', fields: ['eyebrow', 'heading', 'description'], itemFields: [['title', 'Title'], ['desc', 'Description']], itemLabel: 'Value' },
      { key: 'team', label: 'Team (section header)', fields: ['eyebrow', 'heading', 'description'] },
      { key: 'milestones', label: 'Milestones (section header)', fields: ['eyebrow', 'heading', 'description'] },
      { key: 'infraMoat', label: 'Infrastructure Moat', fields: ['eyebrow', 'heading', 'description'] },
      { key: 'faq', label: 'FAQ', fields: ['eyebrow', 'heading', 'description'], itemFields: [['q', 'Question'], ['a', 'Answer']], itemLabel: 'FAQ' },
    ],
  },
  { page: 'services', label: 'Services Page', blocks: servicesSchema },
  { page: 'careers', label: 'Careers Page', blocks: careersSchema },
  { page: 'clients', label: 'Clients Page', blocks: clientsSchema },
  { page: 'portfolio', label: 'Portfolio Page', blocks: portfolioSchema },
  { page: 'privacy', label: 'Privacy Policy', blocks: privacySchema },
  { page: 'terms', label: 'Terms & Conditions', blocks: termsSchema },
  ...landingSchemas,
  ...legalSchemas,
  homeWidgetsSchema,
];
