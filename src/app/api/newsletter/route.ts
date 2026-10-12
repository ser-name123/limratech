import { NextResponse } from 'next/server';
import { saveNewsletterSubscriber } from '@/lib/supabase';

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
