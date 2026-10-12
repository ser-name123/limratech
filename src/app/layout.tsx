import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import AdvancedPreloader from '@/components/AdvancedPreloader';
import PageTransition from '@/components/PageTransition';

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
  title: 'LIMRA Digitech | Elite SEO & Next-Gen Web Development Agency India',
  description: 'Premier Technical SEO, Google Page #1 Dominance & Custom Next.js 15 Web Development. Sub-second serverless architectures, Supabase databases, and measurable revenue growth across India.',
  keywords: [
    'SEO Company India',
    'Website Development Company India',
    'Next.js Web Developers',
    'Technical SEO Agency',
    'Custom Software Development',
    'Digital Marketing India',
    'Limra Digitech'
  ],
  openGraph: {
    title: 'LIMRA Digitech | Elite SEO & Next-Gen Web Development Agency',
    description: 'We engineer high-speed Next.js web platforms and Google #1 rank SEO architectures that scale businesses across India.',
    siteName: 'LIMRA Digitech',
    locale: 'en_US',
    type: 'website',
  },
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
      </head>
      <body suppressHydrationWarning className="font-sans antialiased min-h-screen flex flex-col bg-[#f8fafc] text-slate-600 selection:bg-purple-600 selection:text-white font-normal text-sm sm:text-base leading-relaxed">
        <AdvancedPreloader />
        <ScrollProgressBar />
        <Header />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
