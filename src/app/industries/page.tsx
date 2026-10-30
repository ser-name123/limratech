'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Landmark, 
  Stethoscope, 
  Building2, 
  GraduationCap, 
  Truck, 
  Plane, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  ChevronDown 
} from 'lucide-react';
import TechStackTicker from '@/components/TechStackTicker';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ContactCta from '@/components/ContactCta';
import ComparisonMatrix from '@/components/ComparisonMatrix';

export default function IndustriesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const industryDeepDives = [
    {
      slug: 'ecommerce-d2c-retail',
      icon: ShoppingBag,
      title: 'E-Commerce, D2C & Retail Brands',
      subtitle: 'Shopify, WooCommerce, Magento & Headless Next.js Storefronts',
      desc: 'We help D2C and retail brands eliminate cart abandonment, scale ROAS via Meta & Google Shopping Ads, and deploy sub-second storefronts.',
      deliverables: [
        'Shopify Plus, WooCommerce & Magento Custom Storefronts',
        'Razorpay, Stripe, Shiprocket & ERP Inventory Sync',
        'Performance Max, Meta Catalog Ads & Retargeting Funnels',
        'Product Schema Markup & Category SEO Dominance'
      ],
      metric: '+64% Avg Checkout Conversion'
    },
    {
      slug: 'fintech-banking-insurance',
      icon: Landmark,
      title: 'FinTech, Banking, Insurance & Wealth',
      subtitle: 'High-Trust Web Portals, Secure APIs & Qualified Financial Leads',
      desc: 'Financial brands require ironclad security, regulatory compliance, and authoritative search visibility to win high-net-worth and retail clients.',
      deliverables: [
        'Custom Next.js & PHP/Laravel Financial Calculators & Portals',
        '256-Bit SSL, OAuth2 & Encrypted PostgreSQL Databases',
        'High-Intent Google Search PPC & LinkedIn B2B Lead Funnels',
        'E-E-A-T Compliant Financial Content & Reputation Management'
      ],
      metric: '4.2x Verified Lead ROI'
    },
    {
      slug: 'healthcare-hospitals-clinics',
      icon: Stethoscope,
      title: 'Healthcare, Hospitals, Clinics & MedTech',
      subtitle: 'Patient Booking Apps, Local GMB 3-Pack SEO & Telemedicine',
      desc: 'From multi-specialty hospitals to diagnostic labs and clinics, we build frictionless patient scheduling platforms and dominate local search.',
      deliverables: [
        'Android & iOS Patient Appointment & Telehealth Mobile Apps',
        'Google Business Profile (GMB) Local 3-Pack Map Dominance',
        'Online Reputation Management (ORM) & Verified Patient Reviews',
        'Custom HMS / EMR Portal & Lab Report Automation'
      ],
      metric: '+310% Patient Inquiries'
    },
    {
      slug: 'real-estate-construction',
      icon: Building2,
      title: 'Real Estate, Developers & Commercial Property',
      subtitle: 'High-Intent Buyer Funnels, Property Portals & Virtual Showcases',
      desc: 'Generate verified site-visit bookings and NRI inquiries for luxury residential, commercial, and plotted real estate developments.',
      deliverables: [
        'Interactive Project Microsites & Floor-Plan Portals',
        'Meta Lead Generation & Google High-Intent Search Campaigns',
        'Automated CRM Sync (Sell.Do, Zoho, HubSpot) & WhatsApp Drip',
        '3D Motion Graphics, Walkthrough Videos & Print Brochures'
      ],
      metric: '-45% Cost Per Site Visit'
    },
    {
      slug: 'edtech-education-coaching',
      icon: GraduationCap,
      title: 'EdTech, Universities, Coaching & Training',
      subtitle: 'LMS Platforms, Student Enrollment Funnels & YouTube Growth',
      desc: 'Scale student admissions and course sales with interactive learning apps, high-retention YouTube marketing, and automated admission pipelines.',
      deliverables: [
        'Custom Web & Mobile Learning Management Systems (LMS)',
        'Student Admission Lead Funnels & Webinar Registration Pages',
        'YouTube Channel SEO, Video Editing & Paid Education Ads',
        'Automated Fee Payment Gateways & Student Dashboards'
      ],
      metric: '3.9x Student Enrollment Lift'
    },
    {
      slug: 'manufacturing-b2b-logistics',
      icon: Truck,
      title: 'Manufacturing, Industrial B2B & Logistics',
      subtitle: 'Custom ERP Software, Export SEO & B2B RFQ Lead Generation',
      desc: 'Modernize industrial operations with custom ERP/inventory software and capture domestic and international bulk buyers on Google.',
      deliverables: [
        'Custom B2B Product Catalogs & Request-for-Quote (RFQ) Engines',
        'National & International Export SEO for Industrial Keywords',
        'Custom Supply Chain, Fleet & Warehouse Management Software',
        'Corporate Pitch Decks, Industrial Print Catalogs & Packaging'
      ],
      metric: '85+ Top-3 B2B Keywords'
    },
    {
      slug: 'hospitality-travel-restaurants',
      icon: Plane,
      title: 'Hospitality, Travel, Hotels & Restaurants',
      subtitle: 'Direct Booking Engines, Social Media Reels & Local Visibility',
      desc: 'Reduce third-party aggregator commissions by driving direct bookings through high-converting websites, GMB optimization, and viral social creatives.',
      deliverables: [
        'Direct Hotel & Tour Package Booking Websites with Payment Sync',
        'Instagram Reels, Motion Graphics & Influencer Content Kits',
        'Google Business Profile, TripAdvisor & ORM Review Growth',
        'Seasonal Performance Marketing & Retargeting Campaigns'
      ],
      metric: '+190% Direct Bookings'
    },
    {
      slug: 'saas-it-startups',
      icon: Cpu,
      title: 'SaaS, IT Enterprises & Funded Startups',
      subtitle: 'Full-Stack Product Engineering, UI/UX Systems & Growth Marketing',
      desc: 'Launch and scale your software product with modern Next.js + Supabase cloud engineering, Figma design systems, and B2B pipeline marketing.',
      deliverables: [
        'Multi-Tenant SaaS Architecture (Next.js, TypeScript, Supabase)',
        'Comprehensive Figma UI/UX Design Systems & Interactive Prototypes',
        'Product-Led SEO, Comparison Pages & Technical Documentation',
        'Free-Trial & Demo Booking Performance Funnels'
      ],
      metric: '< 0.3s Global Edge Speed'
    },
  ];

  const industryFaqs = [
    {
      q: 'Do you customize your digital marketing and web strategy for each industry?',
      a: 'Yes. B2B manufacturing requires long-cycle RFQ funnels and technical specification SEO, whereas D2C e-commerce demands impulse-ready social creatives, Shopify speed optimization, and catalog retargeting. Every blueprint is custom-engineered for your vertical.'
    },
    {
      q: 'Can you integrate with industry-specific CRM and ERP software?',
      a: 'Absolutely. Our software developers integrate seamlessly with Zoho, HubSpot, Salesforce, Tally, Shiprocket, Sell.Do, Practo, and custom REST/GraphQL enterprise APIs.'
    },
    {
      q: 'Do you have approved case studies and references in our sector?',
      a: 'Yes. We have delivered 500+ projects across 350+ clients spanning e-commerce, fintech, real estate, healthcare, education, and B2B manufacturing. Contact us for sector-specific case studies.'
    },
    {
      q: 'Can we start with one service (e.g., Website Development) and scale into SEO & Ads later?',
      a: 'Yes! Many clients begin with a website rebuild or custom software project and transition into a monthly SEO, Google Ads, and lead generation retainer post-launch.'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-5 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            INDUSTRIES WE SERVE
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight max-w-5xl mx-auto leading-tight">
            Domain-Specific Web, Software &amp; Digital Marketing Solutions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            From high-velocity D2C e-commerce and real estate to enterprise B2B manufacturing, healthcare, and FinTech — LIMRA Digitech engineers custom growth engines tailored to your industry.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact-us"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-purple-200 flex items-center gap-2"
            >
              <span>Request Industry Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="bg-white border border-slate-200 hover:border-purple-300 text-slate-800 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs"
            >
              <span>View Sector Case Studies</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Live Tech Stack Ticker */}
      <TechStackTicker />

      {/* 3. Verified Cross-Industry Impact Metrics */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl sm:text-4xl font-black text-purple-700 font-mono">8+</div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase">Core Industry Verticals</div>
              <p className="text-[11px] text-slate-500 mt-1">B2B, D2C, FinTech, Health &amp; Real Estate</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">500+</div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase">Successful Deployments</div>
              <p className="text-[11px] text-slate-500 mt-1">Websites, Apps, Funnels &amp; Software</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl sm:text-4xl font-black text-indigo-700 font-mono">3.8x</div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase">Average Client ROI</div>
              <p className="text-[11px] text-slate-500 mt-1">Across SEO, Google Ads &amp; Meta Leads</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl sm:text-4xl font-black text-amber-600 font-mono">98.4%</div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase">Client Retention Rate</div>
              <p className="text-[11px] text-slate-500 mt-1">Long-Term Growth Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deep-Dive 8 Industry Verticals Grid */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
              SECTOR PLAYBOOKS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight">
              Specialized Digital Architecture For Your Vertical
            </h2>
            <p className="text-sm text-slate-600">
              Explore the exact deliverables, tech stacks, and marketing funnels we deploy for each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industryDeepDives.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center p-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-purple-700 mt-1 mb-3">
                      {item.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-6">
                      {item.deliverables.map((d, di) => (
                        <div key={di} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/industries/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900"
                    >
                      <span>Explore {item.title.split(',')[0]} Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-slate-400">Sector // 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. B2B vs D2C Funnel Matrix */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              STRATEGIC ADAPTABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How We Tailor Funnels For B2B vs. B2C / D2C
            </h2>
            <p className="text-sm text-slate-600">
              Different buyer journeys require distinct technical architectures and conversion triggers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-4">
              <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                B2B ENTERPRISE &amp; HIGH-TICKET SERVICES
              </span>
              <h3 className="text-lg font-bold text-slate-900">Lead Qualification &amp; Authority Pipeline</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>High-intent Google Search PPC &amp; LinkedIn decision-maker targeting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Multi-step RFQ &amp; consultation funnels with CRM &amp; WhatsApp automation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Technical whitepapers, case study hubs &amp; nationwide B2B SEO</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-4">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                D2C E-COMMERCE &amp; CONSUMER BRANDS
              </span>
              <h3 className="text-lg font-bold text-slate-900">High-Velocity Checkout &amp; Omnichannel ROAS</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Sub-second Shopify, WooCommerce &amp; custom headless storefronts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Meta Ads, Google Shopping, YouTube shorts &amp; dynamic retargeting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>One-click UPI/Razorpay checkout, packaging design &amp; retention flows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comparison Matrix */}
      <ComparisonMatrix />

      {/* 7. Compliance, Security & Data Privacy Across Regulated Sectors */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-white border border-purple-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-700 uppercase">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Regulated Industry Compliance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Built For Security-First Sectors (FinTech, Healthcare &amp; Enterprise)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We enforce strict SSL encryption, role-based access control (RBAC), sanitized SQL queries, and bilateral NDAs across every industry engagement.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-purple-200 flex-shrink-0"
            >
              <span>Speak With An Industry Lead</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Case Studies */}
      <CaseStudies />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Industry FAQs */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              INDUSTRY FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About Sector Solutions
            </h2>
          </div>

          <div className="space-y-3.5">
            {industryFaqs.map((faq, index) => (
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Contact CTA */}
      <ContactCta />

    </div>
  );
}

