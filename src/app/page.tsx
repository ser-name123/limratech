import React from 'react';
import Hero from '@/components/Hero';
import TechStackTicker from '@/components/TechStackTicker';
import TrustIndicatorsBar from '@/components/TrustIndicatorsBar';
import ServicesGrid from '@/components/ServicesGrid';
import CorePillarsSection from '@/components/CorePillarsSection';
import InteractiveSeoAuditor from '@/components/InteractiveSeoAuditor';
import AdvancedSeoSimulator from '@/components/AdvancedSeoSimulator';
import SeoPillarsGrid from '@/components/SeoPillarsGrid';
import WebDevPillarsGrid from '@/components/WebDevPillarsGrid';
import IndustriesSection from '@/components/IndustriesSection';
import TechStackEcosystem from '@/components/TechStackEcosystem';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import RoiCalculator from '@/components/RoiCalculator';
import AgileProcessFlow from '@/components/AgileProcessFlow';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import HomeBlogsSection from '@/components/HomeBlogsSection';
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

      {/* 2. Verified Trust Indicators, Proof Points & Client Logos */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <TrustIndicatorsBar />
      </AnimateOnScroll>

      {/* 3. Complete Services Overview Grid */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <ServicesGrid />
      </AnimateOnScroll>

      {/* 4. About / Why LIMRA Digitech Core Pillars */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <CorePillarsSection />
      </AnimateOnScroll>

      {/* 5. Advanced Algorithmic SEO & SERP Simulation Engine */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <AdvancedSeoSimulator />
      </AnimateOnScroll>

      {/* 6. Live Interactive SEO & Speed Auditor Simulator */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <InteractiveSeoAuditor />
      </AnimateOnScroll>

      {/* 7. Deep 6-Pillar Technical SEO & Digital Marketing Suite */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <SeoPillarsGrid />
      </AnimateOnScroll>

      {/* 8. Deep 6-Pillar Web Development, E-Commerce & Cloud Suite */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <WebDevPillarsGrid />
      </AnimateOnScroll>

      {/* 9. Industries Served Grid */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <IndustriesSection />
      </AnimateOnScroll>

      {/* 10. Interactive Technology Ecosystem with Category Filters */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <TechStackEcosystem />
      </AnimateOnScroll>

      {/* 11. The Performance Divide: Legacy Agency vs LIMRA Digitech */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <ComparisonMatrix />
      </AnimateOnScroll>

      {/* 12. Interactive ROI & Pipeline Calculator */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <RoiCalculator />
      </AnimateOnScroll>

      {/* 13. Process / How It Works: 4-Step Agile Delivery Methodology */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <AgileProcessFlow />
      </AnimateOnScroll>

      {/* 14. Proven Client Portfolio & Case Studies with Category Filters */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <CaseStudies />
      </AnimateOnScroll>

      {/* 15. Verified 5.0 Client Testimonials */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <Testimonials />
      </AnimateOnScroll>

      {/* 16. Blog / Insights Preview */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <HomeBlogsSection />
      </AnimateOnScroll>

      {/* 17. Interactive FAQ Accordion */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <FaqSection />
      </AnimateOnScroll>

      {/* 18. High-Conversion Consultation Blueprint Lead Form */}
      <AnimateOnScroll direction="up" delayMs={50}>
        <ContactCta />
      </AnimateOnScroll>
    </div>
  );
}
