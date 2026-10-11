import { MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function ConversionBanner() {
  const whatsappUrl =
    'https://wa.me/919035077840?text=' +
    encodeURIComponent('Hello Swink Tattoo Studio, I would like to consult with an artist about a custom tattoo design.');

  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#161616] via-[#111111] to-[#0a0a0a] border border-brand-gold/30 rounded-3xl p-10 sm:p-14 text-center overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 text-brand-gold/5 transform rotate-12 pointer-events-none">
            <ShieldCheck className="w-64 h-64" />
          </div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/20 uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Lifetime TattooCare & Special Offers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
              Ready to tell your story in ink?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Your art is secured for life with our Lifetime TattooCare guarantee. Connect directly with our lead artists on WhatsApp to explore custom ideas, special birthday discounts, and flexible EMI options.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.3)] hover:shadow-[0_0_35px_rgba(37,211,102,0.5)] transform hover:-translate-y-1 cursor-pointer"
            >
              <MessageCircle className="w-6 h-6" />
              Contact us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
