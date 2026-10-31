import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { inMemoryDb, supabase, isSupabaseConfigured } from '@/lib/supabase';
import { initialCmsSnapshot } from '@/data/defaultCmsConfig';

const CMS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'cmsState.json');

// In-memory singleton fallback if filesystem is read-only (e.g., serverless edge)
let memoryCmsState: typeof initialCmsSnapshot = structuredClone(initialCmsSnapshot);

async function readCmsState(): Promise<typeof initialCmsSnapshot> {
  try {
    const raw = await fs.readFile(CMS_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    memoryCmsState = { ...initialCmsSnapshot, ...parsed };
    return memoryCmsState;
  } catch {
    return memoryCmsState;
  }
}

async function writeCmsState(nextState: typeof initialCmsSnapshot) {
  memoryCmsState = nextState;
  try {
    await fs.writeFile(CMS_FILE_PATH, JSON.stringify(nextState, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not persist cmsState.json to disk, using memory store:', err);
  }
}

export async function GET() {
  try {
    const cms = await readCmsState();
    let leads = inMemoryDb.leads;

    if (supabase) {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        leads = data;
      }
    }

    return NextResponse.json({
      success: true,
      mode: isSupabaseConfigured ? 'supabase-cloud' : 'live-cms-engine',
      leads,
      newsletter: inMemoryDb.newsletter,
      cms,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to load admin CMS state' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, payload } = body;
    const cms = await readCmsState();

    const addAuditLog = (actionDesc: string) => {
      const entry = {
        id: `log-${Date.now()}`,
        action: actionDesc,
        actor: cms.adminProfile?.email || 'admin@limradigitech.com',
        timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) + ' Today',
        ip: '127.0.0.1 (Admin Console)',
      };
      cms.adminProfile.auditLogs = [entry, ...(cms.adminProfile.auditLogs || []).slice(0, 29)];
    };

    if (action === 'update_lead_status') {
      const { id, status } = payload;
      const target = inMemoryDb.leads.find((l) => l.id === id);
      if (target) target.status = status;
      addAuditLog(`Updated Lead ${id} status to ${String(status).toUpperCase()}`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, leads: inMemoryDb.leads, cms });
    }

    if (action === 'delete_lead') {
      const { id } = payload;
      inMemoryDb.leads = inMemoryDb.leads.filter((l) => l.id !== id);
      addAuditLog(`Deleted Lead ${id} from CRM`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, leads: inMemoryDb.leads, cms });
    }

    if (action === 'create_lead') {
      const newLead = {
        id: `lead-${Date.now()}`,
        created_at: new Date().toISOString(),
        full_name: payload.full_name,
        email: payload.email,
        phone: payload.phone || '',
        service_needed: payload.service_needed || 'Website Development',
        budget: payload.budget || '₹80,000 - ₹1,50,000',
        message: payload.message || '',
        source_page: payload.source_page || 'Admin Manual Entry',
        status: payload.status || 'new',
        priority: payload.priority || 'High',
      };
      inMemoryDb.leads.unshift(newLead);
      addAuditLog(`Created manual CRM Lead: ${newLead.full_name}`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, lead: newLead, leads: inMemoryDb.leads, cms });
    }

    if (action === 'delete_subscriber') {
      const { id } = payload;
      inMemoryDb.newsletter = inMemoryDb.newsletter.filter((s) => s.id !== id);
      addAuditLog(`Removed newsletter subscriber ${id}`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, newsletter: inMemoryDb.newsletter, cms });
    }

    if (action === 'save_header') {
      cms.header = payload;
      addAuditLog('Updated Website Header, Top Bar & Mega Menu Configuration');
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_footer') {
      cms.footer = payload;
      addAuditLog('Updated Website Footer, Links, Newsletter & Social URLs');
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_hero') {
      cms.hero = payload;
      addAuditLog('Updated Homepage Hero Headline, CTAs & Counter Stats');
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_admin_profile') {
      cms.adminProfile = payload;
      addAuditLog(`Updated Admin Profile & Security Settings (${payload.fullName})`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_seo') {
      cms.seo = payload;
      addAuditLog('Updated Global SEO Meta, GA4 ID & 301 Redirect Rules');
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_services') {
      cms.services = payload;
      addAuditLog('Updated Core Services & Sub-Services Catalog');
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_industries') {
      cms.industries = payload;
      addAuditLog('Updated Industry Vertical Pages & Mega Menu');
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_technologies') {
      cms.technologies = payload;
      addAuditLog('Updated Technology Stack Pages & Mega Menu');
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_case_studies') {
      cms.caseStudies = payload;
      addAuditLog(`Updated Portfolio Case Studies (${payload.length} items)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_blogs') {
      cms.blogs = payload;
      addAuditLog(`Updated Blog & Editorial Articles (${payload.length} posts)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_testimonials') {
      cms.testimonials = payload;
      addAuditLog(`Updated Verified Client Testimonials (${payload.length} reviews)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_faqs') {
      cms.faqs = payload;
      addAuditLog(`Updated Website FAQs (${payload.length} questions)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'reset_cms_defaults') {
      const fresh = structuredClone(initialCmsSnapshot);
      await writeCmsState(fresh);
      return NextResponse.json({ success: true, cms: fresh });
    }

    return NextResponse.json({ success: true, cms });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Admin mutation error' },
      { status: 500 }
    );
  }
}
