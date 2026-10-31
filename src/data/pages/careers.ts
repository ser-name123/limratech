import type { PageContent, PageSchemaBlock } from '@/data/pageContent';

export const content: PageContent = {
  hero: {
    eyebrow: 'JOIN OUR TEAM',
    heading: 'Build The Future Of Web Engineering & Search Dominance',
    description:
      'We are always seeking exceptional engineers, creative thinkers, and relentless problem-solvers to craft cutting-edge digital experiences.',
  },
  perks: {
    eyebrow: 'BENEFITS & CULTURE',
    heading: 'Why Engineers & Marketers Thrive At LIMRA',
    description: 'We provide the autonomy, tools, and compensation needed to do your life’s best work.',
    items: [
      { title: 'Remote-First Flexibility', desc: 'Work from anywhere in India with flexible working hours and modern hardware stipends.' },
      { title: 'Bleeding-Edge Tech Stack', desc: 'Build with Next.js 15, React 19, TypeScript, Supabase, Tailwind, and Vercel Serverless Edge.' },
      { title: 'Competitive Compensation', desc: 'Above-market base salary, biannual performance bonuses, and direct equity options for key contributors.' },
      { title: 'Annual Learning Budget', desc: '₹50,000 yearly stipend for technical courses, O’Reilly books, and developer conferences.' },
      { title: 'Comprehensive Health Cover', desc: 'Complete medical and health insurance coverage for you and your direct dependents.' },
      { title: 'Zero Micro-Management', desc: 'Autonomous sprint ownership. We evaluate results, clean code, and impact — not keystrokes.' },
    ],
  },
  openingsHeader: {
    eyebrow: 'CURRENT OPENINGS',
    heading: 'Explore Available Positions',
    description: 'Join our fast-growing engineering laboratory and work on high-impact client systems.',
  },
  hiringProcess: {
    eyebrow: 'INTERVIEW WORKFLOW',
    heading: 'Simple, Respectful & Transparent Hiring',
    description: 'We hate 7-round interview loops as much as you do. Our process takes under 10 days.',
    items: [
      { num: '01', title: 'Culture & Trajectory Chat', desc: 'A casual 30-minute intro conversation to discuss mutual goals, past projects, and culture fit.' },
      { num: '02', title: 'Technical Architecture Review', desc: 'Walk us through a real project you built. We talk system design, trade-offs, and performance.' },
      { num: '03', title: 'Offer & Seamless Onboarding', desc: 'Transparent compensation package, equity breakdown, and laptop setup on Day 1.' },
    ],
  },
  lifeAtLimra: {
    eyebrow: 'Modern Developer Experience',
    heading: 'Work With High Agency & Top 1% Peers',
    description:
      'At Limra, you won’t be maintaining 10-year-old PHP code. You’ll be designing serverless architectures, deploying AI-immune schema graphs, and solving tough performance challenges every week.',
    items: [
      { text: '100% TypeScript Strict Mode' },
      { text: 'Automated PR Testing on Vercel' },
      { text: 'Zero Bureaucracy Decision Making' },
    ],
  },
  diversity: {
    heading: 'An Equal Opportunity Engineering Lab',
    description:
      'LIMRA Digitech is committed to fostering a diverse, inclusive, and psychologically safe workplace. We evaluate all applicants solely on technical ability, problem-solving craft, and cultural contribution.',
  },
  faq: {
    eyebrow: 'RECRUITMENT FAQ',
    heading: 'Frequently Asked Questions About Careers',
    description: 'Clear answers regarding remote work, interviews, and compensation.',
    items: [
      {
        q: 'What is the interview process like at LIMRA Digitech?',
        a: 'We respect your time. Our hiring process is streamlined into 3 steps: 1) Initial 30-minute culture and background chat, 2) Technical deep-dive / code teardown (no leetcode brainteasers), and 3) Final offer discussion with our leadership.',
      },
      {
        q: 'Do you offer fully remote work?',
        a: 'Yes! Most engineering and marketing roles are 100% remote across India, with optional coworking access in New Delhi.',
      },
      {
        q: 'What equipment and development tools are provided?',
        a: 'Full-time team members receive modern laptop allowances, second-monitor stipends, and subscriptions to GitHub Copilot, Figma, and development cloud tools.',
      },
      {
        q: 'I don’t see an exact role matching my profile. Can I still apply?',
        a: 'Absolutely. We always welcome exceptional software engineers, designers, and growth marketers. Send your portfolio and GitHub profile to {email}.',
      },
    ],
  },
  resumeCallout: {
    eyebrow: 'GENERAL INQUIRY',
    heading: 'Don’t See Your Exact Role?',
    description:
      'Email your GitHub, LinkedIn, or portfolio directly to {email} with a note on what you’d like to build with us.',
  },
};

export const schema: PageSchemaBlock[] = [
  { key: 'hero', label: 'Hero', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'perks', label: 'Perks & Benefits', fields: ['eyebrow', 'heading', 'description'], itemFields: [['title', 'Title'], ['desc', 'Description']], itemLabel: 'Perk' },
  { key: 'openingsHeader', label: 'Open Roles (section header)', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'hiringProcess', label: 'Hiring Process', fields: ['eyebrow', 'heading', 'description'], itemFields: [['num', 'Number'], ['title', 'Title'], ['desc', 'Description']], itemLabel: 'Step' },
  { key: 'lifeAtLimra', label: 'Life At Limra', fields: ['eyebrow', 'heading', 'description'], itemFields: [['text', 'Checklist item']], itemLabel: 'Highlight' },
  { key: 'diversity', label: 'Diversity Statement', fields: ['heading', 'description'] },
  { key: 'faq', label: 'FAQ', fields: ['eyebrow', 'heading', 'description'], itemFields: [['q', 'Question'], ['a', 'Answer']], itemLabel: 'FAQ' },
  { key: 'resumeCallout', label: 'Resume Callout', fields: ['eyebrow', 'heading', 'description'] },
];
