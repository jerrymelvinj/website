'use client';

import { useState, FormEvent } from 'react';
import { User, Palette, Calendar, ChevronDown, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !service || !date) return;

    const formattedDate = new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const message = `Hello Swink Tattoo Studio! 👋\n\nI would like to book a consultation with the following details:\n\n👤 *Name:* ${name}\n🎨 *Type of Service:* ${service}\n📅 *Preferred Date:* ${formattedDate}\n\nPlease let me know your artist availability and schedule. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919035077840?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="book-appointment" className="py-24 bg-brand-dark border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#161616] via-[#111111] to-[#0a0a0a] border border-brand-gold/30 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-12 -right-12 text-brand-gold/5 pointer-events-none">
            <Calendar className="w-72 h-72" />
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/20 uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Easy WhatsApp Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Book Your Ink Session
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Fill in your details below. We'll automatically prepare a customized consultation request and open direct chat on WhatsApp with our artists!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
              {/* Name Field */}
              <div>
                <label htmlFor="clientName" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Full Name <span className="text-brand-gold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="clientName"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-12 pr-4 py-3.5 bg-black/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  />
                </div>
              </div>

              {/* Service Field */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                  Type of Service <span className="text-brand-gold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Palette className="w-5 h-5" />
                  </div>
                  <select
                    id="serviceType"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full pl-12 pr-10 py-3.5 bg-black/60 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="Fine-Line Tattoo">Fine-Line Tattoo</option>
                    <option value="Realism Tattoo">Realism & Portrait Tattoo</option>
                    <option value="Cover-Up Tattoo">Cover-Up Tattoo</option>
                    <option value="Geometric & Mandala">Geometric & Mandala</option>
                    <option value="Calligraphy Tattoo">Calligraphy & Lettering</option>
                    <option value="Travel Tattoo">Travel Tattoo (Cartography of the soul)</option>
                    <option value="Anime / Pop Culture">Anime / Manga Tattoo</option>
                    <option value="Pet Portrait">Pet Portrait</option>
                    <option value="Custom Design Consultation">Custom Design Consultation</option>
                    <option value="Piercing">Piercing</option>
                    <option value="Nail Art (Lust for Nails)">Nail Art (Lust for Nails)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Date Field */}
              <div>
                <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Date <span className="text-brand-gold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <input
                    type="date"
                    id="bookingDate"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-black/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.25)] hover:shadow-[0_0_35px_rgba(37,211,102,0.45)] transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book Appointment on WhatsApp
                </button>
                <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" /> Lifetime TattooCare Guarantee • Direct Instant WhatsApp Chat
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
