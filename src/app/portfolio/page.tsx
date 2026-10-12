'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  BarChart3, 
  Award,
  Globe,
  Database
} from 'lucide-react';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';

export default function PortfolioPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const portfolioFaqs = [
    {
      q: 'Can we speak directly with your past clients as references?',
      a: 'Yes. Upon request during our technical consultation, we can connect you with client stakeholders across enterprise B2B, FinTech, and D2C who have scaled with Limra.'
    },
    {
      q: 'How do you measure and report organic search performance?',
      a: 'We set up real-time Google Looker Studio & GA4 dashboards integrated with Google Search Console. You see daily keyword rankings, organic impressions, and exact lead attribution.'
    },
    {
      q: 'Do you offer non-disclosure agreements (NDAs) before auditing our platform?',
      a: 'Yes. We sign mutual NDAs prior to accessing code repositories, analytics properties, or commercial roadmaps.'
    },
    {
      q: 'How long does it take to see tangible organic traffic and revenue gains?',
      a: 'Core Web Vitals and crawlability fixes reflect within 10 to 21 days. High-intent keyword escalation typically delivers compounding revenue gains between Month 2 and Month 4.'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            VERIFIED PROOF &amp; CASE STUDIES
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            Client Case Studies &amp; Revenue Engine
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            Real data. Real organic dominance. Real bottom-line growth. Discover how our Next.js and technical SEO architecture turns underperforming domains into market leaders.
          </p>
        </div>
      </section>

      {/* 2. Live Tech Ticker */}
      <TechStackTicker />

      {/* 3. Cumulative Portfolio Metrics */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-purple-700 font-mono">500+</div>
              <div className="text-xs text-slate-500 font-semibold uppercase mt-1">Projects Deployed</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">+384%</div>
              <div className="text-xs text-slate-500 font-semibold uppercase mt-1">Average Organic Traffic Lift</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-indigo-700 font-mono">0.3s</div>
              <div className="text-xs text-slate-500 font-semibold uppercase mt-1">Average PageSpeed LCP</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-amber-600 font-mono">4.9/5.0</div>
              <div className="text-xs text-slate-500 font-semibold uppercase mt-1">Verified Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Case Studies Showcase Cards */}
      <CaseStudies />

      {/* 5. Before vs After Architecture Teardown */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              BEFORE &amp; AFTER METRICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The Measurable Impact Of A Limra Overhaul
            </h2>
            <p className="text-sm text-slate-600">
              Average performance metrics measured 90 days post-launch across client deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase">Load Speed (LCP)</div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-rose-600 font-mono font-bold">Before: 4.2s (Slow)</span>
                <span className="text-emerald-600 font-mono font-bold">After: 0.28s</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[94%]" />
              </div>
              <p className="text-[11px] text-slate-500">15x speed increase via serverless edge render.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase">Google Page #1 Keywords</div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-rose-600 font-mono font-bold">Before: 6 Keywords</span>
                <span className="text-purple-700 font-mono font-bold">After: 85+ Top 3</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full w-[88%]" />
              </div>
              <p className="text-[11px] text-slate-500">High-intent buyer search clusters mapped.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase">Qualified Inbound Leads</div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-rose-600 font-mono font-bold">Before: 12 / mo</span>
                <span className="text-indigo-700 font-mono font-bold">After: 84 / mo</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[92%]" />
              </div>
              <p className="text-[11px] text-slate-500">7x pipeline value with zero paid ad budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industry Domains We Excel In */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              SECTORS &amp; VERTICALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Tailored Engineering Across High-Growth Verticals
            </h2>
            <p className="text-sm text-slate-600">
              Deep domain expertise in structuring technical SEO and architectures for specialized industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'FinTech & Wealth Management', desc: 'Secure compliant architectures, SSL encryption, and high-trust search authority.' },
              { title: 'B2B Enterprise SaaS', desc: 'Interactive ROI tools, documentation hubs, and commercial comparison ranking pages.' },
              { title: 'D2C & Headless Commerce', desc: 'Sub-second product catalog browsing, instant checkout, and rich merchant schema.' },
              { title: 'Healthcare & Biotech', desc: 'Strict E-E-A-T compliant medical content, local clinic geotargeting, and patient portals.' },
              { title: 'Real Estate & Hospitality', desc: 'Interactive property filters, dynamic map APIs, and local 3-pack Google Maps dominance.' },
              { title: 'Industrial & B2B Logistics', desc: 'Request-for-Quote (RFQ) engine funnels, technical spec sheets, and nationwide SEO.' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-purple-300 transition-all space-y-2">
                <h3 className="text-base font-bold text-slate-900">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Code Quality Guarantee Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-purple-50 border border-purple-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                GUARANTEED RESULTS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Want Results Like These For Your Brand?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide a comprehensive, complimentary technical audit of your domain before you commit to any engagement.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-purple-200 flex-shrink-0"
            >
              <span>Claim Free Domain Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. FAQs */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              COMMON INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About Our Case Studies
            </h2>
            <p className="text-sm text-slate-600">
              Understanding how we partner, measure, and scale our clients.
            </p>
          </div>

          <div className="space-y-3.5">
            {portfolioFaqs.map((faq, index) => (
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact Consultation Lead Form */}
      <ContactCta />

    </div>
  );
}
