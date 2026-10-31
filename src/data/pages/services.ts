import type { PageContent, PageSchemaBlock } from '@/data/pageContent';

export const content: PageContent = {
  hero: {
    eyebrow: 'CAPABILITY CATALOGUE',
    heading: 'End-To-End Tech & Search Engine Solutions',
    description:
      'From modern Next.js serverless web platforms to aggressive page-1 SEO dominance, we provide the full stack needed to scale in today’s digital economy.',
  },
  grid: {
    eyebrow: 'CORE SPECIALIZATIONS',
    heading: 'Six Pillars Of High-Performance Engineering',
    description:
      'Explore our core capabilities architected to dominate search rankings and deliver sub-second user experiences.',
  },
  sla: {
    eyebrow: 'SLA GUARANTEES',
    heading: 'Enterprise Engineering Performance Benchmarks',
    description: 'We eliminate ambiguity with strict, measurable engineering benchmarks.',
    items: [
      { title: 'Core Web Vitals', value: '100 / 100', sub: 'Zero layout shift & instant edge hydration' },
      { title: 'Edge TTFB', value: '< 0.3s', sub: 'Global edge routing via serverless nodes' },
      { title: 'SERP Index Velocity', value: '< 4 Mins', sub: 'Googlebot instant crawl via dynamic sitemaps' },
      { title: 'Security & Uptime', value: '99.98%', sub: 'Sanitized PostgreSQL queries & DDoS shielding' },
    ],
  },
  process: {
    eyebrow: 'HOW WE WORK',
    heading: '4-Step Agile Delivery Sprint Model',
    description: 'From audit to production launch, our process guarantees momentum without bureaucratic lag.',
    items: [
      { num: '01', title: 'Technical Audit & Blueprint', desc: 'Mapping keyword intent gaps, Core Web Vitals bottlenecks, and data flows.', time: 'Day 1-3' },
      { num: '02', title: 'Full-Stack Architecture', desc: 'Designing high-converting Figma flows, TypeScript models, and Supabase tables.', time: 'Week 1' },
      { num: '03', title: 'Sprint Build & SEO Graphs', desc: 'Writing clean Next.js code, structuring JSON-LD schema, and edge-caching rules.', time: 'Week 2-4' },
      { num: '04', title: 'Production Edge Launch', desc: 'Deploying to serverless edge nodes, verifying GA4 goals, and tracking SERP rank.', time: 'Launch' },
    ],
  },
  securityBanner: {
    eyebrow: 'Zero Technical Debt Guarantee',
    heading: 'Every Line Of Code Is Built For Scale & Speed',
    description:
      'We write modular, type-safe TypeScript, sanitized Supabase PostgreSQL endpoints, and automated CI/CD builds so your company never has to rewrite its software in 2 years.',
  },
  faq: {
    eyebrow: 'FREQUENTLY ASKED QUESTIONS',
    heading: 'Common Questions About Our Services',
    description: 'Everything you need to know about partnering with LIMRA Digitech.',
    items: [
      {
        q: 'Can we hire Limra Digitech for both Web Development and ongoing SEO?',
        a: 'Yes, this is our most effective model. When our team builds your Next.js web application from scratch with code-first technical SEO, your rankings and page speeds compound significantly faster than attempting to optimize legacy sites.',
      },
      {
        q: 'What is the average timeline for enterprise web development projects?',
        a: 'Standard enterprise builds are delivered in agile 2 to 6 week sprints. We provide staging preview links after every sprint so your team has complete visibility.',
      },
      {
        q: 'Do you work with startups, D2C brands, or only large enterprises?',
        a: 'We partner with ambitious organizations across all stages — from funded seed startups needing scalable tech foundations to high-ticket B2B enterprises.',
      },
      {
        q: 'What technologies are included in your core stack?',
        a: 'We specialize in Next.js 15 (App Router), React 19, TypeScript, TailwindCSS, Supabase (PostgreSQL), Node.js, Vercel Serverless Edge, and GA4 tracking pipelines.',
      },
    ],
  },
};

export const schema: PageSchemaBlock[] = [
  { key: 'hero', label: 'Hero', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'grid', label: 'Services Grid (section header)', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'sla', label: 'SLA Guarantees', fields: ['eyebrow', 'heading', 'description'], itemFields: [['title', 'Metric'], ['value', 'Value'], ['sub', 'Sub-text']], itemLabel: 'SLA Card' },
  { key: 'process', label: 'Agile Sprint Process', fields: ['eyebrow', 'heading', 'description'], itemFields: [['num', 'Number'], ['title', 'Title'], ['desc', 'Description'], ['time', 'Timeframe']], itemLabel: 'Step' },
  { key: 'securityBanner', label: 'Security Banner', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'faq', label: 'FAQ', fields: ['eyebrow', 'heading', 'description'], itemFields: [['q', 'Question'], ['a', 'Answer']], itemLabel: 'FAQ' },
];
