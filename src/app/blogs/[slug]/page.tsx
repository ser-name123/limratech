import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Share2, 
  Bookmark, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { blogPostsData } from '@/data/mockData';
import { getServerCmsSnapshot } from '@/lib/cmsReader';
import ContactCta from '@/components/ContactCta';
import Testimonials from '@/components/Testimonials';

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getServerCmsSnapshot();
  const list = cms.blogs || blogPostsData;
  const post = list.find((p: any) => p.slug === slug);

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
  const cms = await getServerCmsSnapshot();
  const list = cms.blogs || blogPostsData;
  const post = list.find((p: any) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = list.filter((p: any) => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen">
      
      {/* 1. Header Navigation & Article Meta */}
      <section className="pt-16 pb-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 mb-6 transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&larr; Back to Engineering Intelligence</span>
          </Link>

          <div className="space-y-4">
            <span className="inline-block bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-2 font-mono">
              <span className="flex items-center gap-1.5 text-slate-700 font-bold">
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
        </div>
      </section>

      {/* 2. Featured Image Banner */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-72 sm:h-96 relative">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Key Takeaways & Executive Summary */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-purple-50/80 border border-purple-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-800 uppercase">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Key Architectural Takeaways</span>
            </div>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified with Google Search Console &amp; GA4</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Production TypeScript / Next.js ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full Article Content Body */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div 
            className="text-slate-800 leading-relaxed space-y-6 text-base sm:text-lg prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* 5. Production Implementation Checklist */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900">Sprint Implementation Checklist</h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Step 1: Benchmark baseline Core Web Vitals (LCP, FID, INP, CLS) in Chrome User Experience Report (CrUX).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Step 2: Strip uncritical client-side JavaScript libraries and switch to Server Components.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Step 3: Inject validated JSON-LD schema graphs matching Google Search Central documentation.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Step 4: Push deployment to edge CDN and submit updated dynamic sitemap in Search Console.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Author Bio */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-mono font-bold text-purple-700 uppercase">Written &amp; Verified By</div>
              <h4 className="text-base font-bold text-slate-900">{post.author}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Senior engineering specialist at LIMRA Digitech, building serverless edge architectures and technical search engine dominance for high-growth brands across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Consultation Callout Banner */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-purple-600/20">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold">Need Help Implementing These Optimizations?</h3>
              <p className="text-xs sm:text-sm text-purple-100">Our senior architects will audit your codebase and build a tailored sprint plan.</p>
            </div>
            <Link
              href="/contact-us"
              className="bg-white text-purple-700 hover:bg-slate-100 px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all flex-shrink-0 shadow-sm"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Related Teardowns */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Related Technical Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.id}
                href={`/blogs/${rPost.slug}`}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-purple-700 bg-white border border-purple-200 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {rPost.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 mb-2">
                    {rPost.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rPost.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-200/80 text-[11px] font-mono text-purple-700 flex items-center gap-1 font-bold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Verified Client Testimonials */}
      <Testimonials />

      {/* 10. Contact Consultation Lead Form */}
      <ContactCta />

    </div>
  );
}
