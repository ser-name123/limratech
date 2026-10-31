import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { saveLead, inMemoryDb } from '@/lib/supabase';

const CMS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'cmsState.json');

async function persistCrmToDisk() {
  try {
    const raw = await fs.readFile(CMS_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    parsed.leads = inMemoryDb.leads;
    parsed.newsletter = inMemoryDb.newsletter;
    await fs.writeFile(CMS_FILE_PATH, JSON.stringify(parsed, null, 2), 'utf-8');
  } catch {
    // Non-fatal in serverless/read-only environments
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, service_needed, budget, message, source_page, website_honeypot } = body;

    // Anti-spam honeypot protection
    if (website_honeypot) {
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your inquiry has been submitted successfully.',
      });
    }

    const cleanName = String(full_name || '').trim();
    const cleanEmail = String(email || '').trim().toLowerCase();

    if (!cleanName || !cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid full name and email address.' },
        { status: 400 }
      );
    }

    const result = await saveLead({
      full_name,
      email,
      phone: phone || '',
      service_needed: service_needed || 'General Inquiry',
      budget: budget || 'Flexible',
      message: message || '',
      source_page: source_page || 'website',
    });

    await persistCrmToDisk();

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been submitted successfully.',
      data: result.data,
      source: result.source,
    });
  } catch (error: any) {
    console.error('Error handling lead submission:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
