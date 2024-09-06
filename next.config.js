/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeFonts: true,
  },
  output: 'export',
  assetPrefix: './',
  // exportPathMap: async function ( /** Need for static web building */
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //   }
  // },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
