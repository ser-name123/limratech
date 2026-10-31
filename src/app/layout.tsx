import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import AdvancedPreloader from '@/components/AdvancedPreloader';
import PageTransition from '@/components/PageTransition';
import GlobalMotionEngine from '@/components/GlobalMotionEngine';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import CustomScriptsInjector from '@/components/CustomScriptsInjector';
import { getServerCmsSnapshot } from '@/lib/cmsReader';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://limradigitech.com'),
  title: {
    default: 'LIMRA Digitech | Transforming Businesses With Smart Digital Solutions',
    template: '%s | LIMRA Digitech',
  },
  description: 'LIMRA Digitech is a premier digital marketing, web development, creative design, mobile app, and custom software solutions company in India. WordPress, Shopify, Next.js, SEO, Google & Meta Ads.',
  keywords: [
    'LIMRA Digitech',
    'Website Development Company India',
    'Digital Marketing Agency India',
    'Lead Generation Company India',
    'Creative Design Solutions India',
    'Mobile App Developer India',
    'Software Developers India',
    'SEO & Google Ads Agency',
    'Next.js WordPress Shopify Development'
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', sizes: '64x64' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  openGraph: {
    title: 'LIMRA Digitech | Smart Digital Solutions & Business Growth',
    description: 'Full-spectrum Website Development, Digital Marketing, SEO, Lead Generation, Creative Design, Mobile Apps & Custom Software across India.',
    url: 'https://limradigitech.com',
    siteName: 'LIMRA Digitech',
    locale: 'en_IN',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Build Organization/Service structured data from the live CMS (admin Footer
  // module) so contact details and social profiles stay in one place.
  const cms = await getServerCmsSnapshot();
  const f = cms.footer;
  const telephone = f?.phone || '+91-9571302312';
  const email = f?.email || 'limradigitech@gmail.com';
  const sameAs = [
    f?.social?.facebook,
    f?.social?.twitter,
    f?.social?.linkedin,
    f?.social?.instagram,
  ].filter(Boolean);

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://limradigitech.com/#organization',
        name: 'LIMRA Digitech',
        url: 'https://limradigitech.com',
        logo: 'https://limradigitech.com/limra-logo.png',
        email,
        telephone,
        sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': 'https://limradigitech.com/#website',
        url: 'https://limradigitech.com',
        name: 'LIMRA Digitech',
        publisher: { '@id': 'https://limradigitech.com/#organization' },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://limradigitech.com/#service',
        name: 'LIMRA Digitech — Digital Marketing, Web & Software Solutions',
        url: 'https://limradigitech.com',
        telephone,
        email,
        openingHours: 'Mo-Sa 09:00-19:00',
        priceRange: '₹₹',
        areaServed: 'IN',
      },
    ],
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased min-h-screen flex flex-col bg-[#f8fafc] text-slate-600 selection:bg-purple-600 selection:text-white font-normal text-sm sm:text-base leading-relaxed">
        <CustomScriptsInjector position="header" />
        <CustomScriptsInjector position="body_start" />
        <AnalyticsTracker />
        <AdvancedPreloader />
        <ScrollProgressBar />
        <Header />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CustomScriptsInjector position="footer" />
        <GlobalMotionEngine />
        <WhatsAppButton />
      </body>
    </html>
  );
}
