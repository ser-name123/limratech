import {
  companyInfo,
  servicesData,
  caseStudiesData,
  blogPostsData,
  testimonialsData,
} from '@/data/mockData';
import { industriesPagesData, technologiesPagesData } from '@/data/megaMenuData';

export const defaultFaqsData = [
  {
    id: 'faq-1',
    question: 'Why should we choose LIMRA Digitech for Website Development & Digital Marketing?',
    answer:
      'We combine full-stack engineering (Next.js, WordPress, Shopify, PHP, Laravel, Magento) with result-oriented SEO, Google Ads, Meta Lead Generation, Creative Design, and Mobile App development under one roof.',
    category: 'General & Strategy',
  },
  {
    id: 'faq-2',
    question: 'How quickly can our business achieve Page 1 Google rankings?',
    answer:
      'Our technical SEO overhaul, Core Web Vitals optimization, and topical content clusters typically yield measurable organic rank and local GMB 3-Pack improvements within 45 to 75 days.',
    category: 'SEO & Growth',
  },
  {
    id: 'faq-3',
    question: 'Do we retain 100% ownership of our website source code, domain, and ad accounts?',
    answer:
      'Yes! You retain complete intellectual property rights, GitHub repository access, domain/hosting ownership, and direct administrative access to Google Analytics and Ad Manager accounts.',
    category: 'Ownership & Security',
  },
  {
    id: 'faq-4',
    question: 'Can we update our portfolio, blogs, header, and footer without redesigning the site?',
    answer:
      'Yes! Our built-in Enterprise Admin Command Center (/admin) lets you manage header links, footer content, case studies, blog articles, testimonials, FAQs, and CRM leads in real time.',
    category: 'CMS & Maintenance',
  },
];

export interface HeaderNavItem {
  id: string;
  label: string;
  href: string;
  type: 'link' | 'mega-services' | 'mega-industries' | 'mega-technologies';
  visible: boolean;
}

export interface HeaderConfig {
  showTopBar: boolean;
  availabilityText: string;
  topBarTagline: string;
  logoUrl: string;
  logoAlt: string;
  phone: string;
  phoneClean: string;
  email: string;
  ctaText: string;
  ctaHref: string;
  showPhoneInHeader: boolean;
  navItems: HeaderNavItem[];
  megaMenuPromo: {
    servicesTitle: string;
    servicesDesc: string;
    industriesTitle: string;
    industriesDesc: string;
    techTitle: string;
    techDesc: string;
  };
}

export interface FooterLinkItem {
  label: string;
  href: string;
  visible: boolean;
}

export interface FooterConfig {
  companyDescription: string;
  newsletterBadge: string;
  newsletterHeading: string;
  newsletterSubtext: string;
  showNewsletter: boolean;
  address: string;
  phone: string;
  phoneClean: string;
  email: string;
  workingHours: string;
  copyrightText: string;
  serverBadgeText: string;
  showWhatsAppWidget: boolean;
  whatsAppGreeting: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
  quickLinks: FooterLinkItem[];
  serviceLinks: FooterLinkItem[];
  legalLinks: FooterLinkItem[];
}

export interface HeroAndStatsConfig {
  badgeText: string;
  headlineMain: string;
  headlineGradient: string;
  subheadline: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  stats: {
    projectsDelivered: string;
    happyClients: string;
    clientRetention: string;
    googleRating: string;
  };
}

export interface AdminProfileConfig {
  fullName: string;
  role: string;
  email: string;
  phone: string;
  department: string;
  avatarInitials: string;
  twoFactorEnabled: boolean;
  sessionTimeoutMins: number;
  lastLogin: string;
  teamMembers: {
    id: string;
    name: string;
    email: string;
    role: 'Super Admin' | 'SEO Strategist' | 'Content Editor' | 'CRM Manager';
    status: 'Active' | 'Invited';
  }[];
  auditLogs: {
    id: string;
    action: string;
    actor: string;
    timestamp: string;
    ip: string;
  }[];
}

export interface PageSeoEntry {
  id: string;
  route: string;
  pageName: string;
  category: 'Core Page' | 'Service Page' | 'Hub Page' | 'Legal Page';
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  robots: 'index, follow' | 'noindex, nofollow';
  schemaType:
    | 'WebSite'
    | 'Service'
    | 'ProfessionalService'
    | 'FAQPage'
    | 'CollectionPage'
    | 'AboutPage'
    | 'ContactPage';
  priority: number;
  changeFreq: 'daily' | 'weekly' | 'monthly';
  targetLocations: string[];
}

export interface SeoAndRedirectsConfig {
  siteTitle: string;
  titleTemplate: string;
  metaDescription: string;
  canonicalDomain: string;
  ga4Id: string;
  gtmId?: string;
  gscVerification: string;
  bingVerification?: string;
  defaultOgImage?: string;
  twitterHandle?: string;
  geoRegion?: string;
  geoPlacename?: string;
  enableJsonLdSchema?: boolean;
  enableFaqSchema?: boolean;
  enableBreadcrumbSchema?: boolean;
  enableSpeakableSchema?: boolean;
  honeypotEnabled: boolean;
  redirects: { from: string; to: string; permanent: boolean }[];
}

export const defaultHeaderConfig: HeaderConfig = {
  showTopBar: true,
  availabilityText: 'Available for New Projects',
  topBarTagline: 'Pan-India SEO & Web Development Hub',
  logoUrl: '/limra-logo.png',
  logoAlt: 'LIMRA Digitech Logo',
  phone: companyInfo.phone,
  phoneClean: companyInfo.phoneClean,
  email: companyInfo.email,
  ctaText: 'Get a Quote',
  ctaHref: '/contact-us',
  showPhoneInHeader: true,
  navItems: [
    { id: 'nav-home', label: 'Home', href: '/', type: 'link', visible: true },
    { id: 'nav-about', label: 'About', href: '/about', type: 'link', visible: true },
    { id: 'nav-services', label: 'Services', href: '/services', type: 'mega-services', visible: true },
    { id: 'nav-industries', label: 'Industries', href: '/industries', type: 'mega-industries', visible: true },
    { id: 'nav-technologies', label: 'Technologies', href: '/technologies', type: 'mega-technologies', visible: true },
    { id: 'nav-portfolio', label: 'Portfolio', href: '/portfolio', type: 'link', visible: true },
    { id: 'nav-blogs', label: 'Blogs', href: '/blogs', type: 'link', visible: true },
    { id: 'nav-contact', label: 'Contact Us', href: '/contact-us', type: 'link', visible: true },
  ],
  megaMenuPromo: {
    servicesTitle: 'Need A Custom Web, App & Growth Package?',
    servicesDesc: 'Every service page features 12+ in-depth sections covering sub-services, tech stacks, deliverables, and transparent workflows.',
    industriesTitle: 'Domain-Specific Funnels & Software',
    industriesDesc: 'Click any industry to explore our 11-section blueprint with KPI benchmarks, tech stack, and sector FAQs.',
    techTitle: 'Modern Web, Mobile, CMS & MarTech',
    techDesc: 'Explore dedicated 11-section architecture guides for Next.js, WordPress, Shopify, Laravel, Flutter, Supabase, and SEO/MarTech.',
  },
};

export const defaultFooterConfig: FooterConfig = {
  companyDescription:
    'LIMRA Digitech is a full-service Website Development, Digital Marketing, SEO, Lead Generation, Creative Design, Mobile App, and Custom Software company empowering businesses across India.',
  newsletterBadge: 'DIGITAL GROWTH DISPATCH',
  newsletterHeading: 'Get Actionable SEO, Web & Performance Marketing Insights',
  newsletterSubtext:
    'Join 2,500+ founders and marketing leaders receiving our monthly teardowns on Next.js speed, Google Ads ROAS, and high-converting sales funnels.',
  showNewsletter: true,
  address: companyInfo.address,
  phone: companyInfo.phone,
  phoneClean: companyInfo.phoneClean,
  email: companyInfo.email,
  workingHours: 'Mon - Sat: 09:00 AM - 07:00 PM IST',
  copyrightText: `© ${new Date().getFullYear()} LIMRA Digitech. All rights reserved.`,
  serverBadgeText: 'Serverless Next.js • New Delhi, India',
  showWhatsAppWidget: true,
  whatsAppGreeting: 'Hello LIMRA Digitech! I would like to inquire about your SEO & Web Development solutions.',
  social: {
    facebook: companyInfo.social.facebook,
    twitter: companyInfo.social.twitter,
    linkedin: companyInfo.social.linkedin,
    instagram: companyInfo.social.instagram,
  },
  quickLinks: [
    { label: 'Home', href: '/', visible: true },
    { label: 'About Us', href: '/about', visible: true },
    { label: 'All Services', href: '/services', visible: true },
    { label: 'Industries We Serve', href: '/industries', visible: true },
    { label: 'Technologies & Stack', href: '/technologies', visible: true },
    { label: 'Portfolio & Case Studies', href: '/portfolio', visible: true },
    { label: 'Clients & Testimonials', href: '/clients', visible: true },
    { label: 'Blogs & Insights', href: '/blogs', visible: true },
    { label: 'Careers', href: '/careers', visible: true },
    { label: 'Contact Us', href: '/contact-us', visible: true },
  ],
  serviceLinks: [
    { label: 'Website Development (Next.js, WP, Shopify)', href: '/website-development-services', visible: true },
    { label: 'Digital Marketing, SEO & Google Ads', href: '/digital-marketing-agency-india', visible: true },
    { label: 'Lead Generation (Meta, Google & Funnels)', href: '/lead-generation-company-india', visible: true },
    { label: 'Creative Design, Branding & Motion Video', href: '/creative-design-solutions-india', visible: true },
    { label: 'Mobile App Development (Android & iOS)', href: '/mobile-app-developer-india', visible: true },
    { label: 'Custom Software & Business Applications', href: '/software-developers-india', visible: true },
  ],
  legalLinks: [
    { label: 'About Agency', href: '/about', visible: true },
    { label: 'Industries', href: '/industries', visible: true },
    { label: 'Technologies', href: '/technologies', visible: true },
    { label: 'Careers', href: '/careers', visible: true },
    { label: 'Privacy Policy', href: '/privacy-policy', visible: true },
    { label: 'Terms of Use', href: '/terms-and-conditions', visible: true },
    { label: 'Sitemap', href: '/sitemap-page', visible: true },
  ],
};

export const defaultHeroAndStatsConfig: HeroAndStatsConfig = {
  badgeText: 'FULL-SERVICE DIGITAL, WEB & SOFTWARE PARTNER',
  headlineMain: 'Transforming Businesses With',
  headlineGradient: 'Smart Digital Solutions',
  subheadline:
    'From high-speed WordPress, Shopify, PHP, Laravel & Next.js websites to result-oriented SEO, Google/Meta Lead Generation, Creative Design, Mobile Apps, and Custom Software — we engineer measurable business growth.',
  primaryCtaText: 'Get a Free Quote',
  primaryCtaHref: '/contact-us',
  secondaryCtaText: 'Explore Our Portfolio',
  secondaryCtaHref: '/portfolio',
  stats: {
    projectsDelivered: '500+',
    happyClients: '350+',
    clientRetention: '98.4%',
    googleRating: '4.9 / 5',
  },
};

export const defaultAdminProfileConfig: AdminProfileConfig = {
  fullName: 'Mohd. Limra Admin',
  role: 'Founder & Super Administrator',
  email: 'admin@limradigitech.com',
  phone: '+91 9571302312',
  department: 'Executive Command & Architecture',
  avatarInitials: 'LA',
  twoFactorEnabled: true,
  sessionTimeoutMins: 120,
  lastLogin: new Date().toISOString(),
  teamMembers: [
    {
      id: 'tm-1',
      name: 'Mohd. Limra Admin',
      email: 'admin@limradigitech.com',
      role: 'Super Admin',
      status: 'Active',
    },
    {
      id: 'tm-2',
      name: 'Aarav Sharma',
      email: 'seo@limradigitech.com',
      role: 'SEO Strategist',
      status: 'Active',
    },
    {
      id: 'tm-3',
      name: 'Priya Nair',
      email: 'content@limradigitech.com',
      role: 'Content Editor',
      status: 'Active',
    },
    {
      id: 'tm-4',
      name: 'Rohan Verma',
      email: 'sales@limradigitech.com',
      role: 'CRM Manager',
      status: 'Active',
    },
  ],
  auditLogs: [
    {
      id: 'log-1',
      action: 'Updated Header Mega Menu & Navigation Links',
      actor: 'admin@limradigitech.com',
      timestamp: 'Today, 10:42 AM',
      ip: '127.0.0.1 (Localhost)',
    },
    {
      id: 'log-2',
      action: 'Published 16 Industry & Technology Blueprint Pages',
      actor: 'admin@limradigitech.com',
      timestamp: 'Today, 09:15 AM',
      ip: '127.0.0.1 (Localhost)',
    },
    {
      id: 'log-3',
      action: 'Verified GA4 Lead Conversion Tracking & Sitemap.xml',
      actor: 'seo@limradigitech.com',
      timestamp: 'Yesterday, 06:30 PM',
      ip: '192.168.1.7',
    },
  ],
};

export const defaultSeoConfig: SeoAndRedirectsConfig = {
  siteTitle: 'LIMRA Digitech | Transforming Businesses With Smart Digital Solutions',
  titleTemplate: '%s | LIMRA Digitech',
  metaDescription:
    'LIMRA Digitech is a premier digital marketing, web development, creative design, mobile app, and custom software solutions company in India.',
  canonicalDomain: 'https://limradigitech.com',
  ga4Id: 'G-LIMRA2026IN',
  gtmId: 'GTM-LIMRA2026',
  gscVerification: 'limra-gsc-verified-token-2026',
  bingVerification: 'limra-bing-webmaster-2026',
  defaultOgImage: '/limra-logo.png',
  twitterHandle: '@limradigitech',
  geoRegion: 'IN-DL',
  geoPlacename: 'New Delhi, India',
  enableJsonLdSchema: true,
  enableFaqSchema: true,
  enableBreadcrumbSchema: true,
  enableSpeakableSchema: true,
  honeypotEnabled: true,
  redirects: [
    { from: '/about-us', to: '/about', permanent: true },
    { from: '/contact', to: '/contact-us', permanent: true },
    { from: '/our-services', to: '/services', permanent: true },
    { from: '/web-development', to: '/website-development-services', permanent: true },
    { from: '/digital-marketing', to: '/digital-marketing-agency-india', permanent: true },
    { from: '/lead-generation', to: '/lead-generation-company-india', permanent: true },
    { from: '/graphic-design', to: '/creative-design-solutions-india', permanent: true },
    { from: '/app-development', to: '/mobile-app-developer-india', permanent: true },
    { from: '/software-development', to: '/software-developers-india', permanent: true },
    { from: '/work', to: '/portfolio', permanent: true },
    { from: '/blog', to: '/blogs', permanent: true },
  ],
};

export const defaultPageSeoRegistry: PageSeoEntry[] = [
  {
    id: 'seo-home',
    route: '/',
    pageName: 'Homepage — LIMRA Digitech',
    category: 'Core Page',
    metaTitle: 'LIMRA Digitech | Best Website Development, SEO & Digital Marketing Company in India',
    metaDescription:
      'LIMRA Digitech is India’s leading Website Development, Technical SEO, Google & Meta Ads Lead Generation, Creative Design, Mobile App, and Custom Software Agency.',
    focusKeyword: 'Website Development & Digital Marketing Company India',
    secondaryKeywords: [
      'LIMRA Digitech',
      'Best Web Development Company in India',
      'Digital Marketing Agency New Delhi',
      'SEO & Google Ads Agency India',
      'Next.js WordPress Shopify Agency',
      'Custom Software & Mobile App Developers',
    ],
    canonicalUrl: 'https://limradigitech.com/',
    ogTitle: 'LIMRA Digitech | Smart Digital, Web, SEO & Software Solutions',
    ogDescription:
      'Scale your business with 99+ PageSpeed Next.js/WordPress/Shopify websites, ROI-driven SEO, Google & Meta Ads, Mobile Apps & Custom Software.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'WebSite',
    priority: 1.0,
    changeFreq: 'daily',
    targetLocations: ['New Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Pune', 'Pan-India', 'Global'],
  },
  {
    id: 'seo-web-dev',
    route: '/website-development-services',
    pageName: 'Website Development Services',
    category: 'Service Page',
    metaTitle: 'Best Website Development Company in India | Next.js, WordPress & Shopify – LIMRA Digitech',
    metaDescription:
      'Hire the best Website Development Company in India. Custom Next.js 16, React, WordPress, Shopify, PHP, Laravel & Magento websites with 99+ Core Web Vitals & built-in SEO.',
    focusKeyword: 'Best Website Development Company in India',
    secondaryKeywords: [
      'Website Development Services India',
      'Custom Next.js Web Development',
      'WordPress & WooCommerce Development India',
      'Shopify E-Commerce Store Experts',
      'PHP Laravel Web Application Agency',
      'Corporate Website Redesign India',
    ],
    canonicalUrl: 'https://limradigitech.com/website-development-services',
    ogTitle: 'Website Development Services in India | Next.js, WordPress & Shopify',
    ogDescription:
      'Sub-second websites engineered for 99+ Google PageSpeed, conversion rate optimization, and first-page SEO rankings.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'Service',
    priority: 0.95,
    changeFreq: 'weekly',
    targetLocations: ['New Delhi', 'Mumbai', 'Bengaluru', 'Gurugram', 'Noida', 'Pan-India'],
  },
  {
    id: 'seo-digital-marketing',
    route: '/digital-marketing-agency-india',
    pageName: 'Digital Marketing & SEO Agency',
    category: 'Service Page',
    metaTitle: 'Best Digital Marketing Agency in India | Technical SEO, Google Ads & SMM – LIMRA Digitech',
    metaDescription:
      'Result-oriented Digital Marketing Agency in India. Dominate Google Page 1 with Technical SEO, Local GMB 3-Pack, Google Search/Shopping PPC, and Meta Social Media Marketing.',
    focusKeyword: 'Digital Marketing Agency in India',
    secondaryKeywords: [
      'Best SEO Company in India',
      'Technical SEO & Core Web Vitals Agency',
      'Google Ads PPC Management India',
      'Local SEO & GMB 3-Pack Ranking',
      'Social Media Marketing Agency India',
      'E-Commerce Performance Marketing',
    ],
    canonicalUrl: 'https://limradigitech.com/digital-marketing-agency-india',
    ogTitle: 'Best Digital Marketing & SEO Agency in India | LIMRA Digitech',
    ogDescription:
      '360° Organic SEO, Google Ads PPC, Local GMB Optimization, and Social Media Growth with transparent ROAS attribution.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'Service',
    priority: 0.95,
    changeFreq: 'weekly',
    targetLocations: ['New Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pan-India'],
  },
  {
    id: 'seo-lead-gen',
    route: '/lead-generation-company-india',
    pageName: 'Lead Generation Company India',
    category: 'Service Page',
    metaTitle: 'Best Lead Generation Company in India | B2B, Meta Ads, Google PPC & Funnels – LIMRA Digitech',
    metaDescription:
      'Scale qualified sales inquiries with India’s top Lead Generation Company. High-intent Google Search PPC, Meta Lead Ads, WhatsApp automation & CRO landing page funnels.',
    focusKeyword: 'Lead Generation Company in India',
    secondaryKeywords: [
      'B2B Lead Generation Agency India',
      'Real Estate & Healthcare Lead Generation',
      'Google & Meta Ads Lead Funnels',
      'High Converting Landing Page Design',
      'WhatsApp & CRM Lead Automation',
      'Pay Per Lead Performance Marketing',
    ],
    canonicalUrl: 'https://limradigitech.com/lead-generation-company-india',
    ogTitle: 'Performance Lead Generation Company in India | LIMRA Digitech',
    ogDescription:
      'Predictable B2B & B2C customer acquisition pipelines powered by Google Ads, Meta Ads, and high-converting sales funnels.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'Service',
    priority: 0.95,
    changeFreq: 'weekly',
    targetLocations: ['New Delhi', 'Mumbai', 'Bengaluru', 'Pune', 'Ahmedabad', 'Pan-India'],
  },
  {
    id: 'seo-creative-design',
    route: '/creative-design-solutions-india',
    pageName: 'Creative Design, UI/UX & Branding',
    category: 'Service Page',
    metaTitle: 'Creative Design Solutions India | UI/UX, Brand Identity, Graphics & Video – LIMRA Digitech',
    metaDescription:
      'Transform your brand identity with LIMRA Digitech’s Creative Design Solutions in India. Figma UI/UX systems, logo & brand guidelines, social ad creatives, and 2D/3D motion videos.',
    focusKeyword: 'Creative Design Solutions India',
    secondaryKeywords: [
      'UI UX Design Agency India',
      'Brand Identity & Logo Design India',
      'Corporate Brochure & Packaging Design',
      'Social Media Ad Creative Studio',
      '2D 3D Explainer Video Production',
      'Figma Design System Architects',
    ],
    canonicalUrl: 'https://limradigitech.com/creative-design-solutions-india',
    ogTitle: 'Creative Design, UI/UX & Brand Identity Studio | LIMRA Digitech',
    ogDescription:
      'Conversion-engineered Figma UI/UX, memorable corporate branding, and scroll-stopping motion graphics.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'Service',
    priority: 0.9,
    changeFreq: 'weekly',
    targetLocations: ['New Delhi', 'Mumbai', 'Bengaluru', 'Jaipur', 'Pan-India'],
  },
  {
    id: 'seo-mobile-app',
    route: '/mobile-app-developer-india',
    pageName: 'Mobile App Development India',
    category: 'Service Page',
    metaTitle: 'Best Mobile App Developer in India | Android, iOS, Flutter & React Native – LIMRA Digitech',
    metaDescription:
      'Hire top Mobile App Developers in India. We build high-performance native Android (Kotlin), iOS (Swift), Flutter & React Native mobile applications with scalable cloud backends.',
    focusKeyword: 'Mobile App Developer in India',
    secondaryKeywords: [
      'Android & iOS App Development Company India',
      'Flutter Cross-Platform App Developers',
      'React Native Mobile App Agency',
      'On-Demand Delivery & E-Commerce Apps',
      'FinTech & Telemedicine Mobile Apps',
      'App Store Optimization ASO India',
    ],
    canonicalUrl: 'https://limradigitech.com/mobile-app-developer-india',
    ogTitle: 'Mobile App Development Company in India (Android, iOS & Flutter)',
    ogDescription:
      'Enterprise-grade Android, iOS, and Flutter mobile apps engineered for 60fps performance, biometric security, and scale.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'Service',
    priority: 0.9,
    changeFreq: 'weekly',
    targetLocations: ['New Delhi', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Pune', 'Pan-India'],
  },
  {
    id: 'seo-software-dev',
    route: '/software-developers-india',
    pageName: 'Custom Software Development India',
    category: 'Service Page',
    metaTitle: 'Custom Software Developers in India | Cloud ERP, CRM, SaaS & AI Solutions – LIMRA Digitech',
    metaDescription:
      'Leading Custom Software Developers in India. Enterprise ERP, CRM, SaaS platforms, HRMS, Inventory software, API integrations & AI automation built on Node.js, Python & PostgreSQL.',
    focusKeyword: 'Custom Software Developers in India',
    secondaryKeywords: [
      'Custom Software Development Company India',
      'Cloud ERP & CRM Software Development',
      'B2B SaaS Product Engineering India',
      'API Integration & Legacy Modernization',
      'Enterprise Workflow Automation Software',
      'PostgreSQL Supabase Cloud Architects',
    ],
    canonicalUrl: 'https://limradigitech.com/software-developers-india',
    ogTitle: 'Custom Software, ERP, CRM & SaaS Developers in India | LIMRA Digitech',
    ogDescription:
      'Bespoke enterprise software, multi-tenant SaaS products, and automated cloud workflows tailored to your business logic.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'Service',
    priority: 0.9,
    changeFreq: 'weekly',
    targetLocations: ['New Delhi', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Chennai', 'Pan-India', 'Global'],
  },
  {
    id: 'seo-services-hub',
    route: '/services',
    pageName: 'All Services Directory Hub',
    category: 'Hub Page',
    metaTitle: 'Our Digital, Web, SEO, Mobile App & Software Services | LIMRA Digitech India',
    metaDescription:
      'Explore LIMRA Digitech’s 6 core service pillars and 36+ specialized digital solutions: Website Development, SEO & Digital Marketing, Lead Generation, Design, Apps & Software.',
    focusKeyword: 'Digital Marketing and Web Development Services India',
    secondaryKeywords: ['Full Service Digital Agency India', 'Web App SEO Services', 'IT & Software Services'],
    canonicalUrl: 'https://limradigitech.com/services',
    ogTitle: 'All Services & Digital Capabilities | LIMRA Digitech',
    ogDescription: 'Complete catalog of Web, SEO, Paid Ads, Creative Design, Mobile Apps, and Custom Software solutions.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'CollectionPage',
    priority: 0.9,
    changeFreq: 'weekly',
    targetLocations: ['Pan-India', 'Global'],
  },
  {
    id: 'seo-industries-hub',
    route: '/industries',
    pageName: 'Industries We Serve Hub',
    category: 'Hub Page',
    metaTitle: 'Industries We Serve | E-Commerce, Healthcare, Real Estate, FinTech & EdTech – LIMRA Digitech',
    metaDescription:
      'Domain-specific Website Development, SEO, Lead Generation & Custom Software across 8+ industries: E-Commerce, Healthcare, Real Estate, FinTech, Education, Hospitality & Manufacturing.',
    focusKeyword: 'Industry Specific Digital Marketing & Software Solutions',
    secondaryKeywords: ['Healthcare SEO & Web Design', 'Real Estate Lead Generation India', 'FinTech & EdTech Software'],
    canonicalUrl: 'https://limradigitech.com/industries',
    ogTitle: 'Industry-Specific Digital & Software Solutions | LIMRA Digitech',
    ogDescription: 'Tailored digital growth blueprints and compliance-ready software across 8 key industry verticals.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'CollectionPage',
    priority: 0.85,
    changeFreq: 'weekly',
    targetLocations: ['Pan-India', 'Global'],
  },
  {
    id: 'seo-technologies-hub',
    route: '/technologies',
    pageName: 'Technologies & Engineering Stack Hub',
    category: 'Hub Page',
    metaTitle: 'Technologies We Master | Next.js, React, WordPress, Shopify, Laravel & Flutter – LIMRA Digitech',
    metaDescription:
      'Explore our modern engineering & MarTech stack: Next.js 16, React, TypeScript, WordPress, Shopify, PHP/Laravel, Flutter, React Native, Supabase, PostgreSQL, AWS & GA4.',
    focusKeyword: 'Next.js WordPress Shopify Laravel Flutter Development India',
    secondaryKeywords: ['Modern Web Tech Stack', 'Serverless Next.js Supabase', 'Headless E-Commerce Stack'],
    canonicalUrl: 'https://limradigitech.com/technologies',
    ogTitle: 'Engineering & MarTech Stack | LIMRA Digitech',
    ogDescription: 'Full-stack mastery across Next.js, WordPress, Shopify, Laravel, Flutter, Cloud Databases, and SEO MarTech.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'CollectionPage',
    priority: 0.85,
    changeFreq: 'weekly',
    targetLocations: ['Pan-India', 'Global'],
  },
  {
    id: 'seo-portfolio',
    route: '/portfolio',
    pageName: 'Portfolio & Case Studies',
    category: 'Hub Page',
    metaTitle: 'Client Portfolio & Proven Case Studies | Web, SEO & Revenue Growth – LIMRA Digitech',
    metaDescription:
      'Browse verified case studies from LIMRA Digitech: 320% organic traffic growth, 99/100 Core Web Vitals, 4.8x Google Ads ROAS, and enterprise software deployments.',
    focusKeyword: 'Web Development & SEO Case Studies India',
    secondaryKeywords: ['Digital Agency Portfolio India', 'Website Redesign Results', 'SEO Traffic Case Studies'],
    canonicalUrl: 'https://limradigitech.com/portfolio',
    ogTitle: 'Verified Client Portfolio & Growth Case Studies | LIMRA Digitech',
    ogDescription: 'Real-world engineering and performance marketing results across D2C, SaaS, Healthcare, and Real Estate.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'CollectionPage',
    priority: 0.85,
    changeFreq: 'weekly',
    targetLocations: ['Pan-India', 'Global'],
  },
  {
    id: 'seo-blogs',
    route: '/blogs',
    pageName: 'Blogs, SEO Guides & Engineering Insights',
    category: 'Hub Page',
    metaTitle: 'Digital Growth Blog | Technical SEO, Next.js, Google Ads & Web Engineering – LIMRA Digitech',
    metaDescription:
      'Actionable guides and Playbooks by LIMRA Digitech on Technical SEO, Core Web Vitals, Next.js 16 architecture, Google & Meta Ads ROAS, and conversion optimization.',
    focusKeyword: 'Technical SEO and Web Development Blog India',
    secondaryKeywords: ['Core Web Vitals Guide', 'Next.js SEO Playbook', 'Google Ads Lead Generation Tips'],
    canonicalUrl: 'https://limradigitech.com/blogs',
    ogTitle: 'LIMRA Digitech Editorial | SEO, Web & Growth Playbooks',
    ogDescription: 'Deep-dive technical teardowns and digital marketing blueprints from our engineering and SEO leads.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'CollectionPage',
    priority: 0.85,
    changeFreq: 'daily',
    targetLocations: ['Pan-India', 'Global'],
  },
  {
    id: 'seo-about',
    route: '/about',
    pageName: 'About LIMRA Digitech',
    category: 'Core Page',
    metaTitle: 'About LIMRA Digitech | India’s Premier Web, SEO, Mobile App & Software Engineering Partner',
    metaDescription:
      'Learn about LIMRA Digitech’s mission, leadership team, 500+ delivered projects, 98.4% client retention, and code-first approach to digital growth.',
    focusKeyword: 'About LIMRA Digitech India',
    secondaryKeywords: ['Digital Agency Leadership India', 'Web & Software Company New Delhi'],
    canonicalUrl: 'https://limradigitech.com/about',
    ogTitle: 'About LIMRA Digitech | Engineering & Growth Leadership',
    ogDescription: 'Meet the architects, SEO strategists, and designers behind 500+ successful digital transformations.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'AboutPage',
    priority: 0.8,
    changeFreq: 'monthly',
    targetLocations: ['New Delhi', 'Pan-India'],
  },
  {
    id: 'seo-clients',
    route: '/clients',
    pageName: 'Clients & Verified Testimonials',
    category: 'Core Page',
    metaTitle: 'Our Clients & 4.9/5 Verified Reviews | Trusted by 350+ Brands – LIMRA Digitech',
    metaDescription:
      'Discover why 350+ startups and enterprises across India trust LIMRA Digitech for Website Development, SEO, Lead Generation, and Custom Software.',
    focusKeyword: 'LIMRA Digitech Client Reviews and Testimonials',
    secondaryKeywords: ['Verified Digital Agency Reviews', 'Enterprise Web Development Clients'],
    canonicalUrl: 'https://limradigitech.com/clients',
    ogTitle: '350+ Happy Clients & Verified Testimonials | LIMRA Digitech',
    ogDescription: '98.4% client retention and 4.9/5 Google rating across E-Commerce, Healthcare, FinTech, and B2B.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'CollectionPage',
    priority: 0.8,
    changeFreq: 'monthly',
    targetLocations: ['Pan-India', 'Global'],
  },
  {
    id: 'seo-careers',
    route: '/careers',
    pageName: 'Careers & Open Roles',
    category: 'Core Page',
    metaTitle: 'Careers at LIMRA Digitech | Join Our Next.js, SEO, Performance Marketing & Design Team',
    metaDescription:
      'Build the future of web engineering and algorithmic SEO at LIMRA Digitech. Explore open roles in Next.js, Flutter, Technical SEO, Google Ads, and UI/UX Design.',
    focusKeyword: 'Careers at LIMRA Digitech',
    secondaryKeywords: ['Next.js Developer Jobs Delhi', 'SEO Analyst Jobs India', 'Digital Marketing Careers'],
    canonicalUrl: 'https://limradigitech.com/careers',
    ogTitle: 'Careers & Engineering Culture | LIMRA Digitech',
    ogDescription: 'Join our team of full-stack engineers, SEO strategists, and creative designers.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'CollectionPage',
    priority: 0.75,
    changeFreq: 'weekly',
    targetLocations: ['New Delhi', 'Remote India'],
  },
  {
    id: 'seo-contact',
    route: '/contact-us',
    pageName: 'Contact Us & Free Proposal',
    category: 'Core Page',
    metaTitle: 'Contact LIMRA Digitech | Request a Free Website, SEO or Software Proposal Today',
    metaDescription:
      'Get in touch with LIMRA Digitech (+91 9571302312 / limradigitech@gmail.com). Request a free technical SEO audit, website development quote, or custom software consultation.',
    focusKeyword: 'Contact LIMRA Digitech',
    secondaryKeywords: ['Request Website Quote India', 'Free SEO Audit Consultation', 'Hire Web Developers India'],
    canonicalUrl: 'https://limradigitech.com/contact-us',
    ogTitle: 'Contact LIMRA Digitech | Get a Free Custom Growth Proposal',
    ogDescription: 'Speak directly with our senior architects and SEO strategists within 2 business hours.',
    ogImage: '/limra-logo.png',
    robots: 'index, follow',
    schemaType: 'ContactPage',
    priority: 0.9,
    changeFreq: 'monthly',
    targetLocations: ['New Delhi', 'Pan-India', 'Global'],
  },
];

export interface CareerOpeningItem {
  id: string;
  role: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  status: 'Active' | 'Closed';
  desc: string;
  tags: string[];
}

export interface MediaAssetItem {
  id: string;
  title: string;
  category: 'Brand Logo & Favicon' | 'Portfolio Case Study' | 'Blog Editorial' | 'UI Graphic';
  url: string;
  dimensions: string;
  altText: string;
}

export const defaultCareersData: CareerOpeningItem[] = [
  {
    id: 'job-1',
    role: 'Senior Next.js & React Developer',
    department: 'Engineering',
    location: 'New Delhi / Hybrid',
    type: 'Full-Time',
    experience: '3+ Years',
    status: 'Active',
    desc: 'Architect high-speed Next.js 16 App Router platforms, custom APIs, and scalable web applications with 99+ Core Web Vitals.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js'],
  },
  {
    id: 'job-2',
    role: 'Performance Marketing Strategist (Google & Meta Ads)',
    department: 'Growth & Paid Media',
    location: 'New Delhi / Remote',
    type: 'Full-Time',
    experience: '2-5 Years',
    status: 'Active',
    desc: 'Manage high-ROAS Google Search, Shopping, and Meta lead generation campaigns with server-side GTM conversion tracking.',
    tags: ['Google Ads', 'Meta Ads', 'GA4', 'GTM', 'CRO Funnels'],
  },
  {
    id: 'job-3',
    role: 'UI/UX & Brand Identity Designer',
    department: 'Creative Studio',
    location: 'New Delhi / Hybrid',
    type: 'Full-Time',
    experience: '2+ Years',
    status: 'Active',
    desc: 'Create high-converting Figma design systems, interactive prototypes, corporate brand kits, and social ad creatives.',
    tags: ['Figma', 'Design Systems', 'Brand Identity', 'Prototyping', 'Motion'],
  },
  {
    id: 'job-4',
    role: 'Technical SEO & Algorithmic Growth Specialist',
    department: 'Organic Search',
    location: 'New Delhi / Hybrid',
    type: 'Full-Time',
    experience: '2-4 Years',
    status: 'Active',
    desc: 'Lead technical SEO audits, JSON-LD schema architecture, local GMB 3-Pack dominance, and topical content clusters.',
    tags: ['Technical SEO', 'Schema.org', 'GSC', 'Ahrefs', 'Local SEO'],
  },
];

export const defaultMediaAssets: MediaAssetItem[] = [
  {
    id: 'media-1',
    title: 'Primary Header & Brand Logo',
    category: 'Brand Logo & Favicon',
    url: '/limra-logo.png',
    dimensions: '633 × 395 PNG',
    altText: 'LIMRA Digitech Primary Brand Logo',
  },
  {
    id: 'media-2',
    title: 'Square App Icon & Favicon (512px)',
    category: 'Brand Logo & Favicon',
    url: '/favicon.png',
    dimensions: '512 × 512 PNG',
    altText: 'LIMRA Digitech Square Favicon',
  },
  {
    id: 'media-3',
    title: 'Browser Tab Favicon ICO',
    category: 'Brand Logo & Favicon',
    url: '/favicon.ico',
    dimensions: '64 × 64 ICO',
    altText: 'LIMRA Digitech Browser Tab Icon',
  },
  {
    id: 'media-4',
    title: 'E-Commerce Revenue Case Study Cover',
    category: 'Portfolio Case Study',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    dimensions: '1000 × 667 WebP',
    altText: 'E-Commerce Growth Analytics Dashboard',
  },
  {
    id: 'media-5',
    title: 'Next.js Enterprise Portal Preview',
    category: 'Portfolio Case Study',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    dimensions: '1000 × 667 WebP',
    altText: 'Next.js SaaS & Enterprise Portal',
  },
  {
    id: 'media-6',
    title: 'Technical SEO & Core Web Vitals Guide Cover',
    category: 'Blog Editorial',
    url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1000&q=80',
    dimensions: '1000 × 667 WebP',
    altText: 'SEO & Core Web Vitals Editorial Cover',
  },
];

export interface ClientBrandItem {
  id: string;
  name: string;
  sector: string;
  tag: string;
}

export interface LeadershipMemberItem {
  id: string;
  name: string;
  role: string;
  exp: string;
  avatar: string;
}

export interface MilestoneItem {
  id: string;
  year: string;
  title: string;
  desc: string;
}

export interface PricingPackageItem {
  id: string;
  name: string;
  badge: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export const defaultClientBrands: ClientBrandItem[] = [
  { id: 'cb-1', name: 'BrightEdge Solutions', sector: 'Enterprise B2B', tag: 'Verified Partner' },
  { id: 'cb-2', name: 'UrbanStyles Retail', sector: 'D2C E-Commerce', tag: 'Shopify & Ads' },
  { id: 'cb-3', name: 'Apex Logistics India', sector: 'Supply Chain & ERP', tag: 'Custom Software' },
  { id: 'cb-4', name: 'MedCare Health Network', sector: 'Healthcare & Apps', tag: 'Mobile & SEO' },
  { id: 'cb-5', name: 'FinCrest Capital', sector: 'FinTech & Advisory', tag: 'Lead Funnels' },
  { id: 'cb-6', name: 'Vanguard Estates', sector: 'Real Estate Group', tag: 'Google & Meta' },
];

export const defaultLeadershipTeam: LeadershipMemberItem[] = [
  {
    id: 'lead-tm-1',
    name: 'Arif Khan',
    role: 'Founder & Principal Cloud Architect',
    exp: '10+ Yrs In Full-Stack & Serverless',
    avatar: '/images/client-rahul-sharma.jpg',
  },
  {
    id: 'lead-tm-2',
    name: 'Farhan Siddiqui',
    role: 'Head of Technical SEO & Algorithms',
    exp: '8+ Yrs In Search Architecture',
    avatar: '/images/client-priya-mehta.jpg',
  },
  {
    id: 'lead-tm-3',
    name: 'Ayesha Patel',
    role: 'Lead UI/UX & Design Systems Architect',
    exp: 'Figma & Design Systems Specialist',
    avatar: '/images/client-neha-kapoor.jpg',
  },
  {
    id: 'lead-tm-4',
    name: 'Sameer Sheikh',
    role: 'Senior Database & Supabase Engineer',
    exp: 'PostgreSQL & Realtime Cluster Lead',
    avatar: '/images/client-rahul-sharma.jpg',
  },
];

export const defaultMilestones: MilestoneItem[] = [
  {
    id: 'ms-1',
    year: '2020',
    title: 'Founding & Vision',
    desc: 'Started with a mission to bridge the divide between slow web platforms and aggressive SEO rankings.',
  },
  {
    id: 'ms-2',
    year: '2022',
    title: 'Full Serverless Pivot',
    desc: 'Migrated 100% of client architectures to modern Next.js and Supabase cloud infrastructure.',
  },
  {
    id: 'ms-3',
    year: '2024',
    title: 'Pan-India Milestone',
    desc: 'Crossed 350+ enterprise clients and generated over ₹50Cr+ in client organic search pipeline value.',
  },
  {
    id: 'ms-4',
    year: '2026',
    title: 'Next-Gen Algorithmic Lab',
    desc: 'Pioneered AI-Immune entity schema and sub-second React 19 rendering standards.',
  },
];

export const defaultPricingPackages: PricingPackageItem[] = [
  {
    id: 'pkg-1',
    name: 'Growth Website & SEO Launchpad',
    badge: 'STARTER & SMB',
    price: '₹45,000',
    billing: 'One-Time / Custom Sprint',
    description: 'High-speed WordPress, Shopify, or Next.js business website with technical SEO & lead capture.',
    features: [
      'Up to 12 Custom Responsive Pages',
      '99+ Google PageSpeed & Core Web Vitals',
      'On-Page Technical SEO & Schema.org',
      'WhatsApp & CRM Lead Capture Integration',
    ],
    highlighted: false,
  },
  {
    id: 'pkg-2',
    name: 'Full-Stack Web + Omnichannel Growth',
    badge: 'MOST POPULAR',
    price: '₹95,000',
    billing: 'Project / Monthly Retainer',
    description: 'Complete Next.js / E-Commerce platform paired with SEO, Google Ads & Meta Lead Generation.',
    features: [
      'Custom Next.js 16 / Shopify Plus / Laravel Platform',
      'Comprehensive SEO & Local GMB 3-Pack Dominance',
      'Google Search PPC & Meta Lead Gen Funnels',
      'Dedicated Account Manager & Looker Studio Dashboard',
    ],
    highlighted: true,
  },
  {
    id: 'pkg-3',
    name: 'Enterprise Software, App & Dedicated Pod',
    badge: 'CUSTOM ENTERPRISE',
    price: '₹2,25,000+',
    billing: 'Custom SLA Architecture',
    description: 'Bespoke mobile apps (Flutter/iOS/Android), ERP/CRM software, and high-scale growth retainers.',
    features: [
      'Native / Cross-Platform Android & iOS Mobile Apps',
      'Custom Cloud ERP, LMS, HMS or FinTech Portals',
      'Multi-City Programmatic SEO & High-Budget Ad Scaling',
      '24/7 Priority DevOps, SLA & Security Auditing',
    ],
    highlighted: false,
  },
];

export const initialCmsSnapshot = {
  header: defaultHeaderConfig,
  footer: defaultFooterConfig,
  hero: defaultHeroAndStatsConfig,
  adminProfile: defaultAdminProfileConfig,
  seo: defaultSeoConfig,
  services: servicesData,
  industries: industriesPagesData,
  technologies: technologiesPagesData,
  caseStudies: caseStudiesData,
  blogs: blogPostsData,
  testimonials: testimonialsData,
  faqs: defaultFaqsData,
  careers: defaultCareersData,
  mediaAssets: defaultMediaAssets,
  clientBrands: defaultClientBrands,
  leadershipTeam: defaultLeadershipTeam,
  milestones: defaultMilestones,
  pricingPackages: defaultPricingPackages,
  pageSeoRegistry: defaultPageSeoRegistry,
};
