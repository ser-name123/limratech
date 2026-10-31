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

export interface SeoAndRedirectsConfig {
  siteTitle: string;
  titleTemplate: string;
  metaDescription: string;
  canonicalDomain: string;
  ga4Id: string;
  gscVerification: string;
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
  gscVerification: 'limra-gsc-verified-token-2026',
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
};
