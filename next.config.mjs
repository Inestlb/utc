/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation du chargement et de la performance
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Compression des assets
  compress: true,
  // Optimisation des polices
  optimizeFonts: true,
  // Configuration complète des images
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    path: '/_next/image',
    loader: 'default',
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Optimisation de la génération statique
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig; 