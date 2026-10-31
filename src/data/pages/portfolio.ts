import type { PageContent, PageSchemaBlock } from '@/data/pageContent';

export const content: PageContent = {
  hero: {
    eyebrow: 'VERIFIED PROOF & CASE STUDIES',
    heading: 'Client Case Studies & Revenue Engine',
    description:
      'Real data. Real organic dominance. Real bottom-line growth. Discover how our Next.js and technical SEO architecture turns underperforming domains into market leaders.',
  },
  metrics: {
    items: [
      { value: '500+', label: 'Projects Deployed' },
      { value: '+384%', label: 'Average Organic Traffic Lift' },
      { value: '0.3s', label: 'Average PageSpeed LCP' },
      { value: '4.9/5.0', label: 'Verified Client Rating' },
    ],
  },
  beforeAfter: {
    eyebrow: 'BEFORE & AFTER METRICS',
    heading: 'The Measurable Impact Of A Limra Overhaul',
    description: 'Average performance metrics measured 90 days post-launch across client deployments.',
    items: [
      { metricLabel: 'Load Speed (LCP)', beforeText: 'Before: 4.2s (Slow)', afterText: 'After: 0.28s', captionText: '15x speed increase via serverless edge render.' },
      { metricLabel: 'Google Page #1 Keywords', beforeText: 'Before: 6 Keywords', afterText: 'After: 85+ Top 3', captionText: 'High-intent buyer search clusters mapped.' },
      { metricLabel: 'Qualified Inbound Leads', beforeText: 'Before: 12 / mo', afterText: 'After: 84 / mo', captionText: '7x pipeline value with zero paid ad budget.' },
    ],
  },
  verticals: {
    eyebrow: 'SECTORS & VERTICALS',
    heading: 'Tailored Engineering Across High-Growth Verticals',
    description: 'Deep domain expertise in structuring technical SEO and architectures for specialized industries.',
    items: [
      { title: 'FinTech & Wealth Management', desc: 'Secure compliant architectures, SSL encryption, and high-trust search authority.' },
      { title: 'B2B Enterprise SaaS', desc: 'Interactive ROI tools, documentation hubs, and commercial comparison ranking pages.' },
      { title: 'D2C & Headless Commerce', desc: 'Sub-second product catalog browsing, instant checkout, and rich merchant schema.' },
      { title: 'Healthcare & Biotech', desc: 'Strict E-E-A-T compliant medical content, local clinic geotargeting, and patient portals.' },
      { title: 'Real Estate & Hospitality', desc: 'Interactive property filters, dynamic map APIs, and local 3-pack Google Maps dominance.' },
      { title: 'Industrial & B2B Logistics', desc: 'Request-for-Quote (RFQ) engine funnels, technical spec sheets, and nationwide SEO.' },
    ],
  },
  banner: {
    eyebrow: 'GUARANTEED RESULTS',
    heading: 'Want Results Like These For Your Brand?',
    description:
      'We provide a comprehensive, complimentary technical audit of your domain before you commit to any engagement.',
  },
  faq: {
    eyebrow: 'COMMON INQUIRIES',
    heading: 'Frequently Asked Questions About Our Case Studies',
    description: 'Understanding how we partner, measure, and scale our clients.',
    items: [
      { q: 'Can we speak directly with your past clients as references?', a: 'Yes. Upon request during our technical consultation, we can connect you with client stakeholders across enterprise B2B, FinTech, and D2C who have scaled with Limra.' },
      { q: 'How do you measure and report organic search performance?', a: 'We set up real-time Google Looker Studio & GA4 dashboards integrated with Google Search Console. You see daily keyword rankings, organic impressions, and exact lead attribution.' },
      { q: 'Do you offer non-disclosure agreements (NDAs) before auditing our platform?', a: 'Yes. We sign mutual NDAs prior to accessing code repositories, analytics properties, or commercial roadmaps.' },
      { q: 'How long does it take to see tangible organic traffic and revenue gains?', a: 'Core Web Vitals and crawlability fixes reflect within 10 to 21 days. High-intent keyword escalation typically delivers compounding revenue gains between Month 2 and Month 4.' },
    ],
  },
};

export const schema: PageSchemaBlock[] = [
  { key: 'hero', label: 'Hero', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'metrics', label: 'Portfolio Metrics', fields: [], itemFields: [['value', 'Value'], ['label', 'Label']], itemLabel: 'Metric' },
  { key: 'beforeAfter', label: 'Before vs After', fields: ['eyebrow', 'heading', 'description'], itemFields: [['metricLabel', 'Metric label'], ['beforeText', 'Before text'], ['afterText', 'After text'], ['captionText', 'Caption']], itemLabel: 'Comparison' },
  { key: 'verticals', label: 'Industry Verticals', fields: ['eyebrow', 'heading', 'description'], itemFields: [['title', 'Title'], ['desc', 'Description']], itemLabel: 'Vertical' },
  { key: 'banner', label: 'Results Banner', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'faq', label: 'FAQ', fields: ['eyebrow', 'heading', 'description'], itemFields: [['q', 'Question'], ['a', 'Answer']], itemLabel: 'FAQ' },
];
