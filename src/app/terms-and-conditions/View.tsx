'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Scale,
  ShieldCheck,
  Code2,
  CreditCard,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Gavel
} from 'lucide-react';
import { content as termsContent } from '@/data/pages/terms';
import TechStackTicker from '@/components/TechStackTicker';
import ContactCta from '@/components/ContactCta';
import RichText from '@/components/RichText';

const highlightIcons = [Code2, Scale, ShieldCheck];
const highlightIconColors = ['text-purple-600', 'text-emerald-600', 'text-indigo-600'];
const clauseIcons = [FileText, Code2, CreditCard, Clock, AlertTriangle, Gavel];

export default function TermsAndConditionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pc, setPc] = useState(termsContent);

  React.useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (data?.cms?.pageSections?.terms) {
          setPc(data.cms.pageSections.terms);
        }
      })
      .catch(() => {});
  }, []);

  const highlights = pc.highlights.items || [];
  const clauses = pc.clauses.items || [];
  const termsFaqs = pc.faq.items || [];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">

      {/* 1. Hero Header */}
      <section className="py-16 lg:py-20 bg-white cyber-grid border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            {pc.hero.eyebrow}
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {pc.hero.heading}
          </h1>
          <RichText className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto" html={pc.hero.description} />
        </div>
      </section>

      {/* 2. Ticker */}
      <TechStackTicker />

      {/* 3. Key Highlights Grid */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((h: any, idx: number) => {
            const Icon = highlightIcons[idx % highlightIcons.length];
            return (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
                <Icon className={`w-5 h-5 ${highlightIconColors[idx % highlightIconColors.length]}`} />
                <h2 className="text-sm font-bold text-slate-900">{h.title}</h2>
                <RichText className="text-xs text-slate-600" html={h.desc} />
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Acceptance of Terms & Scope of Services */}
      {clauses[0] && (
        <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <FileText className="w-4 h-4" />
              <span>{clauses[0].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{clauses[0].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={clauses[0].body} />
          </div>
        </section>
      )}

      {/* 5. Intellectual Property & Client Assets */}
      {clauses[1] && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <Code2 className="w-4 h-4" />
              <span>{clauses[1].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{clauses[1].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={clauses[1].body} />
          </div>
        </section>
      )}

      {/* 6. Project Milestones, Billing & Third-Party Costs */}
      {clauses[2] && (
        <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <CreditCard className="w-4 h-4" />
              <span>{clauses[2].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{clauses[2].heading}</h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 bg-white p-6 rounded-2xl border border-slate-200">
              {(clauses[2].bullets || []).map((b: any, i: number) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span><strong>{b.label}</strong> {b.text}</span></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 7. Search Engine & Performance Disclaimers */}
      {clauses[3] && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <Clock className="w-4 h-4" />
              <span>{clauses[3].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{clauses[3].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={clauses[3].body} />
          </div>
        </section>
      )}

      {/* 8. Limitation of Liability & Acceptable Use */}
      {clauses[4] && (
        <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <AlertTriangle className="w-4 h-4" />
              <span>{clauses[4].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{clauses[4].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={clauses[4].body} />
          </div>
        </section>
      )}

      {/* 9. Governing Law & Jurisdiction */}
      {clauses[5] && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-3">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <Gavel className="w-4 h-4" />
              <span>{clauses[5].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{clauses[5].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={clauses[5].body} />
          </div>
        </section>
      )}

      {/* 10. Terms FAQs */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">{pc.faq.heading}</h2>
          <div className="space-y-3">
            {termsFaqs.map((faq: any, idx: number) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-slate-900 text-sm"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-purple-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-2">
                    <RichText as="span" html={faq.a} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Contact Lead Form */}
      <ContactCta />

    </div>
  );
}
