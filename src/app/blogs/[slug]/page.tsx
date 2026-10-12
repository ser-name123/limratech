import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { blogPostsData } from '@/data/mockData';
import ContactCta from '@/components/ContactCta';

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | LIMRA Digitech',
    };
  }

  return {
    title: `${post.title} | LIMRA Digitech Intelligence`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover_image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      <article className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 mb-8 transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&larr; Back to Knowledge Hub</span>
          </Link>

          <div className="space-y-4">
            <span className="inline-block bg-purple-50 border border-purple-200 text-purple-700 text-[11px] font-mono font-medium px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-medium text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-2 border-b border-slate-200 pb-6 font-mono">
              <span className="flex items-center gap-1.5 text-slate-600">
                <User className="w-4 h-4 text-purple-600" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-600" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-purple-600" />
                {post.read_time}
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-80 sm:h-96 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.cover_image})` }}
            />
          </div>

          <div 
            className="mt-12 text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-mono">
              Published by <strong className="text-slate-800">{post.author}</strong> in {post.category}
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#911cf3] to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md shadow-purple-600/20 transition-all"
            >
              <span>Consult Our Technical Leads</span>
            </Link>
          </div>

        </div>
      </article>

      <ContactCta />
    </div>
  );
}
