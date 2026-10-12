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
const inMemoryDb = {
  leads: [] as any[],
  contacts: [] as any[],
  newsletter: [] as any[],
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
      id: `local-${Date.now()}`,
      created_at: new Date().toISOString(),
      ...leadData,
      status: 'new',
    };
    inMemoryDb.leads.push(simulatedLead);
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
      id: `local-${Date.now()}`,
      created_at: new Date().toISOString(),
      ...contactData,
      status: 'unread',
    };
    inMemoryDb.contacts.push(simulatedContact);
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
      // If already registered
      if (error.code === '23505') {
        return { success: true, message: 'Already subscribed!', source: 'supabase' };
      }
      console.error('Supabase error inserting newsletter subscriber:', error);
      throw error;
    }
    return { success: true, data, source: 'supabase' };
  } else {
    const subscriber = {
      id: `local-${Date.now()}`,
      created_at: new Date().toISOString(),
      email,
      is_active: true,
    };
    inMemoryDb.newsletter.push(subscriber);
    console.log('[Dev Mode] Newsletter subscriber registered:', subscriber);
    return { success: true, data: [subscriber], source: 'fallback-dev-mode' };
  }
}
