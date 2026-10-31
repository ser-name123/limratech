'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  Award, 
  Star,
  Users,
  Zap,
  Globe
} from 'lucide-react';
import Testimonials from '@/components/Testimonials';
import TechStackTicker from '@/components/TechStackTicker';
import ContactCta from '@/components/ContactCta';
import CaseStudies from '@/components/CaseStudies';
import RichText from '@/components/RichText';
import { content as clientsContent } from '@/data/pages/clients';

const verticalIcons = [Building2, Zap, Globe, ShieldCheck, TrendingUp, Award];

export default function ClientsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pc, setPc] = useState(clientsContent);

  React.useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (data?.cms?.pageSections?.clients) {
          setPc(data.cms.pageSections.clients);
        }
      })
      .catch(() => {});
  }, []);

  const clientMetrics = pc.clientMetrics.items || [];
  const clientFaqs = pc.faq.items || [];

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

      {/* 3. Cumulative Client Metrics */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientMetrics.map((m: any, idx: number) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
                <div className="text-3xl sm:text-4xl font-black text-purple-700 font-mono">{m.value}</div>
                <div className="text-xs font-bold text-slate-900 mt-2">{m.label}</div>
                <p className="text-[11px] text-slate-500 mt-1 font-mono">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Industry Verticals */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              {pc.verticals.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.verticals.heading}
            </h2>
            <RichText className="text-sm text-slate-600" html={pc.verticals.description} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(pc.verticals.items || []).map((sec: any, idx: number) => {
              const Icon = verticalIcons[idx % verticalIcons.length];
              return (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-purple-300 transition-all space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{sec.title}</h3>
                  <RichText className="text-xs text-slate-600 leading-relaxed font-normal" html={sec.desc} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Client Case Studies */}
      <CaseStudies />

      {/* 6. Why Enterprise Partners Choose Limra */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              {pc.advantage.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.advantage.heading}
            </h2>
            <RichText className="text-sm text-slate-600" html={pc.advantage.description} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(pc.advantage.items || []).map((adv: any, idx: number) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-2" />
                <h3 className="text-base font-bold text-slate-900">{adv.title}</h3>
                <RichText className="text-xs text-slate-600 leading-relaxed font-normal" html={adv.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Engagement Models */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              {pc.models.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {pc.models.heading}
            </h2>
            <RichText className="text-sm text-slate-600" html={pc.models.description} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(pc.models.items || []).map((model: any, idx: number) => {
              const featured = idx === 1;
              const modelLabel = `MODEL ${String.fromCharCode(65 + idx)}`;
              return (
                <div
                  key={idx}
                  className={
                    featured
                      ? 'bg-white p-7 rounded-2xl border-2 border-purple-400 shadow-md shadow-purple-100 space-y-3 relative'
                      : 'bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3'
                  }
                >
                  {featured && (
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">MOST POPULAR</span>
                  )}
                  <span className="text-xs font-mono font-bold text-purple-700 uppercase">{modelLabel}</span>
                  <h3 className="text-lg font-bold text-slate-900">{model.title}</h3>
                  <RichText className="text-xs text-slate-600 leading-relaxed font-normal" html={model.desc} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Client FAQs */}
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
            {clientFaqs.map((faq: any, index: number) => (
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
