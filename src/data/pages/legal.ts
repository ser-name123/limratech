import type { PageContent, PageSchema } from '@/data/pageContent';

/**
 * Standard legal pages. Each renders via the shared <LegalPageView> component,
 * reads its content from pageSections[slug] (DB-backed, admin-editable), and has
 * a server wrapper exporting generateMetadata. To add another legal page: add an
 * entry here, create src/app/<slug>/page.tsx (server wrapper), add a registry SEO
 * entry + a footer link — all in defaultCmsConfig.ts.
 */

export interface LegalPageMeta {
  slug: string;
  label: string; // admin + footer label
  seoTitle: string;
  seoDescription: string;
}

function legal(
  heroHeading: string,
  heroSub: string,
  sections: { heading: string; body: string }[]
): PageContent {
  return {
    hero: { eyebrow: 'LEGAL & COMPLIANCE', heading: heroHeading, description: heroSub },
    sections: { items: sections },
    contact: {
      heading: 'Questions About This Policy?',
      description: 'Reach our compliance desk any time and we will respond within 2 business days.',
    },
  };
}

export const LEGAL_PAGES: LegalPageMeta[] = [
  {
    slug: 'cookie-policy',
    label: 'Cookie Policy',
    seoTitle: 'Cookie Policy',
    seoDescription: 'How LIMRA Digitech uses cookies and similar technologies, and how you can control them.',
  },
  {
    slug: 'refund-policy',
    label: 'Refund & Cancellation Policy',
    seoTitle: 'Refund & Cancellation Policy',
    seoDescription: 'Our policy on project cancellations, milestone payments, and refund eligibility for LIMRA Digitech services.',
  },
  {
    slug: 'disclaimer',
    label: 'Disclaimer',
    seoTitle: 'Disclaimer',
    seoDescription: 'Important disclaimers regarding the information, results, and third-party platforms referenced on limradigitech.com.',
  },
  {
    slug: 'acceptable-use-policy',
    label: 'Acceptable Use Policy',
    seoTitle: 'Acceptable Use Policy',
    seoDescription: 'The rules governing acceptable use of LIMRA Digitech websites, services, and deliverables.',
  },
];

export const legalContent: Record<string, PageContent> = {
  'cookie-policy': legal(
    'Cookie Policy',
    'Last Updated: October 2026 • Applies to all visitors of limradigitech.com',
    [
      { heading: '1. What Are Cookies?', body: 'Cookies are small text files stored on your device when you visit a website. They help the site function correctly, remember your preferences, and understand how visitors interact with our content.' },
      { heading: '2. How We Use Cookies', body: 'We use strictly necessary cookies for core site functionality, analytics cookies (Google Analytics 4) to understand traffic, and marketing cookies to measure the performance of our Google and Meta advertising campaigns.' },
      { heading: '3. Types of Cookies We Set', body: 'Essential cookies (always on), performance/analytics cookies, and advertising/retargeting cookies. Third parties such as Google and Meta may also set cookies when their scripts are loaded.' },
      { heading: '4. Managing Your Preferences', body: 'You can accept or decline non-essential cookies via your browser settings at any time. Blocking some cookies may affect how the website functions.' },
      { heading: '5. Updates to This Policy', body: 'We may update this Cookie Policy periodically. Material changes will be reflected by the "Last Updated" date above.' },
    ]
  ),
  'refund-policy': legal(
    'Refund & Cancellation Policy',
    'Last Updated: October 2026 • Governs all LIMRA Digitech service engagements',
    [
      { heading: '1. Project Deposits', body: 'Most engagements begin with an advance deposit to reserve engineering capacity. This deposit is non-refundable once discovery and architecture work has commenced, as resources are allocated to your project.' },
      { heading: '2. Milestone Payments', body: 'Fixed-scope projects are billed in milestones. Each completed and approved milestone is non-refundable. Payments for milestones not yet started may be eligible for a refund on cancellation.' },
      { heading: '3. Retainers & Subscriptions', body: 'Monthly SEO, marketing, and maintenance retainers can be cancelled with 15 days written notice before the next billing cycle. The current cycle is not refunded as work is performed throughout the period.' },
      { heading: '4. Third-Party & Ad Spend', body: 'Amounts paid directly to third parties (ad networks, hosting, licenses, domains) are governed by those providers and are non-refundable through us.' },
      { heading: '5. How to Request a Cancellation', body: 'Email our team with your project reference. We will confirm the cancellation, outstanding deliverables, and any eligible refund in writing within 5 business days.' },
    ]
  ),
  disclaimer: legal(
    'Disclaimer',
    'Last Updated: October 2026 • Please read carefully',
    [
      { heading: '1. Informational Purpose', body: 'All content on limradigitech.com is provided for general informational purposes only and does not constitute professional, legal, or financial advice.' },
      { heading: '2. No Guaranteed Results', body: 'Search rankings, traffic, and conversions depend on factors outside our control, including third-party algorithms and market conditions. Past performance and case studies do not guarantee future results.' },
      { heading: '3. Third-Party Platforms', body: 'We reference and integrate with third-party platforms (Google, Meta, Supabase, Vercel, Shopify, etc.). We are not responsible for changes to their terms, pricing, or availability.' },
      { heading: '4. External Links', body: 'Our website may contain links to external sites. We do not endorse and are not responsible for the content or practices of those websites.' },
      { heading: '5. Limitation of Liability', body: 'To the maximum extent permitted by law, LIMRA Digitech is not liable for any indirect or consequential loss arising from the use of this website or reliance on its content.' },
    ]
  ),
  'acceptable-use-policy': legal(
    'Acceptable Use Policy',
    'Last Updated: October 2026 • Applies to all users and clients',
    [
      { heading: '1. Permitted Use', body: 'You may use our website and services for lawful business purposes only, in accordance with these terms and all applicable laws.' },
      { heading: '2. Prohibited Activities', body: 'You must not attempt to breach security, scrape data at scale, distribute malware, reverse-engineer deliverables outside your license, or use our services to send spam or unlawful content.' },
      { heading: '3. Client Content Responsibilities', body: 'Clients are responsible for ensuring that content and assets they provide do not infringe third-party rights and comply with advertising and data-protection regulations.' },
      { heading: '4. Suspension', body: 'We reserve the right to suspend access or engagements that violate this policy, compromise security, or disrupt our infrastructure or other clients.' },
      { heading: '5. Reporting Abuse', body: 'If you become aware of any misuse of our services or websites, please report it to our compliance desk immediately.' },
    ]
  ),
};

export const legalSchemas: PageSchema[] = LEGAL_PAGES.map((p) => ({
  page: p.slug,
  label: p.label,
  blocks: [
    { key: 'hero', label: 'Hero', fields: ['eyebrow', 'heading', 'description'] },
    { key: 'sections', label: 'Policy Sections', fields: [], itemFields: [['heading', 'Section Heading'], ['body', 'Section Body']], itemLabel: 'Section' },
    { key: 'contact', label: 'Questions Block', fields: ['heading', 'description'] },
  ],
}));
