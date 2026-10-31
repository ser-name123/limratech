'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, FileText } from 'lucide-react';
import { defaultPageSections } from '@/data/pageContent';
import RichText from '@/components/RichText';
import { useSiteInfo } from '@/lib/useSiteInfo';
import TechStackTicker from '@/components/TechStackTicker';
import ContactCta from '@/components/ContactCta';

/**
 * Shared renderer for standard legal pages (cookie, refund, disclaimer, etc.).
 * Content comes from cms.pageSections[pageKey] (admin-editable, DB-backed),
 * falling back to the committed defaults. Section bodies are rich text.
 */
export default function LegalPageView({ pageKey }: { pageKey: string }) {
  const site = useSiteInfo();
  const [pc, setPc] = useState<any>((defaultPageSections as any)[pageKey] || {});

  useEffect(() => {
    fetch('/api/admin')
      .then((r) => r.json())
      .then((d) => {
        if (d?.cms?.pageSections?.[pageKey]) setPc(d.cms.pageSections[pageKey]);
      })
      .catch(() => {});
  }, [pageKey]);

  const hero = pc.hero || {};
  const sections: any[] = pc.sections?.items || [];
  const contact = pc.contact || {};

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-purple-200/50 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" /> {hero.eyebrow || 'LEGAL & COMPLIANCE'}
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">{hero.heading}</h1>
          <RichText className="text-xs sm:text-sm text-slate-500 font-mono" html={hero.description} />
        </div>
      </section>

      <TechStackTicker />

      {/* Sections */}
      <section className="py-14 lg:py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-5">
          {sections.map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">{s.heading}</h2>
              </div>
              <RichText className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10" html={s.body} />
            </div>
          ))}

          {/* Contact / questions block */}
          <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
            <h3 className="text-lg font-bold text-slate-900">{contact.heading || 'Questions About This Policy?'}</h3>
            <RichText className="text-sm text-slate-600 leading-relaxed" html={contact.description} />
            <div className="flex flex-wrap gap-4 pt-1 text-sm">
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900">
                <Mail className="w-4 h-4" /> {site.email}
              </a>
              <a href={`tel:${site.phoneClean}`} className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900">
                <Phone className="w-4 h-4" /> {site.phone}
              </a>
            </div>
            <div className="pt-2">
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-purple-200">
                Contact Our Compliance Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
