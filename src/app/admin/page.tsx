'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  Layers,
  Star,
  Globe,
  Settings,
  LogOut,
  Search,
  Plus,
  Download,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  Trash2,
  Eye,
  Edit3,
  ArrowUpRight,
  RefreshCw,
  Lock,
  Activity,
  Code2,
  X,
  MessageSquare,
  PanelTop,
  PanelBottom,
  UserCheck,
  HelpCircle,
  Save,
  RotateCcw,
  KeyRound,
  Building2,
} from 'lucide-react';
import {
  initialCmsSnapshot,
  HeaderConfig,
  FooterConfig,
  HeroAndStatsConfig,
  AdminProfileConfig,
  SeoAndRedirectsConfig,
  CareerOpeningItem,
  MediaAssetItem,
  ClientBrandItem,
  LeadershipMemberItem,
  MilestoneItem,
  PricingPackageItem,
} from '@/data/defaultCmsConfig';

type AdminTab =
  | 'overview'
  | 'header'
  | 'footer'
  | 'hero'
  | 'leads'
  | 'services'
  | 'mega_pages'
  | 'portfolio'
  | 'blogs'
  | 'testimonials_faqs'
  | 'careers'
  | 'clients_team'
  | 'media'
  | 'seo'
  | 'system_backup'
  | 'profile';

export default function AdminDashboardPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loginEmail, setLoginEmail] = useState('admin@limradigitech.com');
  const [loginPass, setLoginPass] = useState('Limra@2026');
  const [loginError, setLoginError] = useState('');

  // Navigation & UI State
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('all');
  const [leadPriorityFilter, setLeadPriorityFilter] = useState<string>('all');
  const [leadsViewMode, setLeadsViewMode] = useState<'table' | 'kanban'>('table');
  const [newSubscriberEmail, setNewSubscriberEmail] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Full Live CMS & CRM State
  const [leads, setLeads] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [headerCfg, setHeaderCfg] = useState<HeaderConfig>(initialCmsSnapshot.header);
  const [footerCfg, setFooterCfg] = useState<FooterConfig>(initialCmsSnapshot.footer);
  const [heroCfg, setHeroCfg] = useState<HeroAndStatsConfig>(initialCmsSnapshot.hero);
  const [adminProfile, setAdminProfile] = useState<AdminProfileConfig>(initialCmsSnapshot.adminProfile);
  const [seoCfg, setSeoCfg] = useState<SeoAndRedirectsConfig>(initialCmsSnapshot.seo);
  const [servicesList, setServicesList] = useState<any[]>(initialCmsSnapshot.services);
  const [industriesList, setIndustriesList] = useState<any[]>(initialCmsSnapshot.industries);
  const [technologiesList, setTechnologiesList] = useState<any[]>(initialCmsSnapshot.technologies);
  const [caseStudies, setCaseStudies] = useState<any[]>(initialCmsSnapshot.caseStudies);
  const [blogs, setBlogs] = useState<any[]>(initialCmsSnapshot.blogs);
  const [testimonials, setTestimonials] = useState<any[]>(initialCmsSnapshot.testimonials);
  const [faqs, setFaqs] = useState<any[]>(initialCmsSnapshot.faqs);
  const [careers, setCareers] = useState<CareerOpeningItem[]>(initialCmsSnapshot.careers);
  const [mediaAssets, setMediaAssets] = useState<MediaAssetItem[]>(initialCmsSnapshot.mediaAssets);
  const [clientBrands, setClientBrands] = useState<ClientBrandItem[]>(initialCmsSnapshot.clientBrands);
  const [leadershipTeam, setLeadershipTeam] = useState<LeadershipMemberItem[]>(initialCmsSnapshot.leadershipTeam);
  const [milestones, setMilestones] = useState<MilestoneItem[]>(initialCmsSnapshot.milestones);
  const [pricingPackages, setPricingPackages] = useState<PricingPackageItem[]>(initialCmsSnapshot.pricingPackages);
  const [editingMegaPage, setEditingMegaPage] = useState<{
    type: 'industry' | 'technology';
    idx: number;
    item: any;
  } | null>(null);
  const [newClientBrand, setNewClientBrand] = useState({ name: '', sector: 'Enterprise B2B', tag: 'Verified Partner' });
  const [newLeaderForm, setNewLeaderForm] = useState({
    name: '',
    role: '',
    exp: '6+ Yrs Experience',
    avatar: '/images/client-rahul-sharma.jpg',
  });

  // Modals & Editors State
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);
  const [isAddCaseStudyOpen, setIsAddCaseStudyOpen] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState<any | null>(null);
  const [isAddTestimonialOpen, setIsAddTestimonialOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<any | null>(null);
  const [isAddFaqOpen, setIsAddFaqOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<any | null>(null);
  const [isAddCareerOpen, setIsAddCareerOpen] = useState(false);
  const [editingCareer, setEditingCareer] = useState<CareerOpeningItem | null>(null);
  const [isAddMediaOpen, setIsAddMediaOpen] = useState(false);
  const [editingServiceIdx, setEditingServiceIdx] = useState<number | null>(null);
  const [newSubServiceName, setNewSubServiceName] = useState('');

  // Form States
  const [newNavLabel, setNewNavLabel] = useState('');
  const [newNavHref, setNewNavHref] = useState('');
  const [newFooterQuickLabel, setNewFooterQuickLabel] = useState('');
  const [newFooterQuickHref, setNewFooterQuickHref] = useState('');
  const [newRedirectFrom, setNewRedirectFrom] = useState('');
  const [newRedirectTo, setNewRedirectTo] = useState('');
  const [newTeamMember, setNewTeamMember] = useState({
    name: '',
    email: '',
    role: 'SEO Strategist' as AdminProfileConfig['teamMembers'][0]['role'],
  });
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    next: '',
    confirm: '',
  });

  const [newLeadForm, setNewLeadForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_needed: 'Website Development',
    budget: '₹80,000 - ₹1,50,000',
    message: '',
    priority: 'High',
  });

  const [newBlogForm, setNewBlogForm] = useState({
    title: '',
    slug: '',
    category: 'SEO & Core Vitals',
    read_time: '6 min read',
    excerpt: '',
    author: 'LIMRA SEO Desk',
  });

  const [newCaseStudyForm, setNewCaseStudyForm] = useState({
    title: '',
    client: '',
    category: 'Web & E-Commerce',
    results: '+210% Conversion Lift',
    challenge: '',
    solution: '',
    technologies: 'Next.js, Shopify, Tailwind CSS',
  });

  const [newTestimonialForm, setNewTestimonialForm] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5,
  });

  const [newFaqForm, setNewFaqForm] = useState({
    question: '',
    answer: '',
    category: 'General & Strategy',
  });

  const [newCareerForm, setNewCareerForm] = useState({
    role: '',
    department: 'Engineering',
    location: 'New Delhi / Hybrid',
    type: 'Full-Time',
    experience: '2-4 Years',
    status: 'Active' as 'Active' | 'Closed',
    desc: '',
    tags: 'Next.js 16, TypeScript, Tailwind CSS',
  });

  const [newMediaForm, setNewMediaForm] = useState({
    title: '',
    category: 'Brand Logo & Favicon' as MediaAssetItem['category'],
    url: '',
    dimensions: '1200 × 800 PNG',
    altText: '',
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3400);
  };

  const fetchAdminData = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/admin');
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads || []);
        setSubscribers(data.newsletter || []);
        if (data.cms) {
          setHeaderCfg(data.cms.header || initialCmsSnapshot.header);
          setFooterCfg(data.cms.footer || initialCmsSnapshot.footer);
          setHeroCfg(data.cms.hero || initialCmsSnapshot.hero);
          setAdminProfile(data.cms.adminProfile || initialCmsSnapshot.adminProfile);
          setSeoCfg(data.cms.seo || initialCmsSnapshot.seo);
          setServicesList(data.cms.services || initialCmsSnapshot.services);
          setIndustriesList(data.cms.industries || initialCmsSnapshot.industries);
          setTechnologiesList(data.cms.technologies || initialCmsSnapshot.technologies);
          setCaseStudies(data.cms.caseStudies || initialCmsSnapshot.caseStudies);
          setBlogs(data.cms.blogs || initialCmsSnapshot.blogs);
          setTestimonials(data.cms.testimonials || initialCmsSnapshot.testimonials);
          setFaqs(data.cms.faqs || initialCmsSnapshot.faqs);
          setCareers(data.cms.careers || initialCmsSnapshot.careers);
          setMediaAssets(data.cms.mediaAssets || initialCmsSnapshot.mediaAssets);
          setClientBrands(data.cms.clientBrands || initialCmsSnapshot.clientBrands);
          setLeadershipTeam(data.cms.leadershipTeam || initialCmsSnapshot.leadershipTeam);
          setMilestones(data.cms.milestones || initialCmsSnapshot.milestones);
          setPricingPackages(data.cms.pricingPackages || initialCmsSnapshot.pricingPackages);
        }
      }
    } catch (err) {
      console.error('Admin fetch error:', err);
    } finally {
      setTimeout(() => setIsRefreshing(false), 300);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const postAdminAction = async (action: string, payload: any, toastMsg: string) => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, payload }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.leads) setLeads(data.leads);
        if (data.newsletter) setSubscribers(data.newsletter);
        if (data.cms?.adminProfile) setAdminProfile(data.cms.adminProfile);
        showToast(toastMsg);
      }
    } catch (e) {
      console.error(e);
      showToast('Saved locally in session');
    } finally {
      setIsSaving(false);
    }
  };

  // Auth Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim() && loginPass.trim()) {
      setIsAuthenticated(true);
      setLoginError('');
      showToast(`Welcome back, ${adminProfile.fullName}`);
    } else {
      setLoginError('Please enter valid admin credentials.');
    }
  };

  // CRM Handlers
  const handleUpdateLeadStatus = async (id: string, status: string) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    if (selectedLead?.id === id) {
      setSelectedLead((prev: any) => ({ ...prev, status }));
    }
    await postAdminAction('update_lead_status', { id, status }, `Lead stage updated to "${status.toUpperCase()}"`);
  };

  const handleDeleteLead = async (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
    if (selectedLead?.id === id) setSelectedLead(null);
    await postAdminAction('delete_lead', { id }, 'Lead deleted from CRM pipeline');
  };

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.full_name || !newLeadForm.email) return;
    await postAdminAction('create_lead', newLeadForm, 'New lead added to CRM pipeline');
    setIsAddLeadOpen(false);
    setNewLeadForm({
      full_name: '',
      email: '',
      phone: '',
      service_needed: 'Website Development',
      budget: '₹80,000 - ₹1,50,000',
      message: '',
      priority: 'High',
    });
  };

  const handleExportLeadsCsv = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Service', 'Budget', 'Status', 'Source', 'Date'];
    const rows = leads.map((l) => [
      l.id,
      `"${(l.full_name || '').replace(/"/g, '""')}"`,
      l.email,
      l.phone,
      `"${(l.service_needed || '').replace(/"/g, '""')}"`,
      `"${(l.budget || '').replace(/"/g, '""')}"`,
      l.status,
      l.source_page,
      l.created_at,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `limra-digitech-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported CRM Leads to CSV');
  };

  // Blog CRUD
  const handleSaveBlogModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBlog) {
      const next = blogs.map((b) => (b.id === editingBlog.id ? editingBlog : b));
      setBlogs(next);
      setEditingBlog(null);
      await postAdminAction('save_blogs', next, 'Blog article updated');
      return;
    }
    if (!newBlogForm.title) return;
    const slug =
      newBlogForm.slug ||
      newBlogForm.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    const created = {
      id: `blog-${Date.now()}`,
      title: newBlogForm.title,
      slug,
      category: newBlogForm.category,
      read_time: newBlogForm.read_time,
      excerpt: newBlogForm.excerpt || 'Comprehensive technical & digital growth guide by LIMRA Digitech.',
      author: newBlogForm.author,
      published_at: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      cover_image: '/images/blog-seo.png',
    };
    const next = [created, ...blogs];
    setBlogs(next);
    setIsAddBlogOpen(false);
    setNewBlogForm({
      title: '',
      slug: '',
      category: 'SEO & Core Vitals',
      read_time: '6 min read',
      excerpt: '',
      author: 'LIMRA SEO Desk',
    });
    await postAdminAction('save_blogs', next, 'New blog article published');
  };

  // Case Study CRUD
  const handleSaveCaseStudyModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCaseStudy) {
      const next = caseStudies.map((cs) => (cs.id === editingCaseStudy.id ? editingCaseStudy : cs));
      setCaseStudies(next);
      setEditingCaseStudy(null);
      await postAdminAction('save_case_studies', next, 'Portfolio case study updated');
      return;
    }
    if (!newCaseStudyForm.title || !newCaseStudyForm.client) return;
    const slug = newCaseStudyForm.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const created = {
      id: `cs-${Date.now()}`,
      title: newCaseStudyForm.title,
      slug,
      client: newCaseStudyForm.client,
      category: newCaseStudyForm.category,
      results: newCaseStudyForm.results,
      challenge: newCaseStudyForm.challenge || 'Legacy platform bottleneck and high customer acquisition cost.',
      solution: newCaseStudyForm.solution || 'Engineered custom Next.js/Shopify stack with full-funnel performance ads.',
      technologies: newCaseStudyForm.technologies.split(',').map((t) => t.trim()),
      image_url: '/images/portfolio-ecommerce.png',
      metrics: [
        { label: 'Primary Growth', value: newCaseStudyForm.results },
        { label: 'Page Speed', value: '0.3s' },
      ],
    };
    const next = [created, ...caseStudies];
    setCaseStudies(next);
    setIsAddCaseStudyOpen(false);
    setNewCaseStudyForm({
      title: '',
      client: '',
      category: 'Web & E-Commerce',
      results: '+210% Conversion Lift',
      challenge: '',
      solution: '',
      technologies: 'Next.js, Shopify, Tailwind CSS',
    });
    await postAdminAction('save_case_studies', next, 'New portfolio case study published');
  };

  // Testimonial & FAQ CRUD
  const handleCreateTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTestimonial) {
      const next = testimonials.map((t) => (t.id === editingTestimonial.id ? editingTestimonial : t));
      setTestimonials(next);
      setEditingTestimonial(null);
      await postAdminAction('save_testimonials', next, 'Client review updated');
      return;
    }
    if (!newTestimonialForm.name || !newTestimonialForm.content) return;
    const created = {
      id: `test-${Date.now()}`,
      client_name: newTestimonialForm.name,
      name: newTestimonialForm.name,
      role: newTestimonialForm.role || 'Founder & Director',
      company: newTestimonialForm.company || 'Enterprise Partner',
      company_or_role: `${newTestimonialForm.role || 'Founder'}, ${newTestimonialForm.company || 'Enterprise Partner'}`,
      review: newTestimonialForm.content,
      content: newTestimonialForm.content,
      rating: Number(newTestimonialForm.rating) || 5,
    };
    const next = [created, ...testimonials];
    setTestimonials(next);
    setIsAddTestimonialOpen(false);
    setNewTestimonialForm({ name: '', role: '', company: '', content: '', rating: 5 });
    await postAdminAction('save_testimonials', next, 'Verified client review published');
  };

  const handleCreateFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingFaq) {
      const next = faqs.map((f) => (f.id === editingFaq.id ? editingFaq : f));
      setFaqs(next);
      setEditingFaq(null);
      await postAdminAction('save_faqs', next, 'FAQ item updated');
      return;
    }
    if (!newFaqForm.question || !newFaqForm.answer) return;
    const created = {
      id: `faq-${Date.now()}`,
      question: newFaqForm.question,
      answer: newFaqForm.answer,
      category: newFaqForm.category,
    };
    const next = [created, ...faqs];
    setFaqs(next);
    setIsAddFaqOpen(false);
    setNewFaqForm({ question: '', answer: '', category: 'General & Strategy' });
    await postAdminAction('save_faqs', next, 'New FAQ item added');
  };

  const handleSaveCareerModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCareer) {
      const next = careers.map((c) => (c.id === editingCareer.id ? editingCareer : c));
      setCareers(next);
      setEditingCareer(null);
      await postAdminAction('save_careers', next, 'Job opening updated live on /careers');
      return;
    }
    if (!newCareerForm.role) return;
    const created: CareerOpeningItem = {
      id: `job-${Date.now()}`,
      role: newCareerForm.role,
      department: newCareerForm.department,
      location: newCareerForm.location,
      type: newCareerForm.type,
      experience: newCareerForm.experience,
      status: newCareerForm.status,
      desc: newCareerForm.desc || 'Join LIMRA Digitech to build high-impact web, mobile, and digital growth systems.',
      tags: newCareerForm.tags.split(',').map((t) => t.trim()).filter(Boolean),
    };
    const next = [created, ...careers];
    setCareers(next);
    setIsAddCareerOpen(false);
    setNewCareerForm({
      role: '',
      department: 'Engineering',
      location: 'New Delhi / Hybrid',
      type: 'Full-Time',
      experience: '2-4 Years',
      status: 'Active',
      desc: '',
      tags: 'Next.js 16, TypeScript, Tailwind CSS',
    });
    await postAdminAction('save_careers', next, 'New job role published to /careers');
  };

  const handleCreateMediaAsset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMediaForm.title || !newMediaForm.url) return;
    const created: MediaAssetItem = {
      id: `media-${Date.now()}`,
      title: newMediaForm.title,
      category: newMediaForm.category,
      url: newMediaForm.url,
      dimensions: newMediaForm.dimensions,
      altText: newMediaForm.altText || newMediaForm.title,
    };
    const next = [created, ...mediaAssets];
    setMediaAssets(next);
    setIsAddMediaOpen(false);
    setNewMediaForm({
      title: '',
      category: 'Brand Logo & Favicon',
      url: '',
      dimensions: '1200 × 800 PNG',
      altText: '',
    });
    await postAdminAction('save_media', next, 'Media asset registered in Brand Library');
  };

  const handleExportFullCmsBackup = () => {
    const fullSnapshot = {
      header: headerCfg,
      footer: footerCfg,
      hero: heroCfg,
      adminProfile,
      seo: seoCfg,
      services: servicesList,
      industries: industriesList,
      technologies: technologiesList,
      caseStudies,
      blogs,
      testimonials,
      faqs,
      careers,
      mediaAssets,
      clientBrands,
      leadershipTeam,
      milestones,
      pricingPackages,
    };
    const blob = new Blob([JSON.stringify(fullSnapshot, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `limra-digitech-cms-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Downloaded full CMS JSON backup!');
  };

  const handleImportCmsBackup = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      await postAdminAction('import_cms_backup', parsed, 'Full CMS Backup restored successfully!');
      await fetchAdminData();
    } catch {
      showToast('Invalid JSON backup file.');
    }
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      const matchesStatus = leadStatusFilter === 'all' || l.status === leadStatusFilter;
      const matchesPriority = leadPriorityFilter === 'all' || (l.priority || 'High') === leadPriorityFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        (l.full_name || '').toLowerCase().includes(q) ||
        (l.email || '').toLowerCase().includes(q) ||
        (l.phone || '').toLowerCase().includes(q) ||
        (l.service_needed || '').toLowerCase().includes(q);
      return matchesStatus && matchesPriority && matchesSearch;
    });
  }, [leads, leadStatusFilter, leadPriorityFilter, searchQuery]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'contacted':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'qualified':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'proposal':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'won':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  // Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl relative z-10 space-y-6">
          <div className="text-center space-y-3">
            <Image
              src="/limra-logo.png"
              alt="LIMRA Digitech"
              width={160}
              height={48}
              className="h-11 w-auto mx-auto object-contain"
            />
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              <Lock className="w-3 h-3" /> Enterprise Admin Command Center
            </span>
            <h1 className="text-xl font-bold text-slate-900">Sign In To Admin Console</h1>
            <p className="text-xs text-slate-500">
              Manage Header, Footer, Hero, CRM Leads, Services, Mega Menus, Blogs, Portfolio &amp; Admin Profile.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Admin Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Master Password</label>
              <input
                type="password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                required
              />
            </div>
            {loginError && <p className="text-xs text-rose-600 font-medium">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-200 hover:opacity-95 transition-all"
            >
              Unlock Admin Command Center
            </button>
          </form>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>256-Bit SSL Session</span>
            <Link href="/" className="text-purple-700 font-bold hover:underline">
              ← Return to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const navItems: { id: AdminTab; label: string; icon: any; badge?: string | number }[] = [
    { id: 'overview', label: 'Executive Dashboard', icon: LayoutDashboard },
    { id: 'header', label: 'Header & Mega-Menu', icon: PanelTop, badge: 'Live' },
    { id: 'footer', label: 'Footer & WhatsApp CMS', icon: PanelBottom, badge: 'Live' },
    { id: 'hero', label: 'Hero & Trust Stats', icon: Sparkles },
    { id: 'leads', label: 'Leads & Kanban CRM', icon: Users, badge: leads.length },
    { id: 'services', label: 'Services & Sub-Services', icon: Code2, badge: servicesList.length },
    { id: 'mega_pages', label: 'Industries & Tech Pages', icon: Layers, badge: industriesList.length + technologiesList.length },
    { id: 'portfolio', label: 'Portfolio Case Studies', icon: Briefcase, badge: caseStudies.length },
    { id: 'blogs', label: 'Blogs & Editorial CMS', icon: FileText, badge: blogs.length },
    { id: 'testimonials_faqs', label: 'Reviews & FAQs CMS', icon: Star, badge: testimonials.length + faqs.length },
    { id: 'clients_team', label: 'Clients, Team & Pricing', icon: TrendingUp, badge: clientBrands.length + leadershipTeam.length },
    { id: 'careers', label: 'Careers & Job Openings', icon: Building2, badge: careers.length },
    { id: 'media', label: 'Media & Brand Assets', icon: Eye, badge: mediaAssets.length },
    { id: 'seo', label: 'SEO, Redirects & GA4', icon: Globe, badge: '99%' },
    { id: 'system_backup', label: 'Backup & Page Inspector', icon: Activity, badge: '44 Pages' },
    { id: 'profile', label: 'Admin Profile & Roles', icon: UserCheck },
  ];

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800 flex flex-col lg:flex-row">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[200] bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-purple-500/40 flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* LEFT SIDEBAR */}
      <aside className="w-full lg:w-72 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 flex-shrink-0 flex flex-col justify-between lg:min-h-screen lg:sticky lg:top-0 z-40">
        <div>
          {/* Brand Logo Header */}
          <div className="h-20 px-6 border-b border-slate-200 flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-2.5">
              <Image
                src="/limra-logo.png"
                alt="LIMRA Digitech Admin"
                width={135}
                height={40}
                className="h-9 w-auto object-contain"
              />
              <span className="text-[10px] font-mono uppercase font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md">
                PRO CMS
              </span>
            </Link>
          </div>

          {/* Admin Profile Quick Card */}
          <div className="px-5 py-3.5 border-b border-slate-100">
            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className="w-full text-left bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100/80 hover:to-indigo-100/80 border border-purple-200/80 rounded-2xl p-3 flex items-center gap-3 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs flex-shrink-0">
                {adminProfile.avatarInitials || 'LA'}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-slate-900 truncate">{adminProfile.fullName}</div>
                <div className="text-[10px] text-purple-700 font-medium truncate">{adminProfile.role}</div>
              </div>
              <Settings className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
            </button>
          </div>

          {/* 12-Module Navigation Menu */}
          <nav className="p-3 space-y-1 flex lg:flex-col overflow-x-auto max-h-[calc(100vh-250px)] lg:overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap w-full ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-200'
                      : 'text-slate-600 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-purple-50 text-purple-700 border border-purple-200'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom Actions */}
        <div className="hidden lg:block p-4 border-t border-slate-200 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-purple-300 bg-slate-50 hover:bg-purple-50 text-xs font-bold text-slate-700 hover:text-purple-700 flex items-center justify-between transition-all"
          >
            <span>Open Live Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-600" />
          </Link>
          <button
            type="button"
            onClick={() => setIsAuthenticated(false)}
            className="w-full px-3.5 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock Admin Console</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Command Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <div>
              <h1 className="text-base sm:text-xl font-bold text-slate-900 truncate">
                {navItems.find((n) => n.id === activeTab)?.label}
              </h1>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Logged in as <span className="font-semibold text-purple-700">{adminProfile.fullName}</span> ({adminProfile.email})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative hidden md:block">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab === 'overview') setActiveTab('leads');
                }}
                placeholder="Search leads, clients, pages..."
                className="pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 w-56 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
              />
            </div>

            <button
              type="button"
              onClick={fetchAdminData}
              className="p-2.5 rounded-xl border border-slate-200 hover:border-purple-300 bg-white text-slate-600 hover:text-purple-700 transition-all"
              title="Sync Live Data"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-purple-600' : ''}`} />
            </button>

            <button
              type="button"
              onClick={handleExportFullCmsBackup}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:border-purple-300 bg-white text-xs font-bold text-slate-700 hover:text-purple-700 transition-all"
              title="Download Full CMS JSON Backup"
            >
              <Download className="w-3.5 h-3.5 text-purple-600" />
              <span>Backup JSON</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:border-purple-300 bg-slate-50 text-xs font-bold text-slate-800"
            >
              <UserCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>Profile</span>
            </button>

            <button
              type="button"
              onClick={() => setIsAddLeadOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm hover:opacity-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add Lead</span>
            </button>
          </div>
        </header>

        {/* WORKSPACE BODY */}
        <main className="p-4 sm:p-8 space-y-8 flex-1">
          {/* ==========================================
              MODULE 1: EXECUTIVE OVERVIEW
             ========================================== */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* 4 KPI Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Total Pipeline Leads</span>
                    <div className="p-2.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-black text-slate-900 font-mono">{leads.length}</div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" /> +28.4%
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {leads.filter((l) => l.status === 'new').length} new inquiries • {subscribers.length} newsletter subs
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Total Managed Pages</span>
                    <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200">
                      <Layers className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-black text-slate-900 font-mono">44</div>
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
                      10+ Sec/Page
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {servicesList.length} Services • {industriesList.length} Industries • {technologiesList.length} Tech
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Header &amp; Footer CMS</span>
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <PanelTop className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-2xl font-black text-slate-900 font-mono">Live Synced</div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Dynamic
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {headerCfg.navItems.filter((n) => n.visible).length} Active Nav Links • 3 Mega Menus
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Core Web Vitals &amp; SEO</span>
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                      <Activity className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-black text-slate-900 font-mono">99/100</div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Healthy
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {seoCfg.redirects.length} 301 Redirects • GA4 ({seoCfg.ga4Id})
                  </p>
                </div>
              </div>

              {/* Quick Management Shortcuts Grid */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-purple-700">
                      COMPLETE WEBSITE CONTROL
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      Quick Jump To Website Management Modules
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                  {[
                    { id: 'header', title: 'Header & Mega Menu', sub: 'Nav, Phone, CTA, TopBar', icon: PanelTop },
                    { id: 'footer', title: 'Footer & Socials', sub: 'Bio, Links, Newsletter, HQ', icon: PanelBottom },
                    { id: 'hero', title: 'Hero & Counters', sub: 'Headline, CTAs, 500+ Stats', icon: Sparkles },
                    { id: 'services', title: 'Services & Sub-Pills', sub: '6 Services & Sub-Services', icon: Code2 },
                    { id: 'mega_pages', title: 'Industries & Tech', sub: '16 Dedicated 11-Sec Pages', icon: Layers },
                    { id: 'profile', title: 'Admin Profile', sub: 'Profile, Password, Roles', icon: UserCheck },
                  ].map((card) => {
                    const Icon = card.icon;
                    return (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => setActiveTab(card.id as AdminTab)}
                        className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 text-left transition-all group space-y-2"
                      >
                        <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-purple-700">
                            {card.title}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{card.sub}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Charts & Audit Logs Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Monthly Lead & Conversion Velocity Chart */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-purple-700">
                        GROWTH ANALYTICS
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">
                        Lead Acquisition &amp; Channel Attribution
                      </h2>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600" /> Organic SEO
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" /> Paid Ads
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-3 sm:gap-5 items-end h-48 pt-6 px-2 border-b border-slate-100">
                    {[
                      { month: 'May', seo: 55, ads: 40, total: 42 },
                      { month: 'Jun', seo: 68, ads: 48, total: 54 },
                      { month: 'Jul', seo: 74, ads: 58, total: 63 },
                      { month: 'Aug', seo: 82, ads: 64, total: 76 },
                      { month: 'Sep', seo: 90, ads: 72, total: 89 },
                      { month: 'Oct', seo: 100, ads: 85, total: 112 },
                    ].map((bar, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                        <div className="text-[10px] font-mono font-bold text-purple-700">{bar.total}</div>
                        <div className="w-full max-w-[44px] flex items-end gap-1 h-32">
                          <div
                            style={{ height: `${bar.seo}%` }}
                            className="flex-1 bg-gradient-to-t from-purple-700 to-purple-500 rounded-t-lg"
                          />
                          <div
                            style={{ height: `${bar.ads}%` }}
                            className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg"
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-500 pb-2">{bar.month}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80">
                      <div className="text-[10px] text-slate-500">Organic Search</div>
                      <div className="text-sm font-bold text-slate-900">46.2% Share</div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80">
                      <div className="text-[10px] text-slate-500">Google Ads PPC</div>
                      <div className="text-sm font-bold text-slate-900">28.5% Share</div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80">
                      <div className="text-[10px] text-slate-500">Meta Funnels</div>
                      <div className="text-sm font-bold text-slate-900">18.1% Share</div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80">
                      <div className="text-[10px] text-slate-500">Direct / WhatsApp</div>
                      <div className="text-sm font-bold text-slate-900">7.2% Share</div>
                    </div>
                  </div>
                </div>

                {/* Live Activity & Audit Feed */}
                <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono uppercase font-bold text-emerald-700">
                          SECURITY &amp; ACTIVITY LOG
                        </span>
                        <h2 className="text-lg font-bold text-slate-900">Recent Admin Actions</h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab('profile')}
                        className="text-xs font-bold text-purple-700 hover:underline"
                      >
                        Full Log →
                      </button>
                    </div>

                    <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                      {(adminProfile.auditLogs || []).slice(0, 5).map((log) => (
                        <div
                          key={log.id}
                          className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-1"
                        >
                          <div className="font-bold text-slate-900">{log.action}</div>
                          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                            <span>{log.actor}</span>
                            <span>{log.timestamp}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Want to reset all CMS settings to default?</span>
                    <button
                      type="button"
                      onClick={() =>
                        postAdminAction('reset_cms_defaults', {}, 'All CMS configurations restored to defaults').then(
                          fetchAdminData
                        )
                      }
                      className="text-rose-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 2: HEADER & MEGA-MENU MANAGER
             ========================================== */}
          {activeTab === 'header' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      LIVE HEADER &amp; NAVIGATION CMS
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      Manage Website Header, Top Status Bar &amp; CTA Button
                    </h2>
                    <p className="text-xs text-slate-500">
                      Changes saved here immediately update the live Header across all pages.
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled={isSaving}
                    onClick={() => postAdminAction('save_header', headerCfg, 'Website Header & Mega Menus saved live!')}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md shadow-purple-200 self-start"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isSaving ? 'Saving...' : 'Save Header Live'}</span>
                  </button>
                </div>

                {/* Top Status Bar & Contact Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Show Top Status Bar</div>
                      <div className="text-[11px] text-slate-500">Top bar with availability, phone &amp; socials</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={headerCfg.showTopBar}
                      onChange={(e) => setHeaderCfg({ ...headerCfg, showTopBar: e.target.checked })}
                      className="w-4 h-4 accent-purple-600"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Show Phone Pill in Navbar</div>
                      <div className="text-[11px] text-slate-500">Display clickable phone next to CTA</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={headerCfg.showPhoneInHeader}
                      onChange={(e) => setHeaderCfg({ ...headerCfg, showPhoneInHeader: e.target.checked })}
                      className="w-4 h-4 accent-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Availability Status Text</label>
                    <input
                      type="text"
                      value={headerCfg.availabilityText}
                      onChange={(e) => setHeaderCfg({ ...headerCfg, availabilityText: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Top Bar Right Tagline</label>
                    <input
                      type="text"
                      value={headerCfg.topBarTagline}
                      onChange={(e) => setHeaderCfg({ ...headerCfg, topBarTagline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Header Phone Number</label>
                    <input
                      type="text"
                      value={headerCfg.phone}
                      onChange={(e) => setHeaderCfg({ ...headerCfg, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Header Official Email</label>
                    <input
                      type="email"
                      value={headerCfg.email}
                      onChange={(e) => setHeaderCfg({ ...headerCfg, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Primary CTA Button Text</label>
                    <input
                      type="text"
                      value={headerCfg.ctaText}
                      onChange={(e) => setHeaderCfg({ ...headerCfg, ctaText: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-purple-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Primary CTA Destination URL</label>
                    <input
                      type="text"
                      value={headerCfg.ctaHref}
                      onChange={(e) => setHeaderCfg({ ...headerCfg, ctaHref: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Brand Logo Path</label>
                    <input
                      type="text"
                      value={headerCfg.logoUrl}
                      onChange={(e) => setHeaderCfg({ ...headerCfg, logoUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                    />
                  </div>
                </div>

                {/* Navigation Menu Items Editor */}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Header Navigation Links &amp; Mega-Menu Triggers
                      </h3>
                      <p className="text-xs text-slate-500">
                        Rename labels, edit URLs, toggle visibility, or add custom navigation items.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {headerCfg.navItems.map((nav, idx) => (
                      <div
                        key={nav.id}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center p-3.5 rounded-2xl bg-slate-50 border border-slate-200"
                      >
                        <div className="sm:col-span-1 flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={nav.visible}
                            onChange={(e) => {
                              const next = [...headerCfg.navItems];
                              next[idx] = { ...nav, visible: e.target.checked };
                              setHeaderCfg({ ...headerCfg, navItems: next });
                            }}
                            className="w-4 h-4 accent-purple-600"
                          />
                          <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
                        </div>

                        <div className="sm:col-span-4">
                          <input
                            type="text"
                            value={nav.label}
                            onChange={(e) => {
                              const next = [...headerCfg.navItems];
                              next[idx] = { ...nav, label: e.target.value };
                              setHeaderCfg({ ...headerCfg, navItems: next });
                            }}
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-900"
                          />
                        </div>

                        <div className="sm:col-span-4">
                          <input
                            type="text"
                            value={nav.href}
                            onChange={(e) => {
                              const next = [...headerCfg.navItems];
                              next[idx] = { ...nav, href: e.target.value };
                              setHeaderCfg({ ...headerCfg, navItems: next });
                            }}
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-mono text-purple-700"
                          />
                        </div>

                        <div className="sm:col-span-3 flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                            {nav.type === 'link' ? 'Standard Link' : nav.type.replace('mega-', 'Mega Menu: ')}
                          </span>
                          {nav.type === 'link' && nav.id.startsWith('custom-') && (
                            <button
                              type="button"
                              onClick={() =>
                                setHeaderCfg({
                                  ...headerCfg,
                                  navItems: headerCfg.navItems.filter((i) => i.id !== nav.id),
                                })
                              }
                              className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Custom Header Link */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <input
                      type="text"
                      placeholder="New Menu Label (e.g. Case Studies)"
                      value={newNavLabel}
                      onChange={(e) => setNewNavLabel(e.target.value)}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs w-56"
                    />
                    <input
                      type="text"
                      placeholder="URL (e.g. /clients)"
                      value={newNavHref}
                      onChange={(e) => setNewNavHref(e.target.value)}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono w-56"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (!newNavLabel || !newNavHref) return;
                        setHeaderCfg({
                          ...headerCfg,
                          navItems: [
                            ...headerCfg.navItems,
                            {
                              id: `custom-${Date.now()}`,
                              label: newNavLabel,
                              href: newNavHref,
                              type: 'link',
                              visible: true,
                            },
                          ],
                        });
                        setNewNavLabel('');
                        setNewNavHref('');
                        showToast('Added custom menu item — click Save Header Live to publish');
                      }}
                      className="px-4 py-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Menu Link
                    </button>
                  </div>
                </div>

                {/* Mega Menu Featured Promo Cards Editor */}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Mega-Menu Featured Right-Column Promo Cards
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                      <span className="text-[10px] font-mono uppercase font-bold text-purple-700">
                        Services Mega Menu Card
                      </span>
                      <input
                        type="text"
                        value={headerCfg.megaMenuPromo.servicesTitle}
                        onChange={(e) =>
                          setHeaderCfg({
                            ...headerCfg,
                            megaMenuPromo: { ...headerCfg.megaMenuPromo, servicesTitle: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                      />
                      <textarea
                        rows={3}
                        value={headerCfg.megaMenuPromo.servicesDesc}
                        onChange={(e) =>
                          setHeaderCfg({
                            ...headerCfg,
                            megaMenuPromo: { ...headerCfg.megaMenuPromo, servicesDesc: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                      />
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                      <span className="text-[10px] font-mono uppercase font-bold text-purple-700">
                        Industries Mega Menu Card
                      </span>
                      <input
                        type="text"
                        value={headerCfg.megaMenuPromo.industriesTitle}
                        onChange={(e) =>
                          setHeaderCfg({
                            ...headerCfg,
                            megaMenuPromo: { ...headerCfg.megaMenuPromo, industriesTitle: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                      />
                      <textarea
                        rows={3}
                        value={headerCfg.megaMenuPromo.industriesDesc}
                        onChange={(e) =>
                          setHeaderCfg({
                            ...headerCfg,
                            megaMenuPromo: { ...headerCfg.megaMenuPromo, industriesDesc: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                      />
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                      <span className="text-[10px] font-mono uppercase font-bold text-purple-700">
                        Technologies Mega Menu Card
                      </span>
                      <input
                        type="text"
                        value={headerCfg.megaMenuPromo.techTitle}
                        onChange={(e) =>
                          setHeaderCfg({
                            ...headerCfg,
                            megaMenuPromo: { ...headerCfg.megaMenuPromo, techTitle: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                      />
                      <textarea
                        rows={3}
                        value={headerCfg.megaMenuPromo.techDesc}
                        onChange={(e) =>
                          setHeaderCfg({
                            ...headerCfg,
                            megaMenuPromo: { ...headerCfg.megaMenuPromo, techDesc: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 3: FOOTER & LINKS CMS
             ========================================== */}
          {activeTab === 'footer' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      LIVE FOOTER, LINKS &amp; SOCIAL CMS
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      Manage Website Footer, Bio, Links, Socials &amp; Copyright
                    </h2>
                    <p className="text-xs text-slate-500">
                      Changes saved here immediately update the live Footer across the entire website.
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled={isSaving}
                    onClick={() => postAdminAction('save_footer', footerCfg, 'Website Footer saved live!')}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md shadow-purple-200 self-start"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isSaving ? 'Saving...' : 'Save Footer Live'}</span>
                  </button>
                </div>

                {/* Company Bio & Pre-Footer Callout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Footer Brand Bio / Company Description
                    </label>
                    <textarea
                      rows={2}
                      value={footerCfg.companyDescription}
                      onChange={(e) => setFooterCfg({ ...footerCfg, companyDescription: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pre-Footer Callout Heading
                    </label>
                    <input
                      type="text"
                      value={footerCfg.newsletterHeading}
                      onChange={(e) => setFooterCfg({ ...footerCfg, newsletterHeading: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pre-Footer Callout Subtext
                    </label>
                    <input
                      type="text"
                      value={footerCfg.newsletterSubtext}
                      onChange={(e) => setFooterCfg({ ...footerCfg, newsletterSubtext: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Headquarters Address</label>
                    <input
                      type="text"
                      value={footerCfg.address}
                      onChange={(e) => setFooterCfg({ ...footerCfg, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Operational Hours</label>
                    <input
                      type="text"
                      value={footerCfg.workingHours}
                      onChange={(e) => setFooterCfg({ ...footerCfg, workingHours: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Footer Phone</label>
                    <input
                      type="text"
                      value={footerCfg.phone}
                      onChange={(e) => setFooterCfg({ ...footerCfg, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Footer Email</label>
                    <input
                      type="email"
                      value={footerCfg.email}
                      onChange={(e) => setFooterCfg({ ...footerCfg, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Bottom Copyright Text</label>
                    <input
                      type="text"
                      value={footerCfg.copyrightText}
                      onChange={(e) => setFooterCfg({ ...footerCfg, copyrightText: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Right Bottom Server Tag</label>
                    <input
                      type="text"
                      value={footerCfg.serverBadgeText}
                      onChange={(e) => setFooterCfg({ ...footerCfg, serverBadgeText: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-5 border-t border-slate-100 space-y-3">
                  <h3 className="text-base font-bold text-slate-900">Social Media Profile URLs</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Facebook URL</label>
                      <input
                        type="text"
                        value={footerCfg.social.facebook}
                        onChange={(e) =>
                          setFooterCfg({
                            ...footerCfg,
                            social: { ...footerCfg.social, facebook: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Instagram URL</label>
                      <input
                        type="text"
                        value={footerCfg.social.instagram}
                        onChange={(e) =>
                          setFooterCfg({
                            ...footerCfg,
                            social: { ...footerCfg.social, instagram: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn URL</label>
                      <input
                        type="text"
                        value={footerCfg.social.linkedin}
                        onChange={(e) =>
                          setFooterCfg({
                            ...footerCfg,
                            social: { ...footerCfg.social, linkedin: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">X / Twitter URL</label>
                      <input
                        type="text"
                        value={footerCfg.social.twitter}
                        onChange={(e) =>
                          setFooterCfg({
                            ...footerCfg,
                            social: { ...footerCfg.social, twitter: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Quick Links & Service Links Columns */}
                <div className="pt-5 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Service Links */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-slate-900">Footer Core Service Links</h3>
                    <div className="space-y-2">
                      {footerCfg.serviceLinks.map((lnk, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                          <input
                            type="checkbox"
                            checked={lnk.visible}
                            onChange={(e) => {
                              const next = [...footerCfg.serviceLinks];
                              next[idx] = { ...lnk, visible: e.target.checked };
                              setFooterCfg({ ...footerCfg, serviceLinks: next });
                            }}
                            className="w-4 h-4 accent-purple-600"
                          />
                          <input
                            type="text"
                            value={lnk.label}
                            onChange={(e) => {
                              const next = [...footerCfg.serviceLinks];
                              next[idx] = { ...lnk, label: e.target.value };
                              setFooterCfg({ ...footerCfg, serviceLinks: next });
                            }}
                            className="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold"
                          />
                          <input
                            type="text"
                            value={lnk.href}
                            onChange={(e) => {
                              const next = [...footerCfg.serviceLinks];
                              next[idx] = { ...lnk, href: e.target.value };
                              setFooterCfg({ ...footerCfg, serviceLinks: next });
                            }}
                            className="w-36 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[11px] font-mono text-purple-700"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-slate-900">Footer Quick Links</h3>
                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {footerCfg.quickLinks.map((lnk, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                          <input
                            type="checkbox"
                            checked={lnk.visible}
                            onChange={(e) => {
                              const next = [...footerCfg.quickLinks];
                              next[idx] = { ...lnk, visible: e.target.checked };
                              setFooterCfg({ ...footerCfg, quickLinks: next });
                            }}
                            className="w-4 h-4 accent-purple-600"
                          />
                          <input
                            type="text"
                            value={lnk.label}
                            onChange={(e) => {
                              const next = [...footerCfg.quickLinks];
                              next[idx] = { ...lnk, label: e.target.value };
                              setFooterCfg({ ...footerCfg, quickLinks: next });
                            }}
                            className="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold"
                          />
                          <input
                            type="text"
                            value={lnk.href}
                            onChange={(e) => {
                              const next = [...footerCfg.quickLinks];
                              next[idx] = { ...lnk, href: e.target.value };
                              setFooterCfg({ ...footerCfg, quickLinks: next });
                            }}
                            className="w-32 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[11px] font-mono text-purple-700"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="text"
                        placeholder="Quick Link Label"
                        value={newFooterQuickLabel}
                        onChange={(e) => setNewFooterQuickLabel(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs"
                      />
                      <input
                        type="text"
                        placeholder="/url"
                        value={newFooterQuickHref}
                        onChange={(e) => setNewFooterQuickHref(e.target.value)}
                        className="w-28 px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (!newFooterQuickLabel || !newFooterQuickHref) return;
                          setFooterCfg({
                            ...footerCfg,
                            quickLinks: [
                              ...footerCfg.quickLinks,
                              { label: newFooterQuickLabel, href: newFooterQuickHref, visible: true },
                            ],
                          });
                          setNewFooterQuickLabel('');
                          setNewFooterQuickHref('');
                        }}
                        className="px-3 py-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 4: HERO & HOMEPAGE TRUST STATS
             ========================================== */}
          {activeTab === 'hero' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 max-w-4xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                    HOMEPAGE HERO &amp; PROOF POINTS
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    Manage Hero Headline, CTAs &amp; Verified Counter Metrics
                  </h2>
                </div>
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={() => postAdminAction('save_hero', heroCfg, 'Hero & Trust Counters saved!')}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md shadow-purple-200 self-start"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Hero &amp; Stats</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Top Hero Pill Badge</label>
                  <input
                    type="text"
                    value={heroCfg.badgeText}
                    onChange={(e) => setHeroCfg({ ...heroCfg, badgeText: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Main Headline Prefix</label>
                  <input
                    type="text"
                    value={heroCfg.headlineMain}
                    onChange={(e) => setHeroCfg({ ...heroCfg, headlineMain: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Highlighted Gradient Headline</label>
                  <input
                    type="text"
                    value={heroCfg.headlineGradient}
                    onChange={(e) => setHeroCfg({ ...heroCfg, headlineGradient: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-purple-700"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Hero Supporting Description</label>
                  <textarea
                    rows={3}
                    value={heroCfg.subheadline}
                    onChange={(e) => setHeroCfg({ ...heroCfg, subheadline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Enquiry CTA Text</label>
                  <input
                    type="text"
                    value={heroCfg.primaryCtaText}
                    onChange={(e) => setHeroCfg({ ...heroCfg, primaryCtaText: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Secondary Portfolio CTA Text</label>
                  <input
                    type="text"
                    value={heroCfg.secondaryCtaText}
                    onChange={(e) => setHeroCfg({ ...heroCfg, secondaryCtaText: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Verified Agency Proof Counters</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">Projects Delivered</label>
                    <input
                      type="text"
                      value={heroCfg.stats.projectsDelivered}
                      onChange={(e) =>
                        setHeroCfg({
                          ...heroCfg,
                          stats: { ...heroCfg.stats, projectsDelivered: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-mono font-bold text-purple-700"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">Happy Clients</label>
                    <input
                      type="text"
                      value={heroCfg.stats.happyClients}
                      onChange={(e) =>
                        setHeroCfg({
                          ...heroCfg,
                          stats: { ...heroCfg.stats, happyClients: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-mono font-bold text-purple-700"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">Client Retention</label>
                    <input
                      type="text"
                      value={heroCfg.stats.clientRetention}
                      onChange={(e) =>
                        setHeroCfg({
                          ...heroCfg,
                          stats: { ...heroCfg.stats, clientRetention: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-mono font-bold text-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">Verified Rating</label>
                    <input
                      type="text"
                      value={heroCfg.stats.googleRating}
                      onChange={(e) =>
                        setHeroCfg({
                          ...heroCfg,
                          stats: { ...heroCfg.stats, googleRating: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-mono font-bold text-amber-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 5: LEADS & CRM PIPELINE (TABLE + KANBAN)
             ========================================== */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-5 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {['all', 'new', 'contacted', 'qualified', 'proposal', 'won'].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setLeadStatusFilter(st)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                        leadStatusFilter === st
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-purple-700'
                      }`}
                    >
                      {st} ({st === 'all' ? leads.length : leads.filter((l) => l.status === st).length})
                    </button>
                  ))}

                  <select
                    value={leadPriorityFilter}
                    onChange={(e) => setLeadPriorityFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700"
                  >
                    <option value="all">All Priorities</option>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setLeadsViewMode('table')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        leadsViewMode === 'table' ? 'bg-white text-purple-700 shadow-2xs' : 'text-slate-600'
                      }`}
                    >
                      Table View
                    </button>
                    <button
                      type="button"
                      onClick={() => setLeadsViewMode('kanban')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        leadsViewMode === 'kanban' ? 'bg-white text-purple-700 shadow-2xs' : 'text-slate-600'
                      }`}
                    >
                      Kanban Board
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleExportLeadsCsv}
                    className="px-4 py-2 rounded-xl border border-slate-200 hover:border-purple-300 text-xs font-bold text-slate-700 flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-purple-600" /> Export CSV
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAddLeadOpen(true)}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Manual Lead
                  </button>
                </div>
              </div>

              {leadsViewMode === 'table' ? (
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-mono uppercase text-slate-500">
                          <th className="py-3.5 px-5">Lead Details</th>
                          <th className="py-3.5 px-4">Service &amp; Requirement</th>
                          <th className="py-3.5 px-4">Budget &amp; Priority</th>
                          <th className="py-3.5 px-4">Source Page</th>
                          <th className="py-3.5 px-4">Pipeline Stage</th>
                          <th className="py-3.5 px-5 text-right">Quick Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/70 text-xs">
                        {filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-5">
                              <div className="font-bold text-slate-900 text-sm">{lead.full_name}</div>
                              <div className="text-slate-500 text-xs mt-0.5">{lead.email}</div>
                              <div className="text-purple-700 font-mono text-[11px] mt-0.5">{lead.phone}</div>
                            </td>
                            <td className="py-4 px-4 max-w-xs">
                              <div className="font-bold text-slate-900">{lead.service_needed}</div>
                              <p className="text-slate-500 text-[11px] line-clamp-2 mt-0.5">{lead.message}</p>
                            </td>
                            <td className="py-4 px-4">
                              <div className="font-mono font-bold text-purple-700">{lead.budget}</div>
                              <span className="inline-block mt-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                                {lead.priority || 'High'} Priority
                              </span>
                            </td>
                            <td className="py-4 px-4 font-mono text-[11px] text-slate-500">{lead.source_page}</td>
                            <td className="py-4 px-4">
                              <select
                                value={lead.status}
                                onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                                className={`text-[11px] font-bold uppercase px-3 py-1.5 rounded-full border cursor-pointer ${getStatusBadge(
                                  lead.status
                                )}`}
                              >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="qualified">Qualified</option>
                                <option value="proposal">Proposal</option>
                                <option value="won">Won</option>
                              </select>
                            </td>
                            <td className="py-4 px-5 text-right whitespace-nowrap space-x-1.5">
                              <button
                                type="button"
                                onClick={() => setSelectedLead(lead)}
                                className="p-2 rounded-lg bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700"
                                title="View Full Dossier"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <a
                                href={`tel:${lead.phone}`}
                                className="inline-flex p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700"
                                title="Call Client"
                              >
                                <Phone className="w-3.5 h-3.5" />
                              </a>
                              <button
                                type="button"
                                onClick={() => handleDeleteLead(lead.id)}
                                className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                /* 5-Column Interactive Kanban Pipeline Board */
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
                  {(['new', 'contacted', 'qualified', 'proposal', 'won'] as const).map((stage) => {
                    const stageLeads = filteredLeads.filter((l) => l.status === stage);
                    return (
                      <div
                        key={stage}
                        className="bg-white rounded-3xl p-4 border border-slate-200 flex flex-col space-y-3 min-h-[380px]"
                      >
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                          <span className="text-xs font-mono font-bold uppercase text-slate-900">{stage}</span>
                          <span
                            className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadge(
                              stage
                            )}`}
                          >
                            {stageLeads.length}
                          </span>
                        </div>

                        <div className="space-y-3 flex-1">
                          {stageLeads.map((lead) => (
                            <div
                              key={lead.id}
                              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 space-y-2 transition-all"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="font-bold text-xs text-slate-900">{lead.full_name}</div>
                                <button
                                  type="button"
                                  onClick={() => setSelectedLead(lead)}
                                  className="text-purple-700 hover:underline text-[10px] font-bold"
                                >
                                  Inspect
                                </button>
                              </div>
                              <div className="text-[11px] font-semibold text-purple-700">{lead.service_needed}</div>
                              <div className="text-[10px] font-mono text-slate-500">{lead.budget}</div>
                              <select
                                value={lead.status}
                                onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                                className="w-full px-2 py-1 rounded-lg border border-slate-200 bg-white text-[10px] font-bold uppercase text-slate-700"
                              >
                                <option value="new">Move → New</option>
                                <option value="contacted">Move → Contacted</option>
                                <option value="qualified">Move → Qualified</option>
                                <option value="proposal">Move → Proposal</option>
                                <option value="won">Move → Won</option>
                              </select>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Newsletter Subscribers Table + Add Subscriber */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Newsletter Subscribers ({subscribers.length})
                    </h3>
                    <p className="text-xs text-slate-500">Emails captured via Footer newsletter form or manual entry.</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      placeholder="Add subscriber email..."
                      value={newSubscriberEmail}
                      onChange={(e) => setNewSubscriberEmail(e.target.value)}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs w-56"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (!newSubscriberEmail.trim()) return;
                        postAdminAction('add_subscriber', { email: newSubscriberEmail }, 'Subscriber added!');
                        setNewSubscriberEmail('');
                      }}
                      className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
                    >
                      + Add Email
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {subscribers.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-bold text-slate-900">{sub.email}</div>
                        <div className="text-[10px] text-emerald-700 font-mono">● Active Subscriber</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => postAdminAction('delete_subscriber', { id: sub.id }, 'Subscriber removed')}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 6: SERVICES & SUB-SERVICES MANAGER
             ========================================== */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                    6 CORE SERVICES &amp; SUB-SERVICE PILLS
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    Manage Core Services &amp; Sub-Service Offerings
                  </h2>
                  <p className="text-xs text-slate-500">
                    Edit service titles, descriptions, or add new sub-services (WordPress, Shopify, SEO, Meta Ads, etc.).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => postAdminAction('save_services', servicesList, 'Services catalog saved!')}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                >
                  <Save className="w-4 h-4" /> Save Services Catalog
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {servicesList.map((svc, idx) => (
                  <div
                    key={svc.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-purple-700">/{svc.slug}</span>
                        <Link
                          href={`/${svc.slug}`}
                          target="_blank"
                          className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1"
                        >
                          Live 12-Sec Page <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>

                      <input
                        type="text"
                        value={svc.title}
                        onChange={(e) => {
                          const next = [...servicesList];
                          next[idx] = { ...svc, title: e.target.value };
                          setServicesList(next);
                        }}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-900"
                      />

                      <textarea
                        rows={2}
                        value={svc.short_description}
                        onChange={(e) => {
                          const next = [...servicesList];
                          next[idx] = { ...svc, short_description: e.target.value };
                          setServicesList(next);
                        }}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-600"
                      />

                      <div>
                        <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block mb-2">
                          Retained Sub-Services ({(svc.sub_services || []).length})
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(svc.sub_services || []).map((sub: any, si: number) => (
                            <span
                              key={si}
                              className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-purple-50 text-purple-800 border border-purple-200 px-2.5 py-1 rounded-lg"
                            >
                              <span>{sub.name}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  const next = [...servicesList];
                                  next[idx] = {
                                    ...svc,
                                    sub_services: svc.sub_services.filter((_: any, i: number) => i !== si),
                                  };
                                  setServicesList(next);
                                }}
                                className="text-purple-500 hover:text-rose-600"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Add Sub-Service Input */}
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Add sub-service (e.g. Headless Commerce)"
                        value={editingServiceIdx === idx ? newSubServiceName : ''}
                        onFocus={() => setEditingServiceIdx(idx)}
                        onChange={(e) => {
                          setEditingServiceIdx(idx);
                          setNewSubServiceName(e.target.value);
                        }}
                        className="flex-1 px-3 py-1.5 rounded-xl border border-slate-200 text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (editingServiceIdx !== idx || !newSubServiceName.trim()) return;
                          const next = [...servicesList];
                          next[idx] = {
                            ...svc,
                            sub_services: [
                              ...(svc.sub_services || []),
                              {
                                name: newSubServiceName.trim(),
                                desc: 'Custom implementation and optimization by LIMRA Digitech.',
                                tag: 'Active',
                              },
                            ],
                          };
                          setServicesList(next);
                          setNewSubServiceName('');
                        }}
                        className="px-3 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-bold"
                      >
                        + Add Pill
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 7: INDUSTRIES & TECH MEGA-MENU PAGES
             ========================================== */}
          {activeTab === 'mega_pages' && (
            <div className="space-y-8">
              {/* 8 Industry Pages */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      INDUSTRIES MEGA-MENU // 8 DEDICATED PAGES
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      Manage Industry Vertical Pages (/industries/[slug])
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      postAdminAction('save_industries', industriesList, 'Industry pages updated!')
                    }
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                  >
                    <Save className="w-3.5 h-3.5" /> Save Industries
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {industriesList.map((ind, idx) => (
                    <div key={ind.slug} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-purple-700">/industries/{ind.slug}</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setEditingMegaPage({ type: 'industry', idx, item: ind })}
                            className="text-xs font-bold text-slate-700 hover:text-purple-700 flex items-center gap-1"
                          >
                            <Edit3 className="w-3 h-3" /> Edit Blueprint
                          </button>
                          <Link
                            href={`/industries/${ind.slug}`}
                            target="_blank"
                            className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1"
                          >
                            Live Page <ExternalLink className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <input
                          type="text"
                          value={ind.shortTitle}
                          onChange={(e) => {
                            const next = [...industriesList];
                            next[idx] = { ...ind, shortTitle: e.target.value };
                            setIndustriesList(next);
                          }}
                          className="sm:col-span-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                        />
                        <input
                          type="text"
                          value={ind.metricBadge}
                          onChange={(e) => {
                            const next = [...industriesList];
                            next[idx] = { ...ind, metricBadge: e.target.value };
                            setIndustriesList(next);
                          }}
                          className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-mono text-emerald-700 font-bold"
                        />
                      </div>
                      <input
                        type="text"
                        value={ind.subtitle}
                        onChange={(e) => {
                          const next = [...industriesList];
                          next[idx] = { ...ind, subtitle: e.target.value };
                          setIndustriesList(next);
                        }}
                        className="w-full px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-600"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* 8 Technology Stack Pages */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      TECHNOLOGIES MEGA-MENU // 8 DEDICATED PAGES
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      Manage Technology Stack Pages (/technologies/[slug])
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      postAdminAction('save_technologies', technologiesList, 'Technology pages updated!')
                    }
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                  >
                    <Save className="w-3.5 h-3.5" /> Save Technologies
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technologiesList.map((tech, idx) => (
                    <div key={tech.slug} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-purple-700">/technologies/{tech.slug}</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setEditingMegaPage({ type: 'technology', idx, item: tech })}
                            className="text-xs font-bold text-slate-700 hover:text-purple-700 flex items-center gap-1"
                          >
                            <Edit3 className="w-3 h-3" /> Edit Blueprint
                          </button>
                          <Link
                            href={`/technologies/${tech.slug}`}
                            target="_blank"
                            className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1"
                          >
                            Live Page <ExternalLink className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <input
                          type="text"
                          value={tech.shortTitle}
                          onChange={(e) => {
                            const next = [...technologiesList];
                            next[idx] = { ...tech, shortTitle: e.target.value };
                            setTechnologiesList(next);
                          }}
                          className="sm:col-span-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                        />
                        <input
                          type="text"
                          value={tech.metricBadge}
                          onChange={(e) => {
                            const next = [...technologiesList];
                            next[idx] = { ...tech, metricBadge: e.target.value };
                            setTechnologiesList(next);
                          }}
                          className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-mono text-emerald-700 font-bold"
                        />
                      </div>
                      <input
                        type="text"
                        value={tech.subtitle}
                        onChange={(e) => {
                          const next = [...technologiesList];
                          next[idx] = { ...tech, subtitle: e.target.value };
                          setTechnologiesList(next);
                        }}
                        className="w-full px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-600"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 8: PORTFOLIO & CASE STUDIES CMS
             ========================================== */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                    PORTFOLIO CMS
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    Manage Case Studies ({caseStudies.length} Active Projects)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Add, edit, or delete portfolio case studies (/portfolio/[slug]).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddCaseStudyOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                >
                  <Plus className="w-4 h-4" /> Publish New Case Study
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((cs) => (
                  <div
                    key={cs.id}
                    className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-44 bg-slate-100 relative overflow-hidden border-b border-slate-200">
                        <Image
                          src={cs.image_url || '/images/portfolio-ecommerce.png'}
                          alt={cs.title}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-3 left-3 text-[10px] font-mono font-bold bg-white/95 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200">
                          {cs.category}
                        </span>
                        <span className="absolute bottom-3 right-3 text-xs font-mono font-bold bg-emerald-600 text-white px-3 py-1 rounded-full shadow-xs">
                          {cs.results}
                        </span>
                      </div>

                      <div className="p-6 space-y-2">
                        <div className="text-xs font-mono font-bold text-purple-700">{cs.client}</div>
                        <h3 className="text-base font-bold text-slate-900">{cs.title}</h3>
                        <p className="text-xs text-slate-500 line-clamp-2">{cs.challenge}</p>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between">
                      <Link
                        href={`/portfolio/${cs.slug}`}
                        target="_blank"
                        className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                      >
                        <span>View Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setEditingCaseStudy(cs)}
                          className="text-xs font-semibold text-slate-700 hover:text-purple-700 flex items-center gap-1"
                        >
                          <Edit3 className="w-3.5 h-3.5" /> Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const next = caseStudies.filter((item) => item.id !== cs.id);
                            setCaseStudies(next);
                            postAdminAction('save_case_studies', next, 'Case study removed');
                          }}
                          className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 9: BLOGS & EDITORIAL CMS
             ========================================== */}
          {activeTab === 'blogs' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                    EDITORIAL &amp; SEO INSIGHTS CMS
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    Manage Blog Articles ({blogs.length} Published)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Create, edit, or delete blog articles (/blogs/[slug]).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddBlogOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                >
                  <Plus className="w-4 h-4" /> Write New Article
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-44 bg-slate-100 relative overflow-hidden border-b border-slate-200">
                        <Image
                          src={post.cover_image || '/images/blog-seo.png'}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-3 left-3 text-[10px] font-mono font-bold bg-white/95 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                          <span>{post.published_at}</span>
                          <span>{post.read_time}</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">{post.title}</h3>
                        <p className="text-xs text-slate-500 line-clamp-2">{post.excerpt}</p>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between">
                      <Link
                        href={`/blogs/${post.slug}`}
                        target="_blank"
                        className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                      >
                        <span>Read Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setEditingBlog(post)}
                          className="text-xs font-semibold text-slate-700 hover:text-purple-700 flex items-center gap-1"
                        >
                          <Edit3 className="w-3.5 h-3.5" /> Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const next = blogs.filter((b) => b.id !== post.id);
                            setBlogs(next);
                            postAdminAction('save_blogs', next, 'Article deleted');
                          }}
                          className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 10: TESTIMONIALS & FAQS CMS
             ========================================== */}
          {activeTab === 'testimonials_faqs' && (
            <div className="space-y-8">
              {/* Testimonials Section */}
              <div className="space-y-4">
                <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      SOCIAL PROOF CMS
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      Verified Client Testimonials ({testimonials.length})
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsAddTestimonialOpen(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                  >
                    <Plus className="w-4 h-4" /> Add Client Review
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {testimonials.map((t) => (
                    <div
                      key={t.id}
                      className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-amber-500">
                            {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                              <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            Verified
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 italic leading-relaxed">
                          &ldquo;{t.review || t.content}&rdquo;
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-900">{t.client_name || t.name}</div>
                          <div className="text-[11px] text-purple-700">
                            {t.company_or_role || `${t.role}, ${t.company}`}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              setEditingTestimonial({
                                ...t,
                                name: t.client_name || t.name || '',
                                content: t.review || t.content || '',
                                role: t.role || t.company_or_role || 'Founder',
                                company: t.company || 'Enterprise Partner',
                              })
                            }
                            className="p-1.5 text-slate-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
                            title="Edit Review"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const next = testimonials.filter((item) => item.id !== t.id);
                              setTestimonials(next);
                              postAdminAction('save_testimonials', next, 'Testimonial removed');
                            }}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                            title="Delete Review"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Section */}
              <div className="space-y-4">
                <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      KNOWLEDGE BASE CMS
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      Frequently Asked Questions ({faqs.length})
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsAddFaqOpen(true)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                  >
                    <Plus className="w-4 h-4" /> Add New FAQ
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.map((f) => (
                    <div key={f.id} className="bg-white rounded-2xl p-5 border border-slate-200 space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">{f.question}</h3>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setEditingFaq(f)}
                            className="text-slate-600 hover:text-purple-700 hover:bg-purple-50 p-1 rounded"
                            title="Edit FAQ"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const next = faqs.filter((item) => item.id !== f.id);
                              setFaqs(next);
                              postAdminAction('save_faqs', next, 'FAQ item deleted');
                            }}
                            className="text-rose-600 hover:bg-rose-50 p-1 rounded"
                            title="Delete FAQ"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 11B: CLIENTS, LEADERSHIP TEAM, MILESTONES & PRICING CMS
             ========================================== */}
          {activeTab === 'clients_team' && (
            <div className="space-y-8">
              {/* 1. Verified Client Brands Showcase Manager */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      HOMEPAGE TRUST BAR &amp; CLIENTS SHOWCASE
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      Manage Verified Client Brands ({clientBrands.length})
                    </h2>
                    <p className="text-xs text-slate-500">
                      Live synced with the Homepage Trust Indicators Bar and Clients showcase.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      postAdminAction('save_client_brands', clientBrands, 'Verified Client Brands saved live!')
                    }
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                  >
                    <Save className="w-3.5 h-3.5" /> Save Client Brands
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {clientBrands.map((cb, idx) => (
                    <div key={cb.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          ✓ {cb.tag}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const next = clientBrands.filter((b) => b.id !== cb.id);
                            setClientBrands(next);
                            postAdminAction('save_client_brands', next, 'Client brand removed');
                          }}
                          className="text-rose-600 hover:bg-rose-50 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={cb.name}
                        onChange={(e) => {
                          const next = [...clientBrands];
                          next[idx] = { ...cb, name: e.target.value };
                          setClientBrands(next);
                        }}
                        className="w-full px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={cb.sector}
                          onChange={(e) => {
                            const next = [...clientBrands];
                            next[idx] = { ...cb, sector: e.target.value };
                            setClientBrands(next);
                          }}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[11px]"
                        />
                        <input
                          type="text"
                          value={cb.tag}
                          onChange={(e) => {
                            const next = [...clientBrands];
                            next[idx] = { ...cb, tag: e.target.value };
                            setClientBrands(next);
                          }}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[11px] font-mono text-purple-700"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <input
                    type="text"
                    placeholder="Client Brand Name"
                    value={newClientBrand.name}
                    onChange={(e) => setNewClientBrand({ ...newClientBrand, name: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs w-52"
                  />
                  <input
                    type="text"
                    placeholder="Sector (e.g. FinTech & SaaS)"
                    value={newClientBrand.sector}
                    onChange={(e) => setNewClientBrand({ ...newClientBrand, sector: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs w-48"
                  />
                  <input
                    type="text"
                    placeholder="Badge (e.g. Next.js & SEO)"
                    value={newClientBrand.tag}
                    onChange={(e) => setNewClientBrand({ ...newClientBrand, tag: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs w-44"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!newClientBrand.name.trim()) return;
                      const next = [
                        ...clientBrands,
                        { id: `cb-${Date.now()}`, ...newClientBrand },
                      ];
                      setClientBrands(next);
                      setNewClientBrand({ name: '', sector: 'Enterprise B2B', tag: 'Verified Partner' });
                      postAdminAction('save_client_brands', next, 'Added new verified client brand!');
                    }}
                    className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
                  >
                    + Add Client Brand
                  </button>
                </div>
              </div>

              {/* 2. Agency Leadership & Engineering Team (/about) */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      ABOUT PAGE LEADERSHIP &amp; ARCHITECTS
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      Manage Leadership &amp; Engineering Team ({leadershipTeam.length})
                    </h2>
                    <p className="text-xs text-slate-500">Live synced with the /about page Leadership section.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      postAdminAction('save_leadership_team', leadershipTeam, 'Leadership team saved live!')
                    }
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                  >
                    <Save className="w-3.5 h-3.5" /> Save Leadership Team
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {leadershipTeam.map((member, idx) => (
                    <div key={member.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-purple-700 font-bold">Leader #0{idx + 1}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const next = leadershipTeam.filter((m) => m.id !== member.id);
                            setLeadershipTeam(next);
                            postAdminAction('save_leadership_team', next, 'Team member removed');
                          }}
                          className="text-rose-600 hover:bg-rose-50 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => {
                            const next = [...leadershipTeam];
                            next[idx] = { ...member, name: e.target.value };
                            setLeadershipTeam(next);
                          }}
                          className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                        />
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => {
                            const next = [...leadershipTeam];
                            next[idx] = { ...member, role: e.target.value };
                            setLeadershipTeam(next);
                          }}
                          className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-purple-700 font-semibold"
                        />
                      </div>
                      <input
                        type="text"
                        value={member.exp}
                        onChange={(e) => {
                          const next = [...leadershipTeam];
                          next[idx] = { ...member, exp: e.target.value };
                          setLeadershipTeam(next);
                        }}
                        className="w-full px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-600"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <input
                    type="text"
                    placeholder="Leader Full Name"
                    value={newLeaderForm.name}
                    onChange={(e) => setNewLeaderForm({ ...newLeaderForm, name: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs w-48"
                  />
                  <input
                    type="text"
                    placeholder="Designation / Role"
                    value={newLeaderForm.role}
                    onChange={(e) => setNewLeaderForm({ ...newLeaderForm, role: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs w-56"
                  />
                  <input
                    type="text"
                    placeholder="Experience Summary"
                    value={newLeaderForm.exp}
                    onChange={(e) => setNewLeaderForm({ ...newLeaderForm, exp: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs w-48"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!newLeaderForm.name.trim() || !newLeaderForm.role.trim()) return;
                      const next = [
                        ...leadershipTeam,
                        { id: `lead-tm-${Date.now()}`, ...newLeaderForm },
                      ];
                      setLeadershipTeam(next);
                      setNewLeaderForm({
                        name: '',
                        role: '',
                        exp: '6+ Yrs Experience',
                        avatar: '/images/client-rahul-sharma.jpg',
                      });
                      postAdminAction('save_leadership_team', next, 'Added leadership member!');
                    }}
                    className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
                  >
                    + Add Leader
                  </button>
                </div>
              </div>

              {/* 3. Service Pricing & Engagement Packages */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      COMMERCIAL PACKAGES &amp; RETAINER TIERS
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      Manage Service Pricing &amp; Retainer Packages ({pricingPackages.length} Tiers)
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      postAdminAction('save_pricing_packages', pricingPackages, 'Pricing packages updated!')
                    }
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                  >
                    <Save className="w-3.5 h-3.5" /> Save Pricing Tiers
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {pricingPackages.map((pkg, idx) => (
                    <div
                      key={pkg.id}
                      className={`p-5 rounded-3xl border space-y-3 ${
                        pkg.highlighted
                          ? 'bg-purple-50/50 border-purple-300 shadow-md'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={pkg.badge}
                          onChange={(e) => {
                            const next = [...pricingPackages];
                            next[idx] = { ...pkg, badge: e.target.value };
                            setPricingPackages(next);
                          }}
                          className="px-2.5 py-1 rounded-full bg-white border border-purple-200 text-[10px] font-mono font-bold text-purple-700 w-36"
                        />
                        <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={pkg.highlighted}
                            onChange={(e) => {
                              const next = [...pricingPackages];
                              next[idx] = { ...pkg, highlighted: e.target.checked };
                              setPricingPackages(next);
                            }}
                            className="accent-purple-600"
                          />
                          Featured
                        </label>
                      </div>

                      <input
                        type="text"
                        value={pkg.name}
                        onChange={(e) => {
                          const next = [...pricingPackages];
                          next[idx] = { ...pkg, name: e.target.value };
                          setPricingPackages(next);
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold"
                      />

                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={pkg.price}
                          onChange={(e) => {
                            const next = [...pricingPackages];
                            next[idx] = { ...pkg, price: e.target.value };
                            setPricingPackages(next);
                          }}
                          className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-sm font-mono font-black text-purple-700"
                        />
                        <input
                          type="text"
                          value={pkg.billing}
                          onChange={(e) => {
                            const next = [...pricingPackages];
                            next[idx] = { ...pkg, billing: e.target.value };
                            setPricingPackages(next);
                          }}
                          className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-[11px] text-slate-600"
                        />
                      </div>

                      <textarea
                        rows={2}
                        value={pkg.description}
                        onChange={(e) => {
                          const next = [...pricingPackages];
                          next[idx] = { ...pkg, description: e.target.value };
                          setPricingPackages(next);
                        }}
                        className="w-full px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 11: CAREERS & JOB OPENINGS CMS
             ========================================== */}
          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                    TALENT &amp; HIRING PORTAL CMS
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    Manage Careers &amp; Open Roles ({careers.length} Positions)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Active positions immediately appear on the live /careers page.
                  </p>
                </div>
                <div className="flex items-center gap-2.5 self-start">
                  <Link
                    href="/careers"
                    target="_blank"
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5"
                  >
                    <span>View /careers</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsAddCareerOpen(true)}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Post New Job Opening
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careers.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col justify-between space-y-4 shadow-2xs"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                            {job.department} • {job.type}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 mt-2">{job.role}</h3>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {job.location} • Experience: {job.experience}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const nextStatus: 'Active' | 'Closed' = job.status === 'Active' ? 'Closed' : 'Active';
                            const next = careers.map((c) => (c.id === job.id ? { ...c, status: nextStatus } : c));
                            setCareers(next);
                            postAdminAction('save_careers', next, `Job status set to ${nextStatus}`);
                          }}
                          className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                            job.status === 'Active'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-100 text-slate-500 border-slate-200'
                          }`}
                        >
                          {job.status}
                        </button>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">{job.desc}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {(job.tags || []).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">ID: {job.id}</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setEditingCareer(job)}
                          className="text-xs font-semibold text-slate-700 hover:text-purple-700 flex items-center gap-1"
                        >
                          <Edit3 className="w-3.5 h-3.5" /> Edit Role
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const next = careers.filter((c) => c.id !== job.id);
                            setCareers(next);
                            postAdminAction('save_careers', next, 'Job opening removed');
                          }}
                          className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 12: MEDIA & BRAND ASSETS LIBRARY
             ========================================== */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                    BRAND ASSETS &amp; MEDIA REPOSITORY
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    Logos, Favicons, Portfolio &amp; Editorial Media ({mediaAssets.length} Assets)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Manage official brand logos, generated square favicons, and visual assets used across the site.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddMediaOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                >
                  <Plus className="w-4 h-4" /> Register New Media Asset
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mediaAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      <div className="h-44 bg-slate-100 relative flex items-center justify-center p-4 border-b border-slate-200 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset.url}
                          alt={asset.altText}
                          className="max-h-full max-w-full object-contain rounded-lg"
                        />
                        <span className="absolute top-3 left-3 text-[10px] font-mono font-bold bg-white/95 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200">
                          {asset.category}
                        </span>
                      </div>
                      <div className="p-5 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>{asset.dimensions}</span>
                          <span className="truncate max-w-[160px] text-purple-700">{asset.url}</span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900">{asset.title}</h3>
                        <p className="text-xs text-slate-500">Alt: {asset.altText}</p>
                      </div>
                    </div>

                    <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(asset.url);
                          showToast(`Copied URL: ${asset.url}`);
                        }}
                        className="text-xs font-bold text-purple-700 hover:text-purple-900"
                      >
                        Copy Asset Path
                      </button>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setHeaderCfg({ ...headerCfg, logoUrl: asset.url });
                            postAdminAction(
                              'save_header',
                              { ...headerCfg, logoUrl: asset.url },
                              'Set as active Header Logo!'
                            );
                          }}
                          className="text-[11px] font-semibold text-slate-600 hover:text-purple-700"
                        >
                          Use as Logo
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const next = mediaAssets.filter((m) => m.id !== asset.id);
                            setMediaAssets(next);
                            postAdminAction('save_media', next, 'Asset removed from library');
                          }}
                          className="text-rose-600 hover:bg-rose-50 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 11: SEO, SITEMAP, 301 REDIRECTS & GA4
             ========================================== */}
          {activeTab === 'seo' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Global SEO & GA4 Config */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      SEARCH &amp; ANALYTICS ENGINE
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">Global Meta, GA4 &amp; Search Console</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => postAdminAction('save_seo', seoCfg, 'SEO & Analytics configuration saved!')}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
                  >
                    <Save className="w-3.5 h-3.5" /> Save SEO
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Default Meta Title</label>
                  <input
                    type="text"
                    value={seoCfg.siteTitle}
                    onChange={(e) => setSeoCfg({ ...seoCfg, siteTitle: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Global Meta Description</label>
                  <textarea
                    rows={3}
                    value={seoCfg.metaDescription}
                    onChange={(e) => setSeoCfg({ ...seoCfg, metaDescription: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">GA4 Measurement ID</label>
                    <input
                      type="text"
                      value={seoCfg.ga4Id}
                      onChange={(e) => setSeoCfg({ ...seoCfg, ga4Id: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">GSC Verification Token</label>
                    <input
                      type="text"
                      value={seoCfg.gscVerification}
                      onChange={(e) => setSeoCfg({ ...seoCfg, gscVerification: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* 301 Redirects Manager */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                      URL REDIRECT MANAGER
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      301 Redirect Rules ({seoCfg.redirects.length})
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="/sitemap.xml"
                      target="_blank"
                      className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-xs font-mono font-bold"
                    >
                      /sitemap.xml ↗
                    </a>
                    <a
                      href="/robots.txt"
                      target="_blank"
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-bold"
                    >
                      /robots.txt ↗
                    </a>
                  </div>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {seoCfg.redirects.map((rule, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono"
                    >
                      <span>{rule.from}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-700 font-bold">301 → {rule.to}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const next = {
                              ...seoCfg,
                              redirects: seoCfg.redirects.filter((_, i) => i !== idx),
                            };
                            setSeoCfg(next);
                          }}
                          className="text-rose-500 hover:text-rose-700"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="text"
                    placeholder="Old URL (e.g. /old-page)"
                    value={newRedirectFrom}
                    onChange={(e) => setNewRedirectFrom(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                  />
                  <input
                    type="text"
                    placeholder="New URL (e.g. /services)"
                    value={newRedirectTo}
                    onChange={(e) => setNewRedirectTo(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!newRedirectFrom || !newRedirectTo) return;
                      const next = {
                        ...seoCfg,
                        redirects: [
                          { from: newRedirectFrom, to: newRedirectTo, permanent: true },
                          ...seoCfg.redirects,
                        ],
                      };
                      setSeoCfg(next);
                      setNewRedirectFrom('');
                      setNewRedirectTo('');
                      postAdminAction('save_seo', next, 'Added 301 redirect rule');
                    }}
                    className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 15: SYSTEM BACKUP, RESTORE & 44-PAGE LIVE INSPECTOR
             ========================================== */}
          {activeTab === 'system_backup' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
                    1-CLICK FULL EXPORT
                  </span>
                  <h3 className="text-base font-bold text-slate-900">Download Full CMS JSON Backup</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Export all 16 CMS modules (Header, Footer, Hero, Services, Industries, Technologies, Portfolio, Blogs, FAQs, Careers, SEO) into a portable JSON snapshot.
                  </p>
                  <button
                    type="button"
                    onClick={handleExportFullCmsBackup}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Download .JSON Snapshot
                  </button>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    RESTORE / MIGRATE
                  </span>
                  <h3 className="text-base font-bold text-slate-900">Import &amp; Restore CMS Backup</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Upload a previously exported <code className="font-mono">limra-digitech-cms-backup.json</code> file to immediately restore all website content and settings.
                  </p>
                  <label className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer">
                    <span>Select Backup .JSON File</span>
                    <input type="file" accept=".json" onChange={handleImportCmsBackup} className="hidden" />
                  </label>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full">
                    FACTORY RESET
                  </span>
                  <h3 className="text-base font-bold text-slate-900">Reset CMS to Factory Defaults</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Revert all Header, Footer, Hero, Services, Mega-Menus, Blogs, and Portfolio items back to the original LIMRA Digitech production snapshot.
                  </p>
                  <button
                    type="button"
                    onClick={async () => {
                      await postAdminAction('reset_cms_defaults', {}, 'CMS reset to factory defaults!');
                      await fetchAdminData();
                    }}
                    className="w-full bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Restore Factory Defaults
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      LIVE SITE ARCHITECTURE HEALTH MATRIX
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      All 44 Website Routes &amp; 10+ Section Verification
                    </h2>
                    <p className="text-xs text-slate-500">
                      Every route below is live, indexed in /sitemap.xml, and built with 10 to 18 structured sections.
                    </p>
                  </div>
                  <Link
                    href="/sitemap-page"
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold flex items-center gap-1.5 self-start"
                  >
                    <span>Open Visual Sitemap</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { title: 'Homepage (18 Sections)', path: '/' },
                    { title: 'About Us (11 Sections)', path: '/about' },
                    { title: 'All Services Hub (11 Sections)', path: '/services' },
                    { title: 'Industries Hub (11 Sections)', path: '/industries' },
                    { title: 'Technologies Hub (11 Sections)', path: '/technologies' },
                    { title: 'Portfolio & Case Studies', path: '/portfolio' },
                    { title: 'Clients & Testimonials', path: '/clients' },
                    { title: 'Blogs & SEO Insights', path: '/blogs' },
                    { title: 'Careers & Hiring Portal', path: '/careers' },
                    { title: 'Contact & Consultation', path: '/contact-us' },
                    ...servicesList.map((s) => ({
                      title: `${s.title} (12 Sections)`,
                      path: `/${s.slug}`,
                    })),
                    ...industriesList.map((i) => ({
                      title: `${i.shortTitle} (11 Sections)`,
                      path: `/industries/${i.slug}`,
                    })),
                    ...technologiesList.map((t) => ({
                      title: `${t.shortTitle} (11 Sections)`,
                      path: `/technologies/${t.slug}`,
                    })),
                  ].map((route, i) => (
                    <Link
                      key={i}
                      href={route.path}
                      target="_blank"
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200 hover:border-purple-300 flex items-center justify-between gap-2 transition-all group"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-purple-700 truncate">
                          {route.title}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">{route.path}</div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex-shrink-0">
                        200 OK ↗
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              MODULE 12: ADMIN PROFILE, ROLES & SECURITY
             ========================================== */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Admin Personal Profile Card */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-purple-200">
                        {adminProfile.avatarInitials || 'LA'}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase font-bold text-purple-700">
                          ADMINISTRATOR PROFILE
                        </span>
                        <h2 className="text-xl font-bold text-slate-900">{adminProfile.fullName}</h2>
                        <p className="text-xs text-slate-500">{adminProfile.role}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={isSaving}
                      onClick={() =>
                        postAdminAction('save_admin_profile', adminProfile, 'Admin Profile & Security updated!')
                      }
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Admin Profile</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Admin Full Name</label>
                      <input
                        type="text"
                        value={adminProfile.fullName}
                        onChange={(e) => setAdminProfile({ ...adminProfile, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Role / Designation</label>
                      <input
                        type="text"
                        value={adminProfile.role}
                        onChange={(e) => setAdminProfile({ ...adminProfile, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Admin Login Email</label>
                      <input
                        type="email"
                        value={adminProfile.email}
                        onChange={(e) => setAdminProfile({ ...adminProfile, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Direct Mobile / Alerts</label>
                      <input
                        type="text"
                        value={adminProfile.phone}
                        onChange={(e) => setAdminProfile({ ...adminProfile, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                      <input
                        type="text"
                        value={adminProfile.department}
                        onChange={(e) => setAdminProfile({ ...adminProfile, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Avatar Initials (2 Chars)</label>
                      <input
                        type="text"
                        maxLength={2}
                        value={adminProfile.avatarInitials}
                        onChange={(e) =>
                          setAdminProfile({ ...adminProfile, avatarInitials: e.target.value.toUpperCase() })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono uppercase"
                      />
                    </div>
                  </div>

                  {/* Password & Security Update */}
                  <div className="pt-5 border-t border-slate-100 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <KeyRound className="w-4 h-4 text-purple-600" />
                      <span>Update Master Password &amp; Session Security</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="password"
                        placeholder="Current Password"
                        value={passwordForm.current}
                        onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                        className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        value={passwordForm.next}
                        onChange={(e) => setPasswordForm({ ...passwordForm, next: e.target.value })}
                        className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (!passwordForm.next) return;
                          setLoginPass(passwordForm.next);
                          setPasswordForm({ current: '', next: '', confirm: '' });
                          showToast('Master password updated successfully');
                        }}
                        className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>

                {/* Team Role Access Control (RBAC) */}
                <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-5">
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-purple-700">
                      ROLE-BASED ACCESS (RBAC)
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">Admin Team &amp; Permissions</h2>
                    <p className="text-xs text-slate-500">Manage team accounts with access to the console.</p>
                  </div>

                  <div className="space-y-2.5">
                    {(adminProfile.teamMembers || []).map((tm) => (
                      <div
                        key={tm.id}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-slate-900">{tm.name}</div>
                          <div className="text-[11px] text-slate-500">{tm.email}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                            {tm.role}
                          </span>
                          {tm.role !== 'Super Admin' && (
                            <button
                              type="button"
                              onClick={() => {
                                const next = {
                                  ...adminProfile,
                                  teamMembers: adminProfile.teamMembers.filter((m) => m.id !== tm.id),
                                };
                                setAdminProfile(next);
                                postAdminAction('save_admin_profile', next, 'Team member removed');
                              }}
                              className="text-rose-500 hover:text-rose-700"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Team Member */}
                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <div className="text-xs font-bold text-slate-800">Invite Team Member</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={newTeamMember.name}
                        onChange={(e) => setNewTeamMember({ ...newTeamMember, name: e.target.value })}
                        className="px-3 py-2 rounded-xl border border-slate-200 text-xs"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={newTeamMember.email}
                        onChange={(e) => setNewTeamMember({ ...newTeamMember, email: e.target.value })}
                        className="px-3 py-2 rounded-xl border border-slate-200 text-xs"
                      />
                    </div>
                    <div className="flex gap-2">
                      <select
                        value={newTeamMember.role}
                        onChange={(e) =>
                          setNewTeamMember({ ...newTeamMember, role: e.target.value as any })
                        }
                        className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs"
                      >
                        <option>SEO Strategist</option>
                        <option>Content Editor</option>
                        <option>CRM Manager</option>
                        <option>Super Admin</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => {
                          if (!newTeamMember.name || !newTeamMember.email) return;
                          const next = {
                            ...adminProfile,
                            teamMembers: [
                              ...adminProfile.teamMembers,
                              {
                                id: `tm-${Date.now()}`,
                                name: newTeamMember.name,
                                email: newTeamMember.email,
                                role: newTeamMember.role,
                                status: 'Active' as const,
                              },
                            ],
                          };
                          setAdminProfile(next);
                          setNewTeamMember({ name: '', email: '', role: 'SEO Strategist' });
                          postAdminAction('save_admin_profile', next, 'New team member added');
                        }}
                        className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
                      >
                        + Add Member
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Security Audit Logs */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-4">
                <h3 className="text-base font-bold text-slate-900">Complete Admin Activity &amp; Security Audit Log</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {(adminProfile.auditLogs || []).map((log) => (
                    <div key={log.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className="font-bold text-slate-900">{log.action}</div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>{log.actor}</span>
                        <span>{log.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ==========================================
          MODAL 1: INSPECT LEAD DOSSIER
         ========================================== */}
      {selectedLead && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-purple-700">
                  CRM LEAD DOSSIER // {selectedLead.id}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{selectedLead.full_name}</h3>
                <p className="text-xs text-slate-500">{selectedLead.email} • {selectedLead.phone}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block">Service Requested</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{selectedLead.service_needed}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block">Estimated Budget</span>
                  <span className="font-bold text-purple-700 font-mono mt-0.5 block">{selectedLead.budget}</span>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-slate-400 block mb-1">Client Requirement Brief</span>
                <p className="text-slate-700 leading-relaxed">{selectedLead.message || 'No additional notes provided.'}</p>
              </div>

              {/* Internal CRM Follow-Up Notes & Priority */}
              <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-900">Internal CRM Notes &amp; Priority</span>
                  <select
                    value={selectedLead.priority || 'High'}
                    onChange={(e) => {
                      const nextPriority = e.target.value;
                      setSelectedLead({ ...selectedLead, priority: nextPriority });
                      setLeads((prev) =>
                        prev.map((l) => (l.id === selectedLead.id ? { ...l, priority: nextPriority } : l))
                      );
                      postAdminAction(
                        'update_lead_status',
                        { id: selectedLead.id, priority: nextPriority },
                        `Lead priority set to ${nextPriority}`
                      );
                    }}
                    className="px-2.5 py-1 rounded-lg border border-purple-200 bg-white text-[11px] font-bold text-purple-700"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                </div>
                <textarea
                  rows={2}
                  placeholder="Write internal call notes, quotation details, or next follow-up date..."
                  value={selectedLead.internal_notes || ''}
                  onChange={(e) => {
                    setSelectedLead({ ...selectedLead, internal_notes: e.target.value });
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-purple-200 bg-white text-xs"
                />
                <button
                  type="button"
                  onClick={() => {
                    setLeads((prev) =>
                      prev.map((l) =>
                        l.id === selectedLead.id ? { ...l, internal_notes: selectedLead.internal_notes } : l
                      )
                    );
                    postAdminAction(
                      'update_lead_status',
                      { id: selectedLead.id, internal_notes: selectedLead.internal_notes },
                      'Saved internal CRM notes!'
                    );
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-purple-600 text-white text-[11px] font-bold"
                >
                  Save Internal Note
                </button>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-bold text-slate-700">Update Stage:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['new', 'contacted', 'qualified', 'proposal', 'won'].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleUpdateLeadStatus(selectedLead.id, st)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase border ${
                        selectedLead.status === st
                          ? 'bg-purple-600 text-white border-purple-600'
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <a
                href={`https://wa.me/${(selectedLead.phone || '').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-bold text-center"
              >
                Reply on WhatsApp
              </a>
              <a
                href={`mailto:${selectedLead.email}`}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-xl text-xs font-bold text-center"
              >
                Send Email Proposal
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 2: ADD NEW LEAD
         ========================================== */}
      {isAddLeadOpen && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateLead}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Add New CRM Lead</h3>
              <button type="button" onClick={() => setIsAddLeadOpen(false)} className="p-1.5 rounded-lg bg-slate-100">
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Client Full Name *"
              value={newLeadForm.full_name}
              onChange={(e) => setNewLeadForm({ ...newLeadForm, full_name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={newLeadForm.email}
              onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="text"
              placeholder="Phone / WhatsApp Number"
              value={newLeadForm.phone}
              onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <select
              value={newLeadForm.service_needed}
              onChange={(e) => setNewLeadForm({ ...newLeadForm, service_needed: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            >
              <option>Website Development</option>
              <option>Digital Marketing &amp; SEO</option>
              <option>Lead Generation Funnels</option>
              <option>Creative Design Studio</option>
              <option>Mobile App Development</option>
              <option>Software Development</option>
            </select>
            <textarea
              placeholder="Project requirement notes..."
              rows={3}
              value={newLeadForm.message}
              onChange={(e) => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              Save Lead To Pipeline
            </button>
          </form>
        </div>
      )}

      {/* ==========================================
          MODAL 3: ADD / EDIT BLOG POST
         ========================================== */}
      {(isAddBlogOpen || editingBlog) && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveBlogModal}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">
                {editingBlog ? 'Edit Blog Article' : 'Publish New Blog Article'}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAddBlogOpen(false);
                  setEditingBlog(null);
                }}
                className="p-1.5 rounded-lg bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Article Headline *"
              value={editingBlog ? editingBlog.title : newBlogForm.title}
              onChange={(e) =>
                editingBlog
                  ? setEditingBlog({ ...editingBlog, title: e.target.value })
                  : setNewBlogForm({ ...newBlogForm, title: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <select
              value={editingBlog ? editingBlog.category : newBlogForm.category}
              onChange={(e) =>
                editingBlog
                  ? setEditingBlog({ ...editingBlog, category: e.target.value })
                  : setNewBlogForm({ ...newBlogForm, category: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            >
              <option>SEO &amp; Core Vitals</option>
              <option>Next.js &amp; Performance</option>
              <option>Conversion Rate &amp; PPC</option>
            </select>
            <textarea
              placeholder="Article summary / SEO meta description..."
              rows={3}
              value={editingBlog ? editingBlog.excerpt : newBlogForm.excerpt}
              onChange={(e) =>
                editingBlog
                  ? setEditingBlog({ ...editingBlog, excerpt: e.target.value })
                  : setNewBlogForm({ ...newBlogForm, excerpt: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              {editingBlog ? 'Save Article Changes' : 'Publish Article Live'}
            </button>
          </form>
        </div>
      )}

      {/* ==========================================
          MODAL 4: ADD / EDIT CASE STUDY
         ========================================== */}
      {(isAddCaseStudyOpen || editingCaseStudy) && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveCaseStudyModal}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">
                {editingCaseStudy ? 'Edit Portfolio Case Study' : 'Publish Portfolio Case Study'}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAddCaseStudyOpen(false);
                  setEditingCaseStudy(null);
                }}
                className="p-1.5 rounded-lg bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Project Title *"
              value={editingCaseStudy ? editingCaseStudy.title : newCaseStudyForm.title}
              onChange={(e) =>
                editingCaseStudy
                  ? setEditingCaseStudy({ ...editingCaseStudy, title: e.target.value })
                  : setNewCaseStudyForm({ ...newCaseStudyForm, title: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="text"
              placeholder="Client / Brand Name *"
              value={editingCaseStudy ? editingCaseStudy.client : newCaseStudyForm.client}
              onChange={(e) =>
                editingCaseStudy
                  ? setEditingCaseStudy({ ...editingCaseStudy, client: e.target.value })
                  : setNewCaseStudyForm({ ...newCaseStudyForm, client: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="text"
              placeholder="Verified Result Metric (e.g. +240% Organic Traffic)"
              value={editingCaseStudy ? editingCaseStudy.results : newCaseStudyForm.results}
              onChange={(e) =>
                editingCaseStudy
                  ? setEditingCaseStudy({ ...editingCaseStudy, results: e.target.value })
                  : setNewCaseStudyForm({ ...newCaseStudyForm, results: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <textarea
              placeholder="Challenge & Solution Overview..."
              rows={3}
              value={editingCaseStudy ? editingCaseStudy.challenge : newCaseStudyForm.challenge}
              onChange={(e) =>
                editingCaseStudy
                  ? setEditingCaseStudy({ ...editingCaseStudy, challenge: e.target.value })
                  : setNewCaseStudyForm({ ...newCaseStudyForm, challenge: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              {editingCaseStudy ? 'Save Case Study Changes' : 'Publish Case Study'}
            </button>
          </form>
        </div>
      )}

      {/* ==========================================
          MODAL 5: ADD / EDIT TESTIMONIAL
         ========================================== */}
      {(isAddTestimonialOpen || editingTestimonial) && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateTestimonial}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">
                {editingTestimonial ? 'Edit Client Review' : 'Add Verified Client Review'}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAddTestimonialOpen(false);
                  setEditingTestimonial(null);
                }}
                className="p-1.5 rounded-lg bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Client Name *"
              value={editingTestimonial ? editingTestimonial.name : newTestimonialForm.name}
              onChange={(e) =>
                editingTestimonial
                  ? setEditingTestimonial({
                      ...editingTestimonial,
                      name: e.target.value,
                      client_name: e.target.value,
                    })
                  : setNewTestimonialForm({ ...newTestimonialForm, name: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="text"
              placeholder="Role / Designation"
              value={editingTestimonial ? editingTestimonial.role : newTestimonialForm.role}
              onChange={(e) =>
                editingTestimonial
                  ? setEditingTestimonial({
                      ...editingTestimonial,
                      role: e.target.value,
                      company_or_role: `${e.target.value}, ${editingTestimonial.company || ''}`,
                    })
                  : setNewTestimonialForm({ ...newTestimonialForm, role: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={editingTestimonial ? editingTestimonial.company : newTestimonialForm.company}
              onChange={(e) =>
                editingTestimonial
                  ? setEditingTestimonial({
                      ...editingTestimonial,
                      company: e.target.value,
                      company_or_role: `${editingTestimonial.role || ''}, ${e.target.value}`,
                    })
                  : setNewTestimonialForm({ ...newTestimonialForm, company: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <textarea
              placeholder="Verified client feedback..."
              rows={3}
              value={editingTestimonial ? editingTestimonial.content : newTestimonialForm.content}
              onChange={(e) =>
                editingTestimonial
                  ? setEditingTestimonial({
                      ...editingTestimonial,
                      content: e.target.value,
                      review: e.target.value,
                    })
                  : setNewTestimonialForm({ ...newTestimonialForm, content: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              {editingTestimonial ? 'Save Review Changes' : 'Publish Verified Review'}
            </button>
          </form>
        </div>
      )}

      {/* ==========================================
          MODAL 6: ADD / EDIT FAQ ITEM
         ========================================== */}
      {(isAddFaqOpen || editingFaq) && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateFaq}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">
                {editingFaq ? 'Edit Website FAQ' : 'Add Website FAQ'}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAddFaqOpen(false);
                  setEditingFaq(null);
                }}
                className="p-1.5 rounded-lg bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Question *"
              value={editingFaq ? editingFaq.question : newFaqForm.question}
              onChange={(e) =>
                editingFaq
                  ? setEditingFaq({ ...editingFaq, question: e.target.value })
                  : setNewFaqForm({ ...newFaqForm, question: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <textarea
              placeholder="Detailed Answer *"
              rows={4}
              value={editingFaq ? editingFaq.answer : newFaqForm.answer}
              onChange={(e) =>
                editingFaq
                  ? setEditingFaq({ ...editingFaq, answer: e.target.value })
                  : setNewFaqForm({ ...newFaqForm, answer: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              {editingFaq ? 'Save FAQ Changes' : 'Save FAQ Item'}
            </button>
          </form>
        </div>
      )}

      {/* ==========================================
          MODAL 7: ADD / EDIT CAREER JOB OPENING
         ========================================== */}
      {(isAddCareerOpen || editingCareer) && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveCareerModal}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">
                {editingCareer ? 'Edit Job Opening' : 'Post New Job Opening'}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAddCareerOpen(false);
                  setEditingCareer(null);
                }}
                className="p-1.5 rounded-lg bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Job Role Title * (e.g. Senior Next.js Developer)"
              value={editingCareer ? editingCareer.role : newCareerForm.role}
              onChange={(e) =>
                editingCareer
                  ? setEditingCareer({ ...editingCareer, role: e.target.value })
                  : setNewCareerForm({ ...newCareerForm, role: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Department"
                value={editingCareer ? editingCareer.department : newCareerForm.department}
                onChange={(e) =>
                  editingCareer
                    ? setEditingCareer({ ...editingCareer, department: e.target.value })
                    : setNewCareerForm({ ...newCareerForm, department: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              />
              <input
                type="text"
                placeholder="Location (e.g. New Delhi / Remote)"
                value={editingCareer ? editingCareer.location : newCareerForm.location}
                onChange={(e) =>
                  editingCareer
                    ? setEditingCareer({ ...editingCareer, location: e.target.value })
                    : setNewCareerForm({ ...newCareerForm, location: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <textarea
              placeholder="Role responsibilities & description..."
              rows={3}
              value={editingCareer ? editingCareer.desc : newCareerForm.desc}
              onChange={(e) =>
                editingCareer
                  ? setEditingCareer({ ...editingCareer, desc: e.target.value })
                  : setNewCareerForm({ ...newCareerForm, desc: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="text"
              placeholder="Skill Tags (comma separated)"
              value={editingCareer ? (editingCareer.tags || []).join(', ') : newCareerForm.tags}
              onChange={(e) =>
                editingCareer
                  ? setEditingCareer({
                      ...editingCareer,
                      tags: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                    })
                  : setNewCareerForm({ ...newCareerForm, tags: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              {editingCareer ? 'Save Job Opening' : 'Publish Job To /careers'}
            </button>
          </form>
        </div>
      )}

      {/* ==========================================
          MODAL 8: REGISTER NEW MEDIA ASSET
         ========================================== */}
      {isAddMediaOpen && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateMediaAsset}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Register Brand / Media Asset</h3>
              <button type="button" onClick={() => setIsAddMediaOpen(false)} className="p-1.5 rounded-lg bg-slate-100">
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Asset Title * (e.g. Official Header Logo)"
              value={newMediaForm.title}
              onChange={(e) => setNewMediaForm({ ...newMediaForm, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="text"
              placeholder="Image Path or URL * (e.g. /limra-logo.png)"
              value={newMediaForm.url}
              onChange={(e) => setNewMediaForm({ ...newMediaForm, url: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
              required
            />
            <select
              value={newMediaForm.category}
              onChange={(e) => setNewMediaForm({ ...newMediaForm, category: e.target.value as any })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            >
              <option>Brand Logo &amp; Favicon</option>
              <option>Portfolio Case Study</option>
              <option>Blog Editorial</option>
              <option>UI Graphic</option>
            </select>
            <input
              type="text"
              placeholder="SEO Alt Text"
              value={newMediaForm.altText}
              onChange={(e) => setNewMediaForm({ ...newMediaForm, altText: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              Save Asset To Library
            </button>
          </form>
        </div>
      )}

      {/* ==========================================
          MODAL 9: DEEP 11-SECTION BLUEPRINT EDITOR (INDUSTRIES & TECHNOLOGIES)
         ========================================== */}
      {editingMegaPage && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-purple-700">
                  11-SECTION PAGE BLUEPRINT EDITOR // {editingMegaPage.type.toUpperCase()}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{editingMegaPage.item.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingMegaPage(null)}
                className="p-1.5 rounded-lg bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Page Hero Title</label>
                <input
                  type="text"
                  value={editingMegaPage.item.title || ''}
                  onChange={(e) =>
                    setEditingMegaPage({
                      ...editingMegaPage,
                      item: { ...editingMegaPage.item, title: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mega-Menu Short Title</label>
                  <input
                    type="text"
                    value={editingMegaPage.item.shortTitle || ''}
                    onChange={(e) =>
                      setEditingMegaPage({
                        ...editingMegaPage,
                        item: { ...editingMegaPage.item, shortTitle: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Primary KPI Badge</label>
                  <input
                    type="text"
                    value={editingMegaPage.item.metricBadge || ''}
                    onChange={(e) =>
                      setEditingMegaPage({
                        ...editingMegaPage,
                        item: { ...editingMegaPage.item, metricBadge: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-mono text-emerald-700 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Hero Subtitle</label>
                <input
                  type="text"
                  value={editingMegaPage.item.subtitle || ''}
                  onChange={(e) =>
                    setEditingMegaPage({
                      ...editingMegaPage,
                      item: { ...editingMegaPage.item, subtitle: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Hero Detailed Description</label>
                <textarea
                  rows={3}
                  value={editingMegaPage.item.heroDescription || ''}
                  onChange={(e) =>
                    setEditingMegaPage({
                      ...editingMegaPage,
                      item: { ...editingMegaPage.item, heroDescription: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Technology Stack / Tools (Comma Separated)
                </label>
                <input
                  type="text"
                  value={(editingMegaPage.item.techStack || editingMegaPage.item.ecosystemTools || []).join(', ')}
                  onChange={(e) => {
                    const arr = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                    setEditingMegaPage({
                      ...editingMegaPage,
                      item:
                        editingMegaPage.type === 'industry'
                          ? { ...editingMegaPage.item, techStack: arr }
                          : { ...editingMegaPage.item, ecosystemTools: arr },
                    });
                  }}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 font-mono"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={async () => {
                if (editingMegaPage.type === 'industry') {
                  const next = [...industriesList];
                  next[editingMegaPage.idx] = editingMegaPage.item;
                  setIndustriesList(next);
                  setEditingMegaPage(null);
                  await postAdminAction('save_industries', next, 'Industry 11-Section Blueprint saved!');
                } else {
                  const next = [...technologiesList];
                  next[editingMegaPage.idx] = editingMegaPage.item;
                  setTechnologiesList(next);
                  setEditingMegaPage(null);
                  await postAdminAction('save_technologies', next, 'Technology 11-Section Blueprint saved!');
                }
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              Save 11-Section Page Blueprint
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
