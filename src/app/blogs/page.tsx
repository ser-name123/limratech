import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, User, Sparkles } from 'lucide-react';
import { blogPostsData } from '@/data/mockData';
import ContactCta from '@/components/ContactCta';
import TechStackTicker from '@/components/TechStackTicker';

export const metadata: Metadata = {
  title: 'SEO & Web Engineering Insights | LIMRA Digitech Intelligence',
  description: 'Deep dives on technical SEO algorithms, Next.js serverless performance, Core Web Vitals, and conversion rate optimization.',
};

export default function BlogsPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-white cyber-grid relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-200/50 via-indigo-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-medium tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-block">
            ENGINEERING INTELLIGENCE
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Technical Insights &amp; SEO Guides
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Stay ahead of Google algorithm updates, AI search overviews, and modern Next.js architectures with teardowns from our senior engineers.
          </p>
        </div>
      </section>

      <TechStackTicker />

      {/* Blog Cards Grid */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${post.cover_image})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-purple-700 border border-purple-200 text-[10px] font-mono font-medium px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-purple-600" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <User className="w-3.5 h-3.5 text-purple-600" />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-medium text-slate-900 group-hover:text-purple-700 transition-colors leading-snug">
                      <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                      href={`/blogs/${post.slug}`} 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
                    >
                      <span>Read Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-xs font-mono text-slate-400">{post.read_time}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
