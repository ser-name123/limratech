import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { blogPostsData } from '@/data/mockData';

export async function GET() {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return NextResponse.json({
          success: true,
          blogs: data,
          source: 'supabase',
        });
      }
    }

    // Fallback to rich mock data
    return NextResponse.json({
      success: true,
      blogs: blogPostsData,
      source: 'local-store',
    });
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({
      success: true,
      blogs: blogPostsData,
      source: 'fallback-cache',
    });
  }
}
