'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function TechStackEcosystem() {
  const [filter, setFilter] = useState('all');

  const tools = [
    { name: 'Next.js 15', category: 'frontend', role: 'Serverless SSR & SSG Framework', badge: 'Core' },
    { name: 'React 19', category: 'frontend', role: 'Concurrent UI Library', badge: 'Core' },
    { name: 'TypeScript', category: 'frontend', role: 'Type-Safe Architecture', badge: 'Standard' },
    { name: 'Tailwind CSS', category: 'frontend', role: 'Zero-Runtime CSS Utility', badge: 'Styling' },
    { name: 'Supabase', category: 'backend', role: 'Real-time PostgreSQL Cloud Database', badge: 'Core' },
    { name: 'Node.js', category: 'backend', role: 'Microservices & API Edge Workers', badge: 'Runtime' },
    { name: 'Python', category: 'backend', role: 'Data Mining & Programmatic Scripts', badge: 'Automation' },
    { name: 'PostgreSQL', category: 'backend', role: 'ACID Relational Data Engine', badge: 'Database' },
    { name: 'Google Search Console', category: 'seo', role: 'Indexing & Performance Verification', badge: 'SEO' },
    { name: 'Ahrefs & Semrush', category: 'seo', role: 'Competitive Gap & Backlink Analysis', badge: 'SEO' },
    { name: 'Google Analytics 4', category: 'seo', role: 'Full-Funnel Conversion Tracking', badge: 'Analytics' },
    { name: 'Meta Business Manager', category: 'seo', role: 'Performance Ad Retargeting', badge: 'Ads' },
    { name: 'Vercel Edge Cloud', category: 'cloud', role: 'Global CDN & Serverless Compute', badge: 'DevOps' },
    { name: 'Docker', category: 'cloud', role: 'Containerized Enterprise Workflows', badge: 'Cloud' },
    { name: 'AWS Lambda / S3', category: 'cloud', role: 'Asset Storage & Cloud Computing', badge: 'Cloud' },
    { name: 'Figma', category: 'frontend', role: 'Interactive UI/UX & Design Systems', badge: 'Design' },
  ];

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & Supabase' },
    { id: 'seo', label: 'SEO & Analytics' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
  ];

  const filtered = filter === 'all' ? tools : tools.filter(t => t.category === filter);

  return (
    <section className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>TECHNOLOGICAL ECOSYSTEM</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            Tools &amp; Frameworks We Have Mastered
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            We avoid outdated tech. Our modern stack gives you unmatched speed, security, and organic search immunity.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'bg-white text-slate-600 hover:text-purple-700 hover:bg-purple-50 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-purple-300 transition-all duration-200 group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {tool.name}
                  </h4>
                  <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    {tool.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal font-normal">
                  {tool.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
