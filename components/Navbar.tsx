import Link from 'next/link';

export default function Navbar() {
  const whatsappPreloadedUrl =
    'https://wa.me/919035077840?text=' +
    encodeURIComponent('Hello Swink Tattoo Studio, I would like to book a tattoo consultation.');

  return (
    <nav className="fixed w-full z-50 glass-panel border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-white uppercase">
              Swink
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#about" className="text-gray-300 hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors">
                Studio
              </Link>
              <Link href="/#artists" className="text-gray-300 hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors">
                Artists
              </Link>
              <Link href="/categories" className="text-gray-300 hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors">
                Categories
              </Link>
              <Link href="/#pricing" className="text-gray-300 hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href={whatsappPreloadedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-black px-6 py-2 rounded-full font-medium hover:bg-white transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
