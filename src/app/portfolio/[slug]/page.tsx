import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Layers, 
  BarChart3, 
  Building2, 
  Award 
} from 'lucide-react';
import { caseStudiesData } from '@/data/mockData';
import TechStackTicker from '@/components/TechStackTicker';
import Testimonials from '@/components/Testimonials';
import ContactCta from '@/components/ContactCta';

interface CaseStudyDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((c) => c.slug === slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | LIMRA Digitech',
    };
  }

  return {
    title: `${study.title} (${study.client}) | Case Study`,
    description: `${study.description} Verified Result: ${study.results}.`,
    openGraph: {
      title: `${study.title} | LIMRA Digitech Case Study`,
      description: study.description,
      images: [study.image_url],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailProps) {
  const { slug } = await params;
  const study = caseStudiesData.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  const otherStudies = caseStudiesData.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Hero Header & Client Breadcrumb */}
      <section className="py-16 lg:py-20 bg-white cyber-grid border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 space-y-5">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-700 hover:text-purple-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&larr; Back to All Portfolio Case Studies</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
              {study.tag}
            </span>
            <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold px-3 py-1 rounded-full">
              Verified Client: {study.client}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            {study.description}
          </p>

          {study.results && (
            <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-2xs">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Primary Outcome: {study.results}</span>
            </div>
          )}
        </div>
      </section>

      {/* 2. Live Tech Stack Ticker */}
      <TechStackTicker />

      {/* 3. High-Resolution Approved Project Showcase Banner */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="relative h-72 sm:h-[420px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
            <Image
              src={study.image_url}
              alt={`${study.title} - ${study.client} Case Study by LIMRA Digitech`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
            <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/70 p-4 rounded-2xl text-white text-xs">
              <div>
                <span className="text-slate-400 font-mono text-[10px] uppercase block">CLIENT PARTNER</span>
                <span className="font-bold text-sm">{study.client}</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10px] uppercase block">PRACTICE AREA</span>
                <span className="font-bold text-purple-300 uppercase">{study.tag}</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10px] uppercase block">VERIFIED IMPACT</span>
                <span className="font-bold text-emerald-400">{study.results}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Executive KPI & ROI Impact Metrics */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <Zap className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">0.28s</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Post-Launch LCP Speed</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <TrendingUp className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">3.8x+</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Return On Ad / SEO Spend</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <BarChart3 className="w-5 h-5 text-purple-600 mx-auto mb-1.5" />
              <div className="text-2xl sm:text-3xl font-black text-purple-700 font-mono">100/100</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Core Web Vitals Score</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-cyan-600 mx-auto mb-1.5" />
              <div className="text-2xl sm:text-3xl font-black text-indigo-700 font-mono">99.98%</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Production Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Business Challenge & Legacy Bottlenecks */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full uppercase">
              01. THE CHALLENGE
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Bottlenecks Prior To Partnering With LIMRA Digitech
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Before engaging our engineering and growth team, {study.client} faced slow page rendering, high cost-per-acquisition on unoptimized landing pages, and fragmented analytics tracking that obscured true sales attribution.
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">✕</span><span>High mobile bounce rates due to 4.1s+ legacy load times</span></li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">✕</span><span>Missing structured JSON-LD schema and weak commercial keyword coverage</span></li>
              <li className="flex items-start gap-2"><span className="text-rose-500 font-bold">✕</span><span>Manual lead handling without automated CRM or WhatsApp routing</span></li>
            </ul>
          </div>

          {/* 6. The Architectural & Growth Solution */}
          <div className="space-y-4 bg-purple-50/60 p-6 sm:p-7 rounded-3xl border border-purple-200">
            <span className="text-xs font-mono font-bold text-purple-700 bg-white border border-purple-200 px-3 py-1 rounded-full uppercase">
              02. THE LIMRA SOLUTION
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Full-Stack Re-Architecture &amp; Funnel Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We deployed a conversion-engineered web architecture paired with hyper-targeted search/social acquisition and real-time GA4 + CRM attribution.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-800 font-medium">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Sub-second responsive UI passing all Google Core Web Vitals</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>High-intent keyword cluster mapping &amp; multi-step conversion funnels</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Instant webhook sync with CRM &amp; WhatsApp for sub-5-minute sales follow-up</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Technology & Marketing Stack Deployed */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Layers className="w-4 h-4" />
            <span>03. Technologies &amp; Channels Deployed</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {['Next.js / Modern Web', 'Technical SEO Schema', 'Google Search & PMax Ads', 'Meta Lead Funnels', 'GA4 Server-Side Tracking', 'CRM & WhatsApp API', 'Figma UI/UX System', 'Cloud CDN Edge'].map((tech, i) => (
              <span key={i} className="bg-white border border-slate-200 hover:border-purple-300 px-4 py-2 rounded-xl text-xs font-mono font-bold text-slate-800 shadow-2xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Related Case Studies */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">More Verified Case Studies</h2>
            <Link href="/portfolio" className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherStudies.map((cs) => (
              <Link
                key={cs.id}
                href={`/portfolio/${cs.slug}`}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-purple-700 uppercase">{cs.client}</span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 mt-1 mb-2 line-clamp-2">{cs.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2">{cs.description}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/80 text-[11px] font-bold text-emerald-700 flex items-center justify-between">
                  <span>{cs.results}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Verified Client Testimonials */}
      <Testimonials />

      {/* 10. Contact Lead Form */}
      <ContactCta />

    </div>
  );
}
