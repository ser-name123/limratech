import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// This module is imported only by server-side route handlers (never by a
// client component), so it is safe to use the service_role key here. It is the
// recommended key for trusted server-side writes/reads and bypasses RLS, so
// form inserts work without depending on public-insert RLS policies.
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseKey = supabaseServiceKey || supabaseAnonKey;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseKey &&
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  !supabaseUrl.includes('your-project-id')
);

// Fallback in-memory storage for development when Supabase credentials aren't set yet
export const inMemoryDb = {
  leads: [
    {
      id: 'lead-101',
      created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
      full_name: 'Vikramaditya Singhania',
      email: 'vikram@aurorarealty.in',
      phone: '+91 98201 44510',
      service_needed: 'Lead Generation & Real Estate Microsite',
      budget: '₹1,50,000 - ₹3,00,000',
      message: 'Looking for high-intent Meta & Google lead generation campaigns plus a Next.js project microsite for our luxury residential launch in Gurgaon.',
      source_page: '/industries/real-estate-construction',
      status: 'new',
      priority: 'High',
    },
    {
      id: 'lead-102',
      created_at: new Date(Date.now() - 1000 * 60 * 210).toISOString(),
      full_name: 'Dr. Meenakshi Iyer',
      email: 'director@apexmedicare.com',
      phone: '+91 98112 77890',
      service_needed: 'Website Development & Local GMB SEO',
      budget: '₹80,000 - ₹1,50,000',
      message: 'Need a multi-specialty hospital website with online doctor appointment booking and Google Map 3-Pack SEO across 3 branches.',
      source_page: '/industries/healthcare-hospitals-clinics',
      status: 'contacted',
      priority: 'High',
    },
    {
      id: 'lead-103',
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString(),
      full_name: 'Rohan Deshmukh',
      email: 'rohan@velvetveda.co',
      phone: '+91 97654 32109',
      service_needed: 'Shopify Plus Storefront & D2C Performance Ads',
      budget: '₹2,00,000+',
      message: 'Want to migrate our D2C skincare store to custom Shopify OS 2.0 with Razorpay Magic Checkout and scale Meta ROAS.',
      source_page: '/technologies/shopify-ecommerce',
      status: 'qualified',
      priority: 'High',
    },
    {
      id: 'lead-104',
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString(),
      full_name: 'Sandeep Kulkarni',
      email: 'skulkarni@kulkarniengg.com',
      phone: '+91 94220 11982',
      service_needed: 'Custom ERP Software & Export SEO',
      budget: '₹3,00,000+',
      message: 'Require a custom Laravel + PostgreSQL inventory & dealer portal along with international B2B export SEO.',
      source_page: '/software-developers-india',
      status: 'proposal',
      priority: 'Medium',
    },
    {
      id: 'lead-105',
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 52).toISOString(),
      full_name: 'Ananya Chatterjee',
      email: 'ananya@edunextacademy.in',
      phone: '+91 99031 55421',
      service_needed: 'Android & iOS LMS Mobile App',
      budget: '₹2,50,000 - ₹4,00,000',
      message: 'We need a Flutter Android & iOS mobile app for live coaching classes, mock tests, and automated fee collection.',
      source_page: '/mobile-app-developer-india',
      status: 'won',
      priority: 'High',
    },
  ] as any[],
  contacts: [] as any[],
  newsletter: [
    {
      id: 'sub-1',
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
      email: 'founder@fintechpulse.in',
      is_active: true,
    },
    {
      id: 'sub-2',
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
      email: 'marketing@urbanthreads.co.in',
      is_active: true,
    },
  ] as any[],
};

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseKey!, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  : null;

/**
 * Serverless / Client helper to insert a Lead
 */
export async function saveLead(leadData: any) {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('leads').insert([leadData]).select();
      if (error) throw error;
      return { success: true, data, source: 'supabase' };
    } catch (err) {
      // DB unreachable or table missing — never fail the form; fall back below.
      console.warn('Supabase lead insert failed, using fallback store:', err);
    }
  }
  // Fallback in-memory store (also used until Supabase tables exist)
  const simulatedLead = {
    id: `lead-${Date.now()}`,
    created_at: new Date().toISOString(),
    ...leadData,
    status: 'new',
    priority: 'High',
  };
  inMemoryDb.leads.unshift(simulatedLead);
  return { success: true, data: [simulatedLead], source: 'fallback-store' };
}

/**
 * Serverless / Client helper to insert a Contact Inquiry
 */
export async function saveContact(contactData: any) {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('contacts').insert([contactData]).select();
      if (error) throw error;
      // Mirror into the unified CRM leads pipeline so contact inquiries are
      // visible and manageable in the admin alongside service leads.
      try {
        await supabase.from('leads').insert([{
          full_name: contactData.name || contactData.full_name || 'Website Visitor',
          email: contactData.email || '',
          phone: contactData.phone || '',
          service_needed: contactData.subject || 'Contact Page Inquiry',
          budget: 'Discuss on Call',
          message: contactData.message || '',
          source_page: '/contact-us',
          status: 'new',
          priority: 'High',
        }]);
      } catch (mirrorErr) {
        console.warn('Contact→leads mirror skipped:', mirrorErr);
      }
      return { success: true, data, source: 'supabase' };
    } catch (err) {
      console.warn('Supabase contact insert failed, using fallback store:', err);
    }
  }
  {
    const simulatedContact = {
      id: `contact-${Date.now()}`,
      created_at: new Date().toISOString(),
      ...contactData,
      status: 'new',
      priority: 'High',
    };
    inMemoryDb.contacts.unshift(simulatedContact);
    // Also mirror into unified leads array so Admin CRM shows all inquiries in one place
    inMemoryDb.leads.unshift({
      id: simulatedContact.id,
      created_at: simulatedContact.created_at,
      full_name: contactData.name || contactData.full_name || 'Website Visitor',
      email: contactData.email || '',
      phone: contactData.phone || '',
      service_needed: contactData.subject || contactData.service_needed || 'Contact Page Inquiry',
      budget: contactData.budget || 'Discuss on Call',
      message: contactData.message || '',
      source_page: '/contact-us',
      status: 'new',
      priority: 'High',
    });
    console.log('[Dev Mode] Contact inquiry saved to fallback store:', simulatedContact);
    return { success: true, data: [simulatedContact], source: 'fallback-dev-mode' };
  }
}

/**
 * Serverless / Client helper to subscribe to newsletter
 */
export async function saveNewsletterSubscriber(email: string) {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, is_active: true }])
        .select();
      if (error) {
        if (error.code === '23505') {
          return { success: true, message: 'Already subscribed!', source: 'supabase' };
        }
        throw error;
      }
      return { success: true, data, source: 'supabase' };
    } catch (err) {
      console.warn('Supabase newsletter insert failed, using fallback store:', err);
    }
  }
  {
    const subscriber = {
      id: `sub-${Date.now()}`,
      created_at: new Date().toISOString(),
      email,
      is_active: true,
    };
    inMemoryDb.newsletter.unshift(subscriber);
    return { success: true, data: [subscriber], source: 'fallback-store' };
  }
}

/* ------------------------------------------------------------------ *
 * Admin CRM database helpers (server-side only).
 * Each returns null/false when Supabase is unavailable or errors, so
 * the admin route can fall back to the in-memory store and never fail.
 * ------------------------------------------------------------------ */

export async function dbListLeads(): Promise<any[] | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.warn('dbListLeads failed:', error.message);
    return null;
  }
  return data || [];
}

export async function dbListNewsletter(): Promise<any[] | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.warn('dbListNewsletter failed:', error.message);
    return null;
  }
  return data || [];
}

export async function dbCreateLead(fields: any): Promise<any | null> {
  if (!supabase) return null;
  const { data, error } = await supabase.from('leads').insert([fields]).select();
  if (error) {
    console.warn('dbCreateLead failed:', error.message);
    return null;
  }
  return data?.[0] || null;
}

export async function dbUpdateLead(id: string, fields: any): Promise<any | null> {
  if (!supabase) return null;
  const { data, error } = await supabase.from('leads').update(fields).eq('id', id).select();
  if (error) {
    console.warn('dbUpdateLead failed:', error.message);
    return null;
  }
  return data?.[0] || null;
}

export async function dbDeleteLead(id: string): Promise<boolean> {
  if (!supabase) return false;
  const { error } = await supabase.from('leads').delete().eq('id', id);
  if (error) {
    console.warn('dbDeleteLead failed:', error.message);
    return false;
  }
  return true;
}

export async function dbAddSubscriber(email: string): Promise<any | 'duplicate' | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email, is_active: true }])
    .select();
  if (error) {
    if (error.code === '23505') return 'duplicate';
    console.warn('dbAddSubscriber failed:', error.message);
    return null;
  }
  return data?.[0] || null;
}

export async function dbDeleteSubscriber(id: string): Promise<boolean> {
  if (!supabase) return false;
  const { error } = await supabase.from('newsletter_subscribers').delete().eq('id', id);
  if (error) {
    console.warn('dbDeleteSubscriber failed:', error.message);
    return false;
  }
  return true;
}

/* ------------------------------------------------------------------ *
 * CMS content snapshot (single JSON row in the `cms_state` table).
 * This is the primary, serverless-safe store for all editable website
 * content (header, footer, services, blogs, etc.).
 * ------------------------------------------------------------------ */

const CMS_ROW_ID = 'singleton';

export async function dbReadCms(): Promise<any | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('cms_state')
    .select('data')
    .eq('id', CMS_ROW_ID)
    .maybeSingle();
  if (error) {
    console.warn('dbReadCms failed:', error.message);
    return null;
  }
  return data?.data ?? null;
}

export async function dbWriteCms(snapshot: any): Promise<boolean> {
  if (!supabase) return false;
  const { error } = await supabase
    .from('cms_state')
    .upsert({ id: CMS_ROW_ID, data: snapshot, updated_at: new Date().toISOString() });
  if (error) {
    console.warn('dbWriteCms failed:', error.message);
    return false;
  }
  return true;
}

/* ------------------------------------------------------------------ *
 * Admin password (hashed) — stored server-side only in `admin_auth`.
 * Until set, login falls back to the ADMIN_PASSWORD env variable.
 * ------------------------------------------------------------------ */

export interface AdminAuthRow {
  username: string | null;
  passwordHash: string | null;
}

/** Read the stored admin login email (username) + password hash, if set. */
export async function dbGetAdminAuth(): Promise<AdminAuthRow> {
  if (!supabase) return { username: null, passwordHash: null };
  const { data, error } = await supabase
    .from('admin_auth')
    .select('username, password_hash')
    .eq('id', 'singleton')
    .maybeSingle();
  if (error) {
    console.warn('dbGetAdminAuth failed:', error.message);
    return { username: null, passwordHash: null };
  }
  return { username: data?.username || null, passwordHash: data?.password_hash || null };
}

/** Back-compat: just the password hash. */
export async function dbGetAdminPasswordHash(): Promise<string | null> {
  return (await dbGetAdminAuth()).passwordHash;
}

/** Update the stored admin username and/or password hash. */
export async function dbSetAdminAuth(fields: { username?: string; passwordHash?: string }): Promise<boolean> {
  if (!supabase) return false;
  const row: any = { id: 'singleton', updated_at: new Date().toISOString() };
  if (typeof fields.username === 'string') row.username = fields.username;
  if (typeof fields.passwordHash === 'string') row.password_hash = fields.passwordHash;
  const { error } = await supabase.from('admin_auth').upsert(row);
  if (error) {
    console.warn('dbSetAdminAuth failed:', error.message);
    return false;
  }
  return true;
}
