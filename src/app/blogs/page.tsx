'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Calendar, 
  ArrowRight, 
  User, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  ChevronDown, 
  Mail,
  Zap,
  Terminal
} from 'lucide-react';
import { blogPostsData } from '@/data/mockData';
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';

export default function BlogsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'SEO & Core Vitals', 'Next.js & Performance', 'Conversion Rate & PPC'];

  const filteredPosts = activeCategory === 'All'
    ? blogPostsData
    : blogPostsData.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const blogFaqs = [
    {
      q: 'Are your articles written by AI or senior engineers?',
      a: 'Every teardown on LIMRA Intelligence is authored and verified by senior full-stack software engineers and technical SEO directors with real production experience.'
    },
    {
      q: 'How frequently do you publish new technical guides?',
      a: 'We publish in-depth technical breakdowns twice a month, prioritizing quality, original benchmark data, and algorithmic updates over generic weekly clickbait.'
    },
    {
      q: 'Can we apply these Next.js and SEO strategies to our existing website?',
      a: 'Yes. Our guides include concrete code samples, architectural diagrams, and step-by-step optimization checklists designed for engineering teams.'
    },
    {
      q: 'Do you offer custom technical audits for domains experiencing ranking drops?',
      a: 'Yes. If your domain lost search rankings following a Google Core or Helpful Content update, you can request a deep technical audit via our contact form.'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            ENGINEERING INTELLIGENCE
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Technical Insights &amp; SEO Teardowns
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            Stay ahead of Google algorithm updates, AI search overviews, and modern Next.js serverless architectures with teardowns from our senior practitioners.
          </p>
        </div>
      </section>

      {/* 2. Live Tech Ticker */}
      <TechStackTicker />

      {/* 3. Category Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-40 shadow-xs">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-slate-400">
            Showing {filteredPosts.length} Technical Teardowns
          </span>
        </div>
      </section>

      {/* 4. Featured Masterclass Article (Hero Card) */}
      {filteredPosts.length > 0 && (
        <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-purple-300 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={filteredPosts[0].cover_image}
                  alt={filteredPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-purple-700 font-mono text-xs font-bold px-3 py-1 rounded-full border border-slate-200 shadow-md">
                  FEATURED DEEP DIVE
                </span>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                  <span>{filteredPosts[0].date}</span>
                  <span>•</span>
                  <span>{filteredPosts[0].read_time}</span>
                  <span>•</span>
                  <span className="text-purple-700 font-bold">{filteredPosts[0].author}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                  {filteredPosts[0].title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {filteredPosts[0].excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/blogs/${filteredPosts[0].slug}`}
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md shadow-purple-200 transition-all"
                  >
                    <span>Read Full Teardown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Blog Posts Directory Grid */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-purple-700 border border-slate-200 text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.read_time}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 group-hover:translate-x-1 transition-all"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-slate-400">By {post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Read LIMRA Intelligence */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              EDITORIAL STANDARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Zero Fluff. Pure Production Code &amp; Verified Data.
            </h2>
            <p className="text-sm text-slate-600">
              The principles behind every article published by our engineering laboratory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <Zap className="w-6 h-6 text-purple-600 mb-2" />
              <h3 className="text-base font-bold text-slate-900">Benchmark Driven</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Every claim is verified using Google Lighthouse, WebPageTest, and real user Core Web Vitals telemetry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <Terminal className="w-6 h-6 text-indigo-600 mb-2" />
              <h3 className="text-base font-bold text-slate-900">Production Code Snippets</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We share real TypeScript definitions, React 19 hooks, and Supabase queries ready for production deployment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="text-base font-bold text-slate-900">Algorithm Immunity Focus</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Strategies architected to protect your brand from Google Core, Helpful Content, and SpamBrain updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newsletter & Dispatch Subscription Box */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-white border border-purple-200 px-3 py-1 rounded-full inline-block">
              WEEKLY DISPATCH
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Subscribe To Our Engineering &amp; SEO Intelligence
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Get bi-weekly teardowns on Google search algorithms, Next.js performance optimizations, and high-ROI acquisition playbooks.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                placeholder="Enter your work email address..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none"
              />
              <button
                type="button"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold text-xs flex-shrink-0 transition-colors shadow-md shadow-purple-200"
              >
                Join 2,400+ Engineers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Google Algorithm Timeline & Status */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              ALGORITHM MONITORING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Recent Google Algorithm Updates Tracked
            </h2>
            <p className="text-sm text-slate-600">
              How recent Google search updates impact enterprise websites and how we maintain immunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Passed (100% Stable)</span>
              <h4 className="text-base font-bold text-slate-900 pt-1">Google Core Algorithm 2026</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Rewarding deeply structured semantic entities and authoritative first-party data.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">+38% Lift</span>
              <h4 className="text-base font-bold text-slate-900 pt-1">Helpful Content System</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">De-indexing low-effort programmatic spam while elevating genuine technical thought leadership.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">INP &lt; 30ms</span>
              <h4 className="text-base font-bold text-slate-900 pt-1">Interaction to Next Paint (INP)</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Measuring user interaction lag; sub-second Next.js edge hydration passes effortlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              COMMON INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About Our Insights
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers regarding our research, methodology, and licensing.
            </p>
          </div>

          <div className="space-y-3.5">
            {blogFaqs.map((faq, index) => (
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
                    {faq.a}
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
