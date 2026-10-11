import Link from 'next/link';
import { MapPin, Clock, Navigation, Phone, MessageCircle, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const googleMapsUrl =
    'https://maps.google.com/?q=' +
    encodeURIComponent('TV Complex, 2, 60 Feet Rd, KHB Colony, 6th Block, Koramangala, Bengaluru, Karnataka 560034');

  const whatsappUrl =
    'https://wa.me/919833065209?text=' +
    encodeURIComponent('Hello Swink Tattoo Studio, I would like to book a tattoo consultation.');

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Studio & Google Maps Navigation */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold tracking-widest text-white uppercase">Swink</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Artistry, Untamed. Guided by award-winning artists in our hygienic Bangalore studio.
            </p>

            <div className="pt-2">
              <div className="flex items-start gap-3 text-sm text-gray-300 mb-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>TV Complex, 2, 60 Feet Rd, KHB Colony, 6th Block, Koramangala, Bengaluru, Karnataka 560034</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>All Days: 11:00 AM - 09:30 PM</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-gold text-black px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-white transition-colors duration-300 shadow-md"
              >
                <Navigation className="w-4 h-4" /> Get Studio Directions
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links to All Pages */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-brand-gold transition-colors">The Studio & Ethos</Link></li>
              <li><Link href="/#artists" className="text-gray-400 hover:text-brand-gold transition-colors">Masters of Ink (Artists)</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-brand-gold transition-colors">Tattoo Categories</Link></li>
              <li><Link href="/#pricing" className="text-gray-400 hover:text-brand-gold transition-colors">Pricing Explained</Link></li>
              <li><Link href="/#book-appointment" className="text-gray-400 hover:text-brand-gold transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Column 3: Tattoo Styles (Categories) */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Tattoo Styles</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/categories" className="text-gray-400 hover:text-brand-gold transition-colors">Fine-Line Tattoos</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-brand-gold transition-colors">Realism & Portrait</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-brand-gold transition-colors">Travel Tattoos</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-brand-gold transition-colors">Geometric & Mandala</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-brand-gold transition-colors">Cover-Up Tattoos</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-brand-gold transition-colors">Anime & Manga Art</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-brand-gold transition-colors">Nail Art (Lust for Nails)</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Connect With Us</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+919833065209" className="text-gray-400 hover:text-white transition-colors">+91 98330 65209</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  WhatsApp Consultation
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:getinked@swinktattoo.com" className="text-gray-400 hover:text-white transition-colors">getinked@swinktattoo.com</a>
              </li>
            </ul>

            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-brand-gold hover:text-black transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-brand-gold hover:text-black transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-brand-gold hover:text-black transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Swink Tattoo Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
              Google Maps Directions
            </a>
            <Link href="/categories" className="hover:text-brand-gold transition-colors">
              All Categories
            </Link>
            <Link href="/#about" className="hover:text-brand-gold transition-colors">
              Privacy & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
