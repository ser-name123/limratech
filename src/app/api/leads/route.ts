import { NextResponse } from 'next/server';
import { saveLead } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, service_needed, budget, message, source_page } = body;

    if (!full_name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
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
