'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Cookie,
  UserCheck,
  Server,
  Mail,
  ChevronDown,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { useSiteInfo } from '@/lib/useSiteInfo';
import { content as privacyContent } from '@/data/pages/privacy';
import TechStackTicker from '@/components/TechStackTicker';
import ContactCta from '@/components/ContactCta';
import RichText from '@/components/RichText';

const summaryIcons = [Lock, ShieldCheck, UserCheck];
const summaryIconColors = ['text-purple-600', 'text-emerald-600', 'text-indigo-600'];
const sectionIcons = [Database, Eye, Cookie, Server, FileText];

export default function PrivacyPolicyPage() {
  const companyInfo = useSiteInfo();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pc, setPc] = useState(privacyContent);

  React.useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (data?.cms?.pageSections?.privacy) {
          setPc(data.cms.pageSections.privacy);
        }
      })
      .catch(() => {});
  }, []);

  const summaryCards = pc.summary.items || [];
  const sections = pc.sections.items || [];
  const policyFaqs = pc.faq.items || [];

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

      {/* 3. Executive Privacy Summary Cards */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {summaryCards.map((card: any, idx: number) => {
            const Icon = summaryIcons[idx % summaryIcons.length];
            return (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
                <Icon className={`w-5 h-5 ${summaryIconColors[idx % summaryIconColors.length]}`} />
                <h2 className="text-sm font-bold text-slate-900">{card.title}</h2>
                <RichText className="text-xs text-slate-600" html={card.desc} />
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Information We Collect */}
      {sections[0] && (
        <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <Database className="w-4 h-4" />
              <span>{sections[0].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{sections[0].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={sections[0].body} />
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 bg-white p-6 rounded-2xl border border-slate-200">
              {(sections[0].bullets || []).map((b: any, i: number) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span><strong>{b.label}</strong> {b.text}</span></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 5. How We Use Your Information */}
      {sections[1] && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <Eye className="w-4 h-4" />
              <span>{sections[1].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{sections[1].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={sections[1].body} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              {(sections[1].cards || []).map((c: any, i: number) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">{c.title}</strong>
                  {c.desc}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Cookies, Analytics & Tracking Technologies */}
      {sections[2] && (
        <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <Cookie className="w-4 h-4" />
              <span>{sections[2].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{sections[2].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={sections[2].body} />
          </div>
        </section>
      )}

      {/* 7. Data Storage, Security & Third-Party Processors */}
      {sections[3] && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <Server className="w-4 h-4" />
              <span>{sections[3].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{sections[3].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={sections[3].body} />
          </div>
        </section>
      )}

      {/* 8. Your Data Rights & Retention Policy */}
      {sections[4] && (
        <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
              <FileText className="w-4 h-4" />
              <span>{sections[4].tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{sections[4].heading}</h2>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={sections[4].body} />
          </div>
        </section>
      )}

      {/* 9. Privacy Officer & Direct Contact Desk */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-purple-700 uppercase">{pc.contact.eyebrow}</div>
              <h3 className="text-lg font-bold text-slate-900">{pc.contact.heading}</h3>
              <p className="text-xs text-slate-600">
                Email <a href={`mailto:${companyInfo.email}`} className="text-purple-700 font-semibold underline">{companyInfo.email}</a> or call <a href={`tel:${companyInfo.phoneClean}`} className="text-purple-700 font-semibold">{companyInfo.phone}</a>.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex-shrink-0"
            >
              <RichText as="span" html={pc.contact.description} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Privacy FAQs */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">{pc.faq.heading}</h2>
          <div className="space-y-3">
            {policyFaqs.map((faq: any, idx: number) => (
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
                    <RichText as="span" html={(faq.a || '').replace('{email}', companyInfo.email)} />
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
