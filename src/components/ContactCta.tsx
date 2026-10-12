'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { companyInfo } from '@/data/mockData';

export default function ContactCta() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_needed: 'Technical SEO Dominance',
    budget: '₹50,000 - ₹1,00,000/mo',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source_page: 'cyber-cta-audit',
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setResponseMsg('Your project blueprint request is locked! A senior SEO & Next.js architect will contact you within 4 business hours.');
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          service_needed: 'Technical SEO Dominance',
          budget: '₹50,000 - ₹1,00,000/mo',
          message: '',
        });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('Connection error. Please try again or ping us on WhatsApp.');
    }
  };

  return (
    <section id="contact-section" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Inquiries & Value (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full inline-block">
              GET IN TOUCH
            </span>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
              Ready To Outrank Competitors &amp; Scale?
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              Partner with LIMRA Digitech. Whether you need a sub-second Next.js web application or relentless page-1 SEO dominance, our engineering lab is ready to scale your revenue across India.
            </p>

            <div className="space-y-3 pt-2">
              {/* Call Card */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-purple-300 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Direct Strategy Call</h3>
                  <p className="text-xs text-slate-500 mb-1 font-normal">Mon - Sat (9:00 AM - 7:00 PM IST)</p>
                  <a href={`tel:${companyInfo.phoneClean}`} className="text-xs font-semibold text-purple-700 hover:text-purple-900">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Chat Card */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">WhatsApp Engineering Hotline</h3>
                  <p className="text-xs text-slate-500 mb-1 font-normal">Instant direct response from technical leads</p>
                  <a 
                    href={`https://wa.me/${companyInfo.phoneClean.replace('+', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    Open Live WhatsApp Chat &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>100% Confidentiality &amp; NDA Backed Consultations</span>
            </div>
          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/60 relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Request A Technical Blueprint
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    Receive an in-depth SEO gap audit &amp; Next.js architectural roadmap.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-purple-600 hidden sm:block" />
              </div>

              {status === 'success' && (
                <div className="p-3.5 mb-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs font-medium">{responseMsg}</div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 mb-5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs font-medium">{responseMsg}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vikram@brand.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Target Capability Needed</label>
                    <select
                      value={formData.service_needed}
                      onChange={(e) => setFormData({ ...formData, service_needed: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                    >
                      <option value="Technical SEO Dominance">Technical SEO &amp; Google #1 Rank</option>
                      <option value="Next.js Web Development">Next.js &amp; Full-Stack React Web Development</option>
                      <option value="High-ROI Lead Generation">High-ROI Lead Generation &amp; Meta Ads</option>
                      <option value="Cloud Software & Supabase">Cloud Software &amp; Supabase SaaS Backend</option>
                      <option value="Mobile App Development">Mobile App Development (Flutter/React Native)</option>
                      <option value="UI/UX & Brand Identity">Creative UI/UX &amp; Brand Systems (Figma)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Growth Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                  >
                    <option value="₹35,000 - ₹50,000/mo">₹35,000 - ₹50,000 / month (Starter Engine)</option>
                    <option value="₹50,000 - ₹1,00,000/mo">₹50,000 - ₹1,00,000 / month (Growth Engine)</option>
                    <option value="₹1,00,000 - ₹3,00,000/mo">₹1,00,000 - ₹3,00,000 / month (Scale Engine)</option>
                    <option value="₹3,00,000+/mo">₹3,00,000+ / month (Enterprise Dominance)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Current Bottlenecks &amp; Goals</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your target keywords, competitors, or web performance requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md shadow-purple-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Project Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Project Brief &amp; Claim Blueprint</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 Data processed directly via serverless encryption &amp; Supabase database.
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
