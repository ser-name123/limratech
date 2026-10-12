'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Link2, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  FileText,
  LineChart
} from 'lucide-react';

export default function SeoPillarsGrid() {
  const seoModules = [
    {
      icon: Search,
      title: 'Technical Site Audits & Crawlability',
      desc: 'Eliminating indexation traps, 404 chains, render-blocking scripts, and duplicate canonicals that handicap your organic ranking potential.',
      metrics: '100% Crawl Efficiency'
    },
    {
      icon: Target,
      title: 'Commercial Intent & Keyword Clusters',
      desc: 'Mapping high-value transactional search terms rather than useless informational queries, ensuring your rankings drive ready-to-buy prospects.',
      metrics: 'High Buyer Intent'
    },
    {
      icon: Link2,
      title: 'High-DA White-Hat Backlink Velocity',
      desc: 'Earning authoritative digital PR placements and contextual editorial mentions that build permanent domain authority in Google eyes.',
      metrics: 'DA 50+ Focus'
    },
    {
      icon: MapPin,
      title: 'Google Maps & Local 3-Pack Dominance',
      desc: 'Dominating local search queries across Indian metro locations with structured NAP citations, verified GMB reviews, and local geotargeting.',
      metrics: '#1 Local Map Rank'
    },
    {
      icon: FileText,
      title: 'E-E-A-T Content Strategy & AI Immunity',
      desc: 'Creating authoritative, deeply researched editorial content that Google Helpful Content algorithms reward and AI Overviews cite.',
      metrics: 'Helpful Content Compliant'
    },
    {
      icon: LineChart,
      title: 'Real-Time SERP Rank Attribution',
      desc: 'Continuous keyword position tracking, competitor backlink alerting, and transparent revenue conversion attribution via GA4.',
      metrics: '24/7 Live Monitoring'
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full inline-block">
              SEARCH ENGINE DOMINANCE
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
              Our 6-Pillar Technical SEO Engine
            </h2>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              We go far beyond basic title tags and meta descriptions. Our SEO engineers build enduring search engine immunity that generates millions in organic pipeline value.
            </p>
          </div>

          <Link
            href="/digital-marketing-agency-india"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <span>Explore Full SEO Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoModules.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      {item.metrics}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> High-Impact Factor
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">0{i + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
