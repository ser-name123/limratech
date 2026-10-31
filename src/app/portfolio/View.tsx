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
import RichText from '@/components/RichText';
import { content as portfolioContent } from '@/data/pages/portfolio';

const metricColors = [
  'text-purple-700',
  'text-emerald-600',
  'text-indigo-700',
  'text-amber-600',
];

const beforeAfterStyles = [
  { after: 'text-emerald-600', bar: 'bg-emerald-500', width: '94%' },
  { after: 'text-purple-700', bar: 'bg-purple-600', width: '88%' },
  { after: 'text-indigo-700', bar: 'bg-indigo-600', width: '92%' },
];

export default function PortfolioPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pc, setPc] = useState(portfolioContent);

  React.useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (data?.cms?.pageSections?.portfolio) {
          setPc(data.cms.pageSections.portfolio);
        }
      })
      .catch(() => {});
  }, []);

  const portfolioFaqs = pc.faq.items || [];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            {pc.hero.eyebrow}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            {pc.hero.heading}
          </h1>
          <RichText className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal" html={pc.hero.description} />
        </div>
      </section>

      {/* 2. Live Tech Ticker */}
      <TechStackTicker />

      {/* 3. Cumulative Portfolio Metrics */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {(pc.metrics.items || []).map((m: any, idx: number) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs">
                <div className={`text-3xl sm:text-4xl font-black font-mono ${metricColors[idx % metricColors.length]}`}>{m.value}</div>
                <div className="text-xs text-slate-500 font-semibold uppercase mt-1">{m.label}</div>
              </div>
            ))}
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
              {pc.beforeAfter.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.beforeAfter.heading}
            </h2>
            <RichText className="text-sm text-slate-600" html={pc.beforeAfter.description} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(pc.beforeAfter.items || []).map((ba: any, idx: number) => {
              const style = beforeAfterStyles[idx % beforeAfterStyles.length];
              return (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase">{ba.metricLabel}</div>
                  <div className="flex items-center justify-between text-sm">
                    <RichText as="span" className="text-rose-600 font-mono font-bold" html={ba.beforeText} />
                    <RichText as="span" className={`${style.after} font-mono font-bold`} html={ba.afterText} />
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className={`${style.bar} h-full`} style={{ width: style.width }} />
                  </div>
                  <RichText className="text-[11px] text-slate-500" html={ba.captionText} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Industry Domains We Excel In */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              {pc.verticals.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.verticals.heading}
            </h2>
            <p className="text-sm text-slate-600">
              {pc.verticals.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(pc.verticals.items || []).map((v: any, i: number) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-purple-300 transition-all space-y-2">
                <h3 className="text-base font-bold text-slate-900">{v.title}</h3>
                <RichText className="text-xs text-slate-600 leading-relaxed font-normal" html={v.desc} />
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
                {pc.banner.eyebrow}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {pc.banner.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pc.banner.description}
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
              {pc.faq.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.faq.heading}
            </h2>
            <p className="text-sm text-slate-600">
              {pc.faq.description}
            </p>
          </div>

          <div className="space-y-3.5">
            {portfolioFaqs.map((faq: any, index: number) => (
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
                    <RichText as="span" html={faq.a} />
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
