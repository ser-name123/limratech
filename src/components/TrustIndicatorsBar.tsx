'use client';

import React from 'react';
import { ShieldCheck, Star, Award, CheckCircle2, TrendingUp, Users, Building2, Globe } from 'lucide-react';

export default function TrustIndicatorsBar() {
  const [clientBrands, setClientBrands] = React.useState([
    { name: 'BrightEdge Solutions', sector: 'Enterprise B2B', tag: 'Verified Partner' },
    { name: 'UrbanStyles Retail', sector: 'D2C E-Commerce', tag: 'Shopify & Ads' },
    { name: 'Apex Logistics India', sector: 'Supply Chain & ERP', tag: 'Custom Software' },
    { name: 'MedCare Health Network', sector: 'Healthcare & Apps', tag: 'Mobile & SEO' },
    { name: 'FinCrest Capital', sector: 'FinTech & Advisory', tag: 'Lead Funnels' },
    { name: 'Vanguard Estates', sector: 'Real Estate Group', tag: 'Google & Meta' },
  ]);

  const [stats, setStats] = React.useState({
    projectsDelivered: '500+',
    happyClients: '350+',
    googleRating: '4.9 / 5.0',
    roi: '3.8x Avg',
  });

  React.useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.cms?.clientBrands) && data.cms.clientBrands.length > 0) {
          setClientBrands(data.cms.clientBrands);
        }
        if (data?.cms?.hero?.stats) {
          setStats((prev) => ({
            ...prev,
            projectsDelivered: data.cms.hero.stats.projectsDelivered || prev.projectsDelivered,
            happyClients: data.cms.hero.stats.happyClients || prev.happyClients,
            googleRating: data.cms.hero.stats.googleRating || prev.googleRating,
          }));
        }
      })
      .catch(() => {});
  }, []);

  const proofPoints = [
    { icon: Award, value: stats.projectsDelivered, label: 'Verified Projects Delivered', sub: 'Web, App & Marketing' },
    { icon: Users, value: stats.happyClients, label: 'Active Business Clients', sub: 'Pan-India & Global' },
    { icon: Star, value: stats.googleRating, label: 'Verified Client Rating', sub: 'Google & Clutch Reviews' },
    { icon: TrendingUp, value: stats.roi, label: 'Verified Campaign ROI', sub: 'Performance & Organic' },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Proof Points Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {proofPoints.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-slate-50/90 border border-slate-200 hover:border-purple-300 rounded-2xl p-5 flex items-start gap-4 transition-all shadow-2xs"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">{pt.value}</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">{pt.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{pt.sub}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Client & Partner Logos Showcase */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-700 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Trusted By Verified Enterprises, D2C Brands &amp; High-Growth Startups</span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              100% Authentic &amp; Approved Client Portfolio
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {clientBrands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-purple-300 rounded-xl p-4 flex flex-col justify-between transition-all hover:shadow-md group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Building2 className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                    ✓ {brand.tag}
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {brand.name}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    {brand.sector}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

