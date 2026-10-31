'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ShoppingBag, 
  Stethoscope, 
  Landmark, 
  GraduationCap, 
  Truck, 
  Plane, 
  Cpu, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

export default function IndustriesSection() {
  const defaultIndustries = [
    {
      slug: 'ecommerce-d2c-retail',
      icon: ShoppingBag,
      title: 'E-Commerce & D2C Retail',
      desc: 'Shopify, WooCommerce, Magento, and headless Next.js stores with omnichannel performance marketing.',
      tags: ['Shopify Plus', 'WooCommerce', 'ROAS Ads']
    },
    {
      slug: 'fintech-banking-insurance',
      icon: Landmark,
      title: 'FinTech, Banking & Advisory',
      desc: 'High-trust web portals, secure API architectures, and compliant lead generation funnels.',
      tags: ['Secure Portals', 'High-Intent SEO', 'Lead Gen']
    },
    {
      slug: 'healthcare-hospitals-clinics',
      icon: Stethoscope,
      title: 'Healthcare, Clinics & MedTech',
      desc: 'Patient appointment apps, clinic local SEO (GMB 3-Pack), and HIPAA-ready web platforms.',
      tags: ['Local SEO', 'Patient Apps', 'ORM']
    },
    {
      slug: 'real-estate-construction',
      icon: Building2,
      title: 'Real Estate & Construction',
      desc: 'Property showcase portals, Meta & Google buyer lead campaigns, and interactive virtual tour UX.',
      tags: ['Meta Lead Ads', 'Property CRM', 'Google PPC']
    },
    {
      slug: 'edtech-education-coaching',
      icon: GraduationCap,
      title: 'EdTech, Coaching & Universities',
      desc: 'LMS web applications, student enrollment funnels, YouTube content marketing, and mobile apps.',
      tags: ['LMS Software', 'Android/iOS', 'YouTube Ads']
    },
    {
      slug: 'manufacturing-b2b-logistics',
      icon: Truck,
      title: 'Manufacturing, Logistics & B2B',
      desc: 'Custom ERP/inventory software, pan-India industrial SEO, and B2B RFQ generation engines.',
      tags: ['Custom ERP', 'B2B Funnels', 'Laravel/Node']
    },
    {
      slug: 'hospitality-travel-restaurants',
      icon: Plane,
      title: 'Travel, Hospitality & Restaurants',
      desc: 'Direct booking engines, Google Business Profile dominance, social media reels, and branding.',
      tags: ['Booking Engine', 'Social Media', 'GMB Rank']
    },
    {
      slug: 'saas-it-startups',
      icon: Cpu,
      title: 'SaaS, IT & Startups',
      desc: 'Full-stack Next.js & Supabase product engineering, UI/UX design systems, and growth marketing.',
      tags: ['Next.js 16', 'Figma UI/UX', 'SaaS Growth']
    },
  ];

  const [industries, setIndustries] = React.useState(defaultIndustries);

  React.useEffect(() => {
    fetch('/api/admin')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.cms?.industries) && data.cms.industries.length > 0) {
          const iconPool = [ShoppingBag, Landmark, Stethoscope, Building2, GraduationCap, Truck, Plane, Cpu];
          setIndustries(
            data.cms.industries.map((ind: any, idx: number) => ({
              slug: ind.slug,
              icon: iconPool[idx % iconPool.length],
              title: ind.title,
              desc: ind.shortDesc || ind.heroDescription || '',
              tags: Array.isArray(ind.techStack) ? ind.techStack.slice(0, 3) : ['Next.js', 'SEO', 'Growth'],
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
              Tailored Digital &amp; Technology Solutions Across 8+ Verticals
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Every industry has unique customer buying cycles and technical requirements. We customize our web development, software, and digital marketing playbooks to fit your market.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <span>Explore All Industries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Link
                key={idx}
                href={`/industries/${ind.slug}`}
                className="bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg shadow-xs"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-purple-100/80 border border-purple-200 text-purple-700 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {ind.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-200/70">
                  <div className="flex flex-wrap gap-1.5">
                    {ind.tags.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-[10px] font-mono font-medium text-purple-700 bg-purple-50 border border-purple-200/80 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-purple-700">
                    <span>View Sector Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
