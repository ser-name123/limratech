'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Code2,
  ShoppingBag,
  Store,
  Server,
  Smartphone,
  Database,
  TrendingUp,
  Palette,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Cpu,
} from 'lucide-react';
import { TechnologyPageData, technologiesPagesData } from '@/data/megaMenuData';
import TechStackTicker from '@/components/TechStackTicker';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ContactCta from '@/components/ContactCta';
import SeoAuthoritySection from '@/components/SeoAuthoritySection';

const iconMap = {
  Code2,
  ShoppingBag,
  Store,
  Server,
  Smartphone,
  Database,
  TrendingUp,
  Palette,
};

export default function TechnologyDetailView({ technology }: { technology: TechnologyPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const Icon = iconMap[technology.iconName] || Cpu;
  const otherTechnologies = technologiesPagesData.filter((item) => item.slug !== technology.slug);

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      {/* 1. Hero Section */}
      <section className="py-18 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-700 hover:text-purple-900 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Technologies Directory</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full">
                {technology.tag}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                {technology.metricBadge}
              </span>
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2.5 text-purple-700 font-mono text-xs font-bold uppercase tracking-wider">
              <div className="p-2 rounded-xl bg-purple-100 border border-purple-200 text-purple-700">
                <Icon className="w-5 h-5" />
              </div>
              <span>Technology Stack Architecture // LIMRA Digitech</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
              {technology.title}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-purple-700">
              {technology.subtitle}
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              {technology.description}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact-us"
              className="btn-shimmer bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-purple-200 flex items-center gap-2"
            >
              <span>Consult {technology.shortTitle} Architects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="bg-white border border-slate-200 hover:border-purple-300 text-slate-800 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-xs"
            >
              <span>View Built Projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Live Tech Stack Ticker */}
      <TechStackTicker />

      {/* 3. Verified Technology Performance Metrics */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {technology.stats.map((st, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:border-purple-300 rounded-2xl p-6 text-center transition-all shadow-xs"
              >
                <div className="text-2xl sm:text-4xl font-black text-purple-700 font-mono">{st.value}</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1.5">{st.label}</div>
                <p className="text-[11px] text-slate-500 mt-1">{st.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 6 Core Capabilities & Engineering Modules */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
              ENGINEERING CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
              What We Build With {technology.shortTitle}
            </h2>
            <p className="text-sm text-slate-600">
              Production-ready implementation engineered for speed, scalability, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technology.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-purple-300 transition-all shadow-xs hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                      Capability 0{idx + 1}
                    </span>
                    <Sparkles className="w-4 h-4 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900"
                  >
                    <span>Discuss Implementation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Ideal Business Use-Cases */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
              STRATEGIC FIT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              When To Choose {technology.shortTitle}
            </h2>
            <p className="text-sm text-slate-600">
              Here are the primary business scenarios where this technology stack delivers maximum ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technology.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200 hover:border-purple-300 transition-all space-y-3"
              >
                <span className="inline-block text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  {uc.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{uc.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Tools, SDKs & Quality Standards */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-700 uppercase">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  <span>Ecosystem Libraries, Frameworks &amp; Tools</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Complete {technology.shortTitle} Toolchain
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Every project includes clean Git version control, responsive QA, and Core Web Vitals optimization.
                </p>
              </div>
              <Link
                href="/services"
                className="bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 px-5 py-3 rounded-xl font-bold text-xs inline-flex items-center gap-2 self-start"
              >
                <span>Explore Related Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6">
              {technology.stackTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Comparison Matrix */}
      <ComparisonMatrix />

      {/* 8. Case Studies */}
      <CaseStudies />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Technology FAQs & Cross-Navigation */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-20">
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                TECHNOLOGY FAQS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions — {technology.shortTitle}
              </h2>
            </div>

            <div className="space-y-3.5">
              {technology.faqs.map((faq, index) => (
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
                      className={`w-4 h-4 text-purple-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
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

          {/* Other Technologies Cross-Navigation */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-purple-700">Explore More Platforms</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Other Technologies In Our Stack
                </h3>
              </div>
              <Link
                href="/technologies"
                className="text-xs font-bold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1.5"
              >
                <span>View All 8 Technology Pillars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherTechnologies.slice(0, 4).map((other) => (
                <Link
                  key={other.slug}
                  href={`/technologies/${other.slug}`}
                  className="bg-slate-50 hover:bg-purple-50/60 border border-slate-200 hover:border-purple-300 rounded-2xl p-5 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {other.metricBadge}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700 mt-3">
                      {other.shortTitle}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">{other.subtitle}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-purple-700">
                    <span>Explore Stack</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Advanced On-Page SEO, JSON-LD Schema.org, Keyword Clusters & Geo-Targeting */}
      <SeoAuthoritySection
        pageTitle={technology.shortTitle || technology.title}
        pageSlug={`/technologies/${technology.slug}`}
        pageType="Technology"
        parentLabel="Technologies & Stack"
        parentHref="/technologies"
        description={technology.description}
        focusKeyword={(technology as any).focus_keyword || `${technology.shortTitle} Development Company in India`}
        keywords={(technology as any).secondary_keywords || []}
        subOfferings={(technology.capabilities || []).map((c) => c.title)}
        faqs={technology.faqs || []}
      />

      {/* 12. Contact Lead Form CTA */}
      <ContactCta />
    </div>
  );
}

