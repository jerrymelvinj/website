/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/categories.html',
        destination: '/categories',
      },
      {
        source: '/booking',
        destination: '/',
      },
      {
        source: '/artists',
        destination: '/',
      },
      {
        source: '/portfolio',
        destination: '/categories',
      },
      {
        source: '/faq',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
