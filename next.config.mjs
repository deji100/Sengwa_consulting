/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' }, // if you switch to + later
      { protocol: 'https', hostname: 'images.pexels.com' }, // optional
    ],
  },

};

export default nextConfig;
