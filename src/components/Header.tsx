'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Search,
  Code2,
  TrendingUp,
  Layers,
  Smartphone,
  Palette,
  Sparkles,
  ShoppingBag,
  Landmark,
  Stethoscope,
  Building2,
  GraduationCap,
  Truck,
  Plane,
  Cpu,
  Store,
  Server,
  Database,
  ShieldCheck,
} from 'lucide-react';
import { companyInfo } from '@/data/mockData';
import { industriesPagesData, technologiesPagesData } from '@/data/megaMenuData';

const industryIcons = {
  ShoppingBag,
  Landmark,
  Stethoscope,
  Building2,
  GraduationCap,
  Truck,
  Plane,
  Cpu,
};

const techIcons = {
  Code2,
  ShoppingBag,
  Store,
  Server,
  Smartphone,
  Database,
  TrendingUp,
  Palette,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'industries' | 'technologies' | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<'services' | 'industries' | 'technologies' | null>('services');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const serviceItems = [
    {
      title: 'Website Development',
      href: '/website-development-services',
      icon: Code2,
      tag: 'Next.js • WordPress • Shopify',
      desc: 'WordPress, Shopify, e-commerce, PHP, Next.js, Laravel, Magento, web apps & WooCommerce.',
    },
    {
      title: 'Digital Marketing & SEO',
      href: '/digital-marketing-agency-india',
      icon: Search,
      tag: 'SEO • Google Ads • SMM',
      desc: 'SEO, Google Ads/PPC, SEM, Social Media, YouTube/Content, ORM & Google Business Profile.',
    },
    {
      title: 'Lead Generation Funnels',
      href: '/lead-generation-company-india',
      icon: TrendingUp,
      tag: 'Meta • Google • Funnels',
      desc: 'High-converting Meta Ads, Google lead generation campaigns, and sales funnel creation.',
    },
    {
      title: 'Creative Design Studio',
      href: '/creative-design-solutions-india',
      icon: Palette,
      tag: 'Branding • UI/UX • Motion',
      desc: 'Branding & identity, social creatives, print, website/UI design, packaging & motion video.',
    },
    {
      title: 'Mobile App Development',
      href: '/mobile-app-developer-india',
      icon: Smartphone,
      tag: 'Android & iOS Apps',
      desc: 'Native and cross-platform Android & iOS mobile applications built for scale and retention.',
    },
    {
      title: 'Software Development',
      href: '/software-developers-india',
      icon: Layers,
      tag: 'Custom Software & ERP',
      desc: 'Custom enterprise software, cloud SaaS platforms, and bespoke business applications.',
    },
  ];

  const isServicesActive =
    pathname.includes('service') ||
    pathname.includes('marketing') ||
    pathname.includes('developer') ||
    pathname.includes('lead-generation') ||
    pathname.includes('creative-design');

  return (
    <>
      {/* Top Status Bar */}
      <div className="bg-slate-100 text-xs py-2 border-b border-slate-200 text-slate-600 hidden md:block w-full">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-700 font-medium">Available for New Projects</span>
            </span>

            <a
              href={`tel:${companyInfo.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-purple-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-purple-600" />
              <span>{companyInfo.phone}</span>
            </a>

            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-1.5 hover:text-purple-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-purple-600" />
              <span>{companyInfo.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <span className="text-purple-700 font-medium">Pan-India SEO &amp; Web Development Hub</span>
            <div className="flex items-center space-x-1.5 text-slate-500">
              {/* Facebook */}
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-6 h-6 rounded-md bg-white border border-slate-200 hover:border-purple-300 hover:bg-purple-50 flex items-center justify-center text-slate-600 hover:text-purple-700 transition-colors shadow-2xs"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href={companyInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-6 h-6 rounded-md bg-white border border-slate-200 hover:border-purple-300 hover:bg-purple-50 flex items-center justify-center text-slate-600 hover:text-purple-700 transition-colors shadow-2xs"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded-md bg-white border border-slate-200 hover:border-purple-300 hover:bg-purple-50 flex items-center justify-center text-slate-600 hover:text-purple-700 transition-colors shadow-2xs"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-6 h-6 rounded-md bg-white border border-slate-200 hover:border-purple-300 hover:bg-purple-50 flex items-center justify-center text-slate-600 hover:text-purple-700 transition-colors shadow-2xs"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        style={{ backgroundColor: '#ffffff' }}
        className={`sticky top-0 z-[90] transition-all duration-200 w-full bg-white border-b border-slate-200 ${
          isScrolled ? 'h-16 shadow-md shadow-slate-200/90' : 'h-20 shadow-xs'
        } flex items-center`}
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center group py-1">
              <Image
                src="/limra-logo.png"
                alt="LIMRA Digitech Logo"
                width={170}
                height={50}
                priority
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/'
                    ? 'text-purple-700 bg-purple-50 font-semibold'
                    : 'text-slate-800 hover:text-purple-700 hover:bg-slate-100'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith('/about')
                    ? 'text-purple-700 bg-purple-50 font-semibold'
                    : 'text-slate-800 hover:text-purple-700 hover:bg-slate-100'
                }`}
              >
                About
              </Link>

              {/* 1. SERVICES MEGA MENU */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('services')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href="/services"
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                    isServicesActive
                      ? 'text-purple-700 bg-purple-50 font-semibold'
                      : 'text-slate-800 hover:text-purple-700 hover:bg-slate-100'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === 'services' ? 'rotate-180 text-purple-600' : ''
                    }`}
                  />
                </Link>

                {activeMegaMenu === 'services' && (
                  <div className="absolute top-full -left-36 pt-2 z-[100]">
                    <div
                      style={{ backgroundColor: '#ffffff' }}
                      className="w-[820px] bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl shadow-slate-300/50 grid grid-cols-12 gap-5 animate-in fade-in slide-in-from-top-1 duration-150"
                    >
                      <div className="col-span-8 space-y-3">
                        <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs uppercase font-bold tracking-wider text-purple-700 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-purple-600" /> 6 Core Digital &amp; Software Services
                          </span>
                          <Link
                            href="/services"
                            className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                          >
                            All Services Directory <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {serviceItems.map((svc) => {
                            const Icon = svc.icon;
                            return (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 hover:bg-purple-50/70 border border-slate-200/70 hover:border-purple-300 transition-all group"
                              >
                                <div className="p-2 rounded-xl bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="text-sm font-bold text-slate-900 group-hover:text-purple-700 block">
                                    {svc.title}
                                  </span>
                                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                                    {svc.desc}
                                  </p>
                                  <span className="inline-block mt-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                                    {svc.tag}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Featured Highlight Panel */}
                      <div className="col-span-4 bg-gradient-to-br from-purple-50 via-indigo-50/70 to-white border border-purple-200/80 rounded-2xl p-5 flex flex-col justify-between">
                        <div className="space-y-3">
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold text-purple-700 bg-white border border-purple-200 px-2.5 py-1 rounded-full">
                            <ShieldCheck className="w-3 h-3 text-purple-600" /> Full-Service Agency
                          </span>
                          <h4 className="text-base font-bold text-slate-900 leading-snug">
                            Need A Custom Web, App &amp; Growth Package?
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Every service page features 12+ in-depth sections covering sub-services, tech stacks, deliverables, and transparent workflows.
                          </p>
                          <div className="pt-2 space-y-1.5 text-[11px] font-semibold text-slate-700">
                            <div>✓ 500+ Projects Delivered</div>
                            <div>✓ 350+ Happy Clients</div>
                            <div>✓ 98.4% Client Retention</div>
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-purple-200/60 space-y-2">
                          <Link
                            href="/contact-us"
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95"
                          >
                            <span>Get Custom Quote</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            href="/portfolio"
                            className="w-full bg-white border border-slate-200 hover:border-purple-300 text-slate-700 py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center"
                          >
                            Explore Case Studies
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. INDUSTRIES MEGA MENU */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('industries')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href="/industries"
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                    pathname.startsWith('/industries')
                      ? 'text-purple-700 bg-purple-50 font-semibold'
                      : 'text-slate-800 hover:text-purple-700 hover:bg-slate-100'
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === 'industries' ? 'rotate-180 text-purple-600' : ''
                    }`}
                  />
                </Link>

                {activeMegaMenu === 'industries' && (
                  <div className="absolute top-full -left-56 pt-2 z-[100]">
                    <div
                      style={{ backgroundColor: '#ffffff' }}
                      className="w-[880px] bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl shadow-slate-300/50 grid grid-cols-12 gap-5 animate-in fade-in slide-in-from-top-1 duration-150"
                    >
                      <div className="col-span-9 space-y-3">
                        <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs uppercase font-bold tracking-wider text-purple-700 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-purple-600" /> 8 Specialized Industry Verticals (Dedicated Pages)
                          </span>
                          <Link
                            href="/industries"
                            className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                          >
                            View All Industries <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {industriesPagesData.map((ind) => {
                            const Icon = industryIcons[ind.iconName] || Building2;
                            return (
                              <Link
                                key={ind.slug}
                                href={`/industries/${ind.slug}`}
                                className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50/80 hover:bg-purple-50/70 border border-slate-200/70 hover:border-purple-300 transition-all group"
                              >
                                <div className="p-2 rounded-xl bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 truncate">
                                      {ind.shortTitle}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                    {ind.subtitle}
                                  </p>
                                  <div className="flex items-center gap-1.5 mt-1">
                                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                                      {ind.metricBadge}
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Featured Panel */}
                      <div className="col-span-3 bg-gradient-to-br from-purple-50 via-indigo-50/70 to-white border border-purple-200/80 rounded-2xl p-5 flex flex-col justify-between">
                        <div className="space-y-3">
                          <span className="inline-block text-[10px] font-mono uppercase font-bold text-purple-700 bg-white border border-purple-200 px-2.5 py-1 rounded-full">
                            Sector Playbooks
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 leading-snug">
                            Domain-Specific Funnels &amp; Software
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Click any industry to explore our 11-section blueprint with KPI benchmarks, tech stack, and sector FAQs.
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-purple-200/60 space-y-2">
                          <Link
                            href="/industries"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <span>All Industries Hub</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            href="/contact-us"
                            className="w-full bg-white border border-slate-200 hover:border-purple-300 text-slate-700 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center"
                          >
                            Book Industry Audit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. TECHNOLOGIES MEGA MENU */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('technologies')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href="/technologies"
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                    pathname.startsWith('/technologies')
                      ? 'text-purple-700 bg-purple-50 font-semibold'
                      : 'text-slate-800 hover:text-purple-700 hover:bg-slate-100'
                  }`}
                >
                  <span>Technologies</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === 'technologies' ? 'rotate-180 text-purple-600' : ''
                    }`}
                  />
                </Link>

                {activeMegaMenu === 'technologies' && (
                  <div className="absolute top-full -left-72 pt-2 z-[100]">
                    <div
                      style={{ backgroundColor: '#ffffff' }}
                      className="w-[880px] bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl shadow-slate-300/50 grid grid-cols-12 gap-5 animate-in fade-in slide-in-from-top-1 duration-150"
                    >
                      <div className="col-span-9 space-y-3">
                        <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs uppercase font-bold tracking-wider text-purple-700 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-purple-600" /> 8 Core Technology Stacks &amp; Platforms (Dedicated Pages)
                          </span>
                          <Link
                            href="/technologies"
                            className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                          >
                            View Full Tech Stack <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {technologiesPagesData.map((tech) => {
                            const Icon = techIcons[tech.iconName] || Code2;
                            return (
                              <Link
                                key={tech.slug}
                                href={`/technologies/${tech.slug}`}
                                className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50/80 hover:bg-purple-50/70 border border-slate-200/70 hover:border-purple-300 transition-all group"
                              >
                                <div className="p-2 rounded-xl bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 block truncate">
                                    {tech.shortTitle}
                                  </span>
                                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                    {tech.subtitle}
                                  </p>
                                  <span className="inline-block mt-1 text-[10px] font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
                                    {tech.tag}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Featured Panel */}
                      <div className="col-span-3 bg-gradient-to-br from-purple-50 via-indigo-50/70 to-white border border-purple-200/80 rounded-2xl p-5 flex flex-col justify-between">
                        <div className="space-y-3">
                          <span className="inline-block text-[10px] font-mono uppercase font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                            Core Vitals 99+
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 leading-snug">
                            Modern Web, Mobile, CMS &amp; MarTech
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Explore dedicated 11-section architecture guides for Next.js, WordPress, Shopify, Laravel, Flutter, Supabase, and SEO/MarTech.
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-purple-200/60 space-y-2">
                          <Link
                            href="/technologies"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <span>All Technologies Hub</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            href="/contact-us"
                            className="w-full bg-white border border-slate-200 hover:border-purple-300 text-slate-700 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center"
                          >
                            Consult Tech Lead
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith('/portfolio')
                    ? 'text-purple-700 bg-purple-50 font-semibold'
                    : 'text-slate-800 hover:text-purple-700 hover:bg-slate-100'
                }`}
              >
                Portfolio
              </Link>

              <Link
                href="/blogs"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith('/blogs')
                    ? 'text-purple-700 bg-purple-50 font-semibold'
                    : 'text-slate-800 hover:text-purple-700 hover:bg-slate-100'
                }`}
              >
                Blogs
              </Link>

              <Link
                href="/contact-us"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/contact-us'
                    ? 'text-purple-700 bg-purple-50 font-semibold'
                    : 'text-slate-800 hover:text-purple-700 hover:bg-slate-100'
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Phone + Glowing Get a Quote CTA Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${companyInfo.phoneClean}`}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:border-purple-300 bg-slate-50/70 text-xs font-semibold text-slate-800 hover:text-purple-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                <span>{companyInfo.phone}</span>
              </a>
              <Link
                href="/contact-us"
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:opacity-95 shadow-md shadow-purple-200 hover:shadow-lg hover:shadow-purple-300 transition-all gap-1.5 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-purple-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Mega-Menu Accordions */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 max-h-[82vh] overflow-y-auto bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl z-[100]">
            <Link
              href="/"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-700 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-700 rounded-lg"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                className="w-full px-3 py-2.5 text-sm font-semibold text-slate-900 bg-slate-50 flex items-center justify-between"
              >
                <span>Services (6 Core Offerings)</span>
                <ChevronDown
                  className={`w-4 h-4 text-purple-600 transition-transform ${
                    mobileSubmenu === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileSubmenu === 'services' && (
                <div className="p-2 space-y-1 bg-white">
                  <Link
                    href="/services"
                    className="block px-3 py-1.5 text-xs font-bold text-purple-700 bg-purple-50 rounded-lg"
                  >
                    → View All Services Directory
                  </Link>
                  {serviceItems.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-purple-700 hover:bg-purple-50/50 rounded-lg"
                    >
                      • {svc.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileSubmenu(mobileSubmenu === 'industries' ? null : 'industries')}
                className="w-full px-3 py-2.5 text-sm font-semibold text-slate-900 bg-slate-50 flex items-center justify-between"
              >
                <span>Industries (8 Sector Pages)</span>
                <ChevronDown
                  className={`w-4 h-4 text-purple-600 transition-transform ${
                    mobileSubmenu === 'industries' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileSubmenu === 'industries' && (
                <div className="p-2 space-y-1 bg-white">
                  <Link
                    href="/industries"
                    className="block px-3 py-1.5 text-xs font-bold text-purple-700 bg-purple-50 rounded-lg"
                  >
                    → View All Industries Hub
                  </Link>
                  {industriesPagesData.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-purple-700 hover:bg-purple-50/50 rounded-lg"
                    >
                      • {ind.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Technologies Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileSubmenu(mobileSubmenu === 'technologies' ? null : 'technologies')}
                className="w-full px-3 py-2.5 text-sm font-semibold text-slate-900 bg-slate-50 flex items-center justify-between"
              >
                <span>Technologies (8 Stack Pages)</span>
                <ChevronDown
                  className={`w-4 h-4 text-purple-600 transition-transform ${
                    mobileSubmenu === 'technologies' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileSubmenu === 'technologies' && (
                <div className="p-2 space-y-1 bg-white">
                  <Link
                    href="/technologies"
                    className="block px-3 py-1.5 text-xs font-bold text-purple-700 bg-purple-50 rounded-lg"
                  >
                    → View All Technologies Hub
                  </Link>
                  {technologiesPagesData.map((tech) => (
                    <Link
                      key={tech.slug}
                      href={`/technologies/${tech.slug}`}
                      className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-purple-700 hover:bg-purple-50/50 rounded-lg"
                    >
                      • {tech.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-700 rounded-lg"
            >
              Portfolio &amp; Case Studies
            </Link>
            <Link
              href="/blogs"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-700 rounded-lg"
            >
              Blogs &amp; Insights
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-700 rounded-lg"
            >
              Contact Us
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${companyInfo.phoneClean}`}
                className="flex items-center gap-2 text-xs text-purple-700 font-semibold px-3 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                <span>{companyInfo.phone}</span>
              </a>
              <Link
                href="/contact-us"
                className="w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2.5 rounded-xl font-semibold text-xs shadow-md shadow-purple-200"
              >
                Get a Quote / Start Working With Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
