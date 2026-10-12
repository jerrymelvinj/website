'use client';

import Link from 'next/link';
import { Calendar, Compass } from 'lucide-react';

export default function MobileStickyFooter() {
  return (
    <div
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-gray-800/80 px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_30px_rgba(0,0,0,0.7)]"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* View Works CTA */}
        <Link
          href="/categories"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-brand-gray/90 hover:bg-gray-800 text-white border border-gray-700/80 text-xs sm:text-sm font-semibold tracking-wide transition-all active:scale-[0.98] text-center"
        >
          <Compass className="w-4 h-4 text-brand-gold shrink-0" />
          <span>View Works</span>
        </Link>

        {/* Book Appointment CTA */}
        <Link
          href="/#book-appointment"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-brand-gold via-yellow-500 to-amber-500 text-black text-xs sm:text-sm font-bold tracking-wide shadow-[0_2px_15px_rgba(212,175,55,0.35)] transition-all active:scale-[0.98] text-center hover:brightness-105"
        >
          <Calendar className="w-4 h-4 text-black shrink-0" />
          <span>Book Appointment</span>
        </Link>
      </div>
    </div>
  );
}
