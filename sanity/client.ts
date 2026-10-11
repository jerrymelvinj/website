import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, useCdn } from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

// Fallback data matching blueprint so SSG pre-renders even without live Sanity credentials
export const fallbackArtists = [
  {
    _id: '1',
    name: 'Arnie',
    role: 'Tattoo Artist',
    specialty: 'Large-scale blackwork & micro-realism',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    _id: '2',
    name: 'Karthick',
    role: 'Tattoo Artist',
    specialty: 'Fine-line & neo-traditional',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    _id: '3',
    name: 'Jeffy Viola',
    role: 'Nail Artist',
    specialty: 'Lust for Nails',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  },
];

export const fallbackCategories = [
  {
    _id: 'cat-1',
    title: 'Travel Tattoos',
    subtitle: 'Cartography of the soul',
    imageUrl: 'https://images.unsplash.com/photo-1590246814883-578ae1082a63?q=80&w=800&auto=format&fit=crop',
  },
  {
    _id: 'cat-2',
    title: 'Pet Portraits',
    subtitle: 'Immortalizing Bonds',
    imageUrl: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=800&auto=format&fit=crop',
  },
  {
    _id: 'cat-3',
    title: 'Calligraphy',
    subtitle: 'Words with meaning',
    imageUrl: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800&auto=format&fit=crop',
  },
  {
    _id: 'cat-4',
    title: 'Watercolor',
    subtitle: 'Vibrant Splashes',
    imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop',
  },
  {
    _id: 'cat-5',
    title: 'Coverup Tattoos',
    subtitle: 'A fresh start',
    imageUrl: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop',
  },
  {
    _id: 'cat-6',
    title: 'Double Exposure',
    subtitle: 'Surreal Artistry',
    imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop',
  },
];

// Helper to fetch artists with fallback
export async function getArtists() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your-sanity-project-id') {
    return fallbackArtists;
  }
  try {
    const data = await client.fetch(`*[_type == "artist"]{
      _id,
      name,
      role,
      specialty,
      "imageUrl": image.asset->url
    }`);
    return data && data.length > 0 ? data : fallbackArtists;
  } catch (err) {
    return fallbackArtists;
  }
}

// Helper to fetch categories with fallback
export async function getCategories() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your-sanity-project-id') {
    return fallbackCategories;
  }
  try {
    const data = await client.fetch(`*[_type == "category"]{
      _id,
      title,
      subtitle,
      "imageUrl": image.asset->url
    }`);
    return data && data.length > 0 ? data : fallbackCategories;
  } catch (err) {
    return fallbackCategories;
  }
}
