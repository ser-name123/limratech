'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Activity,
  Terminal
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const liveRankKeywords = [
  { kw: 'Next.js Development Agency', rank: '#1', speed: '0.22s', diff: '+4' },
  { kw: 'Enterprise Technical SEO India', rank: '#1', speed: '0.19s', diff: '+8' },
  { kw: 'Sub-Second Web Applications', rank: '#1', speed: '0.24s', diff: '+6' },
  { kw: 'Headless E-Commerce Architect', rank: '#2', speed: '0.21s', diff: '+11' },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'seo' | 'speed' | 'leads'>('seo');
  const [kwIndex, setKwIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setKwIndex((prev) => (prev + 1) % liveRankKeywords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-center relative w-full py-4 sm:py-6 lg:py-8">
      {/* Background Ambient Glows with subtle floating animation */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-cyan-100/40 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-purple-200/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Headlines, Trust, & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Elegant Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin-slow" />
              <span>India&apos;s Elite SEO &amp; Next-Gen Web Engineering Lab</span>
            </div>

            {/* Harmonious Headline with sleek, refined font weight and balanced scale */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-medium text-slate-900 tracking-tight leading-[1.16]">
              Rank #1 on Google.{' '}
              <span className="gradient-text-glow font-medium">
                Deploy Sub-Second
              </span>{' '}
              Web Applications.
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We architect blazing-fast serverless Next.js web applications and execute data-backed technical SEO that captures high-intent search traffic and delivers measurable, compound revenue across India.
            </p>

            {/* CTAs & Quick Social Trust */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto relative group overflow-hidden rounded-xl font-medium text-xs sm:text-sm shadow-md shadow-purple-200 hover:shadow-lg hover:shadow-purple-300 transition-all"
                >
                  <span className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white rounded-xl">
                    <span>Start Your High-Growth Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-200" />
                  </span>
                </Link>

                <Link
                  href="/website-development-services"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-slate-700 hover:text-purple-700 font-medium text-xs sm:text-sm border border-slate-300 hover:border-purple-300 bg-white hover:bg-slate-50 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>View Architecture</span>
                </Link>
              </div>

              {/* Social proof strip */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 pt-0.5">
                <div className="flex text-amber-500 text-xs">
                  {'★'.repeat(5)}
                </div>
                <span className="text-slate-800 font-medium">4.9/5 Rating</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">Trusted by 350+ Enterprise Leaders Across India</span>
              </div>
            </div>

            {/* 3 Value Metric Cards (Balanced, substantive presence) */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-left hover:border-emerald-400 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium">
                  <Zap className="w-3.5 h-3.5" /> 100/100
                </div>
                <div className="text-xs text-slate-900 font-semibold mt-1">PageSpeed Score</div>
                <div className="text-[11px] text-slate-500 mt-0.5">0.3s Serverless Edge</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-left hover:border-purple-400 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-1.5 text-purple-600 text-xs font-medium">
                  <TrendingUp className="w-3.5 h-3.5" /> Rank #1
                </div>
                <div className="text-xs text-slate-900 font-semibold mt-1">SEO Engineering</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Algorithm Immune</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-left hover:border-cyan-400 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-1.5 text-cyan-600 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Supabase
                </div>
                <div className="text-xs text-slate-900 font-semibold mt-1">Cloud Database</div>
                <div className="text-[11px] text-slate-500 mt-0.5">PostgreSQL Realtime</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Benchmark Terminal (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="relative bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xl shadow-slate-200/60">
                
                {/* Window Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="ml-2 font-mono text-[11px] text-slate-500 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-purple-600" /> limra-core::v3.4.1
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Live Metrics
                  </span>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-lg mb-3 text-xs font-medium">
                  <button
                    onClick={() => setActiveTab('seo')}
                    className={`py-1.5 rounded-md transition-all ${
                      activeTab === 'seo' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    SEO Engine
                  </button>
                  <button
                    onClick={() => setActiveTab('speed')}
                    className={`py-1.5 rounded-md transition-all ${
                      activeTab === 'speed' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Next.js Vitals
                  </button>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className={`py-1.5 rounded-md transition-all ${
                      activeTab === 'leads' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Lead Funnel
                  </button>
                </div>

                {/* Tab 1: SEO Metrics */}
                {activeTab === 'seo' && (
                  <div className="space-y-2.5 animate-in fade-in duration-200">
                    {/* Live SERP Keyword Ranking Ticker */}
                    <div className="bg-purple-50/80 border border-purple-200/90 rounded-xl p-2.5 transition-all">
                      <div className="flex items-center justify-between text-[11px] font-mono text-purple-900 mb-1">
                        <span className="flex items-center gap-1.5 font-bold">
                          <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                          <span>Google SERP Live Rank</span>
                        </span>
                        <span className="text-emerald-700 bg-emerald-100/90 border border-emerald-300 px-1.5 py-0.2 rounded font-bold text-[10px]">
                          {liveRankKeywords[kwIndex].diff} MoM
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <div className="font-semibold text-xs sm:text-sm text-slate-900 truncate">
                          &ldquo;{liveRankKeywords[kwIndex].kw}&rdquo;
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs px-2 py-0.5 rounded shadow-sm">
                            {liveRankKeywords[kwIndex].rank}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                            ({liveRankKeywords[kwIndex].speed})
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span>Google Search Impressions</span>
                        <span className="text-emerald-600 font-semibold">+384% MoM</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">
                        <AnimatedCounter end={1480200} suffix="+" />
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 h-full w-[88%] rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-2.5 hover:bg-purple-50/40 transition-colors">
                        <div className="text-[11px] text-slate-500">Target Keywords #1</div>
                        <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                          <AnimatedCounter end={85} suffix="+ Top 3" />
                        </div>
                        <div className="text-[10px] text-purple-700 mt-1 flex items-center gap-1 font-mono">
                          <TrendingUp className="w-3 h-3 text-purple-600" /> High Intent SERP
                        </div>
                      </div>
                      <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-2.5 hover:bg-purple-50/40 transition-colors">
                        <div className="text-[11px] text-slate-500">Domain Authority</div>
                        <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                          DA <AnimatedCounter end={74} />
                        </div>
                        <div className="text-[10px] text-emerald-700 mt-1 flex items-center gap-1 font-mono">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" /> High Trust Score
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Speed / Core Web Vitals */}
                {activeTab === 'speed' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3.5">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span>Lighthouse Performance Score</span>
                        <span className="text-emerald-600 font-semibold">100 / 100</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-emerald-600 flex items-center gap-2">
                        <Zap className="w-5 h-5" /> Perfect <AnimatedCounter end={100} />/100
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2.5 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[100%] rounded-full"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3 hover:bg-emerald-50/40 transition-colors">
                        <div className="text-[11px] text-slate-500">First Contentful Paint</div>
                        <div className="text-base sm:text-lg font-bold text-emerald-600 mt-0.5">
                          <AnimatedCounter end={0.3} decimals={1} suffix="s" />
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1 font-mono">Serverless Edge</div>
                      </div>
                      <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3 hover:bg-emerald-50/40 transition-colors">
                        <div className="text-[11px] text-slate-500">Cumulative Layout Shift</div>
                        <div className="text-base sm:text-lg font-bold text-emerald-600 mt-0.5">0.000</div>
                        <div className="text-[10px] text-slate-500 mt-1 font-mono">Zero Layout Shift</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Leads & ROI */}
                {activeTab === 'leads' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3.5">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span>Monthly Qualified Inquiries</span>
                        <span className="text-purple-700 font-semibold">4.2x Growth</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">
                        <AnimatedCounter end={2420} suffix=" Inbound" />
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-600 to-cyan-500 h-full w-[92%] rounded-full"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3 hover:bg-purple-50/40 transition-colors">
                        <div className="text-[11px] text-slate-500">Average ROAS</div>
                        <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                          <AnimatedCounter end={5.4} decimals={1} suffix="x" />
                        </div>
                        <div className="text-[10px] text-emerald-700 mt-1 font-mono">Google &amp; Meta</div>
                      </div>
                      <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3 hover:bg-purple-50/40 transition-colors">
                        <div className="text-[11px] text-slate-500">Cost Per Lead (CPL)</div>
                        <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">-42%</div>
                        <div className="text-[10px] text-purple-700 mt-1 font-mono">Optimized Funnel</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Command Bar */}
                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-purple-700">
                    <Activity className="w-3.5 h-3.5 text-emerald-600" /> $ limra --audit-live
                  </span>
                  <Link href="/contact-us" className="text-purple-600 hover:text-purple-800 font-medium">
                    Run Audit &rarr;
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
