import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
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
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

/**
 * Serverless / Client helper to insert a Lead
 */
export async function saveLead(leadData: any) {
  if (supabase) {
    const { data, error } = await supabase.from('leads').insert([leadData]).select();
    if (error) {
      console.error('Supabase error inserting lead:', error);
      throw error;
    }
    return { success: true, data, source: 'supabase' };
  } else {
    // Fallback in-memory / dev mode
    const simulatedLead = {
      id: `lead-${Date.now()}`,
      created_at: new Date().toISOString(),
      ...leadData,
      status: 'new',
      priority: 'High',
    };
    inMemoryDb.leads.unshift(simulatedLead);
    console.log('[Dev Mode] Lead saved to fallback store:', simulatedLead);
    return { success: true, data: [simulatedLead], source: 'fallback-dev-mode' };
  }
}

/**
 * Serverless / Client helper to insert a Contact Inquiry
 */
export async function saveContact(contactData: any) {
  if (supabase) {
    const { data, error } = await supabase.from('contacts').insert([contactData]).select();
    if (error) {
      console.error('Supabase error inserting contact inquiry:', error);
      throw error;
    }
    return { success: true, data, source: 'supabase' };
  } else {
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
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, is_active: true }])
      .select();
    if (error) {
      if (error.code === '23505') {
        return { success: true, message: 'Already subscribed!', source: 'supabase' };
      }
      console.error('Supabase error inserting newsletter subscriber:', error);
      throw error;
    }
    return { success: true, data, source: 'supabase' };
  } else {
    const subscriber = {
      id: `sub-${Date.now()}`,
      created_at: new Date().toISOString(),
      email,
      is_active: true,
    };
    inMemoryDb.newsletter.unshift(subscriber);
    console.log('[Dev Mode] Newsletter subscriber registered:', subscriber);
    return { success: true, data: [subscriber], source: 'fallback-dev-mode' };
  }
}
