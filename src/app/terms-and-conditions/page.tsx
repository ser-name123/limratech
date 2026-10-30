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
import { companyInfo } from '@/data/mockData';
import TechStackTicker from '@/components/TechStackTicker';
import ContactCta from '@/components/ContactCta';

export default function TermsAndConditionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const termsFaqs = [
    {
      q: 'Who owns the website code and brand designs after project completion?',
      a: 'Upon full settlement of agreed project milestones, the client receives 100% ownership of custom source code, graphics, and domain assets.'
    },
    {
      q: 'How are project milestones and payments structured?',
      a: 'Standard development projects follow a transparent milestone schedule (e.g., Kickoff & Architecture, Staging Preview, and Final Production Launch), while digital marketing and SEO operate on monthly retainers.'
    },
    {
      q: 'Can we terminate a monthly marketing retainer?',
      a: 'Yes. Monthly retainers can be paused or concluded with standard written notice as outlined in your individual Statement of Work (SOW).'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Hero Header */}
      <section className="py-16 lg:py-20 bg-white cyber-grid border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            LEGAL &amp; SERVICE GOVERNANCE
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Terms of Use &amp; Service Conditions
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Last Updated: October 2026 • Governing the use of limradigitech.com and professional services provided by LIMRA Digitech.
          </p>
        </div>
      </section>

      {/* 2. Ticker */}
      <TechStackTicker />

      {/* 3. Key Highlights Grid */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
            <Code2 className="w-5 h-5 text-purple-600" />
            <h2 className="text-sm font-bold text-slate-900">100% IP Ownership</h2>
            <p className="text-xs text-slate-600">Clients retain full ownership of custom code, designs, and domains upon completion.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
            <Scale className="w-5 h-5 text-emerald-600" />
            <h2 className="text-sm font-bold text-slate-900">Transparent SOWs</h2>
            <p className="text-xs text-slate-600">Clear deliverables, sprint timelines, and pricing before any work begins.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-sm font-bold text-slate-900">White-Hat Compliance</h2>
            <p className="text-xs text-slate-600">Ethical SEO and ad practices aligned with Google and Meta policies.</p>
          </div>
        </div>
      </section>

      {/* 4. Acceptance of Terms & Scope of Services */}
      <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <FileText className="w-4 h-4" />
            <span>Clause 01</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Acceptance of Terms &amp; Scope of Services</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            By accessing <strong>limradigitech.com</strong> or engaging LIMRA Digitech for website development, digital marketing, SEO, lead generation, creative design, mobile app development, or software development, you agree to these Terms of Use and any project-specific Statement of Work (SOW) signed between both parties.
          </p>
        </div>
      </section>

      {/* 5. Intellectual Property & Client Assets */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Code2 className="w-4 h-4" />
            <span>Clause 02</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Intellectual Property &amp; Brand Continuity</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            All LIMRA Digitech branding, logos, interactive tools, and proprietary website content on limradigitech.com are the intellectual property of LIMRA Digitech. For client engagements, upon full payment of the agreed project fee, custom code, creative assets, and deliverables created specifically for the client are transferred to the client.
          </p>
        </div>
      </section>

      {/* 6. Project Milestones, Billing & Third-Party Costs */}
      <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <CreditCard className="w-4 h-4" />
            <span>Clause 03</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Commercial Terms, Milestones &amp; Ad Spend</h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 bg-white p-6 rounded-2xl border border-slate-200">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span><strong>Development Milestones:</strong> Billed as per the agreed sprint schedule in the proposal.</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span><strong>Direct Media Spend:</strong> For Google Ads, Meta Ads, and paid campaigns, media budgets are paid directly by the client to the respective ad platforms unless otherwise specified.</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span><strong>Third-Party Licenses:</strong> Domain renewals, cloud hosting, paid plugins, or premium fonts are billed transparently at actuals.</span></li>
          </ul>
        </div>
      </section>

      {/* 7. Search Engine & Performance Disclaimers */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Clock className="w-4 h-4" />
            <span>Clause 04</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">SEO, Third-Party Algorithms &amp; Warranties</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            LIMRA Digitech adheres strictly to Google Search Central and Meta Advertising guidelines. While we engineer websites for 100/100 Core Web Vitals and execute proven white-hat SEO and conversion strategies, third-party search engine and social media algorithms change continuously and remain outside any agency&apos;s direct control.
          </p>
        </div>
      </section>

      {/* 8. Limitation of Liability & Acceptable Use */}
      <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <AlertTriangle className="w-4 h-4" />
            <span>Clause 05</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Acceptable Website Use &amp; Limitation of Liability</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Users must not attempt unauthorized access, automated scraping, spam form submissions, or denial-of-service attacks against limradigitech.com. In no event shall LIMRA Digitech&apos;s aggregate liability exceed the fees paid by the client for the specific service giving rise to the claim during the preceding three (3) months.
          </p>
        </div>
      </section>

      {/* 9. Governing Law & Jurisdiction */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-3">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Gavel className="w-4 h-4" />
            <span>Clause 06</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Governing Law &amp; Dispute Resolution</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            These Terms of Use are governed by the laws of India. Any disputes arising in connection with this website or our services shall be resolved amicably through mutual consultation, failing which they shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </div>
      </section>

      {/* 10. Terms FAQs */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">Terms &amp; Engagement FAQs</h2>
          <div className="space-y-3">
            {termsFaqs.map((faq, idx) => (
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
                    {faq.a}
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

