'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Terminal, Zap, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AdvancedPreloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [statusMessage, setStatusMessage] = useState('Initializing Next.js 15 Serverless Runtime...');

  useEffect(() => {
    // Check if user already saw the loader in this session to prevent fatigue
    const hasLoaded = sessionStorage.getItem('limra_preloader_seen');
    if (hasLoaded) {
      setShouldRender(false);
      return;
    }

    const checkpoints = [
      { at: 18, msg: 'Connecting Serverless Edge CDN Nodes (Mumbai & Delhi)...' },
      { at: 42, msg: 'Hydrating React 19 & Next.js 15 Engine...' },
      { at: 68, msg: 'Synthesizing JSON-LD Schema & Googlebot Spider Matrix...' },
      { at: 89, msg: 'Benchmarking Core Web Vitals (0.3s Sub-Second Target)...' },
      { at: 100, msg: 'Ready. Sub-Second Experience Initialized.' },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            sessionStorage.setItem('limra_preloader_seen', 'true');
            // Remove from DOM after exit slide animation completes (700ms)
            setTimeout(() => setShouldRender(false), 750);
          }, 400);
          return 100;
        }

        // Variable incremental speed for organic, high-tech loading feel
        const jump = prev < 50 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 6;
        const nextVal = Math.min(prev + jump, 100);

        // Update technical status message
        for (let i = checkpoints.length - 1; i >= 0; i--) {
          if (nextVal >= checkpoints[i].at) {
            setStatusMessage(checkpoints[i].msg);
            break;
          }
        }

        return nextVal;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-white text-slate-800 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isComplete ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      aria-label="Loading Limra Digitech Web Engine"
      role="status"
    >
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-cyan-100/30 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between border-b border-slate-100/80">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <Terminal className="w-3.5 h-3.5 text-purple-600" />
          <span>limra-loader::edge-runtime-v15</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>SYS_BOOT: ACTIVE</span>
        </div>
      </div>

      {/* Center Brand & Radar Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-4">
        
        {/* Orbital Pulse Rings */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Animated SVG Ring */}
          <svg className="w-44 h-44 sm:w-52 sm:h-52 animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#purpleGradient)"
              strokeWidth="2.5"
              strokeDasharray="70 200"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo Container */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative w-28 sm:w-32 h-14 sm:h-16 flex items-center justify-center">
              <Image
                src="/limra-logo.png"
                alt="LIMRA Digitech"
                width={150}
                height={65}
                priority
                className="w-auto h-full object-contain filter drop-shadow-sm transition-transform duration-500 scale-100"
              />
            </div>
          </div>
        </div>

        {/* Big Counter Percentage */}
        <div className="text-center space-y-2">
          <div className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 bg-clip-text text-transparent font-mono">
            {progress.toString().padStart(2, '0')}%
          </div>

          {/* Technical Status Message */}
          <div className="h-6 flex items-center justify-center">
            <span className="text-xs sm:text-sm font-mono text-slate-600 transition-all duration-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin" style={{ animationDuration: '3s' }} />
              <span>{statusMessage}</span>
            </span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full max-w-md mt-6 px-4">
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/80 p-0.5 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-full transition-all duration-150 ease-out shadow-sm shadow-purple-500/50"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Micro badges below progress bar */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-2.5 px-1">
            <span className="flex items-center gap-1 text-slate-500">
              <Zap className="w-3 h-3 text-amber-500" />
              <span>Edge Cached</span>
            </span>
            <span className="text-purple-600 font-semibold">
              Sub-Second Next.js
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>SSL 256-Bit</span>
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Footer Info */}
      <div className="relative z-10 p-6 sm:p-8 border-t border-slate-100/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
          <span>India&apos;s Elite Technical SEO &amp; Serverless Web Lab</span>
        </div>
        <div className="text-[11px] text-slate-400">
          Rank #1 Google &bull; Core Web Vitals 100/100
        </div>
      </div>

    </div>
  );
}
