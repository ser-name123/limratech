'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Globe,
  Code2,
  CheckCircle2,
  Sparkles,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  ShieldCheck,
  Activity,
  ChevronRight,
  Layers,
} from 'lucide-react';

export interface SeoAuthorityProps {
  pageTitle: string;
  pageSlug: string;
  pageType?: 'Service' | 'Industry' | 'Technology' | 'Blog' | 'CaseStudy' | 'Hub';
  parentLabel?: string;
  parentHref?: string;
  description: string;
  focusKeyword?: string;
  keywords?: string[];
  subOfferings?: string[];
  faqs?: { q: string; a: string }[];
  locations?: string[];
}

const DEFAULT_PAN_INDIA_CITIES = [
  'New Delhi & NCR',
  'Mumbai & Navi Mumbai',
  'Bengaluru',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Ahmedabad',
  'Jaipur',
  'Kolkata',
  'Gurugram & Noida',
  'Surat & Vadodara',
  'Chandigarh & Mohali',
  'Indore & Bhopal',
  'Lucknow & Kanpur',
  'Kochi & Thiruvananthapuram',
  'USA, UK, UAE & Global',
];

const CORE_SILO_SERVICES = [
  { label: 'Website Development Services', href: '/website-development-services', tag: 'Next.js • WP • Shopify' },
  { label: 'Digital Marketing & SEO Agency', href: '/digital-marketing-agency-india', tag: 'SEO • Google Ads • SMM' },
  { label: 'Lead Generation Company India', href: '/lead-generation-company-india', tag: 'Meta • PPC • Funnels' },
  { label: 'Creative Design & Branding', href: '/creative-design-solutions-india', tag: 'UI/UX • Brand • Video' },
  { label: 'Mobile App Development India', href: '/mobile-app-developer-india', tag: 'Android • iOS • Flutter' },
  { label: 'Custom Software Developers', href: '/software-developers-india', tag: 'ERP • CRM • SaaS • AI' },
];

export default function SeoAuthoritySection({
  pageTitle,
  pageSlug,
  pageType = 'Service',
  parentLabel = 'Services',
  parentHref = '/services',
  description,
  focusKeyword,
  keywords = [],
  subOfferings = [],
  faqs = [],
  locations = DEFAULT_PAN_INDIA_CITIES,
}: SeoAuthorityProps) {
  const [activeTab, setActiveTab] = useState<'keywords' | 'locations' | 'schema'>('keywords');
  const [copiedSchema, setCopiedSchema] = useState(false);

  const cleanPath = pageSlug.startsWith('/') ? pageSlug : `/${pageSlug}`;
  const fullUrl = `https://limradigitech.com${cleanPath === '/' ? '' : cleanPath}`;
  const primaryKw = focusKeyword || `${pageTitle} Company in India`;

  const computedKeywords =
    keywords.length > 0
      ? keywords
      : [
          `Best ${pageTitle} in India`,
          `${pageTitle} Agency New Delhi`,
          `Hire ${pageTitle} Experts India`,
          `Enterprise ${pageTitle} Services`,
          `Affordable ${pageTitle} Packages India`,
          `Top Rated ${pageTitle} Company`,
          ...subOfferings.slice(0, 6).map((s) => `${s} Services India`),
        ];

  const voiceAndAiQueries = [
    `Which is the best company for ${pageTitle} in India with 99+ Core Web Vitals?`,
    `How much does ${pageTitle} cost in India for startups and enterprises?`,
    `Why choose LIMRA Digitech for ${pageTitle} and ROI-driven growth?`,
    `How does ${pageTitle} improve organic Google rankings and lead conversion?`,
  ];

  // Build Rich @graph JSON-LD Schema
  const jsonLdGraph: any[] = [
    {
      '@type': 'BreadcrumbList',
      '@id': `${fullUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://limradigitech.com',
        },
        ...(cleanPath !== '/'
          ? [
              {
                '@type': 'ListItem',
                position: 2,
                name: parentLabel,
                item: `https://limradigitech.com${parentHref}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: pageTitle,
                item: fullUrl,
              },
            ]
          : []),
      ],
    },
    {
      '@type': pageType === 'Blog' ? 'TechArticle' : 'Service',
      '@id': `${fullUrl}#primary-entity`,
      name: `${pageTitle} — LIMRA Digitech`,
      description,
      url: fullUrl,
      provider: {
        '@type': 'Organization',
        name: 'LIMRA Digitech',
        url: 'https://limradigitech.com',
        logo: 'https://limradigitech.com/limra-logo.png',
        telephone: '+91-9571302312',
        email: 'limradigitech@gmail.com',
      },
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Hyderabad' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        ratingCount: '350',
      },
      ...(subOfferings.length > 0
        ? {
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `${pageTitle} Capabilities`,
              itemListElement: subOfferings.slice(0, 10).map((item, idx) => ({
                '@type': 'Offer',
                position: idx + 1,
                itemOffered: {
                  '@type': 'Service',
                  name: item,
                },
              })),
            },
          }
        : {}),
    },
    {
      '@type': 'WebPage',
      '@id': `${fullUrl}#webpage`,
      url: fullUrl,
      name: `${pageTitle} | LIMRA Digitech`,
      description,
      inLanguage: 'en-IN',
      isPartOf: { '@id': 'https://limradigitech.com/#website' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2'],
      },
    },
  ];

  if (faqs.length > 0) {
    jsonLdGraph.push({
      '@type': 'FAQPage',
      '@id': `${fullUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    });
  }

  const schemaPayload = {
    '@context': 'https://schema.org',
    '@graph': jsonLdGraph,
  };

  const schemaString = JSON.stringify(schemaPayload, null, 2);

  return (
    <section className="py-16 lg:py-20 bg-slate-900 text-white border-t border-b border-slate-800 relative overflow-hidden">
      {/* Embedded JSON-LD Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPayload) }}
      />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8 relative z-10">
        {/* Top Semantic Breadcrumb & Technical SEO Verification Strip */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400"
          >
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            {cleanPath !== '/' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <Link href={parentHref} className="hover:text-purple-400 transition-colors">
                  {parentLabel}
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-purple-300 font-bold">{pageTitle}</span>
              </>
            )}
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Schema.org @graph Active</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-purple-500/15 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full">
              <Activity className="w-3.5 h-3.5 text-purple-400" />
              <span>CWV 99/100 • LCP &lt; 0.9s</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-blue-500/15 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>AI Search &amp; SGE Optimized</span>
            </span>
          </div>
        </div>

        {/* Section Header + Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SEARCH ENGINE &amp; AI OVERVIEW AUTHORITY ARCHITECTURE</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Semantic SEO, Topical Keyword Clusters &amp; Pan-India Coverage for {pageTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Engineered with entity-based Schema.org JSON-LD graphs, voice-search speakable selectors, and regional search intent clusters across India &amp; global markets.
            </p>
          </div>

          <div className="inline-flex flex-wrap rounded-2xl bg-slate-800/90 p-1.5 border border-slate-700 self-start">
            <button
              type="button"
              onClick={() => setActiveTab('keywords')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'keywords'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Keyword Clusters</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('locations')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'locations'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Pan-India &amp; Global SEO</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('schema')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'schema'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>JSON-LD Schema &amp; Silos</span>
            </button>
          </div>
        </div>

        {/* TAB 1: KEYWORD CLUSTERS & AI SEARCH INTENT */}
        {activeTab === 'keywords' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-800/60 border border-slate-700/80 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase font-bold text-purple-300">
                  PRIMARY &amp; LSI COMMERCIAL KEYWORD GRAPH
                </span>
                <span className="text-[11px] font-mono text-emerald-400">
                  Focus: {primaryKw}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-purple-600/30 border border-purple-400/50 text-purple-200 text-xs font-bold">
                  ★ {primaryKw}
                </span>
                {computedKeywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 text-xs hover:border-purple-500/50 transition-colors"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {subOfferings.length > 0 && (
                <div className="pt-3 border-t border-slate-700/70 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">
                    Indexed Sub-Service &amp; Deliverable Entities ({subOfferings.length})
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {subOfferings.map((sub, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono bg-slate-900/60 text-purple-300 border border-purple-500/20 px-2.5 py-1 rounded-lg"
                      >
                        ✓ {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-slate-800/60 border border-slate-700/80 rounded-3xl p-6 space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-emerald-300 block">
                AI OVERVIEWS (SGE) &amp; VOICE SEARCH QUERIES
              </span>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {voiceAndAiQueries.map((q, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-2xl bg-slate-900/70 border border-slate-700/70 flex items-start gap-2.5"
                  >
                    <Globe className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: PAN-INDIA & GLOBAL GEO-TARGETING MATRIX */}
        {activeTab === 'locations' && (
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-3xl p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Regional &amp; Local SEO Service Availability for {pageTitle}
                </h3>
                <p className="text-xs text-slate-400">
                  Dedicated engineering pods and regional search optimization across all major Indian business hubs and international timezones.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full self-start">
                geo.region: IN-DL • Pan-India
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {locations.map((city, idx) => (
                <Link
                  key={idx}
                  href="/contact-us"
                  className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-700/80 hover:border-purple-500/60 flex items-center justify-between group transition-all"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{city}</div>
                    <div className="text-[10px] text-purple-300 truncate">{pageTitle}</div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: LIVE JSON-LD SCHEMA & TOPIC CLUSTER INTERNAL LINKS */}
        {activeTab === 'schema' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-300">
                  LIVE EMBEDDED APPLICATION/LD+JSON (@GRAPH)
                </span>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard?.writeText(schemaString);
                    setCopiedSchema(true);
                    setTimeout(() => setCopiedSchema(false), 2000);
                  }}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-purple-600 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  {copiedSchema ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSchema ? 'Copied JSON-LD' : 'Copy Schema'}</span>
                </button>
              </div>
              <pre className="text-[11px] font-mono text-emerald-300/90 overflow-x-auto max-h-60 p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
                {schemaString}
              </pre>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/80 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-purple-300">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>TOPIC CLUSTER &amp; INTERNAL SILO ARCHITECTURE</span>
              </div>
              <p className="text-xs text-slate-400">
                Semantic internal linking across our 6 core service pillars strengthens crawl equity and topical authority:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CORE_SILO_SERVICES.map((svc, idx) => (
                  <Link
                    key={idx}
                    href={svc.href}
                    className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700 hover:border-purple-500/60 flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-purple-300">{svc.label}</div>
                      <div className="text-[10px] font-mono text-slate-400">{svc.tag}</div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
