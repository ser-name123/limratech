'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  ArrowUpRight, 
  Globe, 
  Cpu, 
  Layers, 
  Activity, 
  Award,
  RefreshCw,
  ExternalLink,
  Database
} from 'lucide-react';

export default function AdvancedSeoSimulator() {
  const [activeMode, setActiveMode] = useState<'serp' | 'crawler' | 'immunity'>('serp');
  
  // Mode 1: SERP Rank #1 Simulation state
  const keywords = [
    'Best Next.js Web Development Agency in India',
    'Enterprise Technical SEO & Core Web Vitals Agency',
    'High Growth B2B Organic Lead Generation Lab',
    'Custom Headless Commerce & Sub-Second Web Apps'
  ];
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isClimbing, setIsClimbing] = useState(false);
  const [rankPosition, setRankPosition] = useState(4);
  const [crawlerLogIndex, setCrawlerLogIndex] = useState(0);

  // Typewriter effect for keyword search
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentFullText = keywords[currentKeywordIndex];

    if (isTyping) {
      if (typedText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setTypedText(currentFullText.slice(0, typedText.length + 1));
        }, 35);
      } else {
        // Finished typing, trigger SERP rank climb
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsClimbing(true);
          // Climb sequence: 4 -> 3 -> 2 -> 1
          setTimeout(() => setRankPosition(3), 400);
          setTimeout(() => setRankPosition(2), 900);
          setTimeout(() => {
            setRankPosition(1);
            setIsClimbing(false);
          }, 1500);
        }, 800);
      }
    } else {
      // Pause on completed view before moving to next keyword
      timeout = setTimeout(() => {
        setIsTyping(true);
        setTypedText('');
        setRankPosition(4);
        setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentKeywordIndex]);

  // Mode 2: Real-time crawler logs
  const crawlerLogs = [
    { type: 'REQ', text: 'GET /sitemap.xml HTTP/2 (Googlebot/2.1)', status: '200 OK', time: '14ms', icon: Globe },
    { type: 'SCHEMA', text: 'Parsed JSON-LD [Organization, WebSite, FAQPage, Service]', status: 'VALID', time: '8ms', icon: CheckCircle2 },
    { type: 'VITALS', text: 'LCP: 0.32s | CLS: 0.000 | INP: 28ms [Passes all thresholds]', status: 'PERFECT', time: '4ms', icon: Zap },
    { type: 'CACHE', text: 'Edge CDN HIT (Mumbai BOM & Delhi DEL nodes)', status: 'SUB-SECOND', time: '18ms', icon: Database },
    { type: 'INDEX', text: 'Document pushed to Google Search Knowledge Graph', status: 'INDEXED', time: '32ms', icon: Award },
    { type: 'AI_OVERVIEW', text: 'Structured E-E-A-T entity cited in Google AI Overview', status: 'CITED', time: '45ms', icon: Sparkles },
  ];

  useEffect(() => {
    const logTimer = setInterval(() => {
      setCrawlerLogIndex((prev) => (prev + 1) % crawlerLogs.length);
    }, 2200);
    return () => clearInterval(logTimer);
  }, [crawlerLogs.length]);

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-100/60 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-50/70 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin" style={{ animationDuration: '4s' }} />
              <span>ADVANCED ALGORITHMIC VISUALIZER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
              See How Our Code-First SEO <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 bg-clip-text text-transparent">Commands Rank #1</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Google doesn&apos;t just read keywords anymore. It measures rendering speed, DOM stability, structured entity schema, and sub-second edge response. Watch our live simulation engine in action.
            </p>
          </div>

          {/* Interactive Simulation Mode Switcher */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto shadow-inner">
            <button
              onClick={() => setActiveMode('serp')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'serp'
                  ? 'bg-white text-purple-700 shadow-md border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span>SERP Rank #1 Climb</span>
            </button>
            <button
              onClick={() => setActiveMode('crawler')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'crawler'
                  ? 'bg-white text-purple-700 shadow-md border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-4 h-4 text-indigo-600" />
              <span>Googlebot Crawler</span>
            </button>
            <button
              onClick={() => setActiveMode('immunity')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'immunity'
                  ? 'bg-white text-purple-700 shadow-md border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Algorithm Immunity</span>
            </button>
          </div>
        </div>

        {/* Visualizer Display Box - 100% Light Theme */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 text-slate-800 shadow-xl shadow-slate-200/60 border border-slate-200 relative overflow-hidden">
          
          {/* Top Terminal Status Header */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-slate-100 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm" />
              </div>
              <span className="text-xs font-mono text-slate-500 border-l border-slate-200 pl-3 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-600" />
                <span>limra-seo-telemetry::v4.2</span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Google SERP Live Stream
              </span>
              <span className="hidden sm:inline text-slate-500">
                Latency: <strong className="text-purple-700">0.24ms</strong>
              </span>
              <span className="hidden sm:inline text-slate-500">
                Core Vitals: <strong className="text-emerald-600">100/100</strong>
              </span>
            </div>
          </div>

          {/* ================= MODE 1: SERP RANK #1 CLIMB SIMULATION ================= */}
          {activeMode === 'serp' && (
            <div className="space-y-6">
              
              {/* Animated Google Search Bar */}
              <div className="bg-slate-50 border border-slate-300 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 shadow-inner">
                <Search className="w-5 h-5 text-purple-600 flex-shrink-0 animate-pulse" />
                <div className="flex-grow font-mono text-sm sm:text-base text-slate-900 font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                  <span>{typedText}</span>
                  <span className="inline-block w-2 h-4 bg-purple-600 ml-1 animate-pulse align-middle" />
                </div>
                <span className="text-[11px] font-mono uppercase bg-purple-100 text-purple-800 border border-purple-200 px-3 py-1 rounded-lg hidden sm:block flex-shrink-0 font-bold">
                  Google Search Live
                </span>
              </div>

              {/* SERP Results Container */}
              <div className="space-y-3.5">
                
                {/* 1. LIMRA CLIENT WEBSITE (Rank Climber) */}
                <div 
                  className={`transition-all duration-700 rounded-2xl p-5 border relative overflow-hidden ${
                    rankPosition === 1 
                      ? 'bg-gradient-to-r from-purple-50/80 via-white to-indigo-50/60 border-2 border-purple-400 shadow-xl shadow-purple-200/50 order-first'
                      : 'bg-slate-50/70 border-slate-200 opacity-70'
                  }`}
                  style={{
                    order: rankPosition,
                    transform: isClimbing ? 'scale(1.015)' : 'scale(1)'
                  }}
                >
                  {/* Glowing Top Ribbon */}
                  {rankPosition === 1 && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-[10px] sm:text-xs px-3.5 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                      <Award className="w-3.5 h-3.5 text-amber-300" />
                      <span>#1 Top Organic Result (0.18s)</span>
                    </div>
                  )}

                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Rank Badge */}
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0 transition-colors ${
                      rankPosition === 1
                        ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-300'
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      #{rankPosition}
                    </div>

                    <div className="flex-grow space-y-2">
                      {/* URL & Breadcrumb */}
                      <div className="flex items-center gap-2 text-xs font-mono text-purple-700 font-semibold">
                        <span>https://limradigitech.com</span>
                        <span className="text-slate-400">&gt;</span>
                        <span className="text-slate-600">enterprise-solutions</span>
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] px-2 py-0.5 rounded font-bold">
                          ⚡ Sub-Second Edge
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 hover:text-purple-700 transition-colors flex items-center gap-2">
                        <span>Limra Digitech | Enterprise Next.js Development &amp; Technical SEO Lab</span>
                        <ExternalLink className="w-4 h-4 text-purple-600 hidden sm:inline" />
                      </h4>

                      {/* Google Snippet & Ratings */}
                      <div className="flex items-center gap-2 text-xs text-amber-500 font-medium">
                        <span className="font-bold">★★★★★</span>
                        <span className="text-slate-700 font-semibold">4.9 (350+ Enterprise Reviews)</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.2 rounded font-mono text-[11px] font-semibold">
                          100% Core Web Vitals Pass
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        India&apos;s leading technical SEO &amp; serverless web engineering firm. We engineer sub-second web applications, schema graphs, and algorithm-immune architecture that compound organic search traffic.
                      </p>

                      {/* Live Dynamic Sitelinks */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                        <div className="bg-white border border-purple-200 hover:border-purple-400 p-2.5 rounded-xl text-left transition-colors shadow-xs">
                          <div className="text-xs font-semibold text-purple-800">Next.js Web Dev</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Sub-Second Apps</div>
                        </div>
                        <div className="bg-white border border-purple-200 hover:border-purple-400 p-2.5 rounded-xl text-left transition-colors shadow-xs">
                          <div className="text-xs font-semibold text-purple-800">Technical SEO</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">#1 Organic Rank</div>
                        </div>
                        <div className="bg-white border border-purple-200 hover:border-purple-400 p-2.5 rounded-xl text-left transition-colors shadow-xs">
                          <div className="text-xs font-semibold text-purple-800">Case Studies</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">384% Traffic MoM</div>
                        </div>
                        <div className="bg-white border border-purple-200 hover:border-purple-400 p-2.5 rounded-xl text-left transition-colors shadow-xs">
                          <div className="text-xs font-semibold text-purple-800">Free Audit</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Instant Diagnostic</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* 2. Competitor Legacy (Rank 2) */}
                <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 text-slate-600 opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      #2
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-slate-400">https://generic-agency-example.com</div>
                      <div className="text-sm font-semibold text-slate-800">Traditional Digital Marketing &amp; WordPress Services</div>
                      <p className="text-xs text-slate-500">Offers general SEO packages, link building lists, and WordPress themes for small businesses...</p>
                      <div className="text-[11px] text-rose-600 font-mono font-medium">⚠️ TTFB: 2.8s | Render Blocking CSS | Missing Schema</div>
                    </div>
                  </div>
                </div>

                {/* 3. Competitor Legacy (Rank 3) */}
                <div className="bg-slate-50/60 border border-slate-200 rounded-xl p-4 text-slate-500 opacity-60">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      #3
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-slate-400">https://old-seo-portal.in</div>
                      <div className="text-sm font-semibold text-slate-700">Directory &amp; Basic SEO Solutions Delhi NCR</div>
                      <div className="text-[11px] text-amber-700 font-mono font-medium">⚠️ CLS Fail (0.34) | Poor Mobile Usability</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Real-Time Metric Ticker */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 text-center">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-xs">
                  <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Avg Organic CTR</div>
                  <div className="text-base font-bold text-emerald-600 mt-0.5">38.4% (Rank #1)</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-xs">
                  <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold">LCP Render Time</div>
                  <div className="text-base font-bold text-purple-700 mt-0.5">0.32s Edge Speed</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-xs">
                  <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Schema Entities</div>
                  <div className="text-base font-bold text-indigo-700 mt-0.5">14 Graphs Validated</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-xs">
                  <div className="text-[10px] text-slate-500 uppercase font-mono font-semibold">Index Velocity</div>
                  <div className="text-base font-bold text-amber-600 mt-0.5">&lt; 4 Minutes New URL</div>
                </div>
              </div>

            </div>
          )}

          {/* ================= MODE 2: GOOGLEBOT CRAWL & INDEXING VISUALIZER ================= */}
          {activeMode === 'crawler' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Animated Node Network (7 cols) */}
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
                
                {/* Node Network Visual Diagram */}
                <div className="relative h-64 sm:h-72 w-full flex items-center justify-center">
                  
                  {/* Background Animated Light Laser Grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
                  
                  {/* Central Googlebot Node */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 border-2 border-purple-300 shadow-xl shadow-purple-300 flex items-center justify-center animate-bounce">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <span className="mt-2 text-xs font-mono font-bold text-purple-900 bg-white px-2.5 py-0.5 rounded border border-purple-200 shadow-xs">
                      Googlebot Spider
                    </span>
                    <span className="text-[10px] text-emerald-700 font-mono font-semibold">Crawl Budget: 100% Active</span>
                  </div>

                  {/* Satellite Node 1: Edge CDN */}
                  <div className="absolute top-4 left-6 sm:left-12 flex flex-col items-center animate-pulse">
                    <div className="w-11 h-11 rounded-xl bg-white border-2 border-cyan-400 text-cyan-600 flex items-center justify-center shadow-md">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-800 font-semibold mt-1">Edge Cache</span>
                    <span className="text-[9px] text-slate-500 font-mono">0.18s TTFB</span>
                  </div>

                  {/* Satellite Node 2: JSON-LD Schema */}
                  <div className="absolute top-4 right-6 sm:right-12 flex flex-col items-center animate-pulse" style={{ animationDelay: '0.4s' }}>
                    <div className="w-11 h-11 rounded-xl bg-white border-2 border-amber-400 text-amber-600 flex items-center justify-center shadow-md">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-amber-800 font-semibold mt-1">JSON-LD Schema</span>
                    <span className="text-[9px] text-slate-500 font-mono">100% Parsed</span>
                  </div>

                  {/* Satellite Node 3: Core Web Vitals */}
                  <div className="absolute bottom-4 left-6 sm:left-12 flex flex-col items-center animate-pulse" style={{ animationDelay: '0.8s' }}>
                    <div className="w-11 h-11 rounded-xl bg-white border-2 border-emerald-400 text-emerald-600 flex items-center justify-center shadow-md">
                      <Activity className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-800 font-semibold mt-1">Core Vitals</span>
                    <span className="text-[9px] text-slate-500 font-mono">Score: 100</span>
                  </div>

                  {/* Satellite Node 4: Knowledge Graph */}
                  <div className="absolute bottom-4 right-6 sm:right-12 flex flex-col items-center animate-pulse" style={{ animationDelay: '1.2s' }}>
                    <div className="w-11 h-11 rounded-xl bg-white border-2 border-purple-400 text-purple-600 flex items-center justify-center shadow-md">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-purple-800 font-semibold mt-1">Knowledge Graph</span>
                    <span className="text-[9px] text-slate-500 font-mono">Authority #1</span>
                  </div>

                  {/* Pulsing Rings Around Center */}
                  <div className="absolute w-44 h-44 rounded-full border border-purple-300 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                  <div className="absolute w-64 h-64 rounded-full border border-indigo-200 pointer-events-none" />

                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-mono">
                  <span>Serverless Edge Crawl: Active</span>
                  <span className="text-emerald-700 font-bold">Zero Render Blocking Scripts</span>
                </div>

              </div>

              {/* Right Column: Live Crawler Request Feed (5 cols) */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                    <span className="text-xs font-mono uppercase text-slate-800 font-bold flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-purple-600 animate-spin" />
                      Live Crawler Request Stream
                    </span>
                    <span className="text-[10px] font-mono text-purple-700 bg-purple-100 px-2 py-0.5 rounded border border-purple-200 font-bold">
                      AUTO-REFRESH
                    </span>
                  </div>

                  {/* Logs List */}
                  <div className="space-y-2.5">
                    {crawlerLogs.map((log, idx) => {
                      const Icon = log.icon;
                      const isCurrent = idx === crawlerLogIndex;
                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border text-xs font-mono transition-all duration-300 ${
                            isCurrent
                              ? 'bg-white border-2 border-purple-400 shadow-md shadow-purple-100'
                              : 'bg-white/80 border-slate-200 text-slate-600'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-purple-800 flex items-center gap-1">
                              <Icon className="w-3.5 h-3.5 text-purple-600" />
                              [{log.type}]
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                              log.status === 'PERFECT' || log.status === 'VALID' || log.status === 'INDEXED'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : 'bg-purple-50 text-purple-700 border-purple-200'
                            }`}>
                              {log.status} ({log.time})
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-700 line-clamp-1 font-medium">
                            {log.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between font-mono">
                  <span>Robots.txt: Disallow 0%</span>
                  <span className="text-emerald-700 font-bold">100% Crawl Efficiency</span>
                </div>

              </div>

            </div>
          )}

          {/* ================= MODE 3: GOOGLE ALGORITHM IMMUNITY SHIELD ================= */}
          {activeMode === 'immunity' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Radar Shield Visual (7 cols) */}
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                    <span className="text-xs font-mono uppercase text-slate-800 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Google Core Update Resilience Radar
                    </span>
                    <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded font-bold">
                      0 Rank Drops
                    </span>
                  </div>

                  {/* 4 Major Google Updates Check */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-white border border-slate-200 p-3.5 rounded-xl hover:border-emerald-500 transition-colors shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">Google Helpful Content</span>
                        <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">+38% Boost</span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1">Deep human editorial authority with verified author E-E-A-T credentials.</p>
                    </div>

                    <div className="bg-white border border-slate-200 p-3.5 rounded-xl hover:border-emerald-500 transition-colors shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">Google Core Algorithm 2026</span>
                        <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">100% Immune</span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1">White-hat digital PR and technical serverless infrastructure.</p>
                    </div>

                    <div className="bg-white border border-slate-200 p-3.5 rounded-xl hover:border-emerald-500 transition-colors shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">SpamBrain &amp; AI Overviews</span>
                        <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">Verified Citation</span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1">Original research data that AI search engines actively reference as source.</p>
                    </div>

                    <div className="bg-white border border-slate-200 p-3.5 rounded-xl hover:border-emerald-500 transition-colors shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">Page Experience &amp; INP</span>
                        <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">100 / 100 Score</span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1">Interaction to Next Paint under 30ms via Next.js React 19 compiler.</p>
                    </div>
                  </div>
                </div>

                {/* Animated Organic Curve */}
                <div className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-xs">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-2">
                    <span>Organic Traffic Curve (Post-Limra Engineering)</span>
                    <span className="text-emerald-700 font-bold">+412% Compounding</span>
                  </div>
                  <div className="w-full h-8 bg-slate-100 rounded-lg overflow-hidden flex items-end px-1 gap-1">
                    {[15, 22, 28, 35, 45, 52, 68, 80, 92, 98, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-purple-500 to-indigo-600 rounded-t transition-all duration-500" 
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Immunity Highlights (5 cols) */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    Permanent Organic Market Share
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Most agencies rely on superficial blog posts and cheap PBN links that get penalized every quarter. Limra builds hard architectural moats:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5 text-xs bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>Zero-JavaScript Payload:</strong> Edge-rendered HTML served in &lt;30ms so Google never exhausts crawl budgets.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>Entity Graph Optimization:</strong> Rich semantic connection between brand, products, and founder entities.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>Editorial Backlink PR:</strong> Natural high-tier citations from Forbes, TechCrunch, and industry publications.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 mt-4">
                  <Link
                    href="/contact-us"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-200"
                  >
                    <span>Request Algorithmic SEO Audit</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
