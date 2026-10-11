import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://swinktattoo.vercel.app'),
  title: {
    default: 'Swink Tattoo Studio Bangalore | Artistry, Untamed',
    template: '%s | Swink Tattoo Studio',
  },
  description:
    'Experience premier tattoo artistry at Swink Tattoo Studio Bangalore. Guided by award-winning artists in our hygienic studio. Fine-line, Realism, Cover-Ups, and Lifetime TattooCare. Book consultation on WhatsApp.',
  keywords: [
    'Tattoo Studio Bangalore',
    'Best Tattoo Studio Koramangala',
    'Swink Tattoo Studio',
    'Fine Line Tattoo Bangalore',
    'Realism Tattoo Artist',
    'Aliens Tattoo alternative',
    'Custom Tattoo Design',
    'Hygienic Tattoo Parlour Bangalore',
  ],
  authors: [{ name: 'Swink Tattoo Studio' }],
  creator: 'Swink Tattoo Studio',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://swinktattoo.vercel.app',
    title: 'Swink Tattoo Studio Bangalore | Artistry, Untamed',
    description:
      'Premier tattoo studio in Koramangala, Bangalore. Guided by award-winning artists with lifetime TattooCare guarantee.',
    siteName: 'Swink Tattoo Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Swink Tattoo Studio Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swink Tattoo Studio Bangalore | Artistry, Untamed',
    description: 'Premier tattoo studio in Bangalore. Realism, Fine-Line, and custom designs.',
    images: ['https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    name: 'Swink Tattoo Studio',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop',
    '@id': 'https://swinktattoo.vercel.app',
    url: 'https://swinktattoo.vercel.app',
    telephone: '+919833065209',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'TV Complex, 2, 60 Feet Rd, KHB Colony, 6th Block',
      addressLocality: 'Koramangala, Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560034',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9352,
      longitude: 77.6245,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '11:00',
      closes: '21:30',
    },
    priceRange: '₹₹₹',
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-brand-gold selection:text-black bg-brand-dark text-brand-light">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
