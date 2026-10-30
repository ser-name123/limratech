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
import { companyInfo } from '@/data/mockData';
import TechStackTicker from '@/components/TechStackTicker';
import ContactCta from '@/components/ContactCta';

export default function PrivacyPolicyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const policyFaqs = [
    {
      q: 'Does LIMRA Digitech ever sell or rent client contact information?',
      a: 'No. We never sell, rent, or trade your personal or corporate contact details, analytics data, or project specifications with third-party data brokers.'
    },
    {
      q: 'How can I request deletion of my inquiry data?',
      a: `You can email our privacy desk at ${companyInfo.email} at any time to request access, correction, or permanent deletion of your stored inquiry records.`
    },
    {
      q: 'Are form submissions encrypted?',
      a: 'Yes. All forms on limradigitech.com transmit data over 256-bit TLS/HTTPS encryption and store records in access-controlled PostgreSQL databases.'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Hero Header */}
      <section className="py-16 lg:py-20 bg-white cyber-grid border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            DATA PRIVACY &amp; COMPLIANCE
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Last Updated: October 2026 • Effective for all visitors, leads, and clients of LIMRA Digitech (limradigitech.com).
          </p>
        </div>
      </section>

      {/* 2. Ticker */}
      <TechStackTicker />

      {/* 3. Executive Privacy Summary Cards */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
            <Lock className="w-5 h-5 text-purple-600" />
            <h2 className="text-sm font-bold text-slate-900">256-Bit SSL Encryption</h2>
            <p className="text-xs text-slate-600">All form submissions and client communications are encrypted in transit and at rest.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h2 className="text-sm font-bold text-slate-900">Zero Data Selling</h2>
            <p className="text-xs text-slate-600">Your email, phone number, and domain analytics are strictly confidential.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
            <UserCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-sm font-bold text-slate-900">Full User Control</h2>
            <p className="text-xs text-slate-600">Opt out of newsletters or request permanent record deletion at any time.</p>
          </div>
        </div>
      </section>

      {/* 4. Information We Collect */}
      <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Database className="w-4 h-4" />
            <span>Section 01</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Information We Collect</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            When you visit <strong>limradigitech.com</strong>, request a quote, run a website audit, or subscribe to our newsletter, we collect only the information required to deliver our services:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 bg-white p-6 rounded-2xl border border-slate-200">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span><strong>Contact &amp; Lead Data:</strong> Full name, work email address, phone/WhatsApp number, company name, website URL, and project requirements submitted via our forms.</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span><strong>Technical &amp; Usage Telemetry:</strong> Anonymized browser type, device category, referring pages, and Core Web Vitals performance metrics via Google Analytics 4 (GA4).</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span><strong>Client Project Assets:</strong> Approved brand logos, content, and credentials shared under mutual Non-Disclosure Agreements (NDAs).</span></li>
          </ul>
        </div>
      </section>

      {/* 5. How We Use Your Information */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Eye className="w-4 h-4" />
            <span>Section 02</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">How We Use Your Information</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            LIMRA Digitech uses collected data strictly for legitimate business and service delivery purposes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. Consultation &amp; Proposals</strong>
              Responding to your enquiries, preparing technical SEO audits, and sharing custom project quotes.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Project Execution &amp; Support</strong>
              Communicating sprint milestones, deploying web/mobile applications, and providing SLA support.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. Performance Optimization</strong>
              Analyzing aggregate traffic trends to improve page speed, accessibility, and user experience.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">4. Technical Dispatch (Opt-In)</strong>
              Sending occasional SEO and engineering insights only if you explicitly subscribe.
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cookies, Analytics & Tracking Technologies */}
      <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Cookie className="w-4 h-4" />
            <span>Section 03</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Cookies, Google Analytics &amp; Search Console</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We use essential first-party cookies and industry-standard analytics tools (Google Analytics 4, Google Search Console, and optional campaign conversion pixels) to measure website performance and lead form conversions. You may disable cookies at any time through your browser settings without losing access to our website content.
          </p>
        </div>
      </section>

      {/* 7. Data Storage, Security & Third-Party Processors */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Server className="w-4 h-4" />
            <span>Section 04</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Data Security &amp; Cloud Infrastructure</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Inquiry and subscriber records are stored securely on enterprise cloud infrastructure (Supabase PostgreSQL with Row-Level Security) and protected via HTTPS/TLS 1.3 encryption, spam filtering, and strict role-based access controls.
          </p>
        </div>
      </section>

      {/* 8. Your Data Rights & Retention Policy */}
      <section className="py-12 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <FileText className="w-4 h-4" />
            <span>Section 05</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Your Rights (Access, Correction &amp; Deletion)</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In accordance with applicable Indian Information Technology &amp; Digital Personal Data Protection (DPDP) standards and global privacy norms, you have the right to request a copy of the personal data we hold about you, request corrections, withdraw marketing consent, or ask for permanent erasure of your records.
          </p>
        </div>
      </section>

      {/* 9. Privacy Officer & Direct Contact Desk */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-purple-700 uppercase">Privacy &amp; Compliance Desk</div>
              <h3 className="text-lg font-bold text-slate-900">Questions About Data Protection?</h3>
              <p className="text-xs text-slate-600">
                Email <a href={`mailto:${companyInfo.email}`} className="text-purple-700 font-semibold underline">{companyInfo.email}</a> or call <a href={`tel:${companyInfo.phoneClean}`} className="text-purple-700 font-semibold">{companyInfo.phone}</a>.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex-shrink-0"
            >
              Contact Compliance Desk
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Privacy FAQs */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">Privacy Frequently Asked Questions</h2>
          <div className="space-y-3">
            {policyFaqs.map((faq, idx) => (
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

