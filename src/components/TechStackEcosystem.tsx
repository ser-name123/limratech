'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { homeWidgetsContent } from '@/data/pages/homeWidgets';

export default function TechStackEcosystem() {
  const [filter, setFilter] = useState('all');
  const [wc, setWc] = useState(homeWidgetsContent.techEcosystem);
  useEffect(() => {
    fetch('/api/admin')
      .then((r) => r.json())
      .then((d) => { if (d?.cms?.pageSections?.homeWidgets?.techEcosystem) setWc(d.cms.pageSections.homeWidgets.techEcosystem); })
      .catch(() => {});
  }, []);

  const tools = [
    { name: 'Next.js & React', category: 'web', role: 'Serverless SSR, SSG & Web Applications', badge: 'Core Web' },
    { name: 'WordPress & WooCommerce', category: 'cms', role: 'Custom CMS Themes & E-Commerce Stores', badge: 'CMS' },
    { name: 'Shopify & Shopify Plus', category: 'cms', role: 'High-Converting Retail & D2C Storefronts', badge: 'E-Commerce' },
    { name: 'PHP & Laravel', category: 'web', role: 'Enterprise Web Portals & Custom MVC Backend', badge: 'Backend' },
    { name: 'Magento Commerce', category: 'cms', role: 'Multi-Vendor & Large Catalog E-Commerce', badge: 'Enterprise' },
    { name: 'TypeScript & Tailwind CSS', category: 'web', role: 'Type-Safe Code & Modern Responsive UI', badge: 'Frontend' },
    { name: 'Supabase & PostgreSQL', category: 'web', role: 'Real-Time Cloud Database & Authentication', badge: 'Database' },
    { name: 'Android (Kotlin / Java)', category: 'mobile', role: 'Native Android Mobile Applications', badge: 'Android' },
    { name: 'iOS (Swift) & Flutter', category: 'mobile', role: 'iPhone/iPad & Cross-Platform Mobile Apps', badge: 'iOS & Cross' },
    { name: 'React Native', category: 'mobile', role: 'Unified Cross-Platform Mobile Engineering', badge: 'Mobile' },
    { name: 'Google Ads & PPC / SEM', category: 'marketing', role: 'High-Intent Search, Display & PMax Funnels', badge: 'Paid Ads' },
    { name: 'Meta Ads & Lead Funnels', category: 'marketing', role: 'Facebook & Instagram Lead Generation', badge: 'Lead Gen' },
    { name: 'SEO, GMB & ORM Suite', category: 'marketing', role: 'Organic Rank #1, Local Maps & Reputation', badge: 'Organic SEO' },
    { name: 'YouTube & Content Engine', category: 'marketing', role: 'Video Marketing, Shorts & Editorial Growth', badge: 'Content' },
    { name: 'Figma & Adobe Creative Cloud', category: 'design', role: 'UI/UX, Branding, Print & Packaging Design', badge: 'Creative' },
    { name: 'After Effects & Motion 3D', category: 'design', role: 'Motion Graphics, Explainer Videos & Reels', badge: 'Video Design' },
  ];

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'web', label: 'Web, PHP & Cloud' },
    { id: 'cms', label: 'WordPress, Shopify & E-Com' },
    { id: 'mobile', label: 'Android & iOS Apps' },
    { id: 'marketing', label: 'SEO, Ads & Lead Gen' },
    { id: 'design', label: 'UI/UX, Print & Motion' },
  ];

  const filtered = filter === 'all' ? tools : tools.filter(t => t.category === filter);

  return (
    <section className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{wc.eyebrow}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
            {wc.heading}
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            {wc.description}
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
