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
  openGraph: {
    title: 'LIMRA Digitech | Smart Digital Solutions & Business Growth',
    description: 'Full-spectrum Website Development, Digital Marketing, SEO, Lead Generation, Creative Design, Mobile Apps & Custom Software across India.',
    url: 'https://limradigitech.com',
    siteName: 'LIMRA Digitech',
    locale: 'en_IN',
    type: 'website',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://limradigitech.com/#organization',
      name: 'LIMRA Digitech',
      url: 'https://limradigitech.com',
      logo: 'https://limradigitech.com/limra-logo.png',
      email: 'limradigitech@gmail.com',
      telephone: '+91-9571302312',
      sameAs: [
        'https://www.facebook.com/limradigitech.india',
        'https://x.com/limradigitech',
        'https://www.linkedin.com/company/limra-digitech',
        'https://www.instagram.com/limra.digitech/',
      ],
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
      telephone: '+91-9571302312',
      email: 'limradigitech@gmail.com',
      openingHours: 'Mo-Sa 09:00-19:00',
      priceRange: '₹₹',
      areaServed: 'IN',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased min-h-screen flex flex-col bg-[#f8fafc] text-slate-600 selection:bg-purple-600 selection:text-white font-normal text-sm sm:text-base leading-relaxed">
        <AdvancedPreloader />
        <ScrollProgressBar />
        <Header />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <GlobalMotionEngine />
        <WhatsAppButton />
      </body>
    </html>
  );
}
