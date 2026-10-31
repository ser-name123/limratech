import type { PageContent, PageSchemaBlock } from '@/data/pageContent';

export const content: PageContent = {
  hero: {
    eyebrow: 'OUR CLIENT NETWORK',
    heading: 'We Build Partnerships That Drive Real Revenue Growth',
    description:
      'From funded startups to market-leading enterprises across India, see why 350+ organizations trust LIMRA Digitech for technical SEO and web engineering.',
  },
  clientMetrics: {
    items: [
      { value: '350+', label: 'Enterprise & High-Growth Clients', sub: 'Pan-India & Global Delivery' },
      { value: '98.4%', label: 'Annual Client Retention Rate', sub: 'Compounding SEO & Tech Retainers' },
      { value: '4.9/5.0', label: 'Verified Google Review Score', sub: 'Based on 120+ Public Reviews' },
      { value: '₹50Cr+', label: 'Client Organic Pipeline Generated', sub: 'Measurable Inbound Revenue' },
    ],
  },
  verticals: {
    eyebrow: 'CROSS-INDUSTRY DOMINANCE',
    heading: 'Sectors We Power Nationwide',
    description:
      'Our code-first search methodologies adapt seamlessly to high-ticket B2B, consumer e-commerce, and SaaS.',
    items: [
      { title: 'Enterprise B2B & Manufacturing', desc: 'Capturing procurement-level buyer intent and driving high-value quote requests.' },
      { title: 'FinTech & Wealth Advisory', desc: 'Secure cloud portals, zero-downtime APIs, and high-trust organic search authority.' },
      { title: 'D2C Brands & E-Commerce', desc: 'Sub-second catalog rendering, merchant rich schema, and multi-channel ad scaling.' },
      { title: 'Healthcare & Clinical Services', desc: 'Medical E-E-A-T compliance, patient inquiry funnels, and localized 3-pack maps.' },
      { title: 'B2B SaaS & Tech Startups', desc: 'Feature comparison matrices, documentation search hubs, and free trial signups.' },
      { title: 'Real Estate & Hospitality', desc: 'Interactive property listings, location landing pages, and verified lead capture.' },
    ],
  },
  advantage: {
    eyebrow: 'THE LIMRA ADVANTAGE',
    heading: 'Why Brands Fire Their Old Agency For LIMRA',
    description: 'Clear commitments that define our client relationships.',
    items: [
      { title: 'Direct Senior Architect Access', desc: 'You work directly with lead engineers and technical SEO directors, not inexperienced junior account managers.' },
      { title: '100% Code Ownership', desc: 'All GitHub repositories, Supabase databases, and domain assets belong entirely to your company from Day 1.' },
      { title: 'SLA-Backed Performance', desc: 'Strict 100/100 Core Web Vitals guarantees and real-time SERP tracking ensure measurable ROI.' },
    ],
  },
  models: {
    eyebrow: 'FLEXIBLE COLLABORATION',
    heading: 'Tailored Partnership Models',
    description: 'Choose the structure that matches your current business stage and growth velocity.',
    items: [
      { title: 'Fixed-Scope Sprint Build', desc: 'Complete architecture, UI/UX, and production launch of your Next.js web application within 2-6 weeks.' },
      { title: 'Full Organic Growth Engine', desc: 'Full-stack Next.js web build paired with aggressive monthly technical SEO, entity graphs, and digital PR retainers.' },
      { title: 'Dedicated Technical Advisory', desc: 'Code audits, architectural consulting, and algorithm penalty recovery for enterprise internal engineering teams.' },
    ],
  },
  faq: {
    eyebrow: 'PARTNERSHIP FAQS',
    heading: 'Frequently Asked Questions By Prospective Clients',
    description: 'Clear answers to how we kick off, bill, and scale client accounts.',
    items: [
      { q: 'How does onboarding work once we sign a client agreement?', a: 'Onboarding is completed within 48 hours. You are assigned a dedicated technical lead, invited to a shared Slack/WhatsApp channel, and given access to our live sprint dashboard.' },
      { q: 'Do you work with non-disclosure agreements (NDAs)?', a: 'Yes, 100% of our enterprise client partnerships operate under strict bilateral NDAs and IP protection agreements.' },
      { q: 'Can we retain Limra Digitech on an ongoing monthly basis?', a: 'Yes. Most clients maintain monthly sprint retainers for continuous keyword rank expansion, Core Web Vitals maintenance, and new full-stack feature releases.' },
      { q: 'What reporting and communication cadence do you provide?', a: 'Clients receive weekly video sprint teardowns, bi-weekly strategy calls, and 24/7 access to live Google Looker Studio analytics.' },
    ],
  },
};

export const schema: PageSchemaBlock[] = [
  { key: 'hero', label: 'Hero', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'clientMetrics', label: 'Client Metrics', fields: [], itemFields: [['value', 'Value'], ['label', 'Label'], ['sub', 'Sub-label']], itemLabel: 'Metric' },
  { key: 'verticals', label: 'Industry Verticals', fields: ['eyebrow', 'heading', 'description'], itemFields: [['title', 'Title'], ['desc', 'Description']], itemLabel: 'Vertical' },
  { key: 'advantage', label: 'The LIMRA Advantage', fields: ['eyebrow', 'heading', 'description'], itemFields: [['title', 'Title'], ['desc', 'Description']], itemLabel: 'Advantage' },
  { key: 'models', label: 'Engagement Models', fields: ['eyebrow', 'heading', 'description'], itemFields: [['title', 'Title'], ['desc', 'Description']], itemLabel: 'Model' },
  { key: 'faq', label: 'FAQ', fields: ['eyebrow', 'heading', 'description'], itemFields: [['q', 'Question'], ['a', 'Answer']], itemLabel: 'FAQ' },
];
