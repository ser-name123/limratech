import { ServiceItem, CaseStudy, Testimonial, BlogPost } from '@/types';

export const companyInfo = {
  name: 'LIMRA Digitech',
  tagline: 'Transforming Businesses With Smart Digital Solutions',
  subheading: 'Driving Pan-India Growth with Next-Gen Tech & Digital Marketing',
  phone: '+91-9571302312',
  phoneClean: '+919571302312',
  email: 'limradigitech@gmail.com',
  address: 'India (Pan-India Digital Solutions & Headquarters)',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  social: {
    facebook: 'https://www.facebook.com/limradigitech.india',
    twitter: 'https://x.com/limradigitech',
    linkedin: 'https://www.linkedin.com/company/limra-digitech',
    instagram: 'https://www.instagram.com/limra.digitech/',
  },
  stats: [
    { label: 'Successful Projects', value: '500+' },
    { label: 'Happy Clients', value: '350+' },
    { label: 'ROI Average Growth', value: '3.8x' },
    { label: 'Team Experts', value: '25+' },
  ]
};

export const servicesData: ServiceItem[] = [
  {
    id: '1',
    slug: 'website-development-services',
    title: 'Website Development',
    short_description: 'Building high-speed, scalable web applications, e-commerce platforms, and corporate websites using Next.js, WordPress, Shopify, PHP, Laravel, Magento, and WooCommerce.',
    full_description: 'We engineer robust, responsive, and search-optimized web platforms designed to convert visitors into loyal clients. Whether you need a custom Next.js web application, a high-converting Shopify or WooCommerce e-commerce store, or enterprise PHP/Laravel/Magento systems, we focus on blazing-fast load speeds, intuitive UX, and clean maintainable code.',
    icon: 'Code2',
    features: [
      'Custom Full-Stack Next.js, React & Web Applications',
      'WordPress, WooCommerce & Custom CMS Architecture',
      'Shopify, Magento & High-Converting E-Commerce Stores',
      'Enterprise PHP & Laravel Backend Engineering'
    ],
    sub_services: [
      { name: 'Next.js & Web Applications', desc: 'Sub-second SSR/SSG React web applications engineered for 100/100 Core Web Vitals.', tag: 'Next.js 16' },
      { name: 'WordPress & WooCommerce', desc: 'Custom lightweight themes, headless setups, and high-conversion WooCommerce stores.', tag: 'CMS & Store' },
      { name: 'Shopify E-Commerce', desc: 'Custom Liquid themes, Shopify Plus headless storefronts, and checkout optimization.', tag: 'E-Commerce' },
      { name: 'PHP & Laravel Development', desc: 'Secure, modular enterprise web portals, custom APIs, and scalable MVC systems.', tag: 'Backend' },
      { name: 'Magento Enterprise', desc: 'Multi-vendor and large-catalog e-commerce engineering with ERP & inventory sync.', tag: 'Enterprise' },
      { name: 'Custom E-Commerce Solutions', desc: 'Bespoke shopping carts, Razorpay/Stripe payment gateways, and omnichannel catalogs.', tag: 'Custom Cart' },
    ],
    tech_stack: ['Next.js', 'WordPress', 'Shopify', 'PHP', 'Laravel', 'Magento', 'WooCommerce', 'React', 'TypeScript'],
    image: '/images/service-nextjs-web-development.jpg',
    imageAlt: 'Website Development Services - WordPress, Shopify, Next.js, PHP, Laravel, Magento and WooCommerce - LIMRA Digitech',
    order_index: 1,
  },
  {
    id: '2',
    slug: 'digital-marketing-agency-india',
    title: 'Digital Marketing',
    short_description: 'Accelerate revenue with SEO, Google Ads/PPC, Search Engine Marketing, Social Media Marketing, YouTube/Content Marketing, ORM, and Google Business Profile optimization.',
    full_description: 'Our digital marketing campaigns are built around verifiable ROI and omnichannel brand dominance. From ranking #1 organically via technical SEO and Google Business Profile optimization to scaling immediate traffic via Google Ads/PPC, Social Media Management, YouTube video marketing, and Online Reputation Management (ORM), we make every marketing rupee count.',
    icon: 'TrendingUp',
    features: [
      'Technical & Organic Search Engine Optimization (SEO)',
      'Google Ads / PPC & Search Engine Marketing (SEM)',
      'Social Media Marketing (SMM) & YouTube Content Growth',
      'Online Reputation Management (ORM) & Google Business Profile'
    ],
    sub_services: [
      { name: 'Search Engine Optimization (SEO)', desc: 'On-page, off-page, technical SEO, and topical entity authority for Google Page #1.', tag: 'Organic #1' },
      { name: 'Google Ads / PPC & SEM', desc: 'High-intent Search, Display, Shopping, and Performance Max campaigns with strict ROAS.', tag: 'Paid Search' },
      { name: 'Social Media Marketing & Management', desc: 'End-to-end brand storytelling, community growth, and paid scaling on Instagram, FB & LinkedIn.', tag: 'SMM' },
      { name: 'YouTube & Content Marketing', desc: 'Video SEO, high-retention scripts, authority articles, and multi-channel content distribution.', tag: 'Video & Content' },
      { name: 'Online Reputation Management (ORM)', desc: 'Brand sentiment protection, review management, and positive SERP authority building.', tag: 'Brand Trust' },
      { name: 'Google Business Profile (GMB)', desc: 'Local 3-Pack map domination, NAP citation consistency, and localized lead generation.', tag: 'Local SEO' },
    ],
    tech_stack: ['SEO', 'Google Ads', 'SEM', 'Social Media', 'YouTube Marketing', 'ORM', 'Google Business Profile', 'GA4'],
    image: '/images/service-digital-marketing-agency.jpg',
    imageAlt: 'Digital Marketing Agency India - SEO, Google Ads PPC, SMM, YouTube, ORM and GMB - LIMRA Digitech',
    order_index: 2,
  },
  {
    id: '3',
    slug: 'lead-generation-company-india',
    title: 'Lead Generation',
    short_description: 'Executing hyper-targeted Meta Ads, Google lead generation campaigns, and high-converting sales funnel creation for B2B and B2C growth.',
    full_description: 'Stop chasing cold prospects. We engineer predictable inbound and outbound lead acquisition systems combining laser-targeted Meta Ads, high-intent Google Lead Generation campaigns, and multi-step sales funnel creation that deliver pre-qualified buyers directly to your sales team.',
    icon: 'Target',
    features: [
      'High-Converting Meta Ads (Facebook & Instagram Lead Funnels)',
      'Google Search & Performance Max Lead Generation Campaigns',
      'End-to-End Sales Funnel Creation & Landing Page CRO',
      'Automated CRM Sync, WhatsApp & Instant Lead Qualification'
    ],
    sub_services: [
      { name: 'Meta Ads Lead Campaigns', desc: 'Lookalike audiences, dynamic creative testing, and instant forms with quality filtering.', tag: 'Meta Ads' },
      { name: 'Google Lead Generation', desc: 'Capturing high-intent bottom-of-funnel searchers actively looking for your services.', tag: 'Google Leads' },
      { name: 'Sales Funnel Creation', desc: 'Dedicated landing pages, lead magnets, OTP verification, and automated nurture flows.', tag: 'Sales Funnels' },
      { name: 'B2B & LinkedIn Pipeline', desc: 'Decision-maker targeting for enterprise software, real estate, finance, and industrial B2B.', tag: 'B2B Pipeline' },
      { name: 'CRM & WhatsApp Automation', desc: 'Real-time webhook delivery to HubSpot, Zoho, Salesforce, and instant WhatsApp alerts.', tag: 'Automation' },
      { name: 'Conversion Rate Optimization (CRO)', desc: 'Heatmap analysis, A/B split testing, and form friction reduction for lower CPL.', tag: 'CRO' },
    ],
    tech_stack: ['Meta Ads', 'Google Lead Campaigns', 'Sales Funnels', 'Landing Pages', 'CRM Sync', 'WhatsApp API'],
    image: '/images/service-lead-generation-funnel.jpg',
    imageAlt: 'Lead Generation Company India - Meta Ads, Google Lead Campaigns and Sales Funnel Creation - LIMRA Digitech',
    order_index: 3,
  },
  {
    id: '4',
    slug: 'creative-design-solutions-india',
    title: 'Creative Design',
    short_description: 'Crafting memorable branding & identity, social media creatives, print design, website/UI design, packaging, and motion graphics/video design.',
    full_description: 'A distinctive visual identity builds instant credibility. Our creative studio blends consumer psychology and modern design systems to deliver comprehensive branding and identity, scroll-stopping social media creatives, print design, website/UI design, product packaging, and engaging motion graphics & video design.',
    icon: 'Palette',
    features: [
      'Complete Branding, Logo & Visual Identity Systems',
      'Website UI/UX Design & Interactive Figma Prototypes',
      'Social Media Creatives, Print Design & Product Packaging',
      'Motion Graphics, Explainer Videos & Reels Editing'
    ],
    sub_services: [
      { name: 'Branding & Identity', desc: 'Logo design, brand guidelines, typography hierarchies, and corporate identity kits.', tag: 'Brand Identity' },
      { name: 'Website & UI/UX Design', desc: 'Conversion-focused web interfaces, mobile app wireframes, and interactive Figma systems.', tag: 'UI/UX Design' },
      { name: 'Social Media Creatives', desc: 'High-engagement carousels, ad banners, festival posts, and campaign visual kits.', tag: 'Social Kits' },
      { name: 'Print Design', desc: 'Corporate brochures, pitch decks, catalogs, hoardings, flyers, and event stationery.', tag: 'Print Media' },
      { name: 'Packaging Design', desc: 'Retail-ready box packaging, pouch labels, D2C unboxing experiences, and 3D mockups.', tag: 'Packaging' },
      { name: 'Motion Graphics & Video Design', desc: '2D/3D motion graphics, promotional ad videos, logo animations, and social reels.', tag: 'Motion & Video' },
    ],
    tech_stack: ['Branding', 'UI/UX Figma', 'Social Creatives', 'Print Design', 'Packaging', 'Motion Graphics', 'After Effects'],
    image: '/images/service-ui-ux-creative-design.jpg',
    imageAlt: 'Creative Design Studio India - Branding, UI Design, Print, Packaging and Motion Graphics - LIMRA Digitech',
    order_index: 4,
  },
  {
    id: '5',
    slug: 'mobile-app-developer-india',
    title: 'App Development',
    short_description: 'Developing high-performance native and cross-platform Android and iOS mobile applications with sleek UX and scalable cloud backends.',
    full_description: 'Turn your mobile vision into a high-retention Android and iOS application. We engineer native and cross-platform mobile apps with smooth 60fps animations, offline synchronization, secure payment gateways, push notifications, and real-time cloud backend APIs.',
    icon: 'Smartphone',
    features: [
      'Native & Cross-Platform Android App Development',
      'High-Performance iOS App Engineering for iPhone & iPad',
      'Flutter & React Native Single-Codebase Efficiency',
      'Secure Cloud APIs, Payment Gateways & App Store Launch'
    ],
    sub_services: [
      { name: 'Android App Development', desc: 'Custom Kotlin, Java, and Flutter apps optimized for the entire Android device ecosystem.', tag: 'Android Play' },
      { name: 'iOS App Development', desc: 'Precision Swift and React Native applications adhering to strict Apple Human Interface Guidelines.', tag: 'Apple iOS' },
      { name: 'Cross-Platform (Flutter & React Native)', desc: 'Launch simultaneously on Android and iOS with native performance and unified maintenance.', tag: 'Cross-Platform' },
      { name: 'E-Commerce & Delivery Apps', desc: 'Real-time GPS tracking, cart sync, Razorpay/UPI integration, and push notifications.', tag: 'M-Commerce' },
      { name: 'Enterprise & Workforce Apps', desc: 'Field-force tracking, role-based employee portals, and offline-first data capture.', tag: 'Enterprise Mobile' },
      { name: 'App Store Optimization (ASO) & Support', desc: 'Play Store & App Store compliance, crash analytics, and ongoing version upgrades.', tag: 'ASO & SLA' },
    ],
    tech_stack: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Supabase'],
    image: '/images/service-mobile-app-development.jpg',
    imageAlt: 'Mobile App Development India - Android and iOS Custom Applications - LIMRA Digitech',
    order_index: 5,
  },
  {
    id: '6',
    slug: 'software-developers-india',
    title: 'Software Development',
    short_description: 'Building custom software, enterprise business applications, ERP/CRM portals, and cloud SaaS platforms tailored to your operations.',
    full_description: 'Eliminate operational bottlenecks with custom software and business applications engineered around your exact workflow. From multi-tenant SaaS products and custom CRM/ERP portals to automated billing, inventory management, and API integrations, we build secure, future-proof software.',
    icon: 'Layers',
    features: [
      'Custom Enterprise Software & Business Applications',
      'Tailored CRM, ERP, HRMS & Inventory Management Systems',
      'Multi-Tenant Cloud SaaS Product Engineering',
      'Third-Party API Integration, Legacy Migration & Automation'
    ],
    sub_services: [
      { name: 'Custom Software Development', desc: 'End-to-end bespoke software engineered to solve complex business and operational challenges.', tag: 'Custom Code' },
      { name: 'Business Applications (ERP / CRM)', desc: 'Role-based internal dashboards, sales pipelines, billing, and resource planning portals.', tag: 'Business Apps' },
      { name: 'SaaS Product Development', desc: 'Multi-tenant architecture, subscription billing, user onboarding, and elastic cloud scaling.', tag: 'Cloud SaaS' },
      { name: 'API & System Integration', desc: 'Connecting payment gateways, logistics, accounting (Tally/Zoho), and REST/GraphQL webhooks.', tag: 'API Sync' },
      { name: 'Database & Cloud Architecture', desc: 'PostgreSQL, Supabase, AWS, and Docker clusters with automated backups and encryption.', tag: 'Cloud DB' },
      { name: 'Legacy Software Modernization', desc: 'Migrating slow desktop or legacy web software to modern cloud-native TypeScript stacks.', tag: 'Migration' },
    ],
    tech_stack: ['Custom Software', 'Business Apps', 'Node.js', 'Python', 'Supabase', 'PostgreSQL', 'Docker', 'AWS'],
    image: '/images/service-enterprise-software-development.jpg',
    imageAlt: 'Software Development Company India - Custom Software and Business Applications - LIMRA Digitech',
    order_index: 6,
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: '1',
    title: 'PPC Advertising & High-Intent Lead Engine',
    slug: 'ppc-advertising-growth',
    category: 'marketing',
    tag: 'ANALYSIS, MARKETING',
    image_url: '/images/case-study-fintech-ppc-leads.jpg',
    description: 'Scaled high-ticket lead generation for an enterprise client with a 4.2x ROI on Google Search and Meta Ads.',
    results: '+320% Qualified Inquiries in 90 Days',
    client: 'FinTech Growth Partner'
  },
  {
    id: '2',
    title: 'Investing Strategic & Brand Scaling',
    slug: 'investing-strategic',
    category: 'analysis',
    tag: 'ANALYSIS, CONTENT',
    image_url: '/images/case-study-organic-seo-growth.jpg',
    description: 'Developed full brand identity, high-conversion landing funnel, and organic content ecosystem.',
    results: 'Organic Traffic Grown from 0 to 45K/mo',
    client: 'Wealth Management Group'
  },
  {
    id: '3',
    title: 'Media Marketing & Multi-Channel Engagement',
    slug: 'media-marketing',
    category: 'marketing',
    tag: 'ANALYSIS, MARKETING',
    image_url: '/images/case-study-ecommerce-omnichannel.jpg',
    description: 'Executed integrated omni-channel campaigns driving exponential follower growth and direct inquiries.',
    results: '+180% Engagement Rate & 2.9x Conversions',
    client: 'D2C Lifestyle Brand'
  },
  {
    id: '4',
    title: 'Headless E-Commerce & Shopify Plus Acceleration',
    slug: 'headless-ecommerce-acceleration',
    category: 'web',
    tag: 'WEB DEV, E-COMMERCE',
    image_url: '/images/service-nextjs-web-development.jpg',
    description: 'Re-architected a high-volume retail store from legacy templates to a sub-second headless storefront with automated inventory sync.',
    results: '0.28s Load Speed & +64% Checkout Completion',
    client: 'UrbanStyles Retail'
  },
  {
    id: '5',
    title: 'Enterprise B2B Lead Funnel & CRM Automation',
    slug: 'enterprise-b2b-lead-funnel',
    category: 'marketing',
    tag: 'LEAD GEN, AUTOMATION',
    image_url: '/images/service-lead-generation-funnel.jpg',
    description: 'Built a multi-step Google Search and Meta Ads sales funnel integrated directly with WhatsApp and Zoho CRM for real-time follow-ups.',
    results: '-45% Cost Per Lead & 480+ Qualified SQLs',
    client: 'Apex Logistics India'
  },
  {
    id: '6',
    title: 'Cross-Platform Mobile App & Cloud SaaS Portal',
    slug: 'mobile-app-cloud-saas',
    category: 'web',
    tag: 'APP DEV, SOFTWARE',
    image_url: '/images/service-mobile-app-development.jpg',
    description: 'Engineered a native-feel Android & iOS mobile app paired with a Supabase PostgreSQL cloud dashboard for real-time field operations.',
    results: '99.98% Uptime & 50,000+ Active App Users',
    client: 'MedCare Health Network'
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    client_name: 'Neha Kapoor',
    company_or_role: 'Marketing Manager, BrightEdge Solutions',
    avatar: '/images/client-neha-kapoor.jpg',
    review: 'LIMRA Digitech transformed our online lead generation. Their data-driven approach and rapid development turnarounds delivered immediate results. Our cost per lead dropped by 45% within 60 days.',
    rating: 5,
    platform: 'Google'
  },
  {
    id: '2',
    client_name: 'Priya Mehta',
    company_or_role: 'Founder, UrbanStyles Retail',
    avatar: '/images/client-priya-mehta.jpg',
    review: 'Excellent experience working with the team! Clean design, lightning-fast development, and great proactive support throughout the project. Our e-commerce store conversions went up noticeably.',
    rating: 5,
    platform: 'Google'
  },
  {
    id: '3',
    client_name: 'Rahul Sharma',
    company_or_role: 'Director, Apex Logistics India',
    avatar: '/images/client-rahul-sharma.jpg',
    review: 'The best digital marketing and web team we have partnered with. They deeply understand business objectives and engineer software that just works. Highly recommended for any scaling company!',
    rating: 5,
    platform: 'Google'
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Blueprint Mapping',
    description: 'We analyze your market audience, competitors, and business goals to craft a data-driven digital strategy. Whether you need an e-commerce platform or aggressive lead generation campaigns, our experts lay the perfect foundational blueprint.',
    colorClass: 'pink',
    accent: '#ec4899',
  },
  {
    step: '02',
    title: 'Agile Engineering & Execution',
    description: 'Our developers and creative designers bring the vision to life using cutting-edge tech stacks. From pixel-perfect UI/UX to high-speed backend integrations, every milestone is rigorously tested and optimized.',
    colorClass: 'green',
    accent: '#10b981',
  },
  {
    step: '03',
    title: 'Hyper-Targeted Scaling & ROI',
    description: 'We launch, analyze user interactions in real-time, and iterate aggressively. Through conversion rate optimization, automated retargeting, and performance tuning, we ensure sustainable, long-term business growth.',
    colorClass: 'purple',
    accent: '#911cf3',
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    title: "The Crucial Role of SEO in Today's Advertising Agency",
    slug: 'the-crucial-role-of-seo-in-todays-advertising-agency',
    excerpt: 'Discover why modern digital advertising agencies must combine organic SEO with paid campaigns to dominate search results and build lasting brand authority.',
    content: `
      <p>In the fast-evolving digital marketing landscape, relying solely on paid advertisements is no longer sufficient. Search Engine Optimization (SEO) serves as the bedrock for sustainable online visibility, creating long-term brand equity that doesn't vanish the moment an ad budget pauses.</p>
      
      <h3>Why Synergy Between SEO and PPC Matters</h3>
      <p>When you combine high-intent Google Search ads with authoritative organic rankings, you establish double exposure on critical keywords. Studies show that brands dominating both top organic positions and ad slots capture over 65% of all category clicks.</p>

      <h3>Key Pillars of Modern SEO:</h3>
      <ul>
        <li><strong>Core Web Vitals & Speed:</strong> Blazing fast page loads and seamless mobile UX.</li>
        <li><strong>Semantic Entity Optimization:</strong> Aligning content with topical clusters and search intent.</li>
        <li><strong>High-Authority Backlinks:</strong> Earning genuine mentions from credible industry publications.</li>
      </ul>

      <p>At LIMRA Digitech, we integrate advanced technical SEO into every web development and marketing engagement to deliver compounded ROI.</p>
    `,
    cover_image: '/images/seo-analytics-performance-dashboard.jpg',
    author: 'LIMRA Editorial Team',
    date: 'June 12, 2025',
    category: 'SEO & Core Vitals',
    read_time: '4 min read',
    comments_count: 0
  },
  {
    id: '2',
    title: 'Google and How to Increase Your Website Trust Rank for the Site',
    slug: 'google-how-to-increase-website-trust-rank',
    excerpt: 'Learn the essential technical and content signals Google algorithms evaluate to determine website trustworthiness, EEAT, and domain authority.',
    content: `
      <p>Google's Helpful Content and Core algorithm updates heavily prioritize EEAT (Experience, Expertise, Authoritativeness, and Trustworthiness). Understanding how TrustRank works enables businesses to shield their search rankings from fluctuations.</p>
      
      <h3>Essential Trust Signals:</h3>
      <ul>
        <li><strong>Transparent Business Credentials:</strong> Verifiable phone, physical location, GST / registration, and clear privacy policies.</li>
        <li><strong>Author Verification:</strong> Transparent author bios detailing real-world industry background.</li>
        <li><strong>Flawless HTTPS & Security:</strong> Up-to-date SSL certificates and zero security vulnerabilities.</li>
      </ul>

      <p>Investing in trust signals creates enduring search engine immunity and builds immediate consumer confidence.</p>
    `,
    cover_image: '/images/limra-tech-engineering-lab.jpg',
    author: 'Tech Research Group',
    date: 'June 12, 2025',
    category: 'SEO & Core Vitals',
    read_time: '5 min read',
    comments_count: 0
  },
  {
    id: '3',
    title: 'Content Marketing Tools & Conversion Funnels You Should Be Using in 2026',
    slug: 'content-marketing-tools-you-should-be-using-in-2026',
    excerpt: 'A comprehensive roundup of cutting-edge AI content assistants, workflow automation platforms, and analytics suites driving exponential growth.',
    content: `
      <p>Content marketing in 2026 is driven by predictive AI and hyper-personalized audience insights. Leveraging the right tool stack allows lean marketing teams to outproduce and outrank massive legacy competitors.</p>
      
      <h3>Top Recommended Tool Categories:</h3>
      <ul>
        <li><strong>AI Workflow Accelerators:</strong> Tools that assist research, data synthesis, and draft structuring.</li>
        <li><strong>Intent & Keyword Analytics:</strong> Uncovering real conversational search queries users ask.</li>
        <li><strong>Visual Content Engines:</strong> High-definition graphics and video generation tools.</li>
      </ul>

      <p>Pairing these modern tools with human strategic ingenuity yields campaigns that resonate deeply with audiences.</p>
    `,
    cover_image: '/images/service-digital-marketing-agency.jpg',
    author: 'Growth Team',
    date: 'June 12, 2025',
    category: 'Conversion Rate & PPC',
    read_time: '6 min read',
    comments_count: 0
  },
  {
    id: '4',
    title: 'Why Next.js, Shopify & Headless Architecture Win E-Commerce Conversions',
    slug: 'why-nextjs-shopify-headless-architecture-win-ecommerce',
    excerpt: 'Explore how sub-second page speeds, clean Core Web Vitals, and frictionless checkout flows boost retail e-commerce conversion rates by over 60%.',
    content: `
      <p>Every 100-millisecond delay in e-commerce load time costs brands up to 7% in lost checkout conversions. Modern shoppers expect instant product filtering, zero layout shifts on mobile, and one-click UPI/card payments.</p>
      
      <h3>Choosing the Right Web Stack:</h3>
      <ul>
        <li><strong>Next.js & React Applications:</strong> Ideal for custom web portals, SaaS products, and sub-second edge rendering.</li>
        <li><strong>Shopify & WooCommerce:</strong> Proven retail catalog management paired with optimized Liquid/headless storefronts.</li>
        <li><strong>PHP, Laravel & Magento:</strong> Enterprise-grade backend flexibility for complex multi-vendor and ERP-integrated platforms.</li>
      </ul>

      <p>LIMRA Digitech engineers every storefront with built-in JSON-LD product schema, CDN caching, and conversion-focused UI/UX.</p>
    `,
    cover_image: '/images/service-nextjs-web-development.jpg',
    author: 'LIMRA Web Engineering',
    date: 'July 04, 2025',
    category: 'Next.js & Performance',
    read_time: '5 min read',
    comments_count: 0
  }
];

export const techBadges = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Supabase', category: 'Database' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Google Ads', category: 'Marketing' },
  { name: 'Meta Ads', category: 'Marketing' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'Figma', category: 'Design' },
  { name: 'Flutter', category: 'Mobile' },
];
