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
    short_description: 'Building high-speed, scalable web applications and corporate websites using Next.js, React, Node.js, and custom CMS architecture.',
    full_description: 'We engineer robust, responsive, and search-optimized web platforms designed to convert visitors into loyal clients. From enterprise corporate portals to modern web applications, we focus on blazing-fast load speeds, intuitive UX, and clean code.',
    icon: 'Code2',
    features: [
      'Custom Full-Stack Next.js & React Applications',
      'Ultra-Fast Serverless & Cloud Deployments',
      'High-Converting UI/UX & Responsive Layouts',
      'Enterprise Security & SEO Best Practices'
    ],
    tech_stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'WordPress', 'TailwindCSS'],
    order_index: 1,
  },
  {
    id: '2',
    slug: 'digital-marketing-agency-india',
    title: 'Digital Marketing',
    short_description: 'Accelerate your revenue with data-backed performance marketing, Meta & Google Ads, and full-funnel digital brand scaling.',
    full_description: 'Our digital marketing campaigns are built around aggressive ROI. We combine predictive audience research, conversion tracking, compelling creative copy, and continuous A/B testing to ensure every ad dollar delivers measurable business growth.',
    icon: 'TrendingUp',
    features: [
      'High-ROI Meta (Facebook & Instagram) Ad Campaigns',
      'Google Search, Display & Performance Max Ads',
      'Data-Driven Full-Funnel Conversion Optimization',
      'Detailed Weekly Analytics & Real-Time Dashboards'
    ],
    tech_stack: ['Google Ads', 'Meta Ads', 'GA4 Analytics', 'Tag Manager', 'HubSpot'],
    order_index: 2,
  },
  {
    id: '3',
    slug: 'lead-generation-company-india',
    title: 'Lead Generation',
    short_description: 'Executing hyper-targeted lead acquisition funnels that consistently generate qualified B2B and B2C sales opportunities.',
    full_description: 'Stop chasing cold leads. We build automated inbound and outbound lead generation pipelines that capture high-intent prospects, qualify them through multi-step funnels, and deliver them directly to your sales team.',
    icon: 'Target',
    features: [
      'Multi-Channel Inbound & Outbound Lead Funnels',
      'CRM Integration & Automated Instant Follow-ups',
      'High-Intent Prospect Qualification',
      'Conversion-Rate-Optimized Dedicated Landing Pages'
    ],
    tech_stack: ['CRM Automation', 'Landing Page Funnels', 'Meta Leads', 'LinkedIn Sales'],
    order_index: 3,
  },
  {
    id: '4',
    slug: 'creative-design-solutions-india',
    title: 'Creative Design Solutions',
    short_description: 'Crafting memorable brand identities, modern UI/UX design systems, and stunning marketing visuals that captivate audiences.',
    full_description: 'A great brand is unforgettable. Our design team blends psychology, aesthetics, and user journey mapping to create distinctive brand logos, comprehensive style guides, presentation decks, and frictionless digital product interfaces.',
    icon: 'Palette',
    features: [
      'Complete Brand Identity & Logo Systems',
      'Modern Figma UI/UX Prototypes & Wireframing',
      'Marketing Collaterals & Social Media Creative Kits',
      'Custom Iconography & Vector Illustrations'
    ],
    tech_stack: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Adobe XD'],
    order_index: 4,
  },
  {
    id: '5',
    slug: 'mobile-app-developer-india',
    title: 'App Development',
    short_description: 'Developing high-performance, native and cross-platform mobile apps for iOS and Android with modern reactive architectures.',
    full_description: 'Turn your idea into a sleek, high-retention mobile experience. We build iOS and Android apps with smooth animations, offline capabilities, secure cloud backend integrations, and frictionless payment gateways.',
    icon: 'Smartphone',
    features: [
      'Cross-Platform React Native & Flutter Apps',
      'Native iOS (Swift) & Android (Kotlin) Engineering',
      'Seamless REST / GraphQL API & Supabase Integrations',
      'App Store Optimization (ASO) & Deployment'
    ],
    tech_stack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    order_index: 5,
  },
  {
    id: '6',
    slug: 'software-developers-india',
    title: 'Software Development',
    short_description: 'Building custom enterprise software, cloud SaaS platforms, and secure API architectures tailored to your workflow.',
    full_description: 'Scalable software built to automate operations and power enterprise growth. We design microservices, internal dashboards, SaaS solutions, and custom ERP/CRM tools that eliminate bottlenecks and scale effortlessly.',
    icon: 'Layers',
    features: [
      'Custom Enterprise SaaS & Web Platforms',
      'Cloud Architecture & Microservices',
      'Database Modeling & Supabase / Postgres Scalability',
      'Automated Testing, CI/CD & Ongoing Maintenance'
    ],
    tech_stack: ['Node.js', 'Python', 'Supabase', 'PostgreSQL', 'Docker', 'AWS'],
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
    image_url: 'https://limradigitech.com/wp-content/themes/limra/assets/images/case_study_1.png',
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
    image_url: 'https://limradigitech.com/wp-content/themes/limra/assets/images/case_study_2.png',
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
    image_url: 'https://limradigitech.com/wp-content/themes/limra/assets/images/case_study_3.png',
    description: 'Executed integrated omni-channel campaigns driving exponential follower growth and direct inquiries.',
    results: '+180% Engagement Rate & 2.9x Conversions',
    client: 'D2C Lifestyle Brand'
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    client_name: 'Neha Kapoor',
    company_or_role: 'Marketing Manager, BrightEdge Solutions',
    avatar: 'https://limradigitech.com/wp-content/uploads/2026/05/Gemini_Generated_Image_21ykc21ykc21ykc2-150x150.png',
    review: 'LIMRA Digitech transformed our online lead generation. Their data-driven approach and rapid development turnarounds delivered immediate results. Our cost per lead dropped by 45% within 60 days.',
    rating: 5,
    platform: 'Google'
  },
  {
    id: '2',
    client_name: 'Priya Mehta',
    company_or_role: 'Founder, UrbanStyles Retail',
    avatar: 'https://limradigitech.com/wp-content/uploads/2026/05/Gemini_Generated_Image_bz0ffsbz0ffsbz0f-150x150.png',
    review: 'Excellent experience working with the team! Clean design, lightning-fast development, and great proactive support throughout the project. Our e-commerce store conversions went up noticeably.',
    rating: 5,
    platform: 'Google'
  },
  {
    id: '3',
    client_name: 'Rahul Sharma',
    company_or_role: 'Director, Apex Logistics India',
    avatar: 'https://limradigitech.com/wp-content/uploads/2026/05/Gemini_Generated_Image_cfmq6gcfmq6gcfmq-150x150.png',
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
    cover_image: 'https://limradigitech.com/wp-content/uploads/2026/06/AI-Automation-in-Digital-Marketing-_-Smarter-Ads-Chatbots.jpeg',
    author: 'LIMRA Editorial Team',
    date: 'June 12, 2025',
    category: 'SEO & Strategy',
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
    cover_image: 'https://limradigitech.com/wp-content/uploads/2026/06/Behind-the-Code_-Developers-Securing-the-Web-with-Cyber-Interfaces.jpeg',
    author: 'Tech Research Group',
    date: 'June 12, 2025',
    category: 'Search Algorithms',
    read_time: '5 min read',
    comments_count: 0
  },
  {
    id: '3',
    title: 'Content Marketing Tools You Should Be Using in 2026',
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
    cover_image: 'https://limradigitech.com/wp-content/uploads/2026/06/Data-Analytics-Dashboard-with-AI-Driven-Automation.jpeg',
    author: 'Growth Team',
    date: 'June 12, 2025',
    category: 'Content Marketing',
    read_time: '6 min read',
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
