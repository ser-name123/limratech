import type { PageContent, PageSchemaBlock } from '@/data/pageContent';

/* ------------------------------------------------------------------ *
 * Editable text content for the Privacy Policy page.
 * Read live from `cms.pageSections.privacy` (via /api/admin); this
 * object is the committed fallback. Icons, colours and layout stay in
 * the page component — only text is edited here.
 * ------------------------------------------------------------------ */

export const content: PageContent = {
  hero: {
    eyebrow: 'DATA PRIVACY & COMPLIANCE',
    heading: 'Privacy Policy',
    description:
      'Last Updated: October 2026 • Effective for all visitors, leads, and clients of LIMRA Digitech (limradigitech.com).',
  },
  summary: {
    items: [
      {
        title: '256-Bit SSL Encryption',
        desc: 'All form submissions and client communications are encrypted in transit and at rest.',
      },
      {
        title: 'Zero Data Selling',
        desc: 'Your email, phone number, and domain analytics are strictly confidential.',
      },
      {
        title: 'Full User Control',
        desc: 'Opt out of newsletters or request permanent record deletion at any time.',
      },
    ],
  },
  sections: {
    items: [
      {
        tag: 'Section 01',
        heading: 'Information We Collect',
        body: 'When you visit limradigitech.com, request a quote, run a website audit, or subscribe to our newsletter, we collect only the information required to deliver our services:',
        bullets: [
          {
            label: 'Contact & Lead Data:',
            text: 'Full name, work email address, phone/WhatsApp number, company name, website URL, and project requirements submitted via our forms.',
          },
          {
            label: 'Technical & Usage Telemetry:',
            text: 'Anonymized browser type, device category, referring pages, and Core Web Vitals performance metrics via Google Analytics 4 (GA4).',
          },
          {
            label: 'Client Project Assets:',
            text: 'Approved brand logos, content, and credentials shared under mutual Non-Disclosure Agreements (NDAs).',
          },
        ],
      },
      {
        tag: 'Section 02',
        heading: 'How We Use Your Information',
        body: 'LIMRA Digitech uses collected data strictly for legitimate business and service delivery purposes:',
        cards: [
          {
            title: '1. Consultation & Proposals',
            desc: 'Responding to your enquiries, preparing technical SEO audits, and sharing custom project quotes.',
          },
          {
            title: '2. Project Execution & Support',
            desc: 'Communicating sprint milestones, deploying web/mobile applications, and providing SLA support.',
          },
          {
            title: '3. Performance Optimization',
            desc: 'Analyzing aggregate traffic trends to improve page speed, accessibility, and user experience.',
          },
          {
            title: '4. Technical Dispatch (Opt-In)',
            desc: 'Sending occasional SEO and engineering insights only if you explicitly subscribe.',
          },
        ],
      },
      {
        tag: 'Section 03',
        heading: 'Cookies, Google Analytics & Search Console',
        body: 'We use essential first-party cookies and industry-standard analytics tools (Google Analytics 4, Google Search Console, and optional campaign conversion pixels) to measure website performance and lead form conversions. You may disable cookies at any time through your browser settings without losing access to our website content.',
      },
      {
        tag: 'Section 04',
        heading: 'Data Security & Cloud Infrastructure',
        body: 'Inquiry and subscriber records are stored securely on enterprise cloud infrastructure (Supabase PostgreSQL with Row-Level Security) and protected via HTTPS/TLS 1.3 encryption, spam filtering, and strict role-based access controls.',
      },
      {
        tag: 'Section 05',
        heading: 'Your Rights (Access, Correction & Deletion)',
        body: 'In accordance with applicable Indian Information Technology & Digital Personal Data Protection (DPDP) standards and global privacy norms, you have the right to request a copy of the personal data we hold about you, request corrections, withdraw marketing consent, or ask for permanent erasure of your records.',
      },
    ],
  },
  contact: {
    eyebrow: 'Privacy & Compliance Desk',
    heading: 'Questions About Data Protection?',
    description: 'Contact Compliance Desk',
  },
  faq: {
    heading: 'Privacy Frequently Asked Questions',
    items: [
      {
        q: 'Does LIMRA Digitech ever sell or rent client contact information?',
        a: 'No. We never sell, rent, or trade your personal or corporate contact details, analytics data, or project specifications with third-party data brokers.',
      },
      {
        q: 'How can I request deletion of my inquiry data?',
        a: 'You can email our privacy desk at {email} at any time to request access, correction, or permanent deletion of your stored inquiry records.',
      },
      {
        q: 'Are form submissions encrypted?',
        a: 'Yes. All forms on limradigitech.com transmit data over 256-bit TLS/HTTPS encryption and store records in access-controlled PostgreSQL databases.',
      },
    ],
  },
};

export const schema: PageSchemaBlock[] = [
  { key: 'hero', label: 'Hero', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'summary', label: 'Privacy Summary Cards', fields: [], itemFields: [['title', 'Title'], ['desc', 'Description']], itemLabel: 'Card' },
  { key: 'sections', label: 'Policy Sections', fields: [], itemFields: [['tag', 'Section tag'], ['heading', 'Heading'], ['body', 'Body']], itemLabel: 'Section' },
  { key: 'contact', label: 'Compliance Contact Desk', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'faq', label: 'FAQ', fields: ['heading'], itemFields: [['q', 'Question'], ['a', 'Answer']], itemLabel: 'FAQ' },
];
