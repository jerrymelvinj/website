import type { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';
import { getCategories } from '@/sanity/client';

export const revalidate = 60; // SSG with ISR

export const metadata: Metadata = {
  title: 'Tattoo Categories & Signature Collections',
  description:
    'Explore curated tattoo styles at Swink Tattoo Studio Bangalore: Travel tattoos, pet portraits, calligraphy, watercolor, coverups, and double exposure tattoos.',
  openGraph: {
    title: 'Tattoo Categories & Signature Collections | Swink Tattoo Studio',
    description:
      'Explore curated tattoo styles at Swink Tattoo Studio Bangalore: Travel tattoos, pet portraits, calligraphy, watercolor, coverups, and double exposure tattoos.',
  },
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="pt-24 min-h-screen bg-brand-dark pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-4">Tattoo Categories</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Art that speaks to your heart</h3>
          <p className="text-gray-400 text-lg">
            Getting a tattoo from Swink is like unlocking a gateway to your inner universe. Your stories become eternal in ink, with each design a tribute to your uniqueness and the boundless potential of creativity.
          </p>
        </div>

        {/* Signature Tattoo Collections (The Grid from Sanity / SSG) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat: any) => (
            <div key={cat._id} className="group relative h-80 overflow-hidden rounded-lg border border-gray-800">
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                <span className="text-white font-serif text-2xl font-medium tracking-wide">{cat.title}</span>
                {cat.subtitle && (
                  <span className="text-xs font-sans text-brand-gold uppercase tracking-widest mt-2 block">
                    {cat.subtitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Booking Form at bottom of categories */}
      <div className="mt-16">
        <BookingForm />
      </div>
    </main>
  );
}
