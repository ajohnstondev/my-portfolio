/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeFonts: true,
  },
  output: 'export',
  assetPrefix: './',
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
