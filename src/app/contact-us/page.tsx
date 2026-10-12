'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { companyInfo } from '@/data/mockData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

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
        setResponseMsg('Thank you! Your message has been routed to our technical consultants. We will reach out within 4 business hours.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Failed to send inquiry.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('Something went wrong. Please check your connection.');
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            DIRECT CHANNEL
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Contact Our Lab Today
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Ready to outrank your competitors and deploy a high-velocity Next.js platform? Connect directly with our lead architects.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xl sm:text-3xl font-medium text-slate-900">
                Direct Communication Channels
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                We maintain rapid communication standards for enterprise partners, active clients, and project inquiries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 text-base">Direct Phone Call</h3>
                    <p className="text-xs text-slate-500 mb-1">Mon - Sat (9:00 AM - 7:00 PM IST)</p>
                    <a href={`tel:${companyInfo.phoneClean}`} className="text-sm font-medium text-purple-600 hover:text-purple-800">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 text-base">Engineering Desk Email</h3>
                    <p className="text-xs text-slate-500 mb-1">Guaranteed reply within 4 hours</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-sm font-medium text-purple-600 hover:text-purple-800">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 text-base">Headquarters &amp; Delivery</h3>
                    <p className="text-xs text-slate-500 mb-1">New Delhi, India</p>
                    <span className="text-xs text-slate-600 font-normal">
                      Pan-India operations &amp; international cloud deployments.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-medium text-slate-900 mb-2">
                  Send A Direct Project Message
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  Provide your project brief below and our technical leads will reach out directly.
                </p>

                {status === 'success' && (
                  <div className="p-4 mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm font-medium">{responseMsg}</div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 mb-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm font-medium">{responseMsg}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/10 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/10 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91-9876543210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/10 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. SEO Audit &amp; Next.js Redesign"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/10 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Detailed Requirements *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your business goals, target keywords, current performance bottlenecks, or desired launch timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/10 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-[#911cf3] to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-purple-600/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Direct Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
