export interface IndustryPageData {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  subtitle: string;
  description: string;
  metricBadge: string;
  iconName: 'ShoppingBag' | 'Landmark' | 'Stethoscope' | 'Building2' | 'GraduationCap' | 'Truck' | 'Plane' | 'Cpu';
  stats: { value: string; label: string; sub: string }[];
  challenges: { problem: string; solution: string }[];
  deliverables: { title: string; desc: string }[];
  techStack: string[];
  faqs: { q: string; a: string }[];
}

export interface TechnologyPageData {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  subtitle: string;
  description: string;
  metricBadge: string;
  iconName: 'Code2' | 'ShoppingBag' | 'Store' | 'Server' | 'Smartphone' | 'Database' | 'TrendingUp' | 'Palette';
  stats: { value: string; label: string; sub: string }[];
  capabilities: { title: string; desc: string }[];
  useCases: { title: string; desc: string; badge: string }[];
  stackTools: string[];
  faqs: { q: string; a: string }[];
}

export const industriesPagesData: IndustryPageData[] = [
  {
    slug: 'ecommerce-d2c-retail',
    title: 'E-Commerce, D2C & Retail Digital Solutions',
    shortTitle: 'E-Commerce & D2C Retail',
    tag: 'Shopify • WooCommerce • ROAS',
    subtitle: 'High-Converting Storefronts, Omnichannel Shopping Ads & Retention Funnels',
    description:
      'We help D2C brands, retail chains, and multi-vendor marketplaces eliminate cart abandonment, launch sub-second Shopify/WooCommerce/Next.js storefronts, and scale profitable ROAS across Meta and Google Shopping.',
    metricBadge: '+64% Checkout Conversion',
    iconName: 'ShoppingBag',
    stats: [
      { value: '+64%', label: 'Checkout Conversion Lift', sub: 'One-click UPI & Razorpay flows' },
      { value: '4.6x', label: 'Average Ad ROAS', sub: 'Meta Catalog & Google PMax' },
      { value: '0.4s', label: 'Storefront Load Time', sub: 'Core Web Vitals 99/100' },
      { value: '120+', label: 'D2C Brands Scaled', sub: 'Fashion, Beauty, Electronics & FMCG' },
    ],
    challenges: [
      {
        problem: 'Slow-loading product pages causing 70%+ mobile cart abandonment.',
        solution: 'We engineer lightweight Shopify Plus, WooCommerce, and headless Next.js storefronts with instant image preloading and streamlined 1-page checkout.',
      },
      {
        problem: 'Rising Customer Acquisition Cost (CAC) on Meta and Google Ads.',
        solution: 'We deploy server-side Meta Conversions API (CAPI), dynamic catalog retargeting, and high-converting video creative hooks that lower CPA by up to 38%.',
      },
      {
        problem: 'Disconnected inventory, shipping, and accounting workflows.',
        solution: 'Seamless real-time API sync with Shiprocket, Delhivery, Razorpay, Stripe, Zoho Inventory, and Tally ERP.',
      },
      {
        problem: 'Weak organic visibility for high-intent product and category searches.',
        solution: 'Programmatic product schema markup, category-level SEO content silos, and technical Core Web Vitals optimization.',
      },
    ],
    deliverables: [
      { title: 'Shopify, WooCommerce & Magento Stores', desc: 'Custom themes, bespoke checkout rules, subscription billing, and multi-currency support.' },
      { title: 'Headless Next.js Commerce', desc: 'Sub-second progressive web storefronts built for high-volume flash sales and enterprise catalogs.' },
      { title: 'Google Shopping & Performance Max', desc: 'Merchant Center feed optimization, high-ROAS shopping campaigns, and brand search defense.' },
      { title: 'Meta Ads & D2C Funnel Scaling', desc: 'Scroll-stopping UGC/motion video ads, lookalike scaling, and automated WhatsApp cart recovery.' },
      { title: 'Marketplace & Category SEO', desc: 'Rich product snippets, review schema, and high-intent commercial keyword dominance.' },
      { title: 'Packaging & Brand Identity Design', desc: 'Shelf-ready product packaging dielines, unboxing experiences, and social media creative kits.' },
    ],
    techStack: ['Shopify', 'WooCommerce', 'Magento', 'Next.js', 'Razorpay', 'Shiprocket', 'Meta CAPI', 'Google Merchant Center'],
    faqs: [
      {
        q: 'Should we choose Shopify, WooCommerce, Magento, or custom Next.js for our store?',
        a: 'Shopify is ideal for fast-scaling D2C brands wanting managed reliability; WooCommerce suits WordPress-centric catalogs with custom Indian payment/shipping rules; Magento fits large multi-vendor B2B/B2C catalogs; and Next.js headless commerce is best for ultra-fast custom storefronts.',
      },
      {
        q: 'Can you integrate Indian payment gateways and logistics providers?',
        a: 'Yes. We integrate Razorpay, Cashfree, PayU, PhonePe, Stripe, Shiprocket, Delhivery, BlueDart, and Unicommerce out of the box.',
      },
      {
        q: 'Do you also manage Google Shopping and Instagram/Facebook Ads for e-commerce?',
        a: 'Yes! Our performance marketing team manages complete catalog feeds, Meta Pixel + CAPI tracking, dynamic retargeting, and ROAS optimization.',
      },
      {
        q: 'Can you migrate our existing store without losing SEO rankings or order history?',
        a: 'Absolutely. We migrate 100% of products, customer records, historical orders, and 301 SEO redirects with zero downtime.',
      },
    ],
  },
  {
    slug: 'fintech-banking-insurance',
    title: 'FinTech, Banking, Insurance & Wealth Solutions',
    shortTitle: 'FinTech, Banking & Wealth',
    tag: 'Secure Portals • FinTech Apps • B2B Leads',
    subtitle: 'Enterprise-Grade Security, Financial Web Portals & High-Net-Worth Lead Generation',
    description:
      'Financial services, NBFCs, insurance brokers, and wealth management firms rely on LIMRA Digitech for encrypted web/mobile applications, interactive financial calculators, and compliant high-intent lead acquisition.',
    metricBadge: '4.2x Verified Lead ROI',
    iconName: 'Landmark',
    stats: [
      { value: '256-Bit', label: 'Encryption & Security', sub: 'RBAC, OAuth2 & SSL Hardened' },
      { value: '4.2x', label: 'Verified Lead ROI', sub: 'High-Intent Search & LinkedIn Funnels' },
      { value: '99.99%', label: 'Platform Uptime SLA', sub: 'Redundant Cloud Infrastructure' },
      { value: '-41%', label: 'Cost Per Qualified Lead', sub: 'Automated KYC & Lead Scoring' },
    ],
    challenges: [
      {
        problem: 'Strict compliance and data security requirements for customer financial data.',
        solution: 'We architect role-based access control (RBAC), encrypted PostgreSQL databases, sanitized API endpoints, and strict audit logging.',
      },
      {
        problem: 'Complex financial products that confuse visitors and lower form completion rates.',
        solution: 'We build interactive EMI, SIP, tax, and insurance premium calculators that educate users and capture pre-qualified leads effortlessly.',
      },
      {
        problem: 'High CPCs on Google Ads for finance, loan, and insurance keywords.',
        solution: 'We pair hyper-targeted long-tail search campaigns with high-trust landing pages and E-E-A-T organic SEO content hubs.',
      },
      {
        problem: 'Slow manual onboarding and document verification workflows.',
        solution: 'Custom customer portals and mobile apps with automated KYC document uploads, status tracking, and CRM integration.',
      },
    ],
    deliverables: [
      { title: 'Custom FinTech Web & Mobile Apps', desc: 'Secure borrower/investor dashboards built on Next.js, Laravel, Android, and iOS.' },
      { title: 'Interactive Financial Calculators', desc: 'Custom SIP, ROI, eligibility, and EMI calculators engineered for maximum lead capture.' },
      { title: 'E-E-A-T Financial SEO & Content', desc: 'Authoritative financial guides, schema markup, and compliant organic search rankings.' },
      { title: 'High-Intent Google & Meta Lead Funnels', desc: 'Precision-targeted campaigns for loans, insurance, wealth management, and B2B fintech SaaS.' },
      { title: 'Online Reputation Management (ORM)', desc: 'Proactive review monitoring, trust badge integration, and brand sentiment protection.' },
      { title: 'CRM & Core API Integrations', desc: 'Seamless connectivity with Zoho, Salesforce, LeadSquared, and payment/KYC gateways.' },
    ],
    techStack: ['Next.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Supabase', 'Flutter', 'Google Ads', 'LeadSquared'],
    faqs: [
      {
        q: 'How do you ensure data security for financial and insurance applications?',
        a: 'We implement end-to-end HTTPS/TLS encryption, parameterized SQL queries, OAuth2/JWT authentication, role-based access controls, and regular vulnerability checks.',
      },
      {
        q: 'Can you build custom EMI, SIP, or policy premium calculators?',
        a: 'Yes. We design and code custom interactive calculators tailored to your exact actuarial or lending formulas with instant lead capture.',
      },
      {
        q: 'How do you handle Google & Meta ad policies for financial services?',
        a: 'Our certified ad specialists structure ad copy, disclosures, and landing page compliance strictly according to Google Financial Services and Meta Special Ad Category guidelines.',
      },
      {
        q: 'Do you sign NDAs for proprietary fintech software projects?',
        a: 'Yes, we execute bilateral Non-Disclosure Agreements (NDAs) prior to discovery and grant 100% source code and IP ownership.',
      },
    ],
  },
  {
    slug: 'healthcare-hospitals-clinics',
    title: 'Healthcare, Hospitals, Clinics & MedTech Solutions',
    shortTitle: 'Healthcare & Hospitals',
    tag: 'Patient Apps • Local SEO • HMS',
    subtitle: 'Patient Appointment Portals, Local Google Map 3-Pack Dominance & Telehealth Apps',
    description:
      'From multi-specialty hospitals and IVF/dental chains to diagnostic labs and MedTech startups, we build frictionless patient booking platforms and drive verified daily patient inquiries.',
    metricBadge: '+310% Patient Inquiries',
    iconName: 'Stethoscope',
    stats: [
      { value: '+310%', label: 'Patient Appointment Growth', sub: 'Search SEO + Local GMB 3-Pack' },
      { value: '4.9★', label: 'Patient Reputation Score', sub: 'Verified ORM & Review Systems' },
      { value: '< 0.5s', label: 'Doctor Directory Speed', sub: 'Instant Mobile Appointment Booking' },
      { value: '65+', label: 'Healthcare Providers Served', sub: 'Hospitals, Clinics & Diagnostics' },
    ],
    challenges: [
      {
        problem: 'Patients unable to find specialist doctors or book appointments easily on mobile.',
        solution: 'We build intuitive doctor directory websites and Android/iOS patient apps with real-time slot booking and WhatsApp reminders.',
      },
      {
        problem: 'Low visibility in local "near me" Google searches and Google Maps.',
        solution: 'Complete Google Business Profile (GMB) optimization, local citation building, and department-wise medical SEO.',
      },
      {
        problem: 'Unfavorable or unmonitored online patient reviews hurting hospital credibility.',
        solution: 'Structured Online Reputation Management (ORM) and automated post-visit feedback flows that grow authentic 5-star patient reviews.',
      },
      {
        problem: 'Fragmented lab reports, prescriptions, and patient follow-up records.',
        solution: 'Custom HMS/EMR portals and diagnostic report download systems secured with OTP verification.',
      },
    ],
    deliverables: [
      { title: 'Hospital & Clinic Websites', desc: 'Department directories, doctor profiles, symptom guides, and instant appointment scheduling.' },
      { title: 'Telemedicine & Patient Mobile Apps', desc: 'Android & iOS apps for video consultations, prescription history, and lab test bookings.' },
      { title: 'Local SEO & Google Business Profile', desc: 'Dominate "best hospital/doctor near me" searches across Google Maps and local SERPs.' },
      { title: 'Healthcare PPC & Meta Lead Campaigns', desc: 'Targeted patient acquisition for dental, IVF, orthopedic, cosmetic, and diagnostic packages.' },
      { title: 'Medical ORM & Educational YouTube', desc: 'Doctor explainer videos, health awareness reels, and reputation management.' },
      { title: 'Custom HMS & Lab Portal Software', desc: 'Patient registration, billing, lab report PDF delivery, and WhatsApp notification workflows.' },
    ],
    techStack: ['Next.js', 'WordPress', 'Flutter', 'PHP / Laravel', 'PostgreSQL', 'Google Business Profile', 'WhatsApp API', 'Google Ads'],
    faqs: [
      {
        q: 'Can patients book doctor appointments and pay consultation fees online?',
        a: 'Yes. We build custom doctor schedule calendars with slot locks, Razorpay/UPI payment integration, and automated SMS/WhatsApp confirmations.',
      },
      {
        q: 'How fast can you improve our clinic or hospital ranking on Google Maps?',
        a: 'Most healthcare clients see measurable improvements in Google Business Profile calls and direction requests within 30 to 60 days of our local SEO and review optimization.',
      },
      {
        q: 'Can you integrate our website with Practo, MocDoc, or our internal HIS/HMS?',
        a: 'Yes, our engineering team integrates with third-party hospital management systems and custom REST APIs.',
      },
      {
        q: 'Do you create doctor awareness videos and social media graphics?',
        a: 'Yes! Our creative studio produces medical infographics, doctor reel edits, clinic branding, and patient education motion videos.',
      },
    ],
  },
  {
    slug: 'real-estate-construction',
    title: 'Real Estate, Developers & Commercial Property Solutions',
    shortTitle: 'Real Estate & Property',
    tag: 'Site-Visit Funnels • Property Portals • 3D',
    subtitle: 'High-Intent Property Portals, Qualified Site-Visit Campaigns & CRM Automation',
    description:
      'We help residential builders, commercial developers, luxury brokerages, and architectural firms generate verified site-visit bookings and NRI buyer inquiries through high-converting microsites and performance marketing.',
    metricBadge: '-45% Cost Per Site Visit',
    iconName: 'Building2',
    stats: [
      { value: '-45%', label: 'Cost Per Site Visit', sub: 'Pre-Qualified Buyer Lead Funnels' },
      { value: '3.8x', label: 'Booking Pipeline Growth', sub: 'Meta + Google High-Intent Search' },
      { value: '100%', label: 'Instant CRM Lead Sync', sub: 'Sell.Do, Zoho & WhatsApp Drip' },
      { value: '90+', label: 'Real Estate Projects Promoted', sub: 'Residential, Commercial & Plots' },
    ],
    challenges: [
      {
        problem: 'High volume of junk or unqualified leads from generic social media ads.',
        solution: 'We use multi-step qualification forms, budget/configuration filters, and high-intent Google Search keywords to capture serious buyers.',
      },
      {
        problem: 'Delayed sales follow-ups causing hot property inquiries to go cold.',
        solution: 'Real-time webhook integration with Sell.Do, Zoho, or HubSpot plus instant automated WhatsApp brochure delivery.',
      },
      {
        problem: 'Static, uninspiring project pages that fail to showcase luxury amenities.',
        solution: 'Interactive project microsites featuring floor-plan switchers, location advantage maps, EMI calculators, and walkthrough videos.',
      },
      {
        problem: 'Need for cohesive offline and online launch collateral.',
        solution: 'Complete project branding including hoarding design, print brochures, 3D motion graphics, and digital ad kits.',
      },
    ],
    deliverables: [
      { title: 'Interactive Project Microsites & Portals', desc: 'High-speed landing pages and multi-project property portals with floor plans and virtual tours.' },
      { title: 'Meta & Google Real Estate Lead Generation', desc: 'Domestic and NRI investor campaigns targeted by income, location intent, and property type.' },
      { title: 'Real Estate CRM & WhatsApp Automation', desc: 'Zero-latency lead routing to sales teams with automated brochure and site-visit scheduling.' },
      { title: 'Local & Project SEO Dominance', desc: 'Rank for locality-specific residential and commercial property keywords.' },
      { title: 'Brochures, Hoardings & Print Design', desc: 'Luxury real estate pitch decks, floor-plan booklets, site signage, and newspaper ads.' },
      { title: 'Motion Walkthroughs & Reel Videos', desc: 'High-impact architectural teasers, drone reel edits, and animated project explainers.' },
    ],
    techStack: ['Next.js', 'WordPress', 'Meta Lead Ads', 'Google Ads', 'Sell.Do / Zoho CRM', 'WhatsApp Business API', 'After Effects', 'Figma'],
    faqs: [
      {
        q: 'How do you improve real estate lead quality on Facebook, Instagram, and Google?',
        a: 'Instead of generic 1-click forms, we use conditional qualification questions (budget range, BHK/commercial preference, purchase timeline) combined with OTP/WhatsApp brochure verification and Google Search intent targeting.',
      },
      {
        q: 'Can leads go directly into our real estate CRM and trigger a WhatsApp brochure?',
        a: 'Yes. Every enquiry is pushed in under 2 seconds to your CRM (Sell.Do, LeadSquared, Zoho, or Google Sheets) and triggers an automated WhatsApp message with the project brochure.',
      },
      {
        q: 'Do you also design print brochures, hoardings, and project logos?',
        a: 'Yes! Our creative design team handles complete project branding, RERA-compliant print brochures, site hoardings, and social media launch kits.',
      },
      {
        q: 'Can you run NRI lead generation campaigns for Indian real estate projects?',
        a: 'Absolutely. We run geo-targeted campaigns across the UAE, USA, UK, Singapore, Canada, and Australia for luxury and investment properties.',
      },
    ],
  },
  {
    slug: 'edtech-education-coaching',
    title: 'EdTech, Universities, Schools & Coaching Solutions',
    shortTitle: 'EdTech & Education',
    tag: 'LMS Platforms • Admissions • YouTube',
    subtitle: 'Custom LMS Platforms, Student Admission Funnels & High-Growth Education Marketing',
    description:
      'Whether you are a university, K-12 school chain, competitive exam coaching institute, or EdTech SaaS startup, we build interactive learning platforms and automated admission funnels that fill seats every intake.',
    metricBadge: '3.9x Enrollment Lift',
    iconName: 'GraduationCap',
    stats: [
      { value: '3.9x', label: 'Student Enrollment Lift', sub: 'Omnichannel Admission Campaigns' },
      { value: '50K+', label: 'Concurrent LMS Users', sub: 'Scalable Cloud Video & Quiz Portals' },
      { value: '-38%', label: 'Cost Per Admission Lead', sub: 'Search, Meta & YouTube Funnels' },
      { value: '100%', label: 'Automated Fee & Exam Sync', sub: 'Web, Android & iOS Student Apps' },
    ],
    challenges: [
      {
        problem: 'Seasonal admission spikes where counselor teams miss student inquiries.',
        solution: 'Automated admission landing pages with course-wise lead routing, counselor CRM dashboards, and WhatsApp follow-up sequences.',
      },
      {
        problem: 'Off-the-shelf LMS tools charging hefty per-student monthly fees.',
        solution: 'We develop custom web and mobile LMS platforms with video streaming, live classes, mock tests, and automated certificates.',
      },
      {
        problem: 'Difficulty standing out in crowded coaching and university search results.',
        solution: 'Programmatic course SEO, YouTube educational content growth, and verified student success video campaigns.',
      },
      {
        problem: 'Complex fee collection and installment tracking.',
        solution: 'Integrated online fee portals with Razorpay/UPI, automated receipt generation, and parent notifications.',
      },
    ],
    deliverables: [
      { title: 'Custom LMS & E-Learning Portals', desc: 'Video courses, live classes, mock test engines, leaderboards, and progress analytics.' },
      { title: 'Android & iOS Student Mobile Apps', desc: 'Offline video playback, push notifications, doubt forums, and digital study material.' },
      { title: 'University & School Websites', desc: 'NAAC/UGC-ready institutional portals with admission forms, faculty directories, and notice boards.' },
      { title: 'Student Admission Lead Generation', desc: 'High-converting Google Search, Meta, and YouTube ads for degree, diploma, and coaching intakes.' },
      { title: 'YouTube Channel & Content Marketing', desc: 'Lecture thumbnails, educational shorts, YouTube SEO, and faculty branding.' },
      { title: 'Prospectus, Print & Campus Branding', desc: 'Admission brochures, campus banners, certificates, and social media festival/topper creatives.' },
    ],
    techStack: ['Next.js', 'Laravel', 'Flutter', 'WordPress', 'Supabase', 'YouTube Ads', 'Meta Ads', 'Razorpay'],
    faqs: [
      {
        q: 'Can you build a custom LMS with mock tests, negative marking, and video DRM?',
        a: 'Yes. We engineer custom test-prep and LMS platforms supporting timed quizzes, negative marking, detailed rank analytics, and secure video streaming.',
      },
      {
        q: 'How do you help schools, colleges, and coaching institutes increase admissions?',
        a: 'We build dedicated course landing pages and run targeted Google Search ("best BBA/engineering college", "NEET/IIT coaching") and Meta/YouTube lead generation campaigns integrated with your counseling team.',
      },
      {
        q: 'Can parents and students pay tuition fees online through the website or app?',
        a: 'Yes, we integrate UPI, net banking, credit/debit cards, and EMI options with automated PDF fee receipt generation.',
      },
      {
        q: 'Do you also design admission prospectuses and topper ad creatives?',
        a: 'Yes! Our creative team designs print prospectuses, newspaper ads, hoardings, and daily social media creatives.',
      },
    ],
  },
  {
    slug: 'manufacturing-b2b-logistics',
    title: 'Manufacturing, Industrial B2B & Logistics Solutions',
    shortTitle: 'Manufacturing & B2B',
    tag: 'Custom ERP • Export SEO • RFQ Funnels',
    subtitle: 'B2B RFQ Portals, Domestic & Export Industrial SEO, and Custom ERP/Supply Chain Software',
    description:
      'We help manufacturers, exporters, industrial machinery brands, and logistics enterprises digitize operations with custom ERP software and capture bulk B2B buyers across India and global export markets.',
    metricBadge: '85+ Top-3 B2B Keywords',
    iconName: 'Truck',
    stats: [
      { value: '85+', label: 'Top-3 Industrial Keywords', sub: 'Domestic & Global Export SEO' },
      { value: '+240%', label: 'Bulk RFQ Inquiries', sub: 'Technical Catalog & Search Funnels' },
      { value: '40%', label: 'Operational Time Saved', sub: 'Custom ERP & Inventory Automation' },
      { value: '100%', label: 'Custom Spec Searchability', sub: 'SKU, Datasheet & CAD Portals' },
    ],
    challenges: [
      {
        problem: 'Outdated corporate websites that fail to impress international and enterprise procurement teams.',
        solution: 'Modern, fast-loading industrial product portals with downloadable PDF datasheets, certifications, and instant multi-SKU RFQ carts.',
      },
      {
        problem: 'Invisible on Google when global buyers search for OEMs, suppliers, and manufacturers.',
        solution: 'Technical B2B & Export SEO targeting high-value commercial, specification, and country-specific supplier keywords.',
      },
      {
        problem: 'Manual spreadsheets slowing down production, inventory, and dispatch tracking.',
        solution: 'Bespoke web & mobile ERP, warehouse management, and distributor order portals built around your exact factory workflow.',
      },
      {
        problem: 'Lack of professional industrial catalogs and trade-show presentation assets.',
        solution: 'High-impact industrial product catalogs, packaging design, corporate pitch decks, and factory explainer videos.',
      },
    ],
    deliverables: [
      { title: 'B2B Product Catalog & RFQ Websites', desc: 'Filterable technical specifications, datasheet downloads, and bulk Request-for-Quote engines.' },
      { title: 'Custom ERP, Inventory & Logistics Software', desc: 'Tailor-made production tracking, dealer portals, fleet management, and billing software.' },
      { title: 'Domestic & Export B2B SEO', desc: 'Rank on page 1 for "manufacturer", "supplier", and "exporter" keywords in India, USA, Europe & Middle East.' },
      { title: 'Google Search PPC & LinkedIn B2B Leads', desc: 'Capture procurement heads, distributors, and bulk industrial buyers with zero wasted ad spend.' },
      { title: 'Industrial Print Catalogs & Packaging', desc: 'Technical brochures, exhibition booth graphics, carton/label packaging, and brand manuals.' },
      { title: 'Dealer & Field-Force Mobile Apps', desc: 'Android & iOS apps for distributors and sales reps to place orders and track dispatches live.' },
    ],
    techStack: ['Next.js', 'PHP / Laravel', 'PostgreSQL', 'MySQL', 'Flutter', 'Google Search Ads', 'Technical SEO', 'Adobe InDesign'],
    faqs: [
      {
        q: 'Can you build a website where B2B buyers can add multiple items to an RFQ cart without showing retail prices?',
        a: 'Yes! We build custom B2B quote-cart systems where buyers select SKUs, specify quantities, upload drawings, and submit a single consolidated RFQ.',
      },
      {
        q: 'Do you offer international Export SEO for Indian manufacturers?',
        a: 'Yes. We structure multi-region SEO pages, international schema, and technical keyword targeting so importers in the US, EU, GCC, and Africa find your factory directly.',
      },
      {
        q: 'Can you develop custom software for our factory inventory or dealer network?',
        a: 'Absolutely. Our software engineering team builds custom web and mobile ERP modules tailored to your exact manufacturing and dispatch workflow.',
      },
      {
        q: 'Do you design exhibition graphics and printable PDF product catalogs?',
        a: 'Yes, our creative design division creates technical product catalogs, trade-show backdrops, and packaging designs.',
      },
    ],
  },
  {
    slug: 'hospitality-travel-restaurants',
    title: 'Hospitality, Travel, Hotels & Restaurant Solutions',
    shortTitle: 'Hospitality & Travel',
    tag: 'Direct Bookings • GMB • Social Reels',
    subtitle: 'Commission-Free Direct Booking Websites, Local Search Dominance & Viral Social Media',
    description:
      'We empower hotels, resorts, travel agencies, tour operators, and fine-dining restaurant chains to drive direct bookings, dominate local search & TripAdvisor/GMB, and captivate audiences on Instagram & YouTube.',
    metricBadge: '+190% Direct Bookings',
    iconName: 'Plane',
    stats: [
      { value: '+190%', label: 'Direct Website Bookings', sub: 'Save 18–25% OTA Commissions' },
      { value: '4.8★', label: 'Average Guest Rating', sub: 'GMB & TripAdvisor ORM Growth' },
      { value: '3.5x', label: 'Tour Inquiry Volume', sub: 'Google Search & Meta Visual Ads' },
      { value: '0.4s', label: 'Gallery & Itinerary Load', sub: 'Mobile-First Visual Experience' },
    ],
    challenges: [
      {
        problem: 'Losing 20%+ revenue margin to third-party OTAs and food aggregators.',
        solution: 'We build high-converting direct room/table/tour booking websites with instant UPI/card payment confirmation and loyalty perks.',
      },
      {
        problem: 'Seasonal occupancy dips during off-peak months.',
        solution: 'Targeted Google Search, Meta retargeting, and corporate/wedding/staycation lead generation campaigns.',
      },
      {
        problem: 'Weak visual presence on Instagram, YouTube, and Google Maps.',
        solution: 'Scroll-stopping hospitality reels, motion graphics, menu designs, and complete Google Business Profile optimization.',
      },
      {
        problem: 'Slow manual itinerary quoting for travel agencies and tour operators.',
        solution: 'Dynamic tour package portals with day-wise itinerary builders, PDF downloads, and automated WhatsApp inquiry capture.',
      },
    ],
    deliverables: [
      { title: 'Hotel & Resort Direct Booking Websites', desc: 'Room galleries, availability calendars, direct payment gateways, and wedding/banquet inquiry funnels.' },
      { title: 'Travel Agency & Tour Package Portals', desc: 'Filterable domestic/international itineraries, custom trip planners, and instant lead capture.' },
      { title: 'Google Business Profile & Local SEO', desc: 'Rank #1 for local hotel, resort, cafe, and travel agency searches with verified guest review growth.' },
      { title: 'Social Media Management & Video Reels', desc: 'High-aesthetic Instagram grids, reel editing, influencer kits, and seasonal festive campaigns.' },
      { title: 'Performance Ads for Bookings & Events', desc: 'High-ROI campaigns for holiday packages, destination weddings, corporate offsites, and dining.' },
      { title: 'Menus, Packaging & Hospitality Branding', desc: 'Luxury menu cards, takeaway packaging, property signage, and brand identity systems.' },
    ],
    techStack: ['Next.js', 'WordPress', 'WooCommerce', 'Razorpay', 'Google Business Profile', 'Meta Ads', 'Instagram Reels', 'Adobe Creative Suite'],
    faqs: [
      {
        q: 'Can guests book rooms or tour packages directly on our website with online payment?',
        a: 'Yes. We integrate direct booking engines and payment gateways (Razorpay, Stripe, PayU) with instant email and WhatsApp booking vouchers.',
      },
      {
        q: 'Can you help us generate inquiries for destination weddings and banquet bookings?',
        a: 'Yes! We build dedicated wedding/banquet landing pages and run targeted Meta and Google Search campaigns for high-ticket event bookings.',
      },
      {
        q: 'How do you manage our hotel or restaurant reputation on Google and TripAdvisor?',
        a: 'Our ORM specialists optimize your profiles, implement QR-based guest review collection, and professionally manage feedback to boost your star rating.',
      },
      {
        q: 'Do you design restaurant menus, food packaging, and social media reels?',
        a: 'Yes, our creative studio handles complete hospitality branding, print/QR menus, food packaging, and motion video reels.',
      },
    ],
  },
  {
    slug: 'saas-it-startups',
    title: 'SaaS, IT Enterprises & Funded Startup Solutions',
    shortTitle: 'SaaS, IT & Startups',
    tag: 'Full-Stack SaaS • UI/UX • Growth',
    subtitle: 'Cloud-Native Product Engineering, Figma Design Systems & B2B Pipeline Growth',
    description:
      'From MVP launch to Series A+ scale, LIMRA Digitech partners with SaaS founders and IT enterprises to ship full-stack Next.js/Supabase applications, world-class Figma UI/UX systems, and product-led SEO & demand generation.',
    metricBadge: '< 0.3s Edge Speed',
    iconName: 'Cpu',
    stats: [
      { value: '< 0.3s', label: 'Global Edge Response', sub: 'Next.js 16 + Vercel Edge CDN' },
      { value: '100/100', label: 'Core Web Vitals Score', sub: 'Zero-Bloat TypeScript Architecture' },
      { value: '3.7x', label: 'Demo & Trial Conversions', sub: 'CRO-Engineered SaaS Funnels' },
      { value: '2 Weeks', label: 'Rapid MVP Sprint Cycle', sub: 'Agile CI/CD Deployment' },
    ],
    challenges: [
      {
        problem: 'Slow product velocity and technical debt delaying critical feature launches.',
        solution: 'Modular full-stack engineering using Next.js, TypeScript, Node.js, Laravel, and Supabase/PostgreSQL with automated CI/CD.',
      },
      {
        problem: 'Complex software UI that causes user drop-off during onboarding.',
        solution: 'Component-driven Figma UI/UX design systems, interactive prototypes, and frictionless user onboarding flows.',
      },
      {
        problem: 'High burn rate on paid ads without sustainable organic pipeline.',
        solution: 'Programmatic SaaS SEO, competitor comparison pages, documentation hubs, and high-intent search + LinkedIn funnels.',
      },
      {
        problem: 'Need for investor-ready pitch decks and product explainer videos.',
        solution: 'Crisp SaaS motion graphics, UI walkthrough videos, brand guidelines, and VC pitch decks.',
      },
    ],
    deliverables: [
      { title: 'Multi-Tenant SaaS & Web App Development', desc: 'Authentication, subscription billing (Stripe/Razorpay), RBAC, and real-time dashboards.' },
      { title: 'Figma UI/UX Design Systems', desc: 'Design tokens, dark/light mode component libraries, and user-tested interactive prototypes.' },
      { title: 'High-Converting SaaS Marketing Websites', desc: 'Sub-second Next.js marketing sites with interactive pricing tables, changelogs, and docs.' },
      { title: 'Product-Led SEO & Comparison Hubs', desc: 'Rank for "best software for [X]", alternative/comparison keywords, and technical use cases.' },
      { title: 'Free-Trial & Demo Booking Funnels', desc: 'Google Search PPC, Meta retargeting, and LinkedIn lead generation for B2B software.' },
      { title: 'SaaS Explainer Videos & Pitch Decks', desc: 'Animated product walkthroughs, launch trailers, and investor presentation design.' },
    ],
    techStack: ['Next.js', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Figma', 'Stripe / Razorpay'],
    faqs: [
      {
        q: 'Can you build both our high-speed marketing website and our core SaaS web/mobile app?',
        a: 'Yes. Our engineering and UI/UX teams build both conversion-focused marketing sites and full-stack multi-tenant SaaS applications with authentication, billing, and APIs.',
      },
      {
        q: 'Do you work with early-stage startups as well as established IT enterprises?',
        a: 'Yes! We help seed/bootstrapped founders launch rapid MVPs and partner with established enterprises for digital transformation and dedicated growth retainers.',
      },
      {
        q: 'Can your team collaborate directly in our GitHub, Slack, and Figma workspaces?',
        a: 'Absolutely. We follow agile sprint workflows with transparent Git commits, Figma handoffs, and weekly sprint demos.',
      },
      {
        q: 'How do you drive demo bookings and free trials for SaaS products?',
        a: 'We combine bottom-of-funnel Google Search ads and competitor comparison SEO pages with interactive product demos and frictionless signup flows.',
      },
    ],
  },
];

export const technologiesPagesData: TechnologyPageData[] = [
  {
    slug: 'nextjs-react-development',
    title: 'Next.js, React 19 & TypeScript Web Engineering',
    shortTitle: 'Next.js & React Stack',
    tag: 'SSR • Edge • Core Vitals 100',
    subtitle: 'Sub-Second Server-Rendered Websites, Progressive Web Apps & Enterprise Portals',
    description:
      'LIMRA Digitech engineers blazing-fast web applications using Next.js App Router, React 19, TypeScript, and Tailwind CSS — delivering 99+ Google PageSpeed scores, instant page transitions, and unmatched organic SEO performance.',
    metricBadge: '99/100 Core Web Vitals',
    iconName: 'Code2',
    stats: [
      { value: '0.3s', label: 'Average Page Load', sub: 'Server Components & Edge Caching' },
      { value: '99/100', label: 'Google Lighthouse Score', sub: 'Desktop & Mobile Core Vitals' },
      { value: '100%', label: 'Type-Safe Codebase', sub: 'Strict TypeScript Architecture' },
      { value: '3.2x', label: 'Organic SEO Crawl Rate', sub: 'Clean Semantic SSR HTML' },
    ],
    capabilities: [
      { title: 'Next.js App Router & SSR/SSG', desc: 'Hybrid static and dynamic server rendering for instant first contentful paint and complete search engine indexability.' },
      { title: 'React 19 Interactive UI Components', desc: 'Fluid client-side state, optimistic UI updates, interactive calculators, and zero-lag filtering.' },
      { title: 'Strict TypeScript & API Routes', desc: 'End-to-end type safety across frontend components, serverless API routes, and database schemas.' },
      { title: 'Tailwind CSS & Motion Engineering', desc: 'Responsive, lightweight design systems with GPU-accelerated scroll and hover micro-interactions.' },
      { title: 'Headless CMS & E-Commerce Sync', desc: 'Connect seamlessly with Supabase, Sanity, Strapi, WordPress REST/GraphQL, or Shopify Storefront APIs.' },
      { title: 'Technical SEO & JSON-LD Automation', desc: 'Dynamic OpenGraph metadata, XML sitemaps, canonical tags, and structured schema markup.' },
    ],
    useCases: [
      { title: 'High-Converting Corporate & Agency Sites', desc: 'Rank faster on Google and convert visitors with instant load speeds.', badge: 'Most Popular' },
      { title: 'Custom SaaS & Customer Portals', desc: 'Authenticated dashboards, real-time analytics, and multi-tenant workflows.', badge: 'Enterprise' },
      { title: 'Headless E-Commerce Storefronts', desc: 'Sub-second product browsing paired with Shopify or custom checkout APIs.', badge: 'High ROAS' },
    ],
    stackTools: ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS', 'Node.js', 'Vercel Edge', 'REST & GraphQL', 'JSON-LD SEO'],
    faqs: [
      {
        q: 'Why is Next.js better for SEO and speed compared to traditional SPAs or heavy builders?',
        a: 'Next.js pre-renders clean HTML on the server, optimizes images automatically into WebP/AVIF, splits JavaScript bundles per route, and prefetches links in the viewport — resulting in near-instant navigation and superior Google Core Web Vitals.',
      },
      {
        q: 'Can non-technical team members still edit blogs, portfolio items, and pages on a Next.js site?',
        a: 'Yes! We pair Next.js with an intuitive admin dashboard or headless CMS (such as Supabase, WordPress Headless, or Strapi) so your team can publish content anytime without touching code.',
      },
      {
        q: 'Can you migrate our slow WordPress or PHP site to Next.js without losing Google rankings?',
        a: 'Yes. We preserve all existing URLs or configure 301 permanent redirects, transfer all meta data and headings, and boost your Core Web Vitals score.',
      },
      {
        q: 'Where can Next.js websites be hosted?',
        a: 'They can be deployed on Vercel, AWS, DigitalOcean, Cloudflare, or any Node.js/Docker server environment.',
      },
    ],
  },
  {
    slug: 'wordpress-woocommerce',
    title: 'WordPress & WooCommerce Custom Development',
    shortTitle: 'WordPress & WooCommerce',
    tag: 'Custom Themes • Plugins • CMS',
    subtitle: 'Lightweight Custom WordPress Websites, Scalable WooCommerce Stores & SEO-Ready CMS',
    description:
      'We build clean, custom-coded WordPress websites and high-converting WooCommerce online stores — free from bloated multipurpose themes, hardened for security, and engineered for easy content publishing and top Google rankings.',
    metricBadge: 'Zero-Bloat Custom CMS',
    iconName: 'ShoppingBag',
    stats: [
      { value: '200+', label: 'WordPress Sites Delivered', sub: 'Corporate, Editorial & E-Commerce' },
      { value: '95+', label: 'Speed Optimization Score', sub: 'Custom Lightweight Architecture' },
      { value: '100%', label: 'Easy Editorial Control', sub: 'Custom Gutenberg & ACF Blocks' },
      { value: '24/7', label: 'Security & Firewall Shield', sub: 'Malware-Free Hardened Setup' },
    ],
    capabilities: [
      { title: 'Custom WordPress Theme Engineering', desc: 'Bespoke, lightweight themes coded from scratch or Figma designs without slow page-builder bloat.' },
      { title: 'WooCommerce Storefronts & Checkout', desc: 'Complete online stores with variable products, Razorpay/UPI gateways, GST invoicing, and Shiprocket sync.' },
      { title: 'Custom Plugin & API Development', desc: 'Tailor-made PHP plugins, CRM webhooks, booking modules, and third-party API integrations.' },
      { title: 'WordPress Speed & Core Web Vitals Optimization', desc: 'Database query tuning, Redis object caching, WebP compression, and CDN acceleration.' },
      { title: 'Enterprise Security & Malware Hardening', desc: 'Custom login endpoints, WAF firewall configuration, automated backups, and SSL enforcement.' },
      { title: 'On-Page SEO & Schema Readiness', desc: 'Clean permalink structures, RankMath/Yoast pro configuration, and automated XML sitemaps.' },
    ],
    useCases: [
      { title: 'Corporate & Service Business Websites', desc: 'Easy-to-manage marketing websites with custom landing pages and lead forms.', badge: 'CMS Favorite' },
      { title: 'WooCommerce D2C & B2B Stores', desc: 'Full-featured e-commerce with complete ownership and zero monthly platform fees.', badge: 'E-Commerce' },
      { title: 'High-Volume Blogs, News & Media Portals', desc: 'Fast editorial publishing workflows with category silos and author schema.', badge: 'Publishing' },
    ],
    stackTools: ['WordPress 6+', 'WooCommerce', 'PHP 8.3', 'ACF Pro', 'MySQL', 'Redis Cache', 'Razorpay / Stripe', 'RankMath SEO'],
    faqs: [
      {
        q: 'Why are LIMRA Digitech WordPress websites faster than typical agency WordPress sites?',
        a: 'Instead of stacking 40+ heavy plugins and bloated multipurpose themes, we write clean custom code, use lightweight custom fields, optimize database queries, and configure server-level caching.',
      },
      {
        q: 'Can you redesign our existing WordPress site while keeping all our blogs and SEO intact?',
        a: 'Yes! We upgrade your design and theme architecture on a staging server and deploy seamlessly without losing a single blog post, URL, or search ranking.',
      },
      {
        q: 'Is WooCommerce suitable for Indian e-commerce with UPI, COD, and GST billing?',
        a: 'Absolutely. We configure UPI, credit/debit cards, EMI, Cash on Delivery (COD) verification, GST tax slabs, and automated courier label generation.',
      },
      {
        q: 'Will you train our team to update pages, blogs, and products?',
        a: 'Yes, we provide a customized video walkthrough and live training session so your team can manage content effortlessly.',
      },
    ],
  },
  {
    slug: 'shopify-ecommerce',
    title: 'Shopify & Shopify Plus E-Commerce Development',
    shortTitle: 'Shopify & E-Commerce',
    tag: 'Shopify Plus • Liquid • D2C ROAS',
    subtitle: 'High-Converting Shopify Storefronts, Custom Liquid Themes & Headless Commerce',
    description:
      'Launch and scale your D2C brand on the world’s most reliable commerce engine. We design custom Shopify and Shopify Plus stores engineered for maximum Average Order Value (AOV), sub-second mobile browsing, and profitable Meta & Google Shopping ROAS.',
    metricBadge: '+58% Mobile Checkout Lift',
    iconName: 'Store',
    stats: [
      { value: '+58%', label: 'Mobile Conversion Lift', sub: 'Frictionless Cart & UPI Flows' },
      { value: '99.99%', label: 'Storefront Uptime', sub: 'Flash-Sale Ready Infrastructure' },
      { value: '+32%', label: 'Average Order Value (AOV)', sub: 'In-Cart Upsells & Bundles' },
      { value: '100%', label: 'Meta CAPI & GA4 Sync', sub: 'Accurate ROAS Attribution' },
    ],
    capabilities: [
      { title: 'Custom Shopify OS 2.0 & Liquid Themes', desc: 'Bespoke, mobile-first storefront designs with modular drag-and-drop sections and zero app bloat.' },
      { title: 'Conversion Rate Optimization (CRO)', desc: 'Sticky add-to-cart bars, tiered free-gift drawers, bundle builders, and trust-badge architecture.' },
      { title: 'Indian & Global Payment/Shipping Sync', desc: 'Razorpay Magic Checkout, GoKwik, Shiprocket, Delhivery, Stripe, and multi-currency checkout.' },
      { title: 'Shopify App & ERP Integrations', desc: 'Custom private apps, webhook automation, Unicommerce/Zoho sync, and WhatsApp order updates.' },
      { title: 'Shopify Technical SEO & Speed Tuning', desc: 'Liquid render optimization, script deferrals, structured product schema, and collection SEO.' },
      { title: 'Headless Shopify (Hydrogen / Next.js)', desc: 'Sub-second custom frontend experiences powered by Shopify’s Storefront GraphQL API.' },
    ],
    useCases: [
      { title: 'High-Growth D2C Consumer Brands', desc: 'Fashion, beauty, nutraceuticals, lifestyle, and electronics brands scaling paid ads.', badge: 'D2C Growth' },
      { title: 'Cross-Border & Global Exporters', desc: 'Multi-currency, multi-region Shopify Markets stores selling worldwide.', badge: 'Global' },
      { title: 'Platform Migrations to Shopify', desc: 'Zero-downtime migration from WooCommerce, Magento, or custom legacy stores.', badge: 'Migration' },
    ],
    stackTools: ['Shopify OS 2.0', 'Shopify Plus', 'Liquid', 'Storefront GraphQL API', 'Razorpay / Stripe', 'Shiprocket', 'Meta Pixel CAPI', 'Google Merchant Center'],
    faqs: [
      {
        q: 'Can you build a completely custom design on Shopify instead of a generic template?',
        a: 'Yes! We design custom UI/UX in Figma and code bespoke Shopify OS 2.0 Liquid sections tailored specifically to your brand identity.',
      },
      {
        q: 'How do you reduce RTO (Return to Origin) on COD orders for Indian Shopify stores?',
        a: 'We integrate smart checkout solutions, OTP/WhatsApp COD confirmation flows, address validation, and prepaid discount incentives that significantly reduce RTO rates.',
      },
      {
        q: 'Can you speed up our existing slow Shopify store?',
        a: 'Yes. We audit and remove leftover third-party app scripts, optimize Liquid loops, compress assets, and restore fast mobile Core Web Vitals.',
      },
      {
        q: 'Do you also run Meta Ads and Google Shopping Ads for Shopify stores?',
        a: 'Yes, our performance marketing and lead generation team manages full-funnel D2C customer acquisition and retargeting.',
      },
    ],
  },
  {
    slug: 'php-laravel-magento',
    title: 'PHP, Laravel & Magento Enterprise Web Solutions',
    shortTitle: 'PHP, Laravel & Magento',
    tag: 'Laravel MVC • Magento • Custom ERP',
    subtitle: 'Battle-Tested Custom Web Applications, Enterprise Portals, REST APIs & B2B Commerce',
    description:
      'For complex business logic, custom ERP/CRM workflows, and large-catalog multi-vendor e-commerce, our senior PHP, Laravel, and Magento architects build secure, high-throughput applications tailored to your exact specifications.',
    metricBadge: 'Enterprise MVC Architecture',
    iconName: 'Server',
    stats: [
      { value: '10M+', label: 'API Requests Handled', sub: 'Optimized Laravel & Redis Queues' },
      { value: '100K+', label: 'SKUs Supported', sub: 'Magento & Custom B2B Catalogs' },
      { value: '256-Bit', label: 'Security & RBAC', sub: 'OWASP Hardened Architecture' },
      { value: '100%', label: 'Bespoke Business Logic', sub: 'Zero Off-The-Shelf Limitations' },
    ],
    capabilities: [
      { title: 'Custom Laravel Web Applications', desc: 'Clean MVC architecture, background job queues, real-time events, and multi-role admin dashboards.' },
      { title: 'Magento (Adobe Commerce) Development', desc: 'Large-scale B2B and B2C e-commerce stores with tiered wholesale pricing and multi-warehouse inventory.' },
      { title: 'Custom PHP Portals & Legacy Modernization', desc: 'Refactor, speed up, and modernize legacy PHP applications into secure, maintainable architectures.' },
      { title: 'RESTful & GraphQL API Engineering', desc: 'High-speed backend APIs powering Android/iOS mobile apps, ERP sync, and third-party webhooks.' },
      { title: 'Custom CRM, HRMS & Billing Software', desc: 'Automate internal operations, invoicing, vendor management, and role-based reporting.' },
      { title: 'Database Optimization & Caching', desc: 'MySQL/PostgreSQL indexing, Redis caching, and automated cloud backup pipelines.' },
    ],
    useCases: [
      { title: 'Custom ERP, CRM & Business Portals', desc: 'Tailor-made operational software built around your company’s unique workflow.', badge: 'Custom ERP' },
      { title: 'Multi-Vendor & B2B E-Commerce', desc: 'Complex catalogs, distributor pricing tiers, and bulk RFQ ordering systems.', badge: 'B2B Commerce' },
      { title: 'Mobile App Backend & API Engines', desc: 'Scalable Laravel APIs serving Android, iOS, and web clients simultaneously.', badge: 'API Backend' },
    ],
    stackTools: ['PHP 8.3', 'Laravel 11', 'Magento 2', 'MySQL', 'PostgreSQL', 'Redis', 'REST APIs', 'Docker / Linux'],
    faqs: [
      {
        q: 'When should we choose Laravel/PHP over a standard CMS like WordPress?',
        a: 'Choose Laravel when your project involves custom business workflows, multi-role user dashboards, complex database relationships, or proprietary ERP/SaaS features that go beyond standard content publishing.',
      },
      {
        q: 'Can you maintain and upgrade our existing PHP, Laravel, or Magento application?',
        a: 'Yes. We perform code audits, upgrade PHP/Laravel versions, patch security vulnerabilities, optimize slow database queries, and build new modules.',
      },
      {
        q: 'Can Laravel serve as the backend for both our website and our Android/iOS mobile apps?',
        a: 'Absolutely. Laravel excels at providing secure, token-authenticated REST APIs consumed by both web frontends and mobile applications.',
      },
      {
        q: 'Do we get full source code and database ownership?',
        a: 'Yes, 100% of the custom source code, database schemas, and documentation belong to your company.',
      },
    ],
  },
  {
    slug: 'android-ios-flutter',
    title: 'Android, iOS, Flutter & React Native Mobile Apps',
    shortTitle: 'Android & iOS Mobile Stack',
    tag: 'Android • iOS • Flutter • React Native',
    subtitle: 'High-Retention Native & Cross-Platform Mobile Applications Built For Scale',
    description:
      'From consumer on-demand and e-commerce apps to enterprise field-force and FinTech solutions, we engineer smooth 60fps Android and iOS mobile applications with intuitive UI/UX, offline sync, and complete Play Store & App Store deployment.',
    metricBadge: '4.8★ Avg App Store Rating',
    iconName: 'Smartphone',
    stats: [
      { value: '60fps', label: 'Native-Grade UI Speed', sub: 'Smooth Animations & Gestures' },
      { value: '40%', label: 'Faster Time-To-Market', sub: 'Shared Flutter / React Native Code' },
      { value: '99.9%', label: 'Crash-Free Sessions', sub: 'Automated QA & Sentry Monitoring' },
      { value: '100%', label: 'Store Approval Support', sub: 'Google Play & Apple App Store' },
    ],
    capabilities: [
      { title: 'Android App Development (Kotlin / Java)', desc: 'Native Android applications optimized for the full spectrum of smartphones, tablets, and POS devices.' },
      { title: 'iOS App Development (Swift / SwiftUI)', desc: 'Premium iPhone and iPad applications adhering strictly to Apple Human Interface Guidelines.' },
      { title: 'Flutter & React Native Cross-Platform Apps', desc: 'Launch simultaneously on Android and iOS from a single high-performance codebase.' },
      { title: 'Real-Time Notifications, Maps & Payments', desc: 'Firebase push notifications, live GPS tracking, Razorpay/UPI SDKs, and biometric login.' },
      { title: 'Offline-First Storage & Cloud Sync', desc: 'Local SQLite/Hive persistence that works seamlessly even in low-connectivity zones.' },
      { title: 'End-To-End Store Publishing & ASO', desc: 'App Store Optimization (ASO), store screenshots, privacy compliance, and release management.' },
    ],
    useCases: [
      { title: 'Consumer E-Commerce, Booking & On-Demand Apps', desc: 'Shopping, healthcare booking, food/grocery delivery, and service marketplace apps.', badge: 'Consumer Apps' },
      { title: 'EdTech, LMS & Community Platforms', desc: 'Video streaming, live classes, quizzes, and subscription learning apps.', badge: 'EdTech' },
      { title: 'Enterprise Field-Force & Dealer Apps', desc: 'Order booking, attendance, GPS route tracking, and inventory apps.', badge: 'Enterprise' },
    ],
    stackTools: ['Android (Kotlin)', 'iOS (Swift)', 'Flutter (Dart)', 'React Native', 'Firebase', 'Supabase', 'Razorpay SDK', 'Google Maps API'],
    faqs: [
      {
        q: 'Should we build native Android/iOS apps or use Flutter / React Native?',
        a: 'For 90% of businesses, Flutter or React Native is ideal because it delivers near-native 60fps performance on both Android and iOS while reducing development cost and timeline by ~40%. For heavy hardware-specific features, we build native Kotlin/Swift apps.',
      },
      {
        q: 'Do you handle the complete Google Play Store and Apple App Store submission process?',
        a: 'Yes! We prepare store listings, privacy declarations, build signatures, and manage the review process until your app is live on both stores.',
      },
      {
        q: 'Can our mobile app share the same database as our website?',
        a: 'Yes. We connect your mobile app and website to a unified cloud database and API so users, orders, and content stay synced in real time.',
      },
      {
        q: 'Do you provide post-launch app maintenance and OS update support?',
        a: 'Yes, we offer flexible maintenance retainers covering iOS/Android OS upgrades, bug fixes, server monitoring, and new feature releases.',
      },
    ],
  },
  {
    slug: 'cloud-supabase-devops',
    title: 'Cloud Infrastructure, Supabase, Databases & DevOps',
    shortTitle: 'Cloud, Supabase & Databases',
    tag: 'Supabase • PostgreSQL • AWS • Vercel',
    subtitle: 'Elastic Cloud Architecture, Real-Time Relational Databases & Zero-Downtime CI/CD',
    description:
      'Behind every high-performing web or mobile application is rock-solid database and cloud engineering. We architect scalable PostgreSQL/MySQL databases, Supabase real-time backends, AWS/Vercel edge hosting, and automated security pipelines.',
    metricBadge: '99.99% Uptime Architecture',
    iconName: 'Database',
    stats: [
      { value: '99.99%', label: 'Cloud Uptime SLA', sub: 'Multi-Region Redundancy' },
      { value: '< 15ms', label: 'Database Query Latency', sub: 'Indexed PostgreSQL & Redis' },
      { value: '256-Bit', label: 'Row-Level Security (RLS)', sub: 'End-To-End Encrypted Data' },
      { value: 'Zero', label: 'Downtime Deployments', sub: 'Automated Git CI/CD Pipelines' },
    ],
    capabilities: [
      { title: 'Supabase & PostgreSQL Architecture', desc: 'Relational schemas, real-time subscriptions, Row-Level Security (RLS), and secure authentication.' },
      { title: 'MySQL, Redis & High-Volume Data', desc: 'Query optimization, composite indexing, connection pooling, and sub-millisecond in-memory caching.' },
      { title: 'AWS, Vercel Edge & Cloud Hosting', desc: 'Serverless compute, S3 object storage, global CDN edge caching, and auto-scaling servers.' },
      { title: 'Docker, Linux & CI/CD Automation', desc: 'Containerized environments and automated GitHub Actions deployment workflows.' },
      { title: 'API Gateways & Webhook Orchestration', desc: 'Reliable third-party integrations with payment gateways, CRMs, ERPs, and WhatsApp APIs.' },
      { title: 'Cloud Security, SSL & Automated Backups', desc: 'Cloudflare WAF, DDoS protection, daily point-in-time database backups, and uptime alerts.' },
    ],
    useCases: [
      { title: 'Real-Time SaaS & Collaborative Portals', desc: 'Live dashboards, instant notifications, and secure multi-user data isolation.', badge: 'Real-Time' },
      { title: 'High-Traffic E-Commerce & Flash Sales', desc: 'Auto-scaling cloud infrastructure that never crashes during traffic spikes.', badge: 'High Scale' },
      { title: 'Server Migration & Speed Optimization', desc: 'Move from slow shared hosting to modern cloud/CDN infrastructure with zero downtime.', badge: 'Migration' },
    ],
    stackTools: ['Supabase', 'PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Vercel Edge', 'Cloudflare WAF', 'Docker & Git CI/CD'],
    faqs: [
      {
        q: 'Why do you recommend Supabase & PostgreSQL for modern web and software applications?',
        a: 'PostgreSQL is the world’s most advanced open-source relational database, and Supabase adds instant real-time APIs, enterprise-grade authentication, and Row-Level Security without vendor lock-in.',
      },
      {
        q: 'Can you migrate our website or database from slow hosting to cloud servers without downtime?',
        a: 'Yes. We replicate your environment, sync database records, test thoroughly on staging, and switch DNS with zero service interruption.',
      },
      {
        q: 'How is our database protected against data loss or cyber attacks?',
        a: 'We enforce automated daily backups, SSL/TLS encryption in transit and at rest, firewall rate limiting, and strict role-based database permissions.',
      },
      {
        q: 'Will we have direct administrative access to our cloud and hosting accounts?',
        a: 'Yes, all cloud, domain, and database accounts are registered under your organization with full administrative ownership.',
      },
    ],
  },
  {
    slug: 'seo-google-meta-martech',
    title: 'SEO, Google Ads, Meta CAPI & MarTech Stack',
    shortTitle: 'SEO, Google & Meta MarTech',
    tag: 'Technical SEO • Google Ads • Meta CAPI',
    subtitle: 'Full-Funnel Search Dominance, Server-Side Ad Attribution & Automated Lead Pipelines',
    description:
      'Marketing without accurate data and technical SEO is guesswork. We deploy an advanced MarTech ecosystem combining technical SEO tools, Google Ads/GA4 conversion tracking, Meta Conversions API (CAPI), and automated CRM/WhatsApp lead nurturing.',
    metricBadge: '3.8x Verified Marketing ROI',
    iconName: 'TrendingUp',
    stats: [
      { value: '3.8x', label: 'Average Marketing ROI', sub: 'Tracked Click-To-Close Attribution' },
      { value: '250+', label: 'Page-1 Keyword Rankings', sub: 'Technical & Content SEO' },
      { value: '100%', label: 'Server-Side Conversion Sync', sub: 'GA4 + Meta Pixel CAPI' },
      { value: '< 5 Sec', label: 'Instant Lead Response', sub: 'CRM & WhatsApp Automation' },
    ],
    capabilities: [
      { title: 'Technical SEO & Core Web Vitals Stack', desc: 'Ahrefs, Semrush, Screaming Frog, JSON-LD schema, XML sitemaps, and crawl budget optimization.' },
      { title: 'Google Ads, Search Console & GA4', desc: 'High-intent Search PPC, Performance Max, YouTube ads, and custom GA4 conversion event tracking.' },
      { title: 'Meta Business Suite & Conversions API (CAPI)', desc: 'Bypass browser ad-blockers with server-side event tracking for Facebook & Instagram lead campaigns.' },
      { title: 'Google Business Profile (GMB) & Local SEO', desc: 'Local 3-Pack map rankings, geo-tagged updates, citation consistency, and review velocity.' },
      { title: 'Sales Funnel & Landing Page CRO', desc: 'A/B tested landing pages, heatmaps, multi-step lead forms, and spam-protected enquiry APIs.' },
      { title: 'CRM & WhatsApp Lead Automation', desc: 'Instant webhook integration with Zoho, HubSpot, LeadSquared, Sell.Do, and WhatsApp Business API.' },
    ],
    useCases: [
      { title: 'B2B & Service Lead Generation Engines', desc: 'Predictable daily qualified inquiries via Google Search Ads, Meta Lead Funnels, and SEO.', badge: 'Lead Gen' },
      { title: 'Local & Multi-City Search Dominance', desc: 'Capture high-intent local customers across Google Search and Google Maps.', badge: 'Local SEO' },
      { title: 'D2C E-Commerce Performance Scaling', desc: 'Full-funnel catalog ads, retargeting, and ROAS optimization.', badge: 'Performance' },
    ],
    stackTools: ['Google Ads', 'Google Analytics 4', 'Google Search Console', 'Meta Ads & CAPI', 'Ahrefs & Semrush', 'Google Business Profile', 'HubSpot / Zoho', 'WhatsApp API'],
    faqs: [
      {
        q: 'How do you track exactly which ad or keyword generated a phone call or form enquiry?',
        a: 'We configure Google Tag Manager, GA4 custom events, UTM parameter capture inside hidden form fields, and Meta Conversions API so every lead is traced back to its exact campaign and keyword.',
      },
      {
        q: 'What is included in your technical and on-page SEO technology stack?',
        a: 'We use Ahrefs, Semrush, Screaming Frog, and Google Search Console alongside code-level Core Web Vitals optimization, JSON-LD schema markup, and topical authority content clusters.',
      },
      {
        q: 'Can you connect our website and ad forms directly to WhatsApp and our CRM?',
        a: 'Yes! Leads from your website, Google Ads, and Meta Ads are synced in real time to your CRM and trigger instant WhatsApp notifications.',
      },
      {
        q: 'Do we get live reporting dashboards for SEO and paid campaigns?',
        a: 'Yes, you receive transparent monthly and real-time analytics reports showing impressions, clicks, keyword ranks, CPL, and verified conversions.',
      },
    ],
  },
  {
    slug: 'figma-adobe-creative-suite',
    title: 'UI/UX, Figma, Branding & Motion Graphics Suite',
    shortTitle: 'UI/UX, Figma & Motion Suite',
    tag: 'Figma • Adobe CC • Motion Video',
    subtitle: 'Conversion-Focused UI/UX Design Systems, Brand Identity, Print/Packaging & Motion Video',
    description:
      'Great technology deserves unforgettable design. Our creative studio uses Figma, Adobe Creative Cloud, and After Effects to craft high-converting website/app UI/UX, iconic brand identities, print & packaging dielines, and scroll-stopping motion graphics.',
    metricBadge: '+48% Engagement & Conversion',
    iconName: 'Palette',
    stats: [
      { value: '+48%', label: 'UI Conversion Uplift', sub: 'Research-Backed UX Flows' },
      { value: '100%', label: 'Component Design Systems', sub: 'Scalable Figma Token Libraries' },
      { value: '300 DPI', label: 'Print & Packaging Precision', sub: 'CMYK Press-Ready Artwork' },
      { value: '4K 60fps', label: 'Motion & Video Output', sub: 'Ad Reels, Explainers & Logos' },
    ],
    capabilities: [
      { title: 'Figma UI/UX & Interactive Prototyping', desc: 'User journey mapping, wireframes, clickable prototypes, and developer-ready design systems.' },
      { title: 'Brand Identity & Logo Architecture', desc: 'Timeless vector logos, color psychology, typography systems, and comprehensive brand guidelines.' },
      { title: 'Social Media & Performance Ad Creatives', desc: 'High-CTR static carousels, festival campaigns, and thumb-stopping ad banners.' },
      { title: 'Print Design, Brochures & Catalogs', desc: 'Corporate brochures, pitch decks, flyers, hoardings, and exhibition booth graphics.' },
      { title: 'Product Packaging & Label Design', desc: 'Structural box dielines, pouch/bottle labels, 3D mockups, and retail-ready artwork.' },
      { title: 'Motion Graphics, Reels & Video Editing', desc: 'Animated explainer videos, 3D logo reveals, YouTube edits, and high-retention Instagram/Meta reels.' },
    ],
    useCases: [
      { title: 'Website & Mobile App UI/UX Redesign', desc: 'Transform outdated interfaces into modern, intuitive digital experiences.', badge: 'UI/UX Design' },
      { title: 'Complete Brand Launch & Rebranding', desc: 'Logo, brand book, stationery, packaging, and social media launch kit.', badge: 'Branding' },
      { title: 'High-Velocity Ad Creative & Video Production', desc: 'Continuous supply of static and motion video creatives for paid marketing.', badge: 'Growth Creative' },
    ],
    stackTools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'After Effects', 'Premiere Pro', '3D Packaging Mockups', 'Design Systems'],
    faqs: [
      {
        q: 'Do you share interactive Figma prototypes before coding our website or app?',
        a: 'Yes! Every custom web or mobile app project starts in Figma so you can review and approve the exact layout, colors, and interactive flows before engineering begins.',
      },
      {
        q: 'Do we receive editable source files for our logo, print brochures, and packaging?',
        a: 'Yes. Upon completion, we deliver all master vector files (AI, EPS, PDF, SVG), high-resolution PNG/JPEGs, font licenses info, and Figma links.',
      },
      {
        q: 'Can you create both print packaging/brochures and digital motion videos?',
        a: 'Yes! Our creative division includes specialist graphic designers for print/packaging, UI/UX designers for web/mobile, and motion artists for video and reels.',
      },
      {
        q: 'Do you offer monthly social media creative and video packages?',
        a: 'Yes, we offer dedicated monthly creative retainers covering social media posts, ad creatives, and motion reels.',
      },
    ],
  },
];

