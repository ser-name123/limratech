'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // 1. Immediately reset scroll position to top instantly (no slow backwards scroll)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

    // 2. Trigger high-speed top route progress bar
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 280);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Top Route Navigation Flash Bar (Like Vercel / GitHub) */}
      <div 
        className={`fixed top-0 left-0 right-0 h-[2.5px] z-[9998] pointer-events-none transition-opacity duration-300 ${
          isNavigating ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300 ease-out"
          style={{ width: isNavigating ? '100%' : '0%' }}
        />
      </div>

      {/* Page Content with smooth entrance animation on route change */}
      <div key={pathname} className="animate-page-enter w-full flex-grow flex flex-col">
        {children}
      </div>
    </>
  );
}
