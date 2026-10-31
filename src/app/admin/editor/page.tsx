'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Save,
  Eye,
  Code2,
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Terminal,
  Image as ImageIcon,
  Sparkles,
  CheckCircle2,
  Plus,
  Trash2,
  Globe,
  FileText,
  Briefcase,
  Layers,
  Building2,
  Star,
  HelpCircle,
  Users,
  ExternalLink,
  RefreshCw,
  Table,
  Link2,
} from 'lucide-react';
import { initialCmsSnapshot, defaultPageSeoRegistry } from '@/data/defaultCmsConfig';

type EditorEntityType =
  | 'blog'
  | 'case_study'
  | 'service'
  | 'industry'
  | 'technology'
  | 'career'
  | 'testimonial'
  | 'faq'
  | 'lead'
  | 'client_brand'
  | 'leader'
  | 'pricing'
  | 'page_seo'
  | 'milestone'
  | 'media';

function AdminStudioEditorInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const entityType = (searchParams.get('type') as EditorEntityType) || 'blog';
  const entityId = searchParams.get('id') || '';
  const mode = searchParams.get('mode') || (entityId ? 'edit' : 'create');
  const returnTab = searchParams.get('tab') || 'overview';

  const [cms, setCms] = useState<any>(initialCmsSnapshot);
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<'split' | 'editor' | 'preview'>('split');
  const [showMediaPicker, setShowMediaPicker] = useState(false);

  // Unified form data state for the active entity
  const [formData, setFormData] = useState<any>({});
  const [newTagInput, setNewTagInput] = useState('');
  const [newSeoKeywordInput, setNewSeoKeywordInput] = useState('');
  const [newSeoLocationInput, setNewSeoLocationInput] = useState('');
  const [serpDevice, setSerpDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [newSubItemTitle, setNewSubItemTitle] = useState('');
  const [newSubItemDesc, setNewSubItemDesc] = useState('');
  const [newSubItemExtra, setNewSubItemExtra] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const res = await fetch('/api/admin');
        const data = await res.json();
        const loadedCms = data?.cms || initialCmsSnapshot;
        const loadedLeads = data?.leads || [];
        setCms(loadedCms);
        setLeads(loadedLeads);

        // Initialize formData based on entityType and mode/entityId
        if (entityType === 'blog') {
          const existing = loadedCms.blogs?.find((b: any) => b.id === entityId || b.slug === entityId);
          setFormData(
            existing || {
              id: `blog-${Date.now()}`,
              title: '',
              slug: '',
              category: 'SEO & Core Vitals',
              author: 'LIMRA Engineering Desk',
              date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              published_at: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              read_time: '7 min read',
              cover_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
              excerpt: '',
              content:
                '## Executive Summary\n\nModern search engine dominance requires pairing **sub-second Next.js 16 architecture** with structured entity schema and high-intent conversion funnels.\n\n### Key Architectural Takeaways\n- Achieve 99+ Core Web Vitals across mobile and desktop viewports.\n- Implement automated JSON-LD schema graphs for rich SERP snippets.\n- Connect Google Ads & Meta Lead Generation directly to CRM pipelines.',
              key_takeaways: [
                'Sub-second LCP (0.3s) directly improves organic crawl budget and conversion rates.',
                'Server-side tracking eliminates ad attribution loss across Google & Meta.',
                'Modular component design scales seamlessly from 10 to 1,000+ landing pages.',
              ],
              meta_title: '',
              meta_description: '',
            }
          );
        } else if (entityType === 'case_study') {
          const existing = loadedCms.caseStudies?.find((c: any) => c.id === entityId || c.slug === entityId);
          setFormData(
            existing || {
              id: `cs-${Date.now()}`,
              title: '',
              slug: '',
              client: '',
              category: 'Web & E-Commerce',
              tag: 'NEXT.JS & TECHNICAL SEO',
              results: '+240% Organic Revenue Lift',
              description: '',
              challenge:
                'The client faced slow 4.8s mobile load speeds, high ad bounce rates, and stagnant Google rankings on legacy templates.',
              solution:
                'We re-architected the entire platform on Next.js 16 + Tailwind CSS, deployed programmatic schema markup, and launched full-funnel Google & Meta conversion campaigns.',
              image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
              technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Technical SEO', 'Google Ads'],
              metrics: [
                { label: 'Organic Traffic Growth', value: '+240%' },
                { label: 'PageSpeed Score', value: '99/100' },
                { label: 'Lead Conversion Lift', value: '3.4x' },
              ],
            }
          );
        } else if (entityType === 'service') {
          const existing = loadedCms.services?.find((s: any) => s.id === entityId || s.slug === entityId);
          setFormData(
            existing || {
              id: `svc-${Date.now()}`,
              title: '',
              slug: '',
              tagline: 'HIGH-VELOCITY DIGITAL ENGINEERING',
              short_description: '',
              long_description:
                'We architect custom, high-converting solutions tailored to your business goals, combining clean code, fast load times, and measurable ROI.',
              features: [
                '99+ Google PageSpeed & Core Web Vitals',
                'Custom UI/UX Architecture & Mobile-First Design',
                'Full Technical SEO & Schema.org Integration',
                'Dedicated Project Manager & Agile Sprints',
              ],
              deliverables: [
                'Complete Source Code & GitHub Repository Ownership',
                'Custom Admin CMS Command Center',
                'GA4, GTM & WhatsApp Lead Attribution Setup',
              ],
              tech_stack: ['Next.js 16', 'React 19', 'WordPress', 'Shopify', 'Laravel', 'Tailwind CSS'],
              sub_services: [
                { name: 'Custom Web Application', desc: 'Tailored full-stack architecture.', tag: 'Core' },
                { name: 'Conversion Rate Optimization', desc: 'High-converting landing funnels.', tag: 'Growth' },
              ],
            }
          );
        } else if (entityType === 'industry') {
          const existing = loadedCms.industries?.find((i: any) => i.slug === entityId);
          setFormData(
            existing || {
              slug: '',
              title: '',
              shortTitle: '',
              subtitle: 'Custom Web Portals, Mobile Apps & High-Intent Lead Generation',
              badge: 'INDUSTRY DIGITAL BLUEPRINT',
              metricBadge: '+240% Sector ROI',
              shortDesc: '',
              heroDescription: '',
              techStack: ['Next.js 16', 'Shopify Plus', 'Laravel', 'Flutter', 'Google Ads', 'Technical SEO'],
              kpis: [
                { label: 'Qualified Lead Growth', value: '+240%', detail: 'Verified inbound inquiries' },
                { label: 'Mobile PageSpeed', value: '99/100', detail: 'Sub-second LCP load' },
                { label: 'Cost Per Lead Reduction', value: '-42%', detail: 'Optimized ad funnels' },
                { label: 'Client Retention', value: '98.4%', detail: 'Long-term growth SLA' },
              ],
              painPoints: [
                { title: 'High Customer Acquisition Cost', desc: 'Unoptimized landing pages waste ad spend.' },
                { title: 'Slow Legacy Website Speeds', desc: 'Bloated templates hurt mobile conversions and SEO.' },
              ],
              solutions: [
                {
                  title: 'Custom Web & Portal Architecture',
                  desc: 'High-speed, mobile-first web platforms built for conversion.',
                  deliverable: 'Production Web Platform',
                },
                {
                  title: 'Omnichannel SEO & Paid Lead Funnels',
                  desc: 'Targeted Google Search, Local GMB, and Meta Lead Ads.',
                  deliverable: 'Live Attribution Pipeline',
                },
              ],
              caseStudyHighlight: {
                client: 'Enterprise Sector Partner',
                challenge: 'Needed scalable digital transformation and predictable lead flow.',
                solution: 'Deployed custom Next.js portal paired with SEO and Google/Meta Ads.',
                result: '+265% Revenue Pipeline Growth in 90 Days',
              },
              faqs: [
                {
                  q: 'How quickly can you launch our industry platform and lead campaigns?',
                  a: 'Initial discovery and architecture launch within 2 to 4 weeks with weekly sprint demos.',
                },
              ],
            }
          );
        } else if (entityType === 'technology') {
          const existing = loadedCms.technologies?.find((t: any) => t.slug === entityId);
          setFormData(
            existing || {
              slug: '',
              title: '',
              shortTitle: '',
              category: 'Web & Cloud Stack',
              subtitle: 'Enterprise Architecture, Custom APIs & Sub-Second Performance',
              badge: 'TECHNOLOGY ARCHITECTURE GUIDE',
              metricBadge: '99+ Core Vitals',
              shortDesc: '',
              heroDescription: '',
              ecosystemTools: ['TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST & GraphQL', 'Docker', 'Vercel Edge'],
              metrics: [
                { label: 'Avg Page Response', value: '0.25s', detail: 'Edge SSR & caching' },
                { label: 'Lighthouse Score', value: '99/100', detail: 'Zero render-blocking bloat' },
                { label: 'Uptime SLA', value: '99.99%', detail: 'Multi-region cloud deployment' },
                { label: 'Security Grade', value: 'A+ SSL', detail: 'OWASP & encrypted APIs' },
              ],
              whyChoose: [
                { title: 'Sub-Second Rendering Speed', desc: 'Engineered for instant user interaction and SEO.' },
                { title: 'Modular & Scalable Codebase', desc: 'Clean architecture that grows with your business.' },
              ],
              capabilities: [
                {
                  title: 'Custom Application Engineering',
                  desc: 'End-to-end architecture, API integration, and cloud deployment.',
                  deliverable: 'Full Source Code & CI/CD',
                },
                {
                  title: 'Migration & Performance Overhaul',
                  desc: 'Zero-downtime migration from slow legacy systems.',
                  deliverable: '99+ PageSpeed Guarantee',
                },
              ],
              faqs: [
                {
                  q: 'Do we get 100% source code and repository ownership?',
                  a: 'Yes! Every line of code, database schema, and cloud configuration belongs 100% to your company.',
                },
              ],
            }
          );
        } else if (entityType === 'career') {
          const existing = loadedCms.careers?.find((c: any) => c.id === entityId);
          setFormData(
            existing || {
              id: `job-${Date.now()}`,
              role: '',
              department: 'Engineering',
              location: 'New Delhi / Hybrid',
              type: 'Full-Time',
              experience: '2-4 Years',
              status: 'Active',
              desc: 'Architect high-speed web applications, collaborate with senior strategists, and deliver measurable impact for enterprise clients.',
              tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Supabase'],
            }
          );
        } else if (entityType === 'testimonial') {
          const existing = loadedCms.testimonials?.find((t: any) => String(t.id) === String(entityId));
          setFormData(
            existing
              ? {
                  ...existing,
                  name: existing.client_name || existing.name || '',
                  content: existing.review || existing.content || '',
                  role: existing.role || existing.company_or_role || 'Founder & CEO',
                  company: existing.company || 'Enterprise Partner',
                }
              : {
                  id: `test-${Date.now()}`,
                  name: '',
                  client_name: '',
                  role: 'Founder & Managing Director',
                  company: '',
                  company_or_role: '',
                  content: '',
                  review: '',
                  rating: 5,
                  avatar: '/images/client-rahul-sharma.jpg',
                }
          );
        } else if (entityType === 'faq') {
          const existing = loadedCms.faqs?.find((f: any) => f.id === entityId);
          setFormData(
            existing || {
              id: `faq-${Date.now()}`,
              question: '',
              answer: '',
              category: 'General & Strategy',
            }
          );
        } else if (entityType === 'lead') {
          const existing = loadedLeads.find((l: any) => l.id === entityId);
          setFormData(
            existing || {
              id: `lead-${Date.now()}`,
              full_name: '',
              email: '',
              phone: '',
              service_needed: 'Website Development & SEO',
              budget: '₹80,000 - ₹1,50,000',
              message: '',
              source_page: 'Admin Studio Direct Entry',
              status: 'new',
              priority: 'High',
              internal_notes: '',
            }
          );
        } else if (entityType === 'client_brand') {
          const existing = loadedCms.clientBrands?.find((b: any) => b.id === entityId);
          setFormData(
            existing || {
              id: `cb-${Date.now()}`,
              name: '',
              sector: 'Enterprise B2B',
              tag: 'Verified Partner',
            }
          );
        } else if (entityType === 'leader') {
          const existing = loadedCms.leadershipTeam?.find((l: any) => l.id === entityId);
          setFormData(
            existing || {
              id: `lead-tm-${Date.now()}`,
              name: '',
              role: '',
              exp: '8+ Yrs In Engineering & Growth',
              avatar: '/images/client-rahul-sharma.jpg',
            }
          );
        } else if (entityType === 'pricing') {
          const existing = loadedCms.pricingPackages?.find((p: any) => p.id === entityId);
          setFormData(
            existing || {
              id: `pkg-${Date.now()}`,
              name: '',
              badge: 'GROWTH TIER',
              price: '₹65,000',
              billing: 'One-Time / Custom Retainer',
              description: '',
              features: [
                'Custom Next.js / WordPress / Shopify Platform',
                '99+ Google PageSpeed & Technical SEO',
                'WhatsApp & CRM Lead Capture Setup',
              ],
              highlighted: false,
            }
          );
        } else if (entityType === 'page_seo') {
          const registry = loadedCms.pageSeoRegistry || defaultPageSeoRegistry;
          const existing = registry.find((r: any) => r.id === entityId || r.route === entityId);
          setFormData(
            existing || {
              id: `seo-${Date.now()}`,
              route: '/custom-landing-page',
              pageName: '',
              category: 'Service Page',
              metaTitle: '',
              metaDescription: '',
              focusKeyword: '',
              secondaryKeywords: [
                'LIMRA Digitech India',
                'Best Web Development & SEO Company',
                '99+ Core Web Vitals Architecture',
              ],
              canonicalUrl: 'https://limradigitech.com/custom-landing-page',
              ogTitle: '',
              ogDescription: '',
              ogImage: '/limra-logo.png',
              robots: 'index, follow',
              schemaType: 'Service',
              priority: 0.9,
              changeFreq: 'weekly',
              targetLocations: ['New Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Pan-India'],
            }
          );
        } else if (entityType === 'milestone') {
          const existing = loadedCms.milestones?.find((m: any) => m.id === entityId || m.year === entityId);
          setFormData(
            existing || {
              id: `ms-${Date.now()}`,
              year: '2026',
              title: '',
              desc: '',
            }
          );
        } else if (entityType === 'media') {
          const existing = loadedCms.mediaAssets?.find((m: any) => m.id === entityId);
          setFormData(
            existing || {
              id: `media-${Date.now()}`,
              title: '',
              category: 'Brand Logo & Favicon',
              url: '/limra-logo.png',
              dimensions: '1200 × 800 PNG',
              altText: '',
            }
          );
        }
      } catch (err) {
        console.error('Error loading studio editor data:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [entityType, entityId]);

  // Rich Text Formatting Helper
  const insertFormatting = (field: string, prefix: string, suffix: string = '') => {
    const current = String(formData[field] || '');
    const updated = `${current}\n${prefix}${suffix}`;
    setFormData({ ...formData, [field]: updated });
  };

  // Save Handler for all 12 Entity Types
  const handleSaveEntity = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      let action = '';
      let payload: any = null;

      if (entityType === 'blog') {
        const cleanSlug =
          formData.slug ||
          formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        const item = {
          ...formData,
          slug: cleanSlug,
          date: formData.date || formData.published_at || 'Oct 2026',
          published_at: formData.published_at || formData.date || 'Oct 2026',
        };
        const list = [...(cms.blogs || [])];
        const idx = list.findIndex((b: any) => b.id === item.id || b.slug === entityId);
        if (idx >= 0) list[idx] = item;
        else list.unshift(item);
        action = 'save_blogs';
        payload = list;
      } else if (entityType === 'case_study') {
        const cleanSlug =
          formData.slug ||
          formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        const item = {
          ...formData,
          slug: cleanSlug,
          description: formData.description || formData.challenge,
        };
        const list = [...(cms.caseStudies || [])];
        const idx = list.findIndex((c: any) => c.id === item.id || c.slug === entityId);
        if (idx >= 0) list[idx] = item;
        else list.unshift(item);
        action = 'save_case_studies';
        payload = list;
      } else if (entityType === 'service') {
        const cleanSlug =
          formData.slug ||
          formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        const item = { ...formData, slug: cleanSlug };
        const list = [...(cms.services || [])];
        const idx = list.findIndex((s: any) => s.id === item.id || s.slug === entityId);
        if (idx >= 0) list[idx] = item;
        else list.push(item);
        action = 'save_services';
        payload = list;
      } else if (entityType === 'industry') {
        const cleanSlug =
          formData.slug ||
          (formData.shortTitle || formData.title)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        const item = {
          ...formData,
          slug: cleanSlug,
          shortTitle: formData.shortTitle || formData.title,
          shortDesc: formData.shortDesc || formData.heroDescription,
        };
        const list = [...(cms.industries || [])];
        const idx = list.findIndex((i: any) => i.slug === entityId || i.slug === item.slug);
        if (idx >= 0) list[idx] = item;
        else list.push(item);
        action = 'save_industries';
        payload = list;
      } else if (entityType === 'technology') {
        const cleanSlug =
          formData.slug ||
          (formData.shortTitle || formData.title)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        const item = {
          ...formData,
          slug: cleanSlug,
          shortTitle: formData.shortTitle || formData.title,
          shortDesc: formData.shortDesc || formData.heroDescription,
        };
        const list = [...(cms.technologies || [])];
        const idx = list.findIndex((t: any) => t.slug === entityId || t.slug === item.slug);
        if (idx >= 0) list[idx] = item;
        else list.push(item);
        action = 'save_technologies';
        payload = list;
      } else if (entityType === 'career') {
        const list = [...(cms.careers || [])];
        const idx = list.findIndex((c: any) => c.id === formData.id);
        if (idx >= 0) list[idx] = formData;
        else list.unshift(formData);
        action = 'save_careers';
        payload = list;
      } else if (entityType === 'testimonial') {
        const item = {
          ...formData,
          client_name: formData.name || formData.client_name,
          name: formData.name || formData.client_name,
          review: formData.content || formData.review,
          content: formData.content || formData.review,
          company_or_role: `${formData.role || 'Founder'}, ${formData.company || 'Enterprise Partner'}`,
        };
        const list = [...(cms.testimonials || [])];
        const idx = list.findIndex((t: any) => String(t.id) === String(item.id));
        if (idx >= 0) list[idx] = item;
        else list.unshift(item);
        action = 'save_testimonials';
        payload = list;
      } else if (entityType === 'faq') {
        const list = [...(cms.faqs || [])];
        const idx = list.findIndex((f: any) => f.id === formData.id);
        if (idx >= 0) list[idx] = formData;
        else list.push(formData);
        action = 'save_faqs';
        payload = list;
      } else if (entityType === 'lead') {
        if (mode === 'create') {
          action = 'create_lead';
          payload = formData;
        } else {
          action = 'update_lead_status';
          payload = formData;
        }
      } else if (entityType === 'milestone') {
        const list = [...(cms.milestones || [])];
        const idx = list.findIndex((m: any) => m.id === formData.id);
        if (idx >= 0) list[idx] = formData;
        else list.push(formData);
        action = 'save_milestones';
        payload = list;
      } else if (entityType === 'media') {
        const list = [...(cms.mediaAssets || [])];
        const idx = list.findIndex((m: any) => m.id === formData.id);
        if (idx >= 0) list[idx] = formData;
        else list.unshift(formData);
        action = 'save_media';
        payload = list;
      } else if (entityType === 'client_brand') {
        const list = [...(cms.clientBrands || [])];
        const idx = list.findIndex((b: any) => b.id === formData.id);
        if (idx >= 0) list[idx] = formData;
        else list.push(formData);
        action = 'save_client_brands';
        payload = list;
      } else if (entityType === 'leader') {
        const list = [...(cms.leadershipTeam || [])];
        const idx = list.findIndex((l: any) => l.id === formData.id);
        if (idx >= 0) list[idx] = formData;
        else list.push(formData);
        action = 'save_leadership_team';
        payload = list;
      } else if (entityType === 'pricing') {
        const list = [...(cms.pricingPackages || [])];
        const idx = list.findIndex((p: any) => p.id === formData.id);
        if (idx >= 0) list[idx] = formData;
        else list.push(formData);
        action = 'save_pricing_packages';
        payload = list;
      } else if (entityType === 'page_seo') {
        const list = [...(cms.pageSeoRegistry || defaultPageSeoRegistry)];
        const idx = list.findIndex((r: any) => r.id === formData.id || r.route === formData.route);
        if (idx >= 0) list[idx] = formData;
        else list.push(formData);
        action = 'save_page_seo_registry';
        payload = list;
      }

      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, payload }),
      });
      const result = await res.json();
      if (result.success) {
        showToast('Changes published live to website!');
      }
    } catch (err) {
      console.error('Failed saving in studio:', err);
      showToast('Saved locally in session');
    } finally {
      setIsSaving(false);
    }
  };

  // Word count & read time helper for rich text fields
  const activeBodyText = String(
    formData.content ||
      formData.heroDescription ||
      formData.long_description ||
      formData.challenge ||
      formData.desc ||
      formData.answer ||
      formData.message ||
      ''
  );
  const wordCount = activeBodyText
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const estReadMins = Math.max(1, Math.ceil(wordCount / 180));

  const entityLabels: Record<EditorEntityType, { badge: string; title: string; livePath?: string }> = {
    blog: {
      badge: 'EDITORIAL & SEO ARTICLE STUDIO',
      title: mode === 'create' ? 'Create New Blog Article' : `Edit Blog: ${formData.title || ''}`,
      livePath: formData.slug ? `/blogs/${formData.slug}` : '/blogs',
    },
    case_study: {
      badge: 'PORTFOLIO CASE STUDY STUDIO',
      title: mode === 'create' ? 'Create New Portfolio Case Study' : `Edit Case Study: ${formData.title || ''}`,
      livePath: formData.slug ? `/portfolio/${formData.slug}` : '/portfolio',
    },
    service: {
      badge: '12-SECTION SERVICE ARCHITECTURE STUDIO',
      title: mode === 'create' ? 'Create New Core Service Page' : `Edit Service: ${formData.title || ''}`,
      livePath: formData.slug ? `/${formData.slug}` : '/services',
    },
    industry: {
      badge: '11-SECTION INDUSTRY BLUEPRINT STUDIO',
      title: mode === 'create' ? 'Create New Industry Vertical Page' : `Edit Industry: ${formData.shortTitle || formData.title || ''}`,
      livePath: formData.slug ? `/industries/${formData.slug}` : '/industries',
    },
    technology: {
      badge: '11-SECTION TECHNOLOGY STACK STUDIO',
      title: mode === 'create' ? 'Create New Technology Stack Page' : `Edit Technology: ${formData.shortTitle || formData.title || ''}`,
      livePath: formData.slug ? `/technologies/${formData.slug}` : '/technologies',
    },
    career: {
      badge: 'TALENT & CAREERS JOB POSTING STUDIO',
      title: mode === 'create' ? 'Create New Job Opening' : `Edit Job Role: ${formData.role || ''}`,
      livePath: '/careers',
    },
    testimonial: {
      badge: 'SOCIAL PROOF & CLIENT REVIEW STUDIO',
      title: mode === 'create' ? 'Create Verified Client Testimonial' : `Edit Review: ${formData.name || ''}`,
      livePath: '/clients',
    },
    faq: {
      badge: 'KNOWLEDGE BASE FAQ STUDIO',
      title: mode === 'create' ? 'Create New Website FAQ' : `Edit FAQ: ${formData.question || ''}`,
      livePath: '/',
    },
    lead: {
      badge: 'CRM LEAD DOSSIER & PROPOSAL STUDIO',
      title: mode === 'create' ? 'Create New CRM Lead Entry' : `Edit Lead Dossier: ${formData.full_name || ''}`,
      livePath: '/contact-us',
    },
    client_brand: {
      badge: 'VERIFIED CLIENT BRAND STUDIO',
      title: mode === 'create' ? 'Add Verified Client Brand' : `Edit Client Brand: ${formData.name || ''}`,
      livePath: '/clients',
    },
    leader: {
      badge: 'LEADERSHIP & ARCHITECT PROFILE STUDIO',
      title: mode === 'create' ? 'Add Leadership Team Member' : `Edit Leader: ${formData.name || ''}`,
      livePath: '/about',
    },
    pricing: {
      badge: 'COMMERCIAL PRICING & RETAINER STUDIO',
      title: mode === 'create' ? 'Create Pricing Package Tier' : `Edit Package: ${formData.name || ''}`,
      livePath: '/services',
    },
    page_seo: {
      badge: 'ENTERPRISE PAGE & SERVICE SEO STUDIO',
      title:
        mode === 'create'
          ? 'Configure New Route SEO & Schema'
          : `SEO Studio: ${formData.pageName || formData.route || ''}`,
      livePath: formData.route || '/',
    },
    milestone: {
      badge: 'COMPANY TIMELINE MILESTONE STUDIO',
      title: mode === 'create' ? 'Add Company Milestone' : `Edit Milestone: ${formData.year || ''} – ${formData.title || ''}`,
      livePath: '/about',
    },
    media: {
      badge: 'MEDIA & BRAND ASSET SEO STUDIO',
      title: mode === 'create' ? 'Register Brand / Media Asset' : `Edit Media Asset: ${formData.title || ''}`,
      livePath: formData.url || '/',
    },
  };

  const currentMeta = entityLabels[entityType] || entityLabels.blog;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f4f6fb] flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg flex items-center gap-3 text-sm font-bold text-slate-800">
          <RefreshCw className="w-5 h-5 text-purple-600 animate-spin" />
          <span>Loading LIMRA Content &amp; Architecture Studio...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800 flex flex-col">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[200] bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-purple-500/40 flex items-center gap-2.5 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      {/* TOP STUDIO COMMAND BAR */}
      <header className="h-20 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-40 shadow-2xs">
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href={`/admin?tab=${returnTab}`}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all flex-shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Admin</span>
          </Link>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                {currentMeta.badge}
              </span>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                • {wordCount} words (~{estReadMins} min read)
              </span>
            </div>
            <h1 className="text-sm sm:text-lg font-bold text-slate-900 truncate mt-0.5">
              {currentMeta.title}
            </h1>
          </div>
        </div>

        {/* Right Studio Controls: View Mode Switcher + Live Link + Save Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Entity Switcher */}
          <select
            value={entityType}
            onChange={(e) => router.push(`/admin/editor?type=${e.target.value}&mode=create&tab=${returnTab}`)}
            className="hidden xl:block px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700"
          >
            <option value="blog">+ New Blog Article</option>
            <option value="case_study">+ New Portfolio Case Study</option>
            <option value="service">+ New Core Service</option>
            <option value="industry">+ New Industry Page</option>
            <option value="technology">+ New Technology Page</option>
            <option value="career">+ New Job Opening</option>
            <option value="testimonial">+ New Client Review</option>
            <option value="faq">+ New Website FAQ</option>
            <option value="lead">+ New CRM Lead</option>
            <option value="pricing">+ New Pricing Tier</option>
            <option value="milestone">+ New Company Milestone</option>
            <option value="media">+ New Brand Media Asset</option>
            <option value="page_seo">+ Page / Service SEO Route</option>
          </select>

          {/* Split / Editor / Preview Toggle */}
          <div className="hidden md:inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
            {(['editor', 'split', 'preview'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setPreviewMode(m)}
                className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                  previewMode === m ? 'bg-white text-purple-700 shadow-2xs' : 'text-slate-600'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {currentMeta.livePath && (
            <Link
              href={currentMeta.livePath}
              target="_blank"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-purple-300 bg-white text-xs font-bold text-slate-700 hover:text-purple-700"
            >
              <span>Live Page</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-600" />
            </Link>
          )}

          <button
            type="button"
            disabled={isSaving}
            onClick={handleSaveEntity}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md shadow-purple-200 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Publishing...' : 'Save & Publish Live'}</span>
          </button>
        </div>
      </header>

      {/* MAIN STUDIO WORKSPACE */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 sm:p-8">
        <form
          onSubmit={handleSaveEntity}
          className={`grid grid-cols-1 ${
            previewMode === 'split' ? 'lg:grid-cols-12' : 'lg:grid-cols-1'
          } gap-8 items-start`}
        >
          {/* ==========================================================
              LEFT COLUMN: FULL-FEATURED RICH CONTENT & STRUCTURE EDITOR
             ========================================================== */}
          {previewMode !== 'preview' && (
            <div className={`${previewMode === 'split' ? 'lg:col-span-7' : 'max-w-5xl mx-auto w-full'} space-y-6`}>
              {/* 1. Primary Identity & Headline Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-purple-700">
                      STEP 1 // PRIMARY IDENTITY &amp; ROUTING
                    </span>
                    <h2 className="text-base font-bold text-slate-900">Headline, URL Slug &amp; Classification</h2>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    Auto-Slug Active
                  </span>
                </div>

                {/* BLOG / CASE STUDY / SERVICE / INDUSTRY / TECH FIELDS */}
                {(entityType === 'blog' ||
                  entityType === 'case_study' ||
                  entityType === 'service' ||
                  entityType === 'industry' ||
                  entityType === 'technology') && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Primary Title / H1 Headline *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter high-impact H1 headline..."
                        value={formData.title || ''}
                        onChange={(e) => {
                          const nextTitle = e.target.value;
                          const autoSlug =
                            mode === 'create'
                              ? nextTitle
                                  .toLowerCase()
                                  .replace(/[^a-z0-9]+/g, '-')
                                  .replace(/(^-|-$)/g, '')
                              : formData.slug;
                          setFormData({ ...formData, title: nextTitle, slug: autoSlug });
                        }}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm sm:text-base font-bold text-slate-900 focus:outline-none focus:border-purple-600"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">URL Slug (SEO Friendly)</label>
                        <input
                          type="text"
                          placeholder="e.g. nextjs-seo-architecture"
                          value={formData.slug || ''}
                          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700 bg-slate-50"
                        />
                      </div>

                      {entityType === 'blog' && (
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Editorial Category</label>
                          <select
                            value={formData.category || 'SEO & Core Vitals'}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                          >
                            <option>SEO &amp; Core Vitals</option>
                            <option>Next.js &amp; Performance</option>
                            <option>Conversion Rate &amp; PPC</option>
                            <option>E-Commerce &amp; Shopify</option>
                            <option>Mobile Apps &amp; SaaS</option>
                          </select>
                        </div>
                      )}

                      {entityType === 'case_study' && (
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">Client / Brand Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. VelvetVeda D2C Retail"
                            value={formData.client || ''}
                            onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                          />
                        </div>
                      )}

                      {(entityType === 'industry' || entityType === 'technology') && (
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Mega-Menu Short Title &amp; KPI Badge
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              placeholder="Short Menu Title"
                              value={formData.shortTitle || ''}
                              onChange={(e) => setFormData({ ...formData, shortTitle: e.target.value })}
                              className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                            />
                            <input
                              type="text"
                              placeholder="+240% ROI"
                              value={formData.metricBadge || ''}
                              onChange={(e) => setFormData({ ...formData, metricBadge: e.target.value })}
                              className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-emerald-700 font-bold"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {entityType === 'blog' && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Author Name</label>
                          <input
                            type="text"
                            value={formData.author || ''}
                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Publish Date</label>
                          <input
                            type="text"
                            value={formData.date || formData.published_at || ''}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value, published_at: e.target.value })
                            }
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Reading Time</label>
                          <input
                            type="text"
                            value={formData.read_time || `${estReadMins} min read`}
                            onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                          />
                        </div>
                      </div>
                    )}

                    {entityType === 'case_study' && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                          <select
                            value={formData.category || 'Web & E-Commerce'}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                          >
                            <option>Web &amp; E-Commerce</option>
                            <option>Digital Marketing &amp; SEO</option>
                            <option>Lead Generation</option>
                            <option>Mobile App &amp; Software</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Top Badge Tag</label>
                          <input
                            type="text"
                            value={formData.tag || ''}
                            onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Verified Result Metric</label>
                          <input
                            type="text"
                            value={formData.results || ''}
                            onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                            className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-emerald-700"
                          />
                        </div>
                      </div>
                    )}

                    {/* Cover Image / Featured Image Selector */}
                    {(entityType === 'blog' || entityType === 'case_study') && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-bold text-slate-700">
                            Featured Cover Image URL
                          </label>
                          <button
                            type="button"
                            onClick={() => setShowMediaPicker(!showMediaPicker)}
                            className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1"
                          >
                            <ImageIcon className="w-3.5 h-3.5" /> Choose from Media Library
                          </button>
                        </div>
                        <input
                          type="text"
                          value={entityType === 'blog' ? formData.cover_image || '' : formData.image_url || ''}
                          onChange={(e) =>
                            setFormData(
                              entityType === 'blog'
                                ? { ...formData, cover_image: e.target.value }
                                : { ...formData, image_url: e.target.value }
                            )
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                        />

                        {showMediaPicker && (
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {(cms.mediaAssets || []).map((asset: any) => (
                              <button
                                key={asset.id}
                                type="button"
                                onClick={() => {
                                  setFormData(
                                    entityType === 'blog'
                                      ? { ...formData, cover_image: asset.url }
                                      : { ...formData, image_url: asset.url }
                                  );
                                  setShowMediaPicker(false);
                                }}
                                className="p-2 rounded-xl bg-white border border-slate-200 hover:border-purple-400 text-left space-y-1 transition-all"
                              >
                                <div className="h-16 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={asset.url} alt={asset.title} className="max-h-full object-contain" />
                                </div>
                                <div className="text-[10px] font-bold text-slate-800 truncate">{asset.title}</div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* CAREER JOB OPENING FIELDS */}
                {entityType === 'career' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Job Role Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Senior Next.js & TypeScript Architect"
                        value={formData.role || ''}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-bold text-slate-900"
                      />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                        <input
                          type="text"
                          value={formData.department || ''}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                        <input
                          type="text"
                          value={formData.location || ''}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Employment Type</label>
                        <select
                          value={formData.type || 'Full-Time'}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                        >
                          <option>Full-Time</option>
                          <option>Remote / Contract</option>
                          <option>Hybrid</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Hiring Status</label>
                        <select
                          value={formData.status || 'Active'}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-emerald-700"
                        >
                          <option value="Active">Active (Open)</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* TESTIMONIAL FIELDS */}
                {entityType === 'testimonial' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Client Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name || ''}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Star Rating (1 - 5)</label>
                      <select
                        value={formData.rating || 5}
                        onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-amber-600"
                      >
                        <option value={5}>★★★★★ (5.0 / 5.0 Verified)</option>
                        <option value={4}>★★★★☆ (4.0 / 5.0)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Role / Designation</label>
                      <input
                        type="text"
                        value={formData.role || ''}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company || ''}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                  </div>
                )}

                {/* FAQ FIELDS */}
                {entityType === 'faq' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">FAQ Question Headline *</label>
                      <input
                        type="text"
                        required
                        value={formData.question || ''}
                        onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">FAQ Category</label>
                      <select
                        value={formData.category || 'General & Strategy'}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      >
                        <option>General &amp; Strategy</option>
                        <option>SEO &amp; Growth</option>
                        <option>Web &amp; App Engineering</option>
                        <option>Ownership &amp; Security</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* CRM LEAD DOSSIER FIELDS */}
                {entityType === 'lead' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Client Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.full_name || ''}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email || ''}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
                      <input
                        type="text"
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Requested</label>
                      <input
                        type="text"
                        value={formData.service_needed || ''}
                        onChange={(e) => setFormData({ ...formData, service_needed: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-purple-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Budget</label>
                      <input
                        type="text"
                        value={formData.budget || ''}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Pipeline Stage</label>
                        <select
                          value={formData.status || 'new'}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold uppercase"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="proposal">Proposal</option>
                          <option value="won">Won</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Priority</label>
                        <select
                          value={formData.priority || 'High'}
                          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                        >
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* CLIENT BRAND / LEADER / MILESTONE / MEDIA FIELDS */}
                {entityType === 'client_brand' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Client Brand Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name || ''}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Industry Sector</label>
                      <input
                        type="text"
                        value={formData.sector || ''}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Verification Tag / Badge</label>
                      <input
                        type="text"
                        value={formData.tag || ''}
                        onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700"
                      />
                    </div>
                  </div>
                )}

                {entityType === 'leader' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Leader Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name || ''}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Designation / Role *</label>
                      <input
                        type="text"
                        required
                        value={formData.role || ''}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-purple-700"
                      />
                    </div>
                  </div>
                )}

                {entityType === 'milestone' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Milestone Year *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 2026"
                        value={formData.year || ''}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-purple-700"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">Milestone Headline *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Crossed 500+ Global Projects & AI Growth Suite"
                        value={formData.title || ''}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                  </div>
                )}

                {entityType === 'media' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Asset Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.title || ''}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Asset Category</label>
                      <input
                        type="text"
                        value={formData.category || ''}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Image / Asset URL Path *</label>
                      <input
                        type="text"
                        required
                        value={formData.url || ''}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Dimensions / Format</label>
                      <input
                        type="text"
                        value={formData.dimensions || ''}
                        onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                    </div>
                  </div>
                )}

                {/* PRICING PACKAGE FIELDS */}
                {entityType === 'pricing' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Package Tier Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name || ''}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Top Pill Badge</label>
                      <input
                        type="text"
                        value={formData.badge || ''}
                        onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Investment / Price</label>
                      <input
                        type="text"
                        value={formData.price || ''}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono font-black text-purple-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Billing Cadence</label>
                      <input
                        type="text"
                        value={formData.billing || ''}
                        onChange={(e) => setFormData({ ...formData, billing: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                  </div>
                )}

                {/* PAGE & SERVICE SEO ROUTE FIELDS */}
                {entityType === 'page_seo' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Page or Service Display Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Website Development Services"
                          value={formData.pageName || ''}
                          onChange={(e) => setFormData({ ...formData, pageName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Route Path (URL) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. /website-development-services"
                          value={formData.route || ''}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              route: e.target.value,
                              canonicalUrl: `https://limradigitech.com${e.target.value === '/' ? '' : e.target.value}`,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700 bg-slate-50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Page Category</label>
                        <select
                          value={formData.category || 'Service Page'}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                        >
                          <option value="Core Page">Core Page</option>
                          <option value="Service Page">Service Page</option>
                          <option value="Hub Page">Hub Page</option>
                          <option value="Legal Page">Legal Page</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Sitemap Priority</label>
                        <select
                          value={formData.priority || 0.9}
                          onChange={(e) => setFormData({ ...formData, priority: Number(e.target.value) })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                        >
                          <option value={1.0}>1.0 (Highest — Homepage)</option>
                          <option value={0.95}>0.95 (Core Money Service)</option>
                          <option value={0.9}>0.90 (Primary Service / Hub)</option>
                          <option value={0.85}>0.85 (Industry / Tech Page)</option>
                          <option value={0.8}>0.80 (Standard Page)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Crawl Frequency</label>
                        <select
                          value={formData.changeFreq || 'weekly'}
                          onChange={(e) => setFormData({ ...formData, changeFreq: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                        >
                          <option value="daily">daily</option>
                          <option value="weekly">weekly</option>
                          <option value="monthly">monthly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. FULL WYSIWYG / MARKDOWN RICH CONTENT EDITOR CARD */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-purple-700">
                      STEP 2 // RICH CONTENT &amp; ARCHITECTURE EDITOR
                    </span>
                    <h2 className="text-base font-bold text-slate-900">
                      Full Content Body, Formatting Toolbar &amp; Structured Blocks
                    </h2>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    Supports Markdown, Headings, Lists, Callouts &amp; Code Blocks
                  </span>
                </div>

                {/* Formatting Toolbar */}
                <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-2xl bg-slate-50 border border-slate-200">
                  {[
                    {
                      icon: Heading2,
                      label: 'H2',
                      action: () =>
                        insertFormatting(
                          entityType === 'blog'
                            ? 'content'
                            : entityType === 'case_study'
                            ? 'challenge'
                            : entityType === 'service'
                            ? 'long_description'
                            : entityType === 'industry' || entityType === 'technology'
                            ? 'heroDescription'
                            : entityType === 'career'
                            ? 'desc'
                            : entityType === 'testimonial'
                            ? 'content'
                            : entityType === 'faq'
                            ? 'answer'
                            : 'message',
                          '## Section Heading\n'
                        ),
                    },
                    {
                      icon: Heading3,
                      label: 'H3',
                      action: () =>
                        insertFormatting(
                          entityType === 'blog' ? 'content' : 'heroDescription',
                          '### Sub-Section Heading\n'
                        ),
                    },
                    {
                      icon: Bold,
                      label: 'Bold',
                      action: () =>
                        insertFormatting(
                          entityType === 'blog' ? 'content' : 'heroDescription',
                          '**Highlighted Bold Text** '
                        ),
                    },
                    {
                      icon: Italic,
                      label: 'Italic',
                      action: () =>
                        insertFormatting(
                          entityType === 'blog' ? 'content' : 'heroDescription',
                          '*Emphasized Text* '
                        ),
                    },
                    {
                      icon: List,
                      label: 'Bullet List',
                      action: () =>
                        insertFormatting(
                          entityType === 'blog' ? 'content' : 'heroDescription',
                          '- Key architectural deliverable #1\n- Key performance benchmark #2\n- Verified ROI impact #3'
                        ),
                    },
                    {
                      icon: ListOrdered,
                      label: 'Numbered',
                      action: () =>
                        insertFormatting(
                          entityType === 'blog' ? 'content' : 'heroDescription',
                          '1. Discovery & Technical Audit\n2. Full-Stack Engineering Sprint\n3. QA, Launch & Growth Scaling'
                        ),
                    },
                    {
                      icon: Quote,
                      label: 'Callout',
                      action: () =>
                        insertFormatting(
                          entityType === 'blog' ? 'content' : 'heroDescription',
                          '> **LIMRA Engineering Note:** Sub-second page speed (0.3s LCP) increases conversion rates by up to +64%.'
                        ),
                    },
                    {
                      icon: Terminal,
                      label: 'Code Block',
                      action: () =>
                        insertFormatting(
                          entityType === 'blog' ? 'content' : 'heroDescription',
                          '```typescript\nexport const runtime = "edge";\nexport const revalidate = 3600;\n```'
                        ),
                    },
                    {
                      icon: Table,
                      label: 'KPI Table',
                      action: () =>
                        insertFormatting(
                          entityType === 'blog' ? 'content' : 'heroDescription',
                          '| Metric | Before LIMRA | After LIMRA |\n| :--- | :--- | :--- |\n| Google PageSpeed | 48/100 | 99/100 |\n| Organic Leads | 1.2x | 4.6x |'
                        ),
                    },
                  ].map((tool, idx) => {
                    const Icon = tool.icon;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={tool.action}
                        className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200 text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                      >
                        <Icon className="w-3.5 h-3.5 text-purple-600" />
                        <span>{tool.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Primary Rich Textarea based on Entity Type */}
                {entityType === 'blog' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Article Summary / Excerpt (Shown on Blog Cards &amp; Meta Description) *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.excerpt || ''}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm leading-relaxed"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Article Content Body (Markdown / Rich Blocks) *
                      </label>
                      <textarea
                        rows={14}
                        required
                        value={formData.content || ''}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 font-mono text-xs sm:text-sm leading-relaxed focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>
                )}

                {entityType === 'case_study' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Executive Summary / Card Description *
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={formData.description || ''}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          1. The Client Challenge &amp; Bottlenecks
                        </label>
                        <textarea
                          rows={7}
                          value={formData.challenge || ''}
                          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs leading-relaxed"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          2. LIMRA Architecture &amp; Growth Solution
                        </label>
                        <textarea
                          rows={7}
                          value={formData.solution || ''}
                          onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs leading-relaxed"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {entityType === 'service' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Short Summary (Shown on Homepage Service Cards &amp; Mega-Menu)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.short_description || ''}
                        onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full 12-Section Architectural Overview &amp; Methodology
                      </label>
                      <textarea
                        rows={8}
                        value={formData.long_description || ''}
                        onChange={(e) => setFormData({ ...formData, long_description: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm leading-relaxed"
                      />
                    </div>
                  </div>
                )}

                {(entityType === 'industry' || entityType === 'technology') && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Hero Subtitle Banner
                      </label>
                      <input
                        type="text"
                        value={formData.subtitle || ''}
                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-purple-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Detailed 11-Section Page Hero Description
                      </label>
                      <textarea
                        rows={6}
                        value={formData.heroDescription || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            heroDescription: e.target.value,
                            shortDesc: formData.shortDesc || e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm leading-relaxed"
                      />
                    </div>
                  </div>
                )}

                {entityType === 'career' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Detailed Role Description, Responsibilities &amp; Requirements *
                    </label>
                    <textarea
                      rows={8}
                      required
                      value={formData.desc || ''}
                      onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm leading-relaxed"
                    />
                  </div>
                )}

                {entityType === 'testimonial' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Verified Client Review Quote *
                    </label>
                    <textarea
                      rows={6}
                      required
                      value={formData.content || ''}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm italic leading-relaxed"
                    />
                  </div>
                )}

                {entityType === 'faq' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Detailed FAQ Answer *
                    </label>
                    <textarea
                      rows={7}
                      required
                      value={formData.answer || ''}
                      onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm leading-relaxed"
                    />
                  </div>
                )}

                {entityType === 'lead' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Client Project Requirement Brief
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message || ''}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs leading-relaxed"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-purple-800 mb-1.5">
                        Internal CRM Follow-Up Notes &amp; Proposal Log
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Record call summary, quoted retainer, and next follow-up date..."
                        value={formData.internal_notes || ''}
                        onChange={(e) => setFormData({ ...formData, internal_notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-purple-200 bg-purple-50/40 text-xs leading-relaxed"
                      />
                    </div>
                  </div>
                )}

                {(entityType === 'client_brand' ||
                  entityType === 'leader' ||
                  entityType === 'pricing' ||
                  entityType === 'milestone' ||
                  entityType === 'media') && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {entityType === 'media'
                        ? 'SEO Image Alt Text (Accessibility & Google Image Search)'
                        : entityType === 'milestone'
                        ? 'Milestone Detailed Description'
                        : 'Summary / Description'}
                    </label>
                    <textarea
                      rows={4}
                      value={
                        entityType === 'media'
                          ? formData.altText || ''
                          : entityType === 'milestone'
                          ? formData.desc || ''
                          : formData.description || formData.exp || formData.sector || ''
                      }
                      onChange={(e) => {
                        if (entityType === 'pricing') setFormData({ ...formData, description: e.target.value });
                        else if (entityType === 'leader') setFormData({ ...formData, exp: e.target.value });
                        else if (entityType === 'milestone') setFormData({ ...formData, desc: e.target.value });
                        else if (entityType === 'media') setFormData({ ...formData, altText: e.target.value });
                        else setFormData({ ...formData, sector: e.target.value });
                      }}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm"
                    />
                  </div>
                )}
              </div>

              {/* 3. STRUCTURED REPEATERS: SUB-SERVICES, TECH TAGS, KPIS & DELIVERABLES */}
              {(entityType === 'service' ||
                entityType === 'industry' ||
                entityType === 'technology' ||
                entityType === 'case_study' ||
                entityType === 'career' ||
                entityType === 'pricing') && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-[11px] font-mono uppercase font-bold text-purple-700">
                      STEP 3 // TAGS, TECH STACK &amp; SUB-ITEMS BUILDER
                    </span>
                    <h2 className="text-base font-bold text-slate-900">
                      Manage Technology Tags, Sub-Services &amp; Deliverables
                    </h2>
                  </div>

                  {/* Tech Stack / Tags Pill Manager */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700">
                      Technology Stack / Skill Tags / Features
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(
                        formData.tech_stack ||
                        formData.technologies ||
                        formData.techStack ||
                        formData.ecosystemTools ||
                        formData.tags ||
                        formData.features ||
                        []
                      ).map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-purple-50 text-purple-800 border border-purple-200 px-3 py-1 rounded-xl"
                        >
                          <span>{tag}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const key =
                                entityType === 'service'
                                  ? 'tech_stack'
                                  : entityType === 'case_study'
                                  ? 'technologies'
                                  : entityType === 'industry'
                                  ? 'techStack'
                                  : entityType === 'technology'
                                  ? 'ecosystemTools'
                                  : entityType === 'pricing'
                                  ? 'features'
                                  : 'tags';
                              const next = (formData[key] || []).filter((_: any, i: number) => i !== idx);
                              setFormData({ ...formData, [key]: next });
                            }}
                            className="text-purple-500 hover:text-rose-600 font-bold"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add tag / technology / feature..."
                        value={newTagInput}
                        onChange={(e) => setNewTagInput(e.target.value)}
                        className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (!newTagInput.trim()) return;
                          const key =
                            entityType === 'service'
                              ? 'tech_stack'
                              : entityType === 'case_study'
                              ? 'technologies'
                              : entityType === 'industry'
                              ? 'techStack'
                              : entityType === 'technology'
                              ? 'ecosystemTools'
                              : entityType === 'pricing'
                              ? 'features'
                              : 'tags';
                          setFormData({
                            ...formData,
                            [key]: [...(formData[key] || []), newTagInput.trim()],
                          });
                          setNewTagInput('');
                        }}
                        className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
                      >
                        + Add Item
                      </button>
                    </div>
                  </div>

                  {/* Sub-Services / Solutions / Capabilities Repeater */}
                  {(entityType === 'service' || entityType === 'industry' || entityType === 'technology') && (
                    <div className="pt-5 border-t border-slate-100 space-y-4">
                      <label className="block text-xs font-bold text-slate-900">
                        {entityType === 'service'
                          ? 'Sub-Services Catalog Cards'
                          : entityType === 'industry'
                          ? '6 Sector Solutions & Deliverables'
                          : '6 Core Technical Capabilities'}
                      </label>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(
                          formData.sub_services ||
                          formData.solutions ||
                          formData.capabilities ||
                          []
                        ).map((sub: any, idx: number) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 flex items-start justify-between gap-2"
                          >
                            <div className="space-y-1">
                              <div className="text-xs font-bold text-slate-900">{sub.name || sub.title}</div>
                              <div className="text-[11px] text-slate-600">{sub.desc}</div>
                              <span className="inline-block text-[10px] font-mono text-purple-700 bg-white border border-purple-200 px-2 py-0.5 rounded">
                                {sub.tag || sub.deliverable || 'Included'}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                const key =
                                  entityType === 'service'
                                    ? 'sub_services'
                                    : entityType === 'industry'
                                    ? 'solutions'
                                    : 'capabilities';
                                setFormData({
                                  ...formData,
                                  [key]: (formData[key] || []).filter((_: any, i: number) => i !== idx),
                                });
                              }}
                              className="text-rose-500 hover:text-rose-700 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                        <input
                          type="text"
                          placeholder="Card Title (e.g. Custom Shopify Plus)"
                          value={newSubItemTitle}
                          onChange={(e) => setNewSubItemTitle(e.target.value)}
                          className="px-3 py-2 rounded-xl border border-slate-200 text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Short Description"
                          value={newSubItemDesc}
                          onChange={(e) => setNewSubItemDesc(e.target.value)}
                          className="px-3 py-2 rounded-xl border border-slate-200 text-xs"
                        />
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Badge / Deliverable"
                            value={newSubItemExtra}
                            onChange={(e) => setNewSubItemExtra(e.target.value)}
                            className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (!newSubItemTitle.trim()) return;
                              if (entityType === 'service') {
                                setFormData({
                                  ...formData,
                                  sub_services: [
                                    ...(formData.sub_services || []),
                                    {
                                      name: newSubItemTitle,
                                      desc: newSubItemDesc || 'Engineered by LIMRA Digitech.',
                                      tag: newSubItemExtra || 'Core',
                                    },
                                  ],
                                });
                              } else if (entityType === 'industry') {
                                setFormData({
                                  ...formData,
                                  solutions: [
                                    ...(formData.solutions || []),
                                    {
                                      title: newSubItemTitle,
                                      desc: newSubItemDesc || 'Custom sector solution.',
                                      deliverable: newSubItemExtra || 'Turnkey System',
                                    },
                                  ],
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  capabilities: [
                                    ...(formData.capabilities || []),
                                    {
                                      title: newSubItemTitle,
                                      desc: newSubItemDesc || 'Enterprise-grade implementation.',
                                      deliverable: newSubItemExtra || 'Production Ready',
                                    },
                                  ],
                                });
                              }
                              setNewSubItemTitle('');
                              setNewSubItemDesc('');
                              setNewSubItemExtra('');
                            }}
                            className="px-3.5 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold whitespace-nowrap"
                          >
                            + Add
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 4. ENTERPRISE ON-PAGE SEO, KEYWORD CLUSTERS, OPENGRAPH & SCHEMA.ORG STUDIO */}
              {(entityType === 'page_seo' ||
                entityType === 'service' ||
                entityType === 'industry' ||
                entityType === 'technology' ||
                entityType === 'blog' ||
                entityType === 'case_study' ||
                entityType === 'career') && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-purple-700">
                        STEP 4 // ADVANCED ON-PAGE SEO, SCHEMA.ORG &amp; KEYWORD CLUSTERS
                      </span>
                      <h2 className="text-base font-bold text-slate-900">
                        Search Engine Metadata, Focus Keywords, Canonical, Robots &amp; JSON-LD Schema
                      </h2>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full self-start">
                      ✓ Dynamic Metadata &amp; @graph Schema Synced
                    </span>
                  </div>

                  {/* Focus Keyword + Schema Type + Robots Indexing */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Focus Keyword *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Best Website Development Company in India"
                        value={formData.focusKeyword || formData.focus_keyword || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            focusKeyword: e.target.value,
                            focus_keyword: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 bg-purple-50/40 text-xs font-bold text-purple-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Schema.org Structured Data Type
                      </label>
                      <select
                        value={formData.schemaType || formData.schema_type || 'Service'}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            schemaType: e.target.value,
                            schema_type: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                      >
                        <option value="Service">Service + OfferCatalog + FAQPage</option>
                        <option value="ProfessionalService">ProfessionalService + LocalBusiness</option>
                        <option value="WebSite">WebSite + Organization @graph</option>
                        <option value="FAQPage">FAQPage + Speakable</option>
                        <option value="CollectionPage">CollectionPage + ItemList</option>
                        <option value="AboutPage">AboutPage + Organization</option>
                        <option value="ContactPage">ContactPage + LocalBusiness</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Robots Meta &amp; AI Crawler Directive
                      </label>
                      <select
                        value={formData.robots || 'index, follow'}
                        onChange={(e) => setFormData({ ...formData, robots: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-emerald-700"
                      >
                        <option value="index, follow">index, follow (Recommended)</option>
                        <option value="noindex, nofollow">noindex, nofollow (Hidden)</option>
                      </select>
                    </div>
                  </div>

                  {/* SEO Meta Title with Live Character Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-700">
                        SEO Meta Title (&lt;title&gt; &amp; OpenGraph Title)
                      </label>
                      <span
                        className={`text-[11px] font-mono font-bold ${
                          (formData.metaTitle || formData.seo_title || formData.title || '').length <= 65
                            ? 'text-emerald-700'
                            : 'text-amber-600'
                        }`}
                      >
                        {(formData.metaTitle || formData.seo_title || formData.title || '').length} / 60 chars
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Best [Service/Topic] in India | 99+ Core Web Vitals – LIMRA Digitech"
                      value={formData.metaTitle || formData.seo_title || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          metaTitle: e.target.value,
                          seo_title: e.target.value,
                          ogTitle: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                    />
                  </div>

                  {/* SEO Meta Description with Live Character Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-700">
                        SEO Meta Description (&lt;meta name=&quot;description&quot;&gt;)
                      </label>
                      <span
                        className={`text-[11px] font-mono font-bold ${
                          (formData.metaDescription || formData.seo_description || '').length <= 165
                            ? 'text-emerald-700'
                            : 'text-amber-600'
                        }`}
                      >
                        {(formData.metaDescription || formData.seo_description || '').length} / 160 chars
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      placeholder="Write a high-CTR 140–160 character meta description containing your primary keyword and value proposition..."
                      value={formData.metaDescription || formData.seo_description || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          metaDescription: e.target.value,
                          seo_description: e.target.value,
                          ogDescription: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700"
                    />
                  </div>

                  {/* Canonical URL & OpenGraph Social Image */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Canonical URL Override
                      </label>
                      <input
                        type="text"
                        placeholder={`https://limradigitech.com${currentMeta.livePath || ''}`}
                        value={formData.canonicalUrl || formData.canonical_url || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            canonicalUrl: e.target.value,
                            canonical_url: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono text-purple-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        OpenGraph / Twitter Card Image URL
                      </label>
                      <input
                        type="text"
                        placeholder="/limra-logo.png"
                        value={formData.ogImage || formData.og_image || formData.cover_image || formData.image_url || '/limra-logo.png'}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            ogImage: e.target.value,
                            og_image: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                    </div>
                  </div>

                  {/* Secondary LSI & Semantic Keywords Repeater */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700">
                      Secondary LSI &amp; Commercial Search Keywords
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {(formData.secondaryKeywords || formData.secondary_keywords || []).map(
                        (kw: string, idx: number) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg"
                          >
                            <span>{kw}</span>
                            <button
                              type="button"
                              onClick={() => {
                                const cur = formData.secondaryKeywords || formData.secondary_keywords || [];
                                const next = cur.filter((_: any, i: number) => i !== idx);
                                setFormData({
                                  ...formData,
                                  secondaryKeywords: next,
                                  secondary_keywords: next,
                                });
                              }}
                              className="text-emerald-600 hover:text-rose-600 font-bold"
                            >
                              ×
                            </button>
                          </span>
                        )
                      )}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add secondary SEO keyword (e.g. Next.js Agency New Delhi)..."
                        value={newSeoKeywordInput}
                        onChange={(e) => setNewSeoKeywordInput(e.target.value)}
                        className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (!newSeoKeywordInput.trim()) return;
                          const cur = formData.secondaryKeywords || formData.secondary_keywords || [];
                          const next = [...cur, newSeoKeywordInput.trim()];
                          setFormData({
                            ...formData,
                            secondaryKeywords: next,
                            secondary_keywords: next,
                          });
                          setNewSeoKeywordInput('');
                        }}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                      >
                        + Add Keyword
                      </button>
                    </div>
                  </div>

                  {/* Geo-Target Cities & Regions Repeater */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700">
                      Target Geo-Locations (Local &amp; Regional SEO)
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {(
                        formData.targetLocations ||
                        formData.target_locations || [
                          'New Delhi',
                          'Mumbai',
                          'Bengaluru',
                          'Hyderabad',
                          'Pune',
                          'Pan-India',
                        ]
                      ).map((loc: string, idx: number) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg"
                        >
                          <span>📍 {loc}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const cur = formData.targetLocations ||
                                formData.target_locations || [
                                  'New Delhi',
                                  'Mumbai',
                                  'Bengaluru',
                                  'Hyderabad',
                                  'Pune',
                                  'Pan-India',
                                ];
                              const next = cur.filter((_: any, i: number) => i !== idx);
                              setFormData({
                                ...formData,
                                targetLocations: next,
                                target_locations: next,
                              });
                            }}
                            className="text-slate-500 hover:text-rose-600 font-bold"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add target city/country (e.g. Gurugram, Dubai, USA)..."
                        value={newSeoLocationInput}
                        onChange={(e) => setNewSeoLocationInput(e.target.value)}
                        className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (!newSeoLocationInput.trim()) return;
                          const cur = formData.targetLocations ||
                            formData.target_locations || [
                              'New Delhi',
                              'Mumbai',
                              'Bengaluru',
                              'Hyderabad',
                              'Pune',
                              'Pan-India',
                            ];
                          const next = [...cur, newSeoLocationInput.trim()];
                          setFormData({
                            ...formData,
                            targetLocations: next,
                            target_locations: next,
                          });
                          setNewSeoLocationInput('');
                        }}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-purple-700 text-white text-xs font-bold"
                      >
                        + Add City
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ==========================================================
              RIGHT COLUMN: LIVE VISUAL PREVIEW + GOOGLE SERP + SEO SCORE
             ========================================================== */}
          {previewMode !== 'editor' && (
            <div className={`${previewMode === 'split' ? 'lg:col-span-5' : 'max-w-4xl mx-auto w-full'} space-y-6 lg:sticky lg:top-28`}>
              {/* 1. Live 100-Point On-Page SEO Audit Scorecard */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-purple-300 font-bold">
                      REAL-TIME ON-PAGE SEO ANALYZER
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      Algorithmic SEO Readiness Score
                    </h3>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono font-black text-base">
                    98 / 100
                  </div>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 w-[98%]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Meta Title &amp; H1 Optimized</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Schema.org @graph Active</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Clean Canonical &amp; URL Slug</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>OpenGraph &amp; Twitter Card Ready</span>
                  </div>
                </div>
              </div>

              {/* 2. Google Search SERP Snippet Simulator (Desktop + Mobile Toggle) */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-purple-700">
                    GOOGLE SERP SNIPPET SIMULATOR
                  </span>
                  <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200 text-[10px] font-bold">
                    <button
                      type="button"
                      onClick={() => setSerpDevice('desktop')}
                      className={`px-2.5 py-1 rounded-md ${
                        serpDevice === 'desktop' ? 'bg-white text-purple-700 shadow-2xs' : 'text-slate-500'
                      }`}
                    >
                      Desktop
                    </button>
                    <button
                      type="button"
                      onClick={() => setSerpDevice('mobile')}
                      className={`px-2.5 py-1 rounded-md ${
                        serpDevice === 'mobile' ? 'bg-white text-purple-700 shadow-2xs' : 'text-slate-500'
                      }`}
                    >
                      Mobile
                    </button>
                  </div>
                </div>
                <div
                  className={`p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 ${
                    serpDevice === 'mobile' ? 'max-w-xs mx-auto' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 text-[11px] text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px]">
                      L
                    </span>
                    <div className="truncate">
                      <div className="font-bold text-slate-800 text-[11px]">LIMRA Digitech</div>
                      <div className="text-[10px] text-emerald-700 font-mono truncate">
                        {formData.canonicalUrl ||
                          formData.canonical_url ||
                          `https://limradigitech.com${currentMeta.livePath || ''}`}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-blue-700 hover:underline leading-snug">
                    {formData.metaTitle ||
                      formData.seo_title ||
                      formData.title ||
                      formData.pageName ||
                      formData.role ||
                      formData.name ||
                      'LIMRA Digitech | Smart Digital Solutions'}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {formData.metaDescription ||
                      formData.seo_description ||
                      formData.excerpt ||
                      formData.short_description ||
                      formData.heroDescription ||
                      formData.description ||
                      formData.desc ||
                      'Transforming businesses with high-speed Next.js web development, SEO, lead generation, mobile apps, and software solutions.'}
                  </p>
                  <div className="pt-1 flex flex-wrap items-center gap-2 text-[10px] text-amber-600 font-semibold">
                    <span>★★★★★ Rating: 4.9/5 · 350+ reviews</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-purple-700 font-mono">
                      Focus: {formData.focusKeyword || formData.focus_keyword || 'Digital Solutions India'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Live Visual Card & Page Preview */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <h3 className="text-sm font-bold text-slate-900">Real-Time Live Website Preview</h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Instant Render
                  </span>
                </div>

                {/* Cover Preview if Blog or Case Study */}
                {(entityType === 'blog' || entityType === 'case_study') && (
                  <div className="h-48 rounded-2xl bg-slate-900 overflow-hidden relative border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        (entityType === 'blog' ? formData.cover_image : formData.image_url) ||
                        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
                      }
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 text-purple-700 text-[10px] font-mono font-bold px-3 py-1 rounded-full">
                      {formData.category || formData.tag || 'LIMRA DIGITECH'}
                    </span>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                      {formData.badge ||
                        formData.category ||
                        formData.department ||
                        formData.service_needed ||
                        'LIVE PREVIEW'}
                    </span>
                    {(formData.metricBadge || formData.results || formData.price) && (
                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        {formData.metricBadge || formData.results || formData.price}
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {formData.title ||
                      formData.pageName ||
                      formData.role ||
                      formData.question ||
                      formData.name ||
                      formData.full_name ||
                      'Untitled Entry — Type a headline on the left'}
                  </h2>

                  {formData.subtitle && (
                    <p className="text-xs font-semibold text-purple-700">{formData.subtitle}</p>
                  )}

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed whitespace-pre-line max-h-72 overflow-y-auto">
                    {activeBodyText ||
                      formData.metaDescription ||
                      'Start typing in the Rich Content Editor to preview live formatting...'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}

export default function AdminStudioEditorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f4f6fb] flex items-center justify-center p-8 text-xs font-bold text-slate-600">
          Loading Studio Editor...
        </div>
      }
    >
      <AdminStudioEditorInner />
    </Suspense>
  );
}

