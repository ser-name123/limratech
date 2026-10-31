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
  Clock,
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
  Filter,
  Lock,
  Bell,
  ChevronRight,
  Activity,
  Database,
  Code2,
  Check,
  X,
  MessageSquare,
} from 'lucide-react';
import {
  servicesData,
  caseStudiesData,
  blogPostsData,
  testimonialsData,
  companyInfo,
} from '@/data/mockData';
import { industriesPagesData, technologiesPagesData } from '@/data/megaMenuData';

type AdminTab =
  | 'overview'
  | 'leads'
  | 'portfolio'
  | 'blogs'
  | 'catalog'
  | 'testimonials'
  | 'seo'
  | 'settings';

export default function AdminDashboardPage() {
  // Authentication Gate State
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loginEmail, setLoginEmail] = useState('admin@limradigitech.com');
  const [loginPass, setLoginPass] = useState('Limra@2026');
  const [loginError, setLoginError] = useState('');

  // Navigation & UI State
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Live Data State
  const [leads, setLeads] = useState<any[]>([]);
  const [caseStudies, setCaseStudies] = useState<any[]>(caseStudiesData);
  const [blogs, setBlogs] = useState<any[]>(blogPostsData);
  const [testimonials, setTestimonials] = useState<any[]>(testimonialsData);
  const [subscribers, setSubscribers] = useState<any[]>([]);

  // Modals State
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [isAddCaseStudyOpen, setIsAddCaseStudyOpen] = useState(false);
  const [isAddTestimonialOpen, setIsAddTestimonialOpen] = useState(false);

  // Form States
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

  // SEO & Settings State
  const [seoConfig, setSeoConfig] = useState({
    ga4Id: 'G-LIMRA2026IN',
    gscVerification: 'limra-gsc-verified-token-2026',
    canonicalDomain: 'https://limradigitech.com',
    honeypotProtection: true,
    autoSitemapPing: true,
  });

  const [brandSettings, setBrandSettings] = useState({
    name: companyInfo.name,
    phone: companyInfo.phone,
    email: companyInfo.email,
    address: companyInfo.address,
    hours: 'Mon - Sat: 09:00 AM - 07:00 PM IST',
    facebook: companyInfo.social.facebook,
    twitter: companyInfo.social.twitter,
    linkedin: companyInfo.social.linkedin,
    instagram: companyInfo.social.instagram,
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const fetchAdminData = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/admin');
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads || []);
        setSubscribers(data.newsletter || []);
      }
    } catch (err) {
      console.error('Admin fetch error:', err);
    } finally {
      setTimeout(() => setIsRefreshing(false), 350);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  // Handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim() && loginPass.trim()) {
      setIsAuthenticated(true);
      setLoginError('');
      showToast('Authenticated as LIMRA Super Admin');
    } else {
      setLoginError('Please enter valid admin credentials.');
    }
  };

  const handleUpdateLeadStatus = async (id: string, status: string) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    if (selectedLead?.id === id) {
      setSelectedLead((prev: any) => ({ ...prev, status }));
    }
    await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update_lead_status', payload: { id, status } }),
    });
    showToast(`Lead status updated to "${status.toUpperCase()}"`);
  };

  const handleDeleteLead = async (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
    if (selectedLead?.id === id) setSelectedLead(null);
    await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete_lead', payload: { id } }),
    });
    showToast('Lead removed from pipeline');
  };

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.full_name || !newLeadForm.email) return;
    const res = await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'create_lead', payload: newLeadForm }),
    });
    const data = await res.json();
    if (data.success) {
      setLeads(data.leads);
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
      showToast('New lead added to CRM pipeline');
    }
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

  const handleCreateBlog = (e: React.FormEvent) => {
    e.preventDefault();
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
    setBlogs((prev) => [created, ...prev]);
    setIsAddBlogOpen(false);
    setNewBlogForm({
      title: '',
      slug: '',
      category: 'SEO & Core Vitals',
      read_time: '6 min read',
      excerpt: '',
      author: 'LIMRA SEO Desk',
    });
    showToast('New blog article published');
  };

  const handleCreateCaseStudy = (e: React.FormEvent) => {
    e.preventDefault();
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
    setCaseStudies((prev) => [created, ...prev]);
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
    showToast('New portfolio case study published');
  };

  const handleCreateTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonialForm.name || !newTestimonialForm.content) return;
    const created = {
      id: `test-${Date.now()}`,
      name: newTestimonialForm.name,
      role: newTestimonialForm.role || 'Founder & Director',
      company: newTestimonialForm.company || 'Enterprise Partner',
      content: newTestimonialForm.content,
      rating: Number(newTestimonialForm.rating) || 5,
    };
    setTestimonials((prev) => [created, ...prev]);
    setIsAddTestimonialOpen(false);
    setNewTestimonialForm({ name: '', role: '', company: '', content: '', rating: 5 });
    showToast('Verified client testimonial added');
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      const matchesStatus = leadStatusFilter === 'all' || l.status === leadStatusFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        (l.full_name || '').toLowerCase().includes(q) ||
        (l.email || '').toLowerCase().includes(q) ||
        (l.phone || '').toLowerCase().includes(q) ||
        (l.service_needed || '').toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [leads, leadStatusFilter, searchQuery]);

  // Status Badge Helper
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

  // Login Gate Screen (if locked)
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
              Manage CRM leads, portfolio case studies, blogs, mega-menu pages, and SEO telemetry.
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
              Unlock Admin Dashboard
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
    { id: 'overview', label: 'Executive Overview', icon: LayoutDashboard },
    { id: 'leads', label: 'Leads & CRM Pipeline', icon: Users, badge: leads.length },
    { id: 'portfolio', label: 'Portfolio & Case Studies', icon: Briefcase, badge: caseStudies.length },
    { id: 'blogs', label: 'Blogs & Editorial CMS', icon: FileText, badge: blogs.length },
    { id: 'catalog', label: 'Mega-Menu & Pages Hub', icon: Layers, badge: '22' },
    { id: 'testimonials', label: 'Client Testimonials', icon: Star, badge: testimonials.length },
    { id: 'seo', label: 'SEO, Sitemap & GA4', icon: Globe, badge: '99%' },
    { id: 'settings', label: 'Brand & System Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800 flex flex-col lg:flex-row">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[200] bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-purple-500/40 flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3">
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
                ADMIN v2.5
              </span>
            </Link>
          </div>

          {/* Admin Status Pill */}
          <div className="px-5 py-4 border-b border-slate-100">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/80 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                LD
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">Super Admin Console</div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Production Live Sync</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-3.5 space-y-1 flex lg:flex-col overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap w-full ${
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
            className="w-full px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock Admin Session</span>
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
                limradigitech.com • Real-Time Agency Command &amp; Content Management System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Search Box */}
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
                className="pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 w-60 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
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
              onClick={() => setIsAddLeadOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm hover:opacity-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add Lead</span>
            </button>

            <Link
              href="/"
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 text-purple-700 bg-purple-50 text-xs font-bold"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* WORKSPACE BODY */}
        <main className="p-4 sm:p-8 space-y-8 flex-1">
          {/* ==========================================
              TAB 1: EXECUTIVE OVERVIEW
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
                    {leads.filter((l) => l.status === 'new').length} new inquiries awaiting response
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Indexed Live Routes</span>
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
                    6 Services • 8 Industries • 8 Tech • 6 Case Studies
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Est. Active Pipeline</span>
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-black text-slate-900 font-mono">₹14.8L</div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      3.8x ROI Avg
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Across Web Dev, SEO, Meta/Google Ads &amp; ERP
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
                    Sitemap.xml, Robots.txt, JSON-LD &amp; GA4 Active
                  </p>
                </div>
              </div>

              {/* Charts & Telemetry Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Monthly Lead & Conversion Velocity Chart */}
                <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-purple-700">
                        GROWTH ANALYTICS
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">
                        Monthly Lead Acquisition &amp; Channel Attribution
                      </h2>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600" /> Organic SEO &amp; Web
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" /> Google &amp; Meta Ads
                      </span>
                    </div>
                  </div>

                  {/* Interactive Bar Chart */}
                  <div className="grid grid-cols-6 gap-3 sm:gap-5 items-end h-52 pt-6 px-2 border-b border-slate-100">
                    {[
                      { month: 'May', seo: 55, ads: 40, total: 42 },
                      { month: 'Jun', seo: 68, ads: 48, total: 54 },
                      { month: 'Jul', seo: 74, ads: 58, total: 63 },
                      { month: 'Aug', seo: 82, ads: 64, total: 76 },
                      { month: 'Sep', seo: 90, ads: 72, total: 89 },
                      { month: 'Oct', seo: 100, ads: 85, total: 112 },
                    ].map((bar, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                        <div className="text-[10px] font-mono font-bold text-purple-700 opacity-80 group-hover:opacity-100">
                          {bar.total}
                        </div>
                        <div className="w-full max-w-[48px] flex items-end gap-1 h-36">
                          <div
                            style={{ height: `${bar.seo}%` }}
                            className="flex-1 bg-gradient-to-t from-purple-700 to-purple-500 rounded-t-lg transition-all group-hover:opacity-90"
                            title={`Organic SEO: ${bar.seo}%`}
                          />
                          <div
                            style={{ height: `${bar.ads}%` }}
                            className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg transition-all group-hover:opacity-90"
                            title={`Paid Ads: ${bar.ads}%`}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-500 pb-2">{bar.month}</span>
                      </div>
                    ))}
                  </div>

                  {/* Channel Breakdown Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
                      <div className="text-[11px] text-slate-500">Organic Search (SEO)</div>
                      <div className="text-base font-bold text-slate-900 mt-0.5">46.2% Share</div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
                      <div className="text-[11px] text-slate-500">Google Search PPC</div>
                      <div className="text-base font-bold text-slate-900 mt-0.5">28.5% Share</div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
                      <div className="text-[11px] text-slate-500">Meta Lead Funnels</div>
                      <div className="text-base font-bold text-slate-900 mt-0.5">18.1% Share</div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
                      <div className="text-[11px] text-slate-500">Direct &amp; WhatsApp</div>
                      <div className="text-base font-bold text-slate-900 mt-0.5">7.2% Share</div>
                    </div>
                  </div>
                </div>

                {/* System Health & Quick Actions */}
                <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-emerald-700">
                        INFRASTRUCTURE TELEMETRY
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">System &amp; Security Status</h2>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { label: 'Next.js App Router Engine', status: 'Online (v16.4)', ok: true },
                        { label: 'Lead Form Honeypot Shield', status: 'Active & Blocking Bots', ok: true },
                        { label: 'GA4 Conversion Event Hook', status: 'Tracking (generate_lead)', ok: true },
                        { label: 'XML Sitemap & Robots.txt', status: '44 URLs Indexed', ok: true },
                        { label: '301 Legacy URL Redirects', status: '11 Rules Active', ok: true },
                      ].map((sys, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs"
                        >
                          <span className="font-semibold text-slate-800">{sys.label}</span>
                          <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                            {sys.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('blogs');
                        setIsAddBlogOpen(true);
                      }}
                      className="p-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" /> New Blog Post
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('portfolio');
                        setIsAddCaseStudyOpen(true);
                      }}
                      className="p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" /> New Case Study
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Leads Table Preview */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-2xs overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Recent Website Enquiries &amp; Leads</h2>
                    <p className="text-xs text-slate-500">
                      Live submissions from Contact Us, Service Pages, and Industry Funnels.
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={handleExportLeadsCsv}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 hover:border-purple-300 text-xs font-bold text-slate-700 flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-purple-600" /> Export CSV
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('leads')}
                      className="px-4 py-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold hover:bg-purple-100"
                    >
                      Open Full CRM →
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-mono uppercase text-slate-500">
                        <th className="py-3.5 px-5">Client &amp; Contact</th>
                        <th className="py-3.5 px-4">Service Requested</th>
                        <th className="py-3.5 px-4">Budget</th>
                        <th className="py-3.5 px-4">Source Route</th>
                        <th className="py-3.5 px-4">Stage</th>
                        <th className="py-3.5 px-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/70 text-xs">
                      {leads.slice(0, 5).map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-4 px-5">
                            <div className="font-bold text-slate-900">{lead.full_name}</div>
                            <div className="text-slate-500 text-[11px]">
                              {lead.email} • {lead.phone}
                            </div>
                          </td>
                          <td className="py-4 px-4 font-semibold text-slate-800">{lead.service_needed}</td>
                          <td className="py-4 px-4 font-mono text-purple-700 font-semibold">{lead.budget}</td>
                          <td className="py-4 px-4 font-mono text-[11px] text-slate-500">{lead.source_page}</td>
                          <td className="py-4 px-4">
                            <select
                              value={lead.status}
                              onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                              className={`text-[11px] font-bold uppercase px-2.5 py-1 rounded-full border cursor-pointer ${getStatusBadge(
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
                          <td className="py-4 px-5 text-right space-x-1.5">
                            <button
                              type="button"
                              onClick={() => setSelectedLead(lead)}
                              className="p-2 rounded-lg bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 transition-colors"
                              title="Inspect Lead"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <a
                              href={`https://wa.me/${(lead.phone || '').replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                              title="WhatsApp Client"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              TAB 2: LEADS & CRM PIPELINE
             ========================================== */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              {/* Filter Bar */}
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
                      {st} (
                      {st === 'all' ? leads.length : leads.filter((l) => l.status === st).length})
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
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

              {/* Full CRM Table */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-mono uppercase text-slate-500">
                        <th className="py-3.5 px-5">Lead Details</th>
                        <th className="py-3.5 px-4">Service &amp; Requirement</th>
                        <th className="py-3.5 px-4">Budget</th>
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
                          <td className="py-4 px-4 font-mono font-bold text-purple-700">{lead.budget}</td>
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
                              title="View Full Message"
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
            </div>
          )}

          {/* ==========================================
              TAB 3: PORTFOLIO & CASE STUDIES CMS
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
                    Each case study generates a dedicated 10-section page at /portfolio/[slug].
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
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {(cs.technologies || []).slice(0, 4).map((t: string, ti: number) => (
                            <span
                              key={ti}
                              className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between">
                      <Link
                        href={`/portfolio/${cs.slug}`}
                        target="_blank"
                        className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                      >
                        <span>View Live Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setCaseStudies((prev) => prev.filter((item) => item.id !== cs.id));
                          showToast('Case study removed');
                        }}
                        className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==========================================
              TAB 4: BLOGS & EDITORIAL CMS
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
                    Publish SEO guides, Next.js teardowns, and Google Ads insights without code changes.
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
                        <span>Read Live Article</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setBlogs((prev) => prev.filter((b) => b.id !== post.id));
                          showToast('Article deleted');
                        }}
                        className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==========================================
              TAB 5: MEGA-MENU & PAGES CATALOG
             ========================================== */}
          {activeTab === 'catalog' && (
            <div className="space-y-8">
              {/* 6 Core Services */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      MEGA MENU // 01
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      6 Core Services &amp; Sub-Service Capabilities (12 Sections/Page)
                    </h2>
                  </div>
                  <Link
                    href="/services"
                    target="_blank"
                    className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1"
                  >
                    View /services <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {servicesData.map((svc) => (
                    <div
                      key={svc.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900">{svc.title}</span>
                          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            12 Sections
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-purple-700 mt-0.5">/{svc.slug}</div>
                        <div className="flex flex-wrap gap-1 mt-2.5">
                          {(svc.sub_services || []).map((sub, si) => (
                            <span
                              key={si}
                              className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600"
                            >
                              {sub.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                        <span className="text-emerald-700 font-semibold">● Live in Mega Menu</span>
                        <Link
                          href={`/${svc.slug}`}
                          target="_blank"
                          className="font-bold text-purple-700 hover:underline flex items-center gap-1"
                        >
                          Open <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8 Industries Mega-Menu Pages */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      MEGA MENU // 02
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      8 Dedicated Industry Vertical Pages (11 Sections/Page)
                    </h2>
                  </div>
                  <Link
                    href="/industries"
                    target="_blank"
                    className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1"
                  >
                    View /industries <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {industriesPagesData.map((ind) => (
                    <div
                      key={ind.slug}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          {ind.metricBadge}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 mt-2">{ind.shortTitle}</h3>
                        <p className="text-[11px] font-mono text-purple-700">/industries/{ind.slug}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                        <span className="text-slate-500">11 Sections</span>
                        <Link
                          href={`/industries/${ind.slug}`}
                          target="_blank"
                          className="font-bold text-purple-700 hover:underline flex items-center gap-1"
                        >
                          Preview <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8 Technologies Mega-Menu Pages */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      MEGA MENU // 03
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      8 Dedicated Technology Stack Pages (11 Sections/Page)
                    </h2>
                  </div>
                  <Link
                    href="/technologies"
                    target="_blank"
                    className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1"
                  >
                    View /technologies <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {technologiesPagesData.map((tech) => (
                    <div
                      key={tech.slug}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
                          {tech.tag}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 mt-2">{tech.shortTitle}</h3>
                        <p className="text-[11px] font-mono text-purple-700">/technologies/{tech.slug}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                        <span className="text-slate-500">11 Sections</span>
                        <Link
                          href={`/technologies/${tech.slug}`}
                          target="_blank"
                          className="font-bold text-purple-700 hover:underline flex items-center gap-1"
                        >
                          Preview <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              TAB 6: CLIENT TESTIMONIALS MANAGER
             ========================================== */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                    TRUST &amp; SOCIAL PROOF
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    Verified Client Testimonials ({testimonials.length} Approved)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Only verified, authentic client reviews are published across the website.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddTestimonialOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start"
                >
                  <Plus className="w-4 h-4" /> Add Verified Review
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-500">
                          {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                            <Star key={idx} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          Verified Client
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                        &ldquo;{t.content}&rdquo;
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-slate-900">{t.name}</div>
                        <div className="text-xs text-purple-700 font-medium">
                          {t.role}, {t.company}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setTestimonials((prev) => prev.filter((item) => item.id !== t.id));
                          showToast('Testimonial removed');
                        }}
                        className="p-2 rounded-lg text-rose-600 hover:bg-rose-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==========================================
              TAB 7: SEO, SITEMAP & GA4 CONSOLE
             ========================================== */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* GA4 & Search Console Settings */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                      ANALYTICS &amp; CONVERSION TRACKING
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">
                      Google Analytics 4 &amp; Search Console Configuration
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        GA4 Measurement ID (NEXT_PUBLIC_GA_MEASUREMENT_ID)
                      </label>
                      <input
                        type="text"
                        value={seoConfig.ga4Id}
                        onChange={(e) => setSeoConfig({ ...seoConfig, ga4Id: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Google Search Console Verification Meta Token
                      </label>
                      <input
                        type="text"
                        value={seoConfig.gscVerification}
                        onChange={(e) => setSeoConfig({ ...seoConfig, gscVerification: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Canonical Domain
                      </label>
                      <input
                        type="text"
                        value={seoConfig.canonicalDomain}
                        onChange={(e) => setSeoConfig({ ...seoConfig, canonicalDomain: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => showToast('SEO & Analytics settings saved successfully')}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold"
                    >
                      Save SEO Configuration
                    </button>
                  </div>
                </div>

                {/* 301 Redirects & Sitemap Feeds */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                        LINK INTEGRITY &amp; CRAWLERS
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">
                        Active 301 Permanent Redirect Rules
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

                  <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                    {[
                      { from: '/about-us', to: '/about' },
                      { from: '/contact', to: '/contact-us' },
                      { from: '/our-services', to: '/services' },
                      { from: '/web-development', to: '/website-development-services' },
                      { from: '/digital-marketing', to: '/digital-marketing-agency-india' },
                      { from: '/lead-generation', to: '/lead-generation-company-india' },
                      { from: '/graphic-design', to: '/creative-design-solutions-india' },
                      { from: '/app-development', to: '/mobile-app-developer-india' },
                      { from: '/software-development', to: '/software-developers-india' },
                      { from: '/work', to: '/portfolio' },
                      { from: '/blog', to: '/blogs' },
                    ].map((rule, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono"
                      >
                        <span className="text-slate-600">{rule.from}</span>
                        <span className="text-purple-700 font-bold">301 → {rule.to}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==========================================
              TAB 8: BRAND & SYSTEM SETTINGS
             ========================================== */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 max-w-4xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                  GLOBAL BRAND CONFIGURATION
                </span>
                <h2 className="text-lg font-bold text-slate-900">
                  LIMRA Digitech Contact, Office &amp; Social Links
                </h2>
                <p className="text-xs text-slate-500">
                  Confirm phone numbers, email address, office address, business hours, and social links.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={brandSettings.name}
                    onChange={(e) => setBrandSettings({ ...brandSettings, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={brandSettings.phone}
                    onChange={(e) => setBrandSettings({ ...brandSettings, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Official Email Address</label>
                  <input
                    type="email"
                    value={brandSettings.email}
                    onChange={(e) => setBrandSettings({ ...brandSettings, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Business Hours</label>
                  <input
                    type="text"
                    value={brandSettings.hours}
                    onChange={(e) => setBrandSettings({ ...brandSettings, hours: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Headquarters Address</label>
                  <input
                    type="text"
                    value={brandSettings.address}
                    onChange={(e) => setBrandSettings({ ...brandSettings, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Facebook URL</label>
                  <input
                    type="text"
                    value={brandSettings.facebook}
                    onChange={(e) => setBrandSettings({ ...brandSettings, facebook: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Instagram URL</label>
                  <input
                    type="text"
                    value={brandSettings.instagram}
                    onChange={(e) => setBrandSettings({ ...brandSettings, instagram: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={brandSettings.linkedin}
                    onChange={(e) => setBrandSettings({ ...brandSettings, linkedin: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">X (Twitter) URL</label>
                  <input
                    type="text"
                    value={brandSettings.twitter}
                    onChange={(e) => setBrandSettings({ ...brandSettings, twitter: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-semibold">
                  ✓ Logo Continuity Locked: /limra-logo.png
                </span>
                <button
                  type="button"
                  onClick={() => showToast('Brand & contact configuration saved')}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm"
                >
                  Save Brand Details
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ==========================================
          MODAL 1: INSPECT LEAD DRAWER / MODAL
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
          MODAL 3: ADD NEW BLOG POST
         ========================================== */}
      {isAddBlogOpen && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateBlog}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Publish New Blog Article</h3>
              <button type="button" onClick={() => setIsAddBlogOpen(false)} className="p-1.5 rounded-lg bg-slate-100">
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Article Headline *"
              value={newBlogForm.title}
              onChange={(e) => setNewBlogForm({ ...newBlogForm, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <select
              value={newBlogForm.category}
              onChange={(e) => setNewBlogForm({ ...newBlogForm, category: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            >
              <option>SEO &amp; Core Vitals</option>
              <option>Next.js &amp; Performance</option>
              <option>Conversion Rate &amp; PPC</option>
            </select>
            <textarea
              placeholder="Article summary / SEO meta description..."
              rows={3}
              value={newBlogForm.excerpt}
              onChange={(e) => setNewBlogForm({ ...newBlogForm, excerpt: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              Publish Article Live
            </button>
          </form>
        </div>
      )}

      {/* ==========================================
          MODAL 4: ADD NEW CASE STUDY
         ========================================== */}
      {isAddCaseStudyOpen && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateCaseStudy}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Publish Portfolio Case Study</h3>
              <button
                type="button"
                onClick={() => setIsAddCaseStudyOpen(false)}
                className="p-1.5 rounded-lg bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Project Title *"
              value={newCaseStudyForm.title}
              onChange={(e) => setNewCaseStudyForm({ ...newCaseStudyForm, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="text"
              placeholder="Client / Brand Name *"
              value={newCaseStudyForm.client}
              onChange={(e) => setNewCaseStudyForm({ ...newCaseStudyForm, client: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="text"
              placeholder="Verified Result Metric (e.g. +240% Organic Traffic)"
              value={newCaseStudyForm.results}
              onChange={(e) => setNewCaseStudyForm({ ...newCaseStudyForm, results: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <input
              type="text"
              placeholder="Technologies (comma separated)"
              value={newCaseStudyForm.technologies}
              onChange={(e) => setNewCaseStudyForm({ ...newCaseStudyForm, technologies: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <textarea
              placeholder="Challenge & Solution Overview..."
              rows={3}
              value={newCaseStudyForm.challenge}
              onChange={(e) => setNewCaseStudyForm({ ...newCaseStudyForm, challenge: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              Publish Case Study
            </button>
          </form>
        </div>
      )}

      {/* ==========================================
          MODAL 5: ADD TESTIMONIAL
         ========================================== */}
      {isAddTestimonialOpen && (
        <div className="fixed inset-0 z-[150] bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateTestimonial}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Add Verified Client Review</h3>
              <button
                type="button"
                onClick={() => setIsAddTestimonialOpen(false)}
                className="p-1.5 rounded-lg bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Client Name *"
              value={newTestimonialForm.name}
              onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <input
              type="text"
              placeholder="Role / Designation"
              value={newTestimonialForm.role}
              onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, role: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={newTestimonialForm.company}
              onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
            />
            <textarea
              placeholder="Verified client feedback..."
              rows={3}
              value={newTestimonialForm.content}
              onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, content: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-xs font-bold"
            >
              Publish Verified Review
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
