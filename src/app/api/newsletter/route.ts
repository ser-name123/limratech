import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { saveNewsletterSubscriber, inMemoryDb } from '@/lib/supabase';

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
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const result = await saveNewsletterSubscriber(email.trim().toLowerCase());
    await persistCrmToDisk();

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the LIMRA Digitech newsletter!',
      data: result.data,
      source: result.source,
    });
  } catch (error: any) {
    console.error('Error handling newsletter subscription:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
