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
  metadataBase: new URL('https://swinktattoostudio.in'),
  title: {
    default: 'Best Tattoo Studio in Bengaluru | Swink Tattoo Studio',
    template: '%s | Swink Tattoo Studio',
  },
  description:
    'Looking for the best tattoo studio in Bengaluru? Swink Tattoo Studio offers custom tattoo designs, fine-line ink, and realistic cover-ups led by master artist Arnie. Book a consultation today.',
  keywords: [
    'Best Tattoo Studio in Bengaluru',
    'Tattoo Studio Bengaluru',
    'Tattoo Studio BTM Layout',
    'Swink Tattoo Studio',
    'Fine Line Tattoo Bengaluru',
    'Realism Tattoo Artist Arnie',
    'Custom Tattoo Design Bengaluru',
    'Hygienic Tattoo Parlour Bengaluru',
    'Cover-up Tattoos Bangalore',
  ],
  authors: [{ name: 'Arnie' }, { name: 'Swink Tattoo Studio' }],
  creator: 'Swink Tattoo Studio',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://swinktattoostudio.in',
    title: 'Best Tattoo Studio in Bengaluru | Swink Tattoo Studio',
    description:
      'Custom tattoo designs, cover-ups, and fine-line ink by Arnie and resident artists in Bengaluru. Hygienic studio with lifetime TattooCare guarantee.',
    siteName: 'Swink Tattoo Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Swink Tattoo Studio Bengaluru Artistry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Tattoo Studio in Bengaluru | Swink Tattoo Studio',
    description: 'Custom tattoo designs, cover-ups, and fine-line ink by Arnie and resident artists in Bengaluru.',
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
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    'geo.position': '12.9166;77.6101',
    'ICBM': '12.9166, 77.6101',
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
    '@id': 'https://swinktattoostudio.in/#tattooparlor',
    name: 'Swink Tattoo Studio',
    alternateName: 'Swink Tattoos Bengaluru',
    url: 'https://swinktattoostudio.in',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop',
    description:
      'Swink Tattoo Studio is a premier hygienic tattoo studio in Bengaluru specializing in custom tattoos, fine-line designs, and intricate cover-ups.',
    telephone: '+919035077840',
    email: 'swinktattoostudio@gmail.com',
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI',
    founder: {
      '@type': 'Person',
      name: 'Arnie',
      jobTitle: 'Lead Tattoo Artist & Founder',
      sameAs: 'https://www.instagram.com/swink_tattoo_studio/',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '36, 20th Main Rd, Jay Bheema Nagar, 1st Stage',
      addressLocality: 'BTM 1st Stage, Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560068',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9166,
      longitude: 77.6101,
    },
    hasMap: 'https://maps.app.goo.gl/7eZyR7dYE2iMueWy6',
    openingHoursSpecification: [
      {
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
    ],
    areaServed: {
      '@type': 'City',
      name: 'Bengaluru',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Tattoo Design',
          description: 'Bespoke tattoo art tailored to personal concepts and anatomy.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cover-up Tattoos',
          description: 'Expert re-inking and architectural camouflage for existing tattoos.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fine-line Tattoos',
          description: 'Ultra-precise, delicate line work and minimalist aesthetics.',
        },
      },
    ],
    sameAs: [
      'https://www.instagram.com/swink_tattoo_studio/',
      'https://www.youtube.com/@SwinkTattooStudio',
    ],
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
