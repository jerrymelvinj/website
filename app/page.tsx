import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle, ChevronDown, ArrowRight, PenTool, Maximize, ShieldCheck } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { getArtists } from '@/sanity/client';

export const revalidate = 60; // SSG with Incremental Static Regeneration (ISR)

export default async function HomePage() {
  const artists = await getArtists();

  const googleMapsUrl = 'https://maps.app.goo.gl/7eZyR7dYE2iMueWy6';

  const whatsappPreloadedUrl =
    'https://wa.me/919035077840?text=' +
    encodeURIComponent('Hello Swink Tattoo Studio, I would like to book a tattoo consultation.');

  return (
    <main>
      {/* Hero Section */}
      <section className="relative hero-bg min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Artistry, <span className="gold-gradient italic">Untamed.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Your tattoo should embody the energy that defines you. At Swink, we craft designs that reflect your passions and story, creating art as dynamic and unique as you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                <MapPin className="w-5 h-5" /> Locate Us
              </a>
              <a
                href="tel:+919035077840"
                className="flex items-center justify-center gap-2 glass-panel text-white border border-gray-600 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
              >
                <Phone className="w-5 h-5" /> Book on Call
              </a>
              <a
                href={whatsappPreloadedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-brand-gold w-8 h-8" />
        </div>
      </section>

      {/* The Brand Ethos (About) */}
      <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-4">The Brand Ethos</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Art That Reflects You</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                The energy of your story deserves to be seen, felt, and carried forward. At Swink Tattoo, every tattoo begins with your journey, your inspiration, your vision.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                In our hygienic tattoo studio, guided by award-winning artists, your story finds its energy, etched into a masterpiece that&apos;s uniquely yours.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1000&auto=format&fit=crop"
                alt="Tattoo artist at work at Swink studio"
                className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Masters (Artists Collective from Sanity / SSG) */}
      <section id="artists" className="py-24 bg-brand-gray border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-4">The Artist Collective</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Masters of Ink</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Not just Artists, but storytellers. Creators of Award-Winning tattoo art to serve you. From the delicate, thin lines of Fine Line tattoos to intricate Realism, our maestros craft visual delights as unique as you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist: any) => (
              <div key={artist._id} className="group relative overflow-hidden rounded-lg">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-2xl font-serif font-bold text-white mb-1">{artist.name}</h4>
                  <p className="text-brand-gold font-medium mb-3">{artist.role}</p>
                  <p className="text-gray-300 text-sm">{artist.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tattoo Categories Banner */}
      <section id="categories" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-4">The Filtered Archive</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Art that speaks to your heart</h3>
              <p className="text-gray-400 text-lg">
                Getting a tattoo from Swink is like unlocking a gateway to your inner universe. Your stories become eternal in ink, with each design a tribute to your uniqueness.
              </p>
            </div>
            <Link
              href="/categories"
              className="text-brand-gold hover:text-white transition-colors flex items-center gap-2 pb-2 border-b border-brand-gold"
            >
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Explained Section */}
      <section id="pricing" className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-4">Pricing Explained</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">The Value of True Artistry</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We believe in the power of art to tell your unique story. Our pricing reflects the dedication and expertise that go into creating your masterpiece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-6 rounded-lg">
              <div className="text-brand-gold mb-4">
                <PenTool className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Design Complexity</h4>
              <p className="text-gray-400 text-sm">
                Higher detail and intricate linework require additional studio time and specialized techniques.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <div className="text-brand-gold mb-4">
                <Maximize className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Size and Placement</h4>
              <p className="text-gray-400 text-sm">
                Larger pieces or placements on sensitive, curved body areas require technical adaptability.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <div className="text-brand-gold mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Hygiene & Reputation</h4>
              <p className="text-gray-400 text-sm">
                Single-use medical-grade needles, premium pigments, and guaranteed quality with lifetime touch-up support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form (Captured to WhatsApp) */}
      <BookingForm />
    </main>
  );
}
