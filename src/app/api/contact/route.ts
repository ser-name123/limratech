import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { saveContact, inMemoryDb } from '@/lib/supabase';

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
    const { name, email, phone, subject, message, website_honeypot } = body;

    // Anti-spam honeypot protection
    if (website_honeypot) {
      return NextResponse.json({
        success: true,
        message: 'Thank you! We will get in touch with you shortly.',
      });
    }

    const cleanName = String(name || '').trim();
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanMsg = String(message || '').trim();

    if (!cleanName || !cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) || !cleanMsg) {
      return NextResponse.json(
        { error: 'Please provide a valid name, email address, and project message.' },
        { status: 400 }
      );
    }

    const result = await saveContact({
      name,
      email,
      phone: phone || '',
      subject: subject || 'General Contact Inquiry',
      message,
    });

    await persistCrmToDisk();

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will get in touch with you shortly.',
      data: result.data,
      source: result.source,
    });
  } catch (error: any) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
