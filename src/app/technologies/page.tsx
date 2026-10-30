'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Database, 
  Smartphone, 
  ShoppingBag, 
  TrendingUp, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  ChevronDown,
  Layers
} from 'lucide-react';
import TechStackTicker from '@/components/TechStackTicker';
import TechStackEcosystem from '@/components/TechStackEcosystem';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ContactCta from '@/components/ContactCta';

export default function TechnologiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const techGroups = [
    {
      icon: Code2,
      title: 'Web Development & Backend Frameworks',
      subtitle: 'Next.js, React, PHP, Laravel & Node.js',
      desc: 'Whether you require bleeding-edge serverless React rendering or battle-tested PHP & Laravel enterprise applications, our engineers write clean, modular code.',
      items: [
        { name: 'Next.js & React 19', role: 'Serverless SSR, SSG & Sub-Second Web Apps' },
        { name: 'PHP & Laravel', role: 'Enterprise MVC Portals, REST APIs & Custom CMS' },
        { name: 'TypeScript & Node.js', role: 'Type-Safe Full-Stack Microservices & Real-Time Workers' },
        { name: 'Tailwind CSS & HTML5', role: 'Zero-Bloat Responsive Design & Core Web Vitals 100' },
      ]
    },
    {
      icon: ShoppingBag,
      title: 'CMS & E-Commerce Platforms',
      subtitle: 'WordPress, Shopify, WooCommerce & Magento',
      desc: 'Scalable content management and high-converting e-commerce storefronts engineered for fast checkout, easy inventory management, and organic SEO.',
      items: [
        { name: 'WordPress & Custom Themes', role: 'Lightweight, SEO-Ready Corporate & Editorial Portals' },
        { name: 'Shopify & Shopify Plus', role: 'D2C Storefronts, Custom Liquid & Headless Commerce' },
        { name: 'WooCommerce', role: 'Flexible WordPress E-Commerce with Indian Payment Gateways' },
        { name: 'Magento (Adobe Commerce)', role: 'Multi-Vendor, B2B & Large-Catalog Enterprise Stores' },
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development Stack',
      subtitle: 'Android, iOS, Flutter & React Native',
      desc: 'Native and cross-platform mobile applications engineered for smooth 60fps performance, offline persistence, and high user retention.',
      items: [
        { name: 'Android (Kotlin / Java)', role: 'Native Google Play Store Applications & SDKs' },
        { name: 'iOS (Swift / SwiftUI)', role: 'Native Apple App Store Apps for iPhone & iPad' },
        { name: 'Flutter (Dart)', role: 'Single-Codebase High-Speed Cross-Platform Apps' },
        { name: 'React Native', role: 'Shared React Architecture for iOS & Android' },
      ]
    },
    {
      icon: Database,
      title: 'Cloud, Databases & DevOps',
      subtitle: 'Supabase, PostgreSQL, MySQL, AWS & Vercel',
      desc: 'Elastic cloud infrastructure and relational databases protected with automated backups, SSL encryption, and row-level security.',
      items: [
        { name: 'Supabase & PostgreSQL', role: 'Realtime Cloud Postgres, Auth & Row-Level Security' },
        { name: 'MySQL & Redis', role: 'High-Throughput Relational Queries & In-Memory Caching' },
        { name: 'AWS & Docker', role: 'Containerized Cloud Compute, S3 Storage & Load Balancing' },
        { name: 'Vercel Edge & Cloudflare', role: 'Global CDN Edge Caching & DDoS Protection' },
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing, SEO & Lead Tech',
      subtitle: 'Google Ads, Meta Ads, GA4, GMB & CRM Sync',
      desc: 'Full-funnel marketing technology stack that tracks every click, keyword rank, phone call, and qualified lead back to revenue.',
      items: [
        { name: 'Google Ads, Search Console & GA4', role: 'PPC Search, PMax, Technical SEO & Conversion Attribution' },
        { name: 'Meta Business Suite & Pixel CAPI', role: 'Server-Side Tracked Facebook & Instagram Lead Funnels' },
        { name: 'Ahrefs, Semrush & Screaming Frog', role: 'Competitor Keyword Gap, Backlink & Technical Audits' },
        { name: 'HubSpot, Zoho & WhatsApp API', role: 'Automated Sales Funnel & Instant Lead Nurture' },
      ]
    },
    {
      icon: Palette,
      title: 'Creative Design, UI/UX & Motion Suite',
      subtitle: 'Figma, Adobe Creative Cloud & After Effects',
      desc: 'Industry-standard design and video production tools for brand identity, UI/UX prototyping, print media, packaging, and motion graphics.',
      items: [
        { name: 'Figma & Adobe XD', role: 'Interactive UI/UX Wireframes, Design Systems & Prototypes' },
        { name: 'Adobe Illustrator & Photoshop', role: 'Logo Identity, Social Media Creatives & Print Design' },
        { name: 'InDesign & 3D Packaging', role: 'Brochures, Catalogs, Dielines & Product Packaging' },
        { name: 'After Effects & Premiere Pro', role: 'Motion Graphics, Explainer Videos & Ad Reels' },
      ]
    },
  ];

  const techFaqs = [
    {
      q: 'How do you decide between Next.js, WordPress, Shopify, or Laravel for a project?',
      a: 'We select the stack based on your business goals: Shopify or WooCommerce/Magento for retail e-commerce; WordPress for editorial-heavy CMS teams; Laravel/PHP or Node.js for custom ERP workflows; and Next.js + Supabase for ultra-fast web apps and maximum SEO performance.'
    },
    {
      q: 'Can you migrate our existing WordPress, PHP, or Magento site without losing SEO rankings?',
      a: 'Yes! We execute strict 301 URL redirect mapping, preserve canonical tags and meta hierarchies, and validate every route in Google Search Console so your organic traffic only moves upward.'
    },
    {
      q: 'Do you build both native and cross-platform Android and iOS apps?',
      a: 'Yes. We develop native Android (Kotlin) and iOS (Swift) apps as well as cross-platform Flutter and React Native apps depending on your budget, timeline, and hardware integration needs.'
    },
    {
      q: 'Who owns the source code, database, and ad accounts?',
      a: 'You retain 100% ownership of all source code repositories, domains, hosting/cloud accounts, Google Analytics, and ad manager accounts.'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Hero Header */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-5 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            TECHNOLOGY STACK &amp; PLATFORMS
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            Modern Web, E-Commerce, Mobile &amp; Marketing Technologies
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            From Next.js, WordPress, Shopify, PHP, Laravel, Magento, and WooCommerce to Android/iOS mobile engineering and full-funnel MarTech — discover the tools powering LIMRA Digitech.
          </p>
        </div>
      </section>

      {/* 2. Live Tech Stack Ticker */}
      <TechStackTicker />

      {/* 3. Interactive Filterable Tech Stack Ecosystem */}
      <TechStackEcosystem />

      {/* 4. Deep-Dive 6 Technology Groups */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
              FULL-SPECTRUM CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
              6 Core Technology Pillars We Deploy
            </h2>
            <p className="text-sm text-slate-600">
              Grouped by discipline for complete clarity across engineering, e-commerce, mobile, design, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-purple-300 transition-all shadow-xs hover:shadow-lg space-y-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
                      <div className="text-xs font-mono font-bold text-purple-700 mt-0.5">{group.subtitle}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {group.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {group.items.map((it, ii) => (
                      <div key={ii} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{it.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">{it.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Platform Selection Matrix (How to Choose) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              ARCHITECTURE GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Right Technology For The Right Business Use-Case
            </h2>
            <p className="text-sm text-slate-600">
              We never force a one-size-fits-all tool. Here is how our architects recommend platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">Next.js + Supabase</span>
              <h3 className="text-base font-bold text-slate-900 pt-1">High-Speed Web Apps &amp; SEO</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Best for brands wanting 0.3s load speeds, custom portals, SaaS apps, and #1 Google Core Web Vitals.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">Shopify / WooCommerce</span>
              <h3 className="text-base font-bold text-slate-900 pt-1">D2C &amp; Retail E-Commerce</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Best for fast-moving consumer catalogs, payment/shipping integrations, and Meta/Google Shopping ads.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200">PHP / Laravel / Magento</span>
              <h3 className="text-base font-bold text-slate-900 pt-1">Custom Enterprise &amp; B2B</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Best for complex business logic, custom ERP/CRM modules, and large multi-vendor e-commerce.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">Flutter / React Native</span>
              <h3 className="text-base font-bold text-slate-900 pt-1">Android &amp; iOS Mobile Apps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Best for launching sleek iOS &amp; Android mobile apps simultaneously with real-time cloud sync.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comparison Matrix */}
      <ComparisonMatrix />

      {/* 7. Performance, Security & Core Web Vitals Standards */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-800 uppercase">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Code Quality &amp; Performance Assurance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Every Technology Stack Optimized For Speed, SEO &amp; Security
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Regardless of whether we build on Next.js, WordPress, Shopify, or Laravel, we enforce image compression, CDN caching, clean semantic HTML, and SSL hardening.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-purple-200 flex-shrink-0"
            >
              <span>Consult Our Tech Architects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Case Studies */}
      <CaseStudies />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Technology FAQs */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              TECH STACK FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About Our Technologies
            </h2>
          </div>

          <div className="space-y-3.5">
            {techFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-purple-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Contact CTA */}
      <ContactCta />

    </div>
  );
}

