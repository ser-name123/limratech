import { NextResponse } from 'next/server';
import { inMemoryDb, supabase, isSupabaseConfigured } from '@/lib/supabase';
import {
  servicesData,
  caseStudiesData,
  blogPostsData,
  testimonialsData,
  companyInfo,
} from '@/data/mockData';
import { industriesPagesData, technologiesPagesData } from '@/data/megaMenuData';

export async function GET() {
  try {
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
      mode: isSupabaseConfigured ? 'supabase-cloud' : 'hybrid-live-memory',
      leads,
      newsletter: inMemoryDb.newsletter,
      services: servicesData,
      industries: industriesPagesData,
      technologies: technologiesPagesData,
      caseStudies: caseStudiesData,
      blogs: blogPostsData,
      testimonials: testimonialsData,
      companyInfo,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to load admin telemetry' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, payload } = body;

    if (action === 'update_lead_status') {
      const { id, status } = payload;
      const target = inMemoryDb.leads.find((l) => l.id === id);
      if (target) {
        target.status = status;
      }
      return NextResponse.json({ success: true, leads: inMemoryDb.leads });
    }

    if (action === 'delete_lead') {
      const { id } = payload;
      inMemoryDb.leads = inMemoryDb.leads.filter((l) => l.id !== id);
      return NextResponse.json({ success: true, leads: inMemoryDb.leads });
    }

    if (action === 'create_lead') {
      const newLead = {
        id: `lead-${Date.now()}`,
        created_at: new Date().toISOString(),
        full_name: payload.full_name,
        email: payload.email,
        phone: payload.phone || '',
        service_needed: payload.service_needed || 'Website Development',
        budget: payload.budget || '₹50,000 - ₹1,50,000',
        message: payload.message || '',
        source_page: payload.source_page || 'Admin Manual Entry',
        status: payload.status || 'new',
        priority: payload.priority || 'High',
      };
      inMemoryDb.leads.unshift(newLead);
      return NextResponse.json({ success: true, lead: newLead, leads: inMemoryDb.leads });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Admin mutation error' },
      { status: 500 }
    );
  }
}
