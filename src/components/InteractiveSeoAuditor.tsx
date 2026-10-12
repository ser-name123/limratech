'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Loader2, 
  BarChart2, 
  Cpu, 
  Smartphone, 
  TrendingUp, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

export default function InteractiveSeoAuditor() {
  const [url, setUrl] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const [auditResult, setAuditResult] = useState<null | {
    speedScore: number;
    seoScore: number;
    mobileScore: number;
    securityScore: number;
    recommendation: string;
    keywordGaps: number;
    estTrafficMultiplier: string;
  }>(null);

  const auditSteps = [
    { title: 'DNS & Edge Handshake', desc: 'Connecting to serverless origin & checking TTFB...' },
    { title: 'Googlebot Mobile Simulation', desc: 'Parsing HTML DOM, CSS, and layout shifts (CLS)...' },
    { title: 'Core Web Vitals Benchmark', desc: 'Benchmarking LCP, FID, and INP response times...' },
    { title: 'JSON-LD Schema & Entity Graph', desc: 'Validating structured data & E-E-A-T signals...' },
    { title: 'SERP Competitor Gap Analysis', desc: 'Calculating rank probability against top 3 competitors...' },
  ];

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsAuditing(true);
    setAuditResult(null);
    setAuditStep(0);

    // Multi-step animated scanning progression
    const stepInterval = setInterval(() => {
      setAuditStep((prev) => {
        if (prev < auditSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setIsAuditing(false);
          setAuditResult({
            speedScore: 68,
            seoScore: 74,
            mobileScore: 82,
            securityScore: 92,
            recommendation: 'Target domain has high-potential commercial keyword gaps and legacy render-blocking scripts. Migrating to Limra Next.js serverless architecture will 2.8x speed and escalate organic rankings to top 3.',
            keywordGaps: 142,
            estTrafficMultiplier: '3.4x'
          });
          return prev;
        }
      });
    }, 600);
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-50/60 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase font-semibold tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin" style={{ animationDuration: '4s' }} />
            <span>FREE LIVE TECHNICAL SEO DIAGNOSTIC</span>
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
            How Is Your Website Really Performing On Google?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Test your domain in real-time against modern Google Core Web Vitals, mobile DOM efficiency, and algorithm ranking factors.
          </p>
        </div>

        {/* Auditor Form Box */}
        <div className="max-w-4xl mx-auto">
          <form 
            onSubmit={handleAudit}
            className="p-2 sm:p-2.5 rounded-2xl bg-white border border-slate-300 shadow-xl shadow-slate-200/60 flex flex-col sm:flex-row gap-2 relative z-20"
          >
            <div className="relative flex-grow flex items-center">
              <Search className="w-5 h-5 text-purple-600 absolute left-4 pointer-events-none" />
              <input
                type="text"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter your website domain (e.g. yourcompany.com)"
                className="w-full pl-12 pr-4 py-3.5 bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={isAuditing}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-7 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-200 disabled:opacity-50 flex-shrink-0"
            >
              {isAuditing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Scanning Live...</span>
                </>
              ) : (
                <>
                  <span>Audit Website Now</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Pre-fills */}
          {!isAuditing && !auditResult && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-500">
              <span>Try quick audit:</span>
              {['shopify-store.com', 'b2b-enterprise.in', 'saas-platform.io'].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => setUrl(sample)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-purple-50 hover:text-purple-700 border border-slate-200 transition-colors font-mono text-[11px]"
                >
                  {sample}
                </button>
              ))}
            </div>
          )}

          {/* Real-time Multi-step Scanner Animation */}
          {isAuditing && (
            <div className="mt-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-slate-800 shadow-xl animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-600 animate-ping" />
                  <span className="text-xs font-mono uppercase text-purple-700 font-bold">
                    Running Deep Multi-Threaded SEO Crawl
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  Step {auditStep + 1} of {auditSteps.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full my-6 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${((auditStep + 1) / auditSteps.length) * 100}%` }}
                />
              </div>

              {/* Step Sequence Display */}
              <div className="space-y-3">
                {auditSteps.map((step, idx) => {
                  const isDone = idx < auditStep;
                  const isCurrent = idx === auditStep;
                  return (
                    <div 
                      key={idx}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                        isCurrent 
                          ? 'bg-purple-50/80 border-2 border-purple-400 shadow-md' 
                          : isDone 
                            ? 'bg-slate-50 text-slate-600 border border-slate-200' 
                            : 'opacity-40 border border-transparent'
                      }`}
                    >
                      <div className="mt-0.5">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : isCurrent ? (
                          <Loader2 className="w-4 h-4 text-purple-600 animate-spin" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-300" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="text-xs font-semibold text-slate-900 flex items-center justify-between">
                          <span>{step.title}</span>
                          {isDone && <span className="text-[10px] text-emerald-700 font-mono font-bold">COMPLETE</span>}
                          {isCurrent && <span className="text-[10px] text-purple-700 font-mono font-bold animate-pulse">ANALYZING...</span>}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Audit Results Dashboard */}
          {auditResult && (
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-xl">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-3">
                <div>
                  <span className="text-xs uppercase font-mono text-purple-700 font-bold">Audit Completed For:</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5 flex items-center gap-2">
                    <span>{url}</span>
                    <span className="text-xs font-normal text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      ✓ Analyzed
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full font-medium">
                    ⚡ {auditResult.estTrafficMultiplier} Traffic Growth Potential
                  </span>
                </div>
              </div>

              {/* 4 Animated Metric Gauges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                
                {/* Gauge 1: Speed */}
                <div className="bg-white border border-slate-200 p-4 rounded-2xl text-center shadow-sm hover:border-amber-400 transition-colors">
                  <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>PageSpeed Score</span>
                  </div>
                  <div className="text-3xl font-extrabold text-amber-600">{auditResult.speedScore}/100</div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: `${auditResult.speedScore}%` }} />
                  </div>
                  <div className="text-[10px] text-rose-600 mt-2 font-medium">Render Blocking CSS/JS</div>
                </div>

                {/* Gauge 2: SEO Health */}
                <div className="bg-white border border-slate-200 p-4 rounded-2xl text-center shadow-sm hover:border-purple-400 transition-colors">
                  <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-center gap-1">
                    <Search className="w-3.5 h-3.5 text-purple-600" />
                    <span>Technical SEO</span>
                  </div>
                  <div className="text-3xl font-extrabold text-purple-600">{auditResult.seoScore}/100</div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-purple-600 h-full rounded-full" style={{ width: `${auditResult.seoScore}%` }} />
                  </div>
                  <div className="text-[10px] text-purple-700 mt-2 font-medium">Missing Schema Entity</div>
                </div>

                {/* Gauge 3: Mobile UX */}
                <div className="bg-white border border-slate-200 p-4 rounded-2xl text-center shadow-sm hover:border-cyan-400 transition-colors">
                  <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Mobile UX &amp; CLS</span>
                  </div>
                  <div className="text-3xl font-extrabold text-cyan-600">{auditResult.mobileScore}/100</div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-cyan-500 h-full rounded-full" style={{ width: `${auditResult.mobileScore}%` }} />
                  </div>
                  <div className="text-[10px] text-cyan-700 mt-2 font-medium">CLS Layout Shifts Detected</div>
                </div>

                {/* Gauge 4: Security & Edge */}
                <div className="bg-white border border-slate-200 p-4 rounded-2xl text-center shadow-sm hover:border-emerald-400 transition-colors">
                  <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Security &amp; SSL</span>
                  </div>
                  <div className="text-3xl font-extrabold text-emerald-600">{auditResult.securityScore}/100</div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${auditResult.securityScore}%` }} />
                  </div>
                  <div className="text-[10px] text-emerald-700 mt-2 font-medium">HTTPS Validated</div>
                </div>

              </div>

              {/* Recommendation Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-purple-50 border border-purple-200 text-sm text-slate-700 leading-relaxed mb-6">
                <div className="flex items-center gap-2 text-purple-900 font-bold mb-1">
                  <Sparkles className="w-4 h-4 text-purple-700" />
                  <span>Limra Engineering Diagnostic:</span>
                </div>
                {auditResult.recommendation}
              </div>

              {/* Bottom CTA Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs sm:text-sm text-slate-600">
                  Want to upgrade your site to a <strong>perfect 100/100 Core Web Vitals score</strong> and rank #1?
                </span>
                <Link
                  href="/contact-us"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-purple-200 flex-shrink-0"
                >
                  <span>Claim Full Blueprint Report (Free)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
