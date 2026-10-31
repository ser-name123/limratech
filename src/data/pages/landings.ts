import type { PageContent, PageSchema } from '@/data/pageContent';

/**
 * Service landing pages (server-rendered, each renders <ServiceDetailView>).
 * Editable: hero tagline, benefits, and FAQs. Stored under pageSections[slug].
 */

function landing(heroTagline: string, benefits: { title: string; desc: string }[], faqs: { q: string; a: string }[]): PageContent {
  return {
    hero: { heading: heroTagline },
    benefits: { items: benefits },
    faqs: { items: faqs },
  };
}

export const landingContent: Record<string, PageContent> = {
  'website-development-services': landing(
    'Best Website Development Company in India For Modern Business Websites',
    [
      { title: 'Sub-Second Page Loads', desc: 'Engineered with Next.js App Router and serverless edge caching for blistering responsiveness.' },
      { title: 'SEO Architecture Built-In', desc: 'Semantic HTML5, automated schema markup, and Core Web Vitals optimization from day one.' },
      { title: 'Conversion-Focused UX', desc: 'Crafted with intuitive conversion paths, frictionless checkout flows, and mobile perfection.' },
      { title: 'Rock-Solid Security', desc: 'Modern cloud infrastructure with SSL, DDOS protection, and Supabase encrypted databases.' },
    ],
    [
      { q: 'Which tech stacks do you build websites with?', a: 'We specialize in Next.js, React, TypeScript, Node.js, Supabase, Tailwind CSS, as well as Shopify, PHP, Laravel, Magento, and headless WordPress.' },
      { q: 'How long does a custom web development project take?', a: 'Standard business websites typically launch in 2 to 3 weeks, while complex full-stack web applications take 4 to 8 weeks.' },
      { q: 'Will my website be mobile friendly and SEO optimized?', a: 'Absolutely. Every single website we develop is 100% responsive across all smartphones, tablets, and desktops, with strict adherence to Google Core Web Vitals.' },
    ]
  ),
  'digital-marketing-agency-india': landing(
    'Best Digital Marketing Company in India For Business Growth',
    [
      { title: 'Predictable Customer Acquisition', desc: 'Eliminate guesswork with engineered funnels backed by deep demographic and competitor data.' },
      { title: 'Lower Cost Per Acquisition (CPA)', desc: 'Continuous multivariate ad copy and creative testing to maximize conversion efficiency.' },
      { title: 'Omnichannel Brand Dominance', desc: 'Retargeting across Google Search, YouTube, Instagram, Facebook, and LinkedIn networks.' },
      { title: 'Live Transparent Reporting', desc: 'Real-time dashboards showing exactly how many leads and revenue your marketing budget produces.' },
    ],
    [
      { q: 'How quickly can we expect results from digital marketing?', a: 'PPC advertising (Google & Meta Ads) generates qualified leads within 48 to 72 hours of launch, while organic SEO delivers compounded returns over 60 to 90 days.' },
      { q: 'How do you measure marketing ROI?', a: 'We track every conversion using GA4, Meta Pixel, server-side Conversion API, and CRM pipeline attribution to show exact revenue generated per ad rupee.' },
    ]
  ),
  'lead-generation-company-india': landing(
    'Best Lead Generation Company in India for Business Growth',
    [
      { title: 'Pre-Qualified Prospects Only', desc: 'Custom qualification filters eliminate tire-kickers and focus your sales team on ready-to-buy decision makers.' },
      { title: 'Automated Instant CRM Sync', desc: 'Leads are pushed instantly to your CRM, WhatsApp, or email with immediate SMS/WhatsApp autoresponders.' },
      { title: 'Bespoke High-Converting Landing Funnels', desc: 'Engineered for psychological persuasion and frictionless lead capture.' },
      { title: 'Scalable Volume On-Demand', desc: 'Scale lead volume up or down based on your sales team’s closing capacity.' },
    ],
    [
      { q: 'How are leads verified before delivery?', a: 'Our multi-step funnels require phone number validation, OTP verification (optional), and specific qualification questionnaire answering before inquiry submission.' },
      { q: 'Do you work for B2B or B2C businesses?', a: 'Both! We architect specialized LinkedIn & Google Search funnels for B2B enterprises, and high-volume Meta/Instagram funnels for B2C consumer products and services.' },
    ]
  ),
  'creative-design-solutions-india': landing(
    'Creative Design Agency India For Modern Brands & Business Growth',
    [
      { title: 'Distinct Brand Identity', desc: 'Crafting memorable logo systems, typography, and cohesive color palettes that elevate brand perception.' },
      { title: 'Human-Centered UI/UX', desc: 'Wireframing, user flows, and interactive Figma prototypes tested for seamless customer journeys.' },
      { title: 'Social & Ad Creative Systems', desc: 'Scroll-stopping graphics, carousel packs, and presentation decks ready to deploy.' },
      { title: 'Vector Asset Libraries', desc: 'High-resolution scalable SVG assets, custom 3D elements, and micro-interaction animations.' },
    ],
    [
      { q: 'What deliverables are included with brand identity design?', a: 'You receive primary & secondary logo files (SVG, PNG, EPS, AI), color palette guidelines, typography hierarchy, social media kit, and complete brand style guide PDF.' },
      { q: 'Do you design UI/UX for existing websites and mobile apps?', a: 'Yes! We conduct usability audits on existing products and design high-converting modern redesigns in Figma.' },
    ]
  ),
  'mobile-app-developer-india': landing(
    'Best App Development Company in India Delivering Custom Mobile Solutions',
    [
      { title: 'Cross-Platform Cost Efficiency', desc: 'Single codebase deployment across iOS and Android with React Native and Flutter without compromising native performance.' },
      { title: 'Offline-First Architectures', desc: 'Local caching and seamless cloud synchronization when internet connection is restored.' },
      { title: 'Frictionless In-App Payments', desc: 'Razorpay, Stripe, Apple Pay, and Google Pay integrations with end-to-end encryption.' },
      { title: 'App Store Launch & ASO', desc: 'Guaranteed submission approval assistance, App Store Optimization, and proactive crash monitoring.' },
    ],
    [
      { q: 'Should I choose React Native, Flutter, or Native?', a: 'For 90% of business applications, React Native or Flutter delivers identical 60fps performance at nearly half the development budget and launch time. We advise based on your specific feature needs.' },
      { q: 'Do you provide backend server development for the mobile app?', a: 'Yes! We engineer cloud-native backends with Node.js, Supabase, and PostgreSQL with robust REST / GraphQL APIs.' },
    ]
  ),
  'software-developers-india': landing(
    'Trusted Software Development Company in India',
    [
      { title: 'Custom Cloud Architecture', desc: 'Bespoke microservices, serverless functions, and containerized Docker deployments engineered for zero downtime.' },
      { title: 'Scalable PostgreSQL & Supabase', desc: 'Normalized relational schemas with Row Level Security (RLS) and sub-millisecond query performance.' },
      { title: 'Automated CI/CD & Testing', desc: 'Robust unit, integration, and end-to-end automated pipelines that catch defects prior to production.' },
      { title: 'Full IP & Source Code Ownership', desc: 'You retain 100% intellectual property, repository access, and comprehensive architectural documentation.' },
    ],
    [
      { q: 'How do you ensure data security in custom software?', a: 'We apply industry-standard OAuth 2.0 / JWT authentication, role-based access control (RBAC), TLS 1.3 data encryption in transit, and AES-256 database encryption at rest.' },
      { q: 'Can you migrate legacy software to modern cloud infrastructure?', a: 'Yes! We frequently migrate monolithic and legacy PHP/ASP systems to modern Next.js + TypeScript + Supabase architectures.' },
    ]
  ),
};

const LANDING_LABELS: Record<string, string> = {
  'website-development-services': 'Landing: Website Development',
  'digital-marketing-agency-india': 'Landing: Digital Marketing',
  'lead-generation-company-india': 'Landing: Lead Generation',
  'creative-design-solutions-india': 'Landing: Creative Design',
  'mobile-app-developer-india': 'Landing: Mobile App',
  'software-developers-india': 'Landing: Software Dev',
};

export const landingSchemas: PageSchema[] = Object.keys(landingContent).map((slug) => ({
  page: slug,
  label: LANDING_LABELS[slug] || slug,
  blocks: [
    { key: 'hero', label: 'Hero Tagline', fields: ['heading'] },
    { key: 'benefits', label: 'Benefits', fields: [], itemFields: [['title', 'Title'], ['desc', 'Description']], itemLabel: 'Benefit' },
    { key: 'faqs', label: 'FAQs', fields: [], itemFields: [['q', 'Question'], ['a', 'Answer']], itemLabel: 'FAQ' },
  ],
}));
