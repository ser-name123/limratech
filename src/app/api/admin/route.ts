import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs/promises';
import path from 'path';
import {
  inMemoryDb,
  supabase,
  isSupabaseConfigured,
  dbListLeads,
  dbListNewsletter,
  dbCreateLead,
  dbUpdateLead,
  dbDeleteLead,
  dbAddSubscriber,
  dbDeleteSubscriber,
  dbReadCms,
  dbWriteCms,
} from '@/lib/supabase';
import { initialCmsSnapshot } from '@/data/defaultCmsConfig';
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/adminAuth';

const CMS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'cmsState.json');

/** True when the request carries a valid admin session cookie. */
async function isAdminRequest(): Promise<boolean> {
  const cookieStore = await cookies();
  return Boolean(verifySessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value));
}

// In-memory singleton fallback if filesystem is read-only (e.g., serverless edge)
let memoryCmsState: typeof initialCmsSnapshot = structuredClone(initialCmsSnapshot);

async function readCmsState(): Promise<typeof initialCmsSnapshot> {
  // 1) Primary source: the cms_state row in Supabase (serverless-safe).
  const fromDb = await dbReadCms();
  if (fromDb) {
    memoryCmsState = { ...initialCmsSnapshot, ...fromDb };
    return memoryCmsState;
  }
  // 2) Fallback: local file (useful for local dev / before first DB write).
  try {
    const raw = await fs.readFile(CMS_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    memoryCmsState = { ...initialCmsSnapshot, ...parsed };
    return memoryCmsState;
  } catch {
    // 3) Last resort: the in-memory default snapshot.
    return memoryCmsState;
  }
}

async function writeCmsState(nextState: typeof initialCmsSnapshot) {
  memoryCmsState = nextState;
  // Primary: persist the CMS content to the database.
  await dbWriteCms(nextState);
  // Best-effort local file backup (ignored on read-only/serverless filesystems).
  try {
    await fs.writeFile(CMS_FILE_PATH, JSON.stringify(nextState, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not persist cmsState.json to disk (using DB + memory):', err);
  }
}

export async function GET() {
  try {
    const cms = await readCmsState();

    // The public website reads this endpoint for live CMS content (header,
    // footer, services, etc.), so `cms` stays public. Leads and newsletter
    // subscribers are PII and are only returned to an authenticated admin.
    const authed = await isAdminRequest();
    if (!authed) {
      return NextResponse.json({
        success: true,
        mode: isSupabaseConfigured ? 'supabase-cloud' : 'live-cms-engine',
        authenticated: false,
        leads: [],
        newsletter: [],
        cms,
      });
    }

    // Prefer the live database; fall back to the in-memory store if it is
    // unavailable so the admin never shows an empty/broken screen.
    const leads = (await dbListLeads()) ?? inMemoryDb.leads;
    const newsletter = (await dbListNewsletter()) ?? inMemoryDb.newsletter;

    return NextResponse.json({
      success: true,
      mode: isSupabaseConfigured ? 'supabase-cloud' : 'live-cms-engine',
      authenticated: true,
      leads,
      newsletter,
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
    // All mutations require a valid admin session.
    if (!(await isAdminRequest())) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Please sign in to the admin console.' },
        { status: 401 }
      );
    }

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
      const { id, status, priority, internal_notes, full_name, email, phone, service_needed, budget, message, source_page } = payload;
      const fields: any = { updated_at: new Date().toISOString() };
      if (status !== undefined) fields.status = status;
      if (priority !== undefined) fields.priority = priority;
      if (internal_notes !== undefined) fields.internal_notes = internal_notes;
      if (full_name !== undefined) fields.full_name = full_name;
      if (email !== undefined) fields.email = email;
      if (phone !== undefined) fields.phone = phone;
      if (service_needed !== undefined) fields.service_needed = service_needed;
      if (budget !== undefined) fields.budget = budget;
      if (message !== undefined) fields.message = message;
      if (source_page !== undefined) fields.source_page = source_page;

      if (supabase) {
        await dbUpdateLead(id, fields);
      } else {
        const target = inMemoryDb.leads.find((l) => l.id === id);
        if (target) Object.assign(target, fields);
      }
      addAuditLog(`Updated Lead ${id} in CRM Pipeline`);
      await writeCmsState(cms);
      const leads = (await dbListLeads()) ?? inMemoryDb.leads;
      return NextResponse.json({ success: true, leads, cms });
    }

    if (action === 'delete_lead') {
      const { id } = payload;
      if (supabase) {
        await dbDeleteLead(id);
      }
      inMemoryDb.leads = inMemoryDb.leads.filter((l) => l.id !== id);
      addAuditLog(`Deleted Lead ${id} from CRM`);
      await writeCmsState(cms);
      const leads = (await dbListLeads()) ?? inMemoryDb.leads;
      return NextResponse.json({ success: true, leads, cms });
    }

    if (action === 'create_lead') {
      const fields = {
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
      let newLead: any = null;
      if (supabase) {
        newLead = await dbCreateLead(fields);
      }
      if (!newLead) {
        newLead = { id: `lead-${Date.now()}`, created_at: new Date().toISOString(), ...fields };
        inMemoryDb.leads.unshift(newLead);
      }
      addAuditLog(`Created manual CRM Lead: ${newLead.full_name}`);
      await writeCmsState(cms);
      const leads = (await dbListLeads()) ?? inMemoryDb.leads;
      return NextResponse.json({ success: true, lead: newLead, leads, cms });
    }

    if (action === 'delete_subscriber') {
      const { id } = payload;
      if (supabase) {
        await dbDeleteSubscriber(id);
      }
      inMemoryDb.newsletter = inMemoryDb.newsletter.filter((s) => s.id !== id);
      addAuditLog(`Removed newsletter subscriber ${id}`);
      await writeCmsState(cms);
      const newsletter = (await dbListNewsletter()) ?? inMemoryDb.newsletter;
      return NextResponse.json({ success: true, newsletter, cms });
    }

    if (action === 'add_subscriber') {
      const email = String(payload?.email || '').trim().toLowerCase();
      if (email) {
        let added: any = null;
        if (supabase) {
          added = await dbAddSubscriber(email);
        }
        if (!added) {
          inMemoryDb.newsletter.unshift({
            id: `sub-${Date.now()}`,
            created_at: new Date().toISOString(),
            email,
            is_active: true,
          });
        }
        addAuditLog(`Added newsletter subscriber: ${email}`);
        await writeCmsState(cms);
      }
      const newsletter = (await dbListNewsletter()) ?? inMemoryDb.newsletter;
      return NextResponse.json({ success: true, newsletter, cms });
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

    if (action === 'save_home_sections') {
      (cms as any).homeSections = payload;
      addAuditLog('Updated Homepage Sections (Pillars, Comparison & Process content)');
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_page_sections') {
      (cms as any).pageSections = payload;
      addAuditLog('Updated Page Content (About, Services & other page sections)');
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

    if (action === 'save_page_seo_registry') {
      cms.pageSeoRegistry = payload;
      addAuditLog(`Updated Page-by-Page & Service SEO Registry (${payload.length} routes)`);
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

    if (action === 'save_careers') {
      cms.careers = payload;
      addAuditLog(`Updated Careers & Job Openings (${payload.length} positions)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_media') {
      cms.mediaAssets = payload;
      addAuditLog(`Updated Media & Brand Assets Library (${payload.length} assets)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_client_brands') {
      cms.clientBrands = payload;
      addAuditLog(`Updated Verified Client Brands (${payload.length} brands)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_leadership_team') {
      cms.leadershipTeam = payload;
      addAuditLog(`Updated Agency Leadership & Engineering Team (${payload.length} members)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_milestones') {
      cms.milestones = payload;
      addAuditLog(`Updated Company Timeline Milestones (${payload.length} milestones)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'save_pricing_packages') {
      cms.pricingPackages = payload;
      addAuditLog(`Updated Service Pricing & Retainer Packages (${payload.length} tiers)`);
      await writeCmsState(cms);
      return NextResponse.json({ success: true, cms });
    }

    if (action === 'import_cms_backup') {
      const merged = { ...structuredClone(initialCmsSnapshot), ...payload };
      addAuditLog('Restored Full CMS Snapshot from JSON Backup');
      await writeCmsState(merged);
      return NextResponse.json({ success: true, cms: merged });
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
