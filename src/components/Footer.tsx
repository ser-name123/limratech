'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Star,
  Activity,
  MessageSquare
} from 'lucide-react';
import { companyInfo } from '@/data/mockData';

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFeedback('Subscribed! Welcome to our technical dispatch.');
        setEmail('');
      } else {
        setStatus('error');
        setFeedback(data.error || 'Failed to subscribe.');
      }
    } catch {
      setStatus('error');
      setFeedback('Network error. Please try again.');
    }
  };

  return (
    <footer className="bg-slate-100/90 text-slate-600 relative overflow-hidden border-t border-slate-200 pt-14 pb-8">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300 via-indigo-300 to-transparent" />
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-cyan-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* 1. Pre-Footer Callout Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-14 shadow-lg shadow-slate-200/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>PARTNER WITH INDIA&apos;S ELITE ENGINEERING LAB</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                Ready to Outrank Competitors &amp; Deploy Sub-Second Speed?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Connect with our technical architects for an in-depth SEO gap audit and Next.js engineering roadmap.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium text-xs sm:text-sm shadow-md shadow-purple-200 flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Request Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${companyInfo.phoneClean.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>WhatsApp Hotline</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main 4-Column Navigation Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand & Dispatch (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo without background box */}
            <Link href="/" className="inline-block group">
              <Image 
                src="/limra-logo.png" 
                alt="LIMRA Digitech Logo" 
                width={160} 
                height={46} 
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              India&apos;s premier Next-Gen web engineering and technical SEO agency. We bridge the divide between sub-second Next.js speed, Supabase cloud elasticity, and ruthless Google search engine dominance.
            </p>

            {/* Infrastructure Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              <span>Next.js 15 • Supabase Cloud • 99.98% SLA</span>
            </div>

            {/* Newsletter Dispatch */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-semibold text-slate-800 block">
                Subscribe to our Technical Intelligence Dispatch
              </span>

              <form onSubmit={handleSubscribe} className="flex max-w-sm relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work email address..."
                  required
                  className="w-full bg-white border border-slate-300 focus:border-purple-600 px-3.5 py-2.5 rounded-l-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-r-xl font-medium text-xs flex items-center justify-center transition-colors disabled:opacity-50 flex-shrink-0 shadow-md shadow-purple-200"
                  aria-label="Subscribe"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
              </form>

              {status === 'success' && (
                <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{feedback}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-1.5 text-rose-600 text-xs font-medium pt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{feedback}</span>
                </div>
              )}
            </div>

            {/* Clean Modern Social Media Icons */}
            <div className="flex items-center gap-2 pt-1">
              {/* X / Twitter */}
              <a
                href={companyInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LIMRA Digitech on X"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-purple-400 hover:bg-purple-50 flex items-center justify-center text-slate-600 hover:text-purple-700 shadow-sm transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LIMRA Digitech on LinkedIn"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-purple-400 hover:bg-purple-50 flex items-center justify-center text-slate-600 hover:text-purple-700 shadow-sm transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LIMRA Digitech on Instagram"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-purple-400 hover:bg-purple-50 flex items-center justify-center text-slate-600 hover:text-purple-700 shadow-sm transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LIMRA Digitech on Facebook"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-purple-400 hover:bg-purple-50 flex items-center justify-center text-slate-600 hover:text-purple-700 shadow-sm transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services Directory (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/website-development-services" className="hover:text-purple-700 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing-agency-india" className="hover:text-purple-700 transition-colors">
                  Digital Marketing &amp; SEO
                </Link>
              </li>
              <li>
                <Link href="/lead-generation-company-india" className="hover:text-purple-700 transition-colors">
                  Lead Generation Funnels
                </Link>
              </li>
              <li>
                <Link href="/creative-design-solutions-india" className="hover:text-purple-700 transition-colors">
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link href="/mobile-app-developer-india" className="hover:text-purple-700 transition-colors">
                  App Development (iOS/Android)
                </Link>
              </li>
              <li>
                <Link href="/software-developers-india" className="hover:text-purple-700 transition-colors">
                  Custom Software &amp; ERP
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Ecosystem (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/about" className="hover:text-cyan-700 transition-colors">
                  About LIMRA Digitech
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-cyan-700 transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-cyan-700 transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-700 transition-colors">
                  Portfolio &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-cyan-700 transition-colors">
                  Clients &amp; Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-cyan-700 transition-colors">
                  Blogs &amp; Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Advisory & Direct Desk (4 cols on lg:grid-cols-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Strategic Desk &amp; HQ
            </h4>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-slate-900 font-semibold block">Headquarters:</span>
                  <span className="text-slate-600">New Delhi, India (Pan-India &amp; Global Delivery)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-slate-900 font-semibold block">Direct Strategy Line:</span>
                  <a href={`tel:${companyInfo.phoneClean}`} className="text-purple-700 hover:text-purple-900 font-medium transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-slate-900 font-semibold block">Engineering Desk:</span>
                  <a href={`mailto:${companyInfo.email}`} className="text-cyan-700 hover:text-cyan-900 font-medium transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-slate-900 font-semibold block">Operational Hours:</span>
                  <span className="text-slate-600">{companyInfo.workingHours} IST</span>
                </div>
              </div>
            </div>

            {/* Verified Trust Badge */}
            <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-800">5.0 Star Rating</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                Verified Client Reviews
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Container-Width Aligned Brand Watermark */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 select-none pointer-events-none my-4">
        <div className="w-full overflow-hidden py-2 border-y border-slate-200/60">
          <svg
            viewBox="0 0 1200 130"
            className="w-full h-auto max-h-28 sm:max-h-36 block fill-slate-200/90 font-black"
            aria-hidden="true"
          >
            <text
              x="50%"
              y="54%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="122"
              fontWeight="900"
              letterSpacing="-0.03em"
              textLength="1160"
              lengthAdjust="spacing"
            >
              LIMRA DIGITECH
            </text>
          </svg>
        </div>
      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* 4. Bottom Legal & Compliance Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
            <span>&copy; {new Date().getFullYear()} LIMRA Digitech. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-[11px]">
            <Link href="/about" className="hover:text-purple-700 transition-colors">About Agency</Link>
            <Link href="/industries" className="hover:text-purple-700 transition-colors">Industries</Link>
            <Link href="/technologies" className="hover:text-purple-700 transition-colors">Technologies</Link>
            <Link href="/careers" className="hover:text-purple-700 transition-colors">Careers</Link>
            <Link href="/privacy-policy" className="hover:text-purple-700 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-purple-700 transition-colors">Terms of Use</Link>
            <Link href="/sitemap-page" className="hover:text-purple-700 transition-colors">Sitemap</Link>
            <a href="/sitemap.xml" className="hover:text-purple-700 transition-colors font-mono">XML Sitemap</a>
            <Link href="/admin" className="text-purple-700 font-semibold hover:text-purple-900 transition-colors">Admin Console</Link>
          </div>

          <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Serverless Next.js 15 &bull; New Delhi, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
