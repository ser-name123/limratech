'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Sparkles, User } from 'lucide-react';
import { blogPostsData } from '@/data/mockData';

export default function HomeBlogsSection() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>BLOG &amp; INSIGHTS</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-medium text-slate-900 tracking-tight leading-snug">
              Latest Articles, SEO Guides &amp; Digital Playbooks
            </h2>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Actionable insights from the LIMRA Digitech team on search algorithms, performance marketing, and modern web development.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <span>View All Articles &amp; Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              <div className="relative h-52 bg-slate-100 overflow-hidden">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-md text-purple-700 border border-slate-200 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-600" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-600" />
                      {post.read_time}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug line-clamp-2">
                    <Link href={`/blogs/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

