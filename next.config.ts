/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add the Sanity CDN domain here
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
