import type { PageContent, PageSchemaBlock } from '@/data/pageContent';

/* ------------------------------------------------------------------ *
 * Editable text content for the Terms & Conditions page.
 * Read live from `cms.pageSections.terms` (via /api/admin); this
 * object is the committed fallback. Icons, colours and layout stay in
 * the page component — only text is edited here.
 * ------------------------------------------------------------------ */

export const content: PageContent = {
  hero: {
    eyebrow: 'LEGAL & SERVICE GOVERNANCE',
    heading: 'Terms of Use & Service Conditions',
    description:
      'Last Updated: October 2026 • Governing the use of limradigitech.com and professional services provided by LIMRA Digitech.',
  },
  highlights: {
    items: [
      {
        title: '100% IP Ownership',
        desc: 'Clients retain full ownership of custom code, designs, and domains upon completion.',
      },
      {
        title: 'Transparent SOWs',
        desc: 'Clear deliverables, sprint timelines, and pricing before any work begins.',
      },
      {
        title: 'White-Hat Compliance',
        desc: 'Ethical SEO and ad practices aligned with Google and Meta policies.',
      },
    ],
  },
  clauses: {
    items: [
      {
        tag: 'Clause 01',
        heading: 'Acceptance of Terms & Scope of Services',
        body: 'By accessing limradigitech.com or engaging LIMRA Digitech for website development, digital marketing, SEO, lead generation, creative design, mobile app development, or software development, you agree to these Terms of Use and any project-specific Statement of Work (SOW) signed between both parties.',
      },
      {
        tag: 'Clause 02',
        heading: 'Intellectual Property & Brand Continuity',
        body: 'All LIMRA Digitech branding, logos, interactive tools, and proprietary website content on limradigitech.com are the intellectual property of LIMRA Digitech. For client engagements, upon full payment of the agreed project fee, custom code, creative assets, and deliverables created specifically for the client are transferred to the client.',
      },
      {
        tag: 'Clause 03',
        heading: 'Commercial Terms, Milestones & Ad Spend',
        body: '',
        bullets: [
          {
            label: 'Development Milestones:',
            text: 'Billed as per the agreed sprint schedule in the proposal.',
          },
          {
            label: 'Direct Media Spend:',
            text: 'For Google Ads, Meta Ads, and paid campaigns, media budgets are paid directly by the client to the respective ad platforms unless otherwise specified.',
          },
          {
            label: 'Third-Party Licenses:',
            text: 'Domain renewals, cloud hosting, paid plugins, or premium fonts are billed transparently at actuals.',
          },
        ],
      },
      {
        tag: 'Clause 04',
        heading: 'SEO, Third-Party Algorithms & Warranties',
        body: "LIMRA Digitech adheres strictly to Google Search Central and Meta Advertising guidelines. While we engineer websites for 100/100 Core Web Vitals and execute proven white-hat SEO and conversion strategies, third-party search engine and social media algorithms change continuously and remain outside any agency's direct control.",
      },
      {
        tag: 'Clause 05',
        heading: 'Acceptable Website Use & Limitation of Liability',
        body: "Users must not attempt unauthorized access, automated scraping, spam form submissions, or denial-of-service attacks against limradigitech.com. In no event shall LIMRA Digitech's aggregate liability exceed the fees paid by the client for the specific service giving rise to the claim during the preceding three (3) months.",
      },
      {
        tag: 'Clause 06',
        heading: 'Governing Law & Dispute Resolution',
        body: 'These Terms of Use are governed by the laws of India. Any disputes arising in connection with this website or our services shall be resolved amicably through mutual consultation, failing which they shall be subject to the exclusive jurisdiction of the courts in India.',
      },
    ],
  },
  faq: {
    heading: 'Terms & Engagement FAQs',
    items: [
      {
        q: 'Who owns the website code and brand designs after project completion?',
        a: 'Upon full settlement of agreed project milestones, the client receives 100% ownership of custom source code, graphics, and domain assets.',
      },
      {
        q: 'How are project milestones and payments structured?',
        a: 'Standard development projects follow a transparent milestone schedule (e.g., Kickoff & Architecture, Staging Preview, and Final Production Launch), while digital marketing and SEO operate on monthly retainers.',
      },
      {
        q: 'Can we terminate a monthly marketing retainer?',
        a: 'Yes. Monthly retainers can be paused or concluded with standard written notice as outlined in your individual Statement of Work (SOW).',
      },
    ],
  },
};

export const schema: PageSchemaBlock[] = [
  { key: 'hero', label: 'Hero', fields: ['eyebrow', 'heading', 'description'] },
  { key: 'highlights', label: 'Key Highlights', fields: [], itemFields: [['title', 'Title'], ['desc', 'Description']], itemLabel: 'Highlight' },
  { key: 'clauses', label: 'Legal Clauses', fields: [], itemFields: [['tag', 'Clause tag'], ['heading', 'Heading'], ['body', 'Body']], itemLabel: 'Clause' },
  { key: 'faq', label: 'FAQ', fields: ['heading'], itemFields: [['q', 'Question'], ['a', 'Answer']], itemLabel: 'FAQ' },
];
