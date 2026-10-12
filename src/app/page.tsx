import React from 'react';
import Hero from '@/components/Hero';
import TechStackTicker from '@/components/TechStackTicker';
import CorePillarsSection from '@/components/CorePillarsSection';
import InteractiveSeoAuditor from '@/components/InteractiveSeoAuditor';
import AdvancedSeoSimulator from '@/components/AdvancedSeoSimulator';
import SeoPillarsGrid from '@/components/SeoPillarsGrid';
import WebDevPillarsGrid from '@/components/WebDevPillarsGrid';
import TechStackEcosystem from '@/components/TechStackEcosystem';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import AgileProcessFlow from '@/components/AgileProcessFlow';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import ContactCta from '@/components/ContactCta';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      {/* 1. Screen-Fit Hero + Live Ticker Unit */}
      <section className="relative min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-113px)] lg:h-[calc(100vh-113px)] lg:max-h-[calc(100vh-113px)] flex flex-col justify-between overflow-hidden bg-white cyber-grid">
        <Hero />
        <TechStackTicker />
      </section>

      {/* 3. Core philosophy & pillars */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <CorePillarsSection />
      </AnimateOnScroll>

      {/* 4. Advanced Algorithmic SEO & SERP Simulation Engine */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <AdvancedSeoSimulator />
      </AnimateOnScroll>

      {/* 5. Live interactive SEO & speed auditor simulator */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <InteractiveSeoAuditor />
      </AnimateOnScroll>

      {/* 5. Deep 6-pillar Technical SEO suite */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <SeoPillarsGrid />
      </AnimateOnScroll>

      {/* 6. Deep 6-pillar Web Development & Cloud suite */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <WebDevPillarsGrid />
      </AnimateOnScroll>

      {/* 7. Interactive technology ecosystem with category filters */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <TechStackEcosystem />
      </AnimateOnScroll>

      {/* 8. The Performance Divide: Legacy Agency vs LIMRA Digitech */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <ComparisonMatrix />
      </AnimateOnScroll>

      {/* 9. 4-step agile sprint delivery methodology */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <AgileProcessFlow />
      </AnimateOnScroll>


      {/* 11. Proven client case studies with metric badges */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <CaseStudies />
      </AnimateOnScroll>

      {/* 12. Verified 5.0 Google client testimonials */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <Testimonials />
      </AnimateOnScroll>

      {/* 13. Interactive FAQ accordion */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <FaqSection />
      </AnimateOnScroll>

      {/* 14. High-conversion consultation blueprint lead form */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <ContactCta />
      </AnimateOnScroll>
    </div>
  );
}
