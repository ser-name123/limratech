'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Map, 
  Globe, 
  Code2, 
  BookOpen, 
  Scale, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ExternalLink 
} from 'lucide-react';
import { servicesData, blogPostsData, caseStudiesData } from '@/data/mockData';
import TechStackTicker from '@/components/TechStackTicker';
import ContactCta from '@/components/ContactCta';

export default function HtmlSitemapPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const mainPages = [
    { name: 'Home Page', href: '/', desc: 'Main overview, interactive SEO tools, services & proof points' },
    { name: 'About LIMRA Digitech', href: '/about', desc: 'Company story, core values, leadership & engineering lab' },
    { name: 'All Services Directory', href: '/services', desc: 'Complete catalog of web, marketing, design, app & software solutions' },
    { name: 'Industries We Serve', href: '/industries', desc: 'Tailored solutions for E-Commerce, FinTech, Healthcare, Real Estate & B2B' },
    { name: 'Technology Stack', href: '/technologies', desc: 'Next.js, WordPress, Shopify, PHP, Laravel, Magento, Android/iOS & MarTech' },
    { name: 'Portfolio & Case Studies', href: '/portfolio', desc: 'Verified client results, metrics, and before/after transformations' },
    { name: 'Clients & Testimonials', href: '/clients', desc: 'Verified client reviews, retention stats, and engagement models' },
    { name: 'Blogs & Insights', href: '/blogs', desc: 'SEO teardowns, Google algorithm updates, and digital marketing guides' },
    { name: 'Careers at LIMRA', href: '/careers', desc: 'Open engineering, design, and digital marketing positions' },
    { name: 'Contact Us / Get a Quote', href: '/contact-us', desc: 'Direct enquiry form, strategy phone desk & WhatsApp consultation' },
  ];

  const sitemapFaqs = [
    {
      q: 'Where can search engines find the machine-readable XML Sitemap?',
      a: 'Search engine crawlers (Googlebot, Bingbot) can access our dynamically generated XML Sitemap at https://limradigitech.com/sitemap.xml and crawl rules at https://limradigitech.com/robots.txt.'
    },
    {
      q: 'What happens if an old URL from our previous website structure is visited?',
      a: 'We maintain permanent 301 redirects for legacy URLs (such as /about-us, /contact, /blog, /our-services, /web-development) so bookmarks and backlinks resolve cleanly with zero broken links.'
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Hero Header */}
      <section className="py-16 lg:py-20 bg-white cyber-grid border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            COMPLETE SITE ARCHITECTURE
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            LIMRA Digitech HTML &amp; XML Sitemap
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Navigate every page, service specialization, blog insight, and legal policy across limradigitech.com.
          </p>
        </div>
      </section>

      {/* 2. Ticker */}
      <TechStackTicker />

      {/* 3. Crawler & XML Sitemap Bar */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Map className="w-6 h-6 text-purple-700 flex-shrink-0" />
              <div>
                <h2 className="text-sm font-bold text-slate-900">Search Engine XML Sitemap &amp; Robots.txt</h2>
                <p className="text-xs text-slate-600">Direct machine-readable feeds for Google Search Console indexing.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="/sitemap.xml" className="bg-white border border-purple-300 text-purple-700 px-4 py-2 rounded-xl text-xs font-mono font-bold hover:bg-purple-100 transition-colors flex items-center gap-1.5">
                <span>/sitemap.xml</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href="/robots.txt" className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-xl text-xs font-mono font-bold hover:bg-slate-100 transition-colors flex items-center gap-1.5">
                <span>/robots.txt</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Website Pages Directory */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Globe className="w-4 h-4" />
            <span>01. Primary Website Pages</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainPages.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-slate-900 group-hover:text-purple-700">{p.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-slate-500">{p.desc}</p>
                <span className="text-[10px] font-mono text-purple-700 mt-2 block">{p.href}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dedicated Service Pages & Sub-Services */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Code2 className="w-4 h-4" />
            <span>02. Dedicated Service Pages &amp; Capabilities</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((svc) => (
              <div key={svc.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <Link href={`/${svc.slug}`} className="text-base font-bold text-slate-900 hover:text-purple-700 flex items-center justify-between">
                  <span>{svc.title}</span>
                  <ArrowRight className="w-4 h-4 text-purple-600" />
                </Link>
                <div className="text-[11px] font-mono text-purple-700">/{svc.slug}</div>
                <ul className="space-y-1.5 pt-2 border-t border-slate-200/80 text-xs text-slate-600">
                  {svc.sub_services?.map((sub, si) => (
                    <li key={si} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{sub.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Blog Articles & Editorial Insights */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <BookOpen className="w-4 h-4" />
            <span>03. Blog Articles &amp; Guides</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPostsData.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all space-y-2 group"
              >
                <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">{post.category}</span>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-700">{post.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{post.excerpt}</p>
                <div className="text-[10px] font-mono text-slate-400 pt-1">/blogs/{post.slug}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Case Studies & Portfolio Highlights */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Building2 className="w-4 h-4" />
            <span>04. Featured Portfolio Case Studies</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudiesData.map((cs) => (
              <Link
                key={cs.id}
                href="/portfolio"
                className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-purple-300 transition-all"
              >
                <div className="text-[10px] font-mono font-bold text-purple-700">{cs.client}</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{cs.title}</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-1">{cs.results}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Legal, Compliance & Policy Pages */}
      <section className="py-14 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-4">
          <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase">
            <Scale className="w-4 h-4" />
            <span>05. Legal &amp; Compliance Documents</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/privacy-policy" className="bg-white p-4 rounded-xl border border-slate-200 hover:border-purple-300 text-xs font-bold text-slate-900 flex items-center justify-between">
              <span>Privacy Policy (/privacy-policy)</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
            </Link>
            <Link href="/terms-and-conditions" className="bg-white p-4 rounded-xl border border-slate-200 hover:border-purple-300 text-xs font-bold text-slate-900 flex items-center justify-between">
              <span>Terms of Use (/terms-and-conditions)</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
            </Link>
            <Link href="/sitemap-page" className="bg-white p-4 rounded-xl border border-slate-200 hover:border-purple-300 text-xs font-bold text-slate-900 flex items-center justify-between">
              <span>HTML Sitemap (/sitemap-page)</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Sitemap FAQs */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 text-center">Sitemap &amp; Indexing FAQs</h2>
          {sitemapFaqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between font-bold text-slate-900 text-xs sm:text-sm"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-purple-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-600 border-t border-slate-200/60 pt-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 10. Contact Lead CTA */}
      <ContactCta />

    </div>
  );
}

