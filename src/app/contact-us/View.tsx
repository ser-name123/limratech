'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  ChevronDown,
  Building2,
  Calendar,
  Lock,
  Star
} from 'lucide-react';
import { useSiteInfo } from '@/lib/useSiteInfo';
import { trackLeadConversion } from '@/components/AnalyticsTracker';
import TechStackTicker from '@/components/TechStackTicker';
import Testimonials from '@/components/Testimonials';

export default function ContactPage() {
  const companyInfo = useSiteInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website_honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        trackLeadConversion('contact_form_submit', {
          subject: formData.subject || 'General Contact',
          form_location: 'ContactUsPage',
        });
        setResponseMsg('Thank you! Your message has been routed to our technical consultants. We will reach out within 4 business hours.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', website_honeypot: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Failed to send inquiry.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('Something went wrong. Please check your connection.');
    }
  };

  const contactFaqs = [
    {
      q: 'How fast can I expect a response after submitting this form?',
      a: 'During standard IST business hours (9:00 AM - 7:00 PM), our senior technical team responds within 2 to 4 hours with an initial evaluation.'
    },
    {
      q: 'Do you charge for the initial consultation and website audit?',
      a: 'No. Our initial 30-minute discovery session and high-level Core Web Vitals / SEO diagnostic blueprint are 100% complimentary.'
    },
    {
      q: 'Can we sign an NDA before sharing our project requirements?',
      a: 'Yes. If your project involves proprietary IP, unreleased products, or sensitive database schemas, we will sign a mutual NDA immediately.'
    },
    {
      q: 'Do you offer direct phone or WhatsApp consultations?',
      a: `Yes! You can call our direct strategy desk at ${companyInfo.phone} or click the floating chat widget to speak directly with an engineer.`
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            DIRECT CHANNEL
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Connect With Our Engineering Lab
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            Ready to outrank your competitors and deploy a high-velocity Next.js platform? Connect directly with our lead architects.
          </p>
        </div>
      </section>

      {/* 2. Live Tech Ticker */}
      <TechStackTicker />

      {/* 3. Main Form & Strategy Desk Section */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information & Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase font-mono font-bold text-purple-700 tracking-wider bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                  HEADQUARTERS &amp; DESK
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3 mb-2">
                  Speak Directly With Technical Leadership
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Skip the junior salespeople. When you contact LIMRA Digitech, your inquiry is reviewed directly by software engineers and technical SEO directors.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono font-semibold">Direct Strategy Line</div>
                    <a href={`tel:${companyInfo.phoneClean}`} className="text-sm font-bold text-slate-900 hover:text-purple-700 transition-colors">
                      {companyInfo.phone}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono font-semibold">Engineering Inbox</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-sm font-bold text-slate-900 hover:text-purple-700 transition-colors">
                      {companyInfo.email}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Guaranteed response within 4 hours</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono font-semibold">HQ Location</div>
                    <div className="text-sm font-bold text-slate-900">
                      {companyInfo.address}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Serving clients nationwide across India &amp; globally</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="mb-6 space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">Request A Technical Blueprint</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Fill out the form below. We will review your domain and present an actionable SEO and architectural growth plan.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-purple-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-purple-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91-9876543210"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-purple-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Primary Objective *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-purple-600 transition-colors"
                      >
                        <option value="">Select Service Needed</option>
                        <option value="Website Development (WordPress, Shopify, Next.js, PHP)">Website Development (WordPress, Shopify, Next.js, PHP, Laravel)</option>
                        <option value="Digital Marketing (SEO, Google Ads, SMM, ORM)">Digital Marketing (SEO, Google Ads/PPC, SMM, YouTube, GMB)</option>
                        <option value="Lead Generation (Meta Ads, Google Leads, Funnels)">Lead Generation (Meta Ads, Google Leads &amp; Sales Funnels)</option>
                        <option value="Creative Design (Branding, UI/UX, Print, Motion)">Creative Design (Branding, UI/UX, Packaging &amp; Motion Video)</option>
                        <option value="Mobile App Development (Android & iOS)">Mobile App Development (Android &amp; iOS)</option>
                        <option value="Software Development (Custom Software & Business Apps)">Software Development (Custom Software &amp; Business Apps)</option>
                      </select>
                    </div>
                  </div>

                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="website_honeypot"
                    value={formData.website_honeypot}
                    onChange={(e) => setFormData({ ...formData, website_honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Your Website URL &amp; Project Overview</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current website domain, performance bottlenecks, and target goals..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>

                  {status === 'success' && (
                    <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{responseMsg}</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span>{responseMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-purple-200 transition-all disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Blueprint Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry &amp; Receive Audit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. What Happens Next: 4-Step Roadmap */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              TRANSPARENT PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What Happens After You Submit
            </h2>
            <p className="text-sm text-slate-600">
              Here is our exact step-by-step response cadence once your request is received.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-2xl font-black text-purple-700 font-mono">01</span>
              <h3 className="text-base font-bold text-slate-900">Inquiry Routing</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Within 2 hours, your submission is routed to a specialized full-stack architect.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-2xl font-black text-purple-700 font-mono">02</span>
              <h3 className="text-base font-bold text-slate-900">Diagnostic Crawl</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">We run an automated deep crawl of your domain to isolate Core Web Vitals gaps.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-2xl font-black text-purple-700 font-mono">03</span>
              <h3 className="text-base font-bold text-slate-900">Strategy Video Call</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">A focused 30-minute walkthrough presenting our findings and recommended tech stack.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-2xl font-black text-purple-700 font-mono">04</span>
              <h3 className="text-base font-bold text-slate-900">Sprint Agreement</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Transparent sprint scope, milestone deliverables, and instant onboarding kickoff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Non-Disclosure & Data Security Guarantee */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-white border border-purple-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0 border border-purple-200">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">Strict Non-Disclosure &amp; Privacy Policy</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your project details, traffic data, and strategy documents are protected under strict confidentiality. We never sell or share client data.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>256-Bit SSL Encrypted</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Response Time SLA Commitment */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">&lt; 4 Hours</div>
              <div className="text-xs text-slate-500 mt-1 font-mono">Business Hours Response Time</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">Direct Senior Architect</div>
              <div className="text-xs text-slate-500 mt-1 font-mono">No Sales Middlemen</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <Star className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">5.0 Star Rating</div>
              <div className="text-xs text-slate-500 mt-1 font-mono">120+ Verified Client Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Frequently Asked Questions */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              COMMUNICATION FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About Reaching Us
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to know about our initial consultation and audits.
            </p>
          </div>

          <div className="space-y-3.5">
            {contactFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
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

      {/* 9. Urgent Assistance Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full inline-block">
            NEED IMMEDIATE ASSISTANCE?
          </span>
          <h3 className="text-2xl font-bold text-slate-900">
            Experiencing An Urgent Algorithmic Drop Or Site Outage?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Call our emergency triage line at <a href={`tel:${companyInfo.phoneClean}`} className="text-purple-700 font-bold hover:underline">{companyInfo.phone}</a> for rapid incident assessment.
          </p>
        </div>
      </section>

      {/* 10. Direct WhatsApp Channel Callout */}
      <section className="py-12 bg-purple-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-purple-950">Prefer Instant WhatsApp Chat?</h4>
            <p className="text-xs text-slate-600">Connect with an engineer directly on WhatsApp for immediate inquiries.</p>
          </div>
          <a
            href={`https://wa.me/${companyInfo.phoneClean.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-purple-200 flex-shrink-0"
          >
            <span>Open WhatsApp Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

    </div>
  );
}
