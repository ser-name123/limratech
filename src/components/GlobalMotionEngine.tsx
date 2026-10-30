'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';

export default function GlobalMotionEngine() {
  const pathname = usePathname();
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // 1. Universal Scroll-Reveal & 3D Card Spotlight Observer across every route change
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      // Select all main sections except the very first hero section so above-the-fold renders immediately
      const sections = Array.from(document.querySelectorAll('main section'));
      const cardSelectors = 'main .grid > div, main .grid > article, main .grid > a';
      const cards = Array.from(document.querySelectorAll<HTMLElement>(cardSelectors));

      // Attach staggered delays to grid cards within their parent grid
      const grids = Array.from(document.querySelectorAll('main .grid'));
      grids.forEach((grid) => {
        const children = Array.from(grid.children) as HTMLElement[];
        children.forEach((child, idx) => {
          child.style.setProperty('--stagger-delay', `${Math.min(idx * 75, 450)}ms`);
          child.classList.add('scroll-reveal-card', 'interactive-card-3d');
        });
      });

      sections.slice(1).forEach((sec) => {
        sec.classList.add('scroll-reveal-section');
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      sections.slice(1).forEach((sec) => observer.observe(sec));
      cards.forEach((card) => observer.observe(card));

      // Attach shimmer sweep effect to primary gradient CTA buttons/links
      const ctaButtons = Array.from(
        document.querySelectorAll<HTMLElement>('a[class*="from-purple-600"], button[class*="from-purple-600"]')
      );
      ctaButtons.forEach((btn) => btn.classList.add('btn-shimmer'));

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  // 2. Interactive Mouse Spotlight & Subtle 3D Card Tilt on Desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isClickable = Boolean(
        target.closest('a, button, input, select, textarea, [role="button"]')
      );
      setIsHoveringInteractive(isClickable);

      const card = target.closest('.interactive-card-3d') as HTMLElement | null;
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3. Scroll percentage & Back-To-Top progress ring
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollPercent(pct);
      setShowBackToTop(scrollTop > 420);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {/* Subtle Desktop Ambient Cursor Aura */}
      <div
        className="pointer-events-none fixed inset-0 z-30 hidden lg:block overflow-hidden"
        aria-hidden="true"
      >
        <div
          className={`fixed rounded-full transition-transform duration-150 ease-out pointer-events-none ${
            isHoveringInteractive ? 'scale-150 opacity-80' : 'scale-100 opacity-50'
          }`}
          style={{
            width: '320px',
            height: '320px',
            left: `${cursorPos.x - 160}px`,
            top: `${cursorPos.y - 160}px`,
            background:
              'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(6, 182, 212, 0.04) 45%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating Circular Scroll-Progress Back-To-Top Button (Left Bottom) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 left-6 z-[85] w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg hover:shadow-purple-200/80 text-purple-700 flex items-center justify-center transition-all duration-300 group ${
          showBackToTop
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-6 opacity-0 pointer-events-none'
        }`}
      >
        <svg className="w-12 h-12 -rotate-90 absolute inset-0" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="2.5"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="#7c3aed"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>
        <ArrowUp className="w-4 h-4 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </>
  );
}

