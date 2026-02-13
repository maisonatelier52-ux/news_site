// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
 
/** @type {import('next').NextConfig} */

const nextConfig = {
  // ──────────────────────────────────────────────
  // IMAGE OPTIMIZATION
  // ──────────────────────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ──────────────────────────────────────────────
  // PERFORMANCE
  // ──────────────────────────────────────────────
  compress: true,
  generateEtags: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,

  // ──────────────────────────────────────────────
  // PACKAGE OPTIMIZATION
  // ──────────────────────────────────────────────
  experimental: {
    optimizePackageImports: [
      'lodash',
      'lodash-es',
      'date-fns',
      'react-icons',
    ],
  },

  // ──────────────────────────────────────────────
  // SECURITY + CACHING HEADERS
  // ──────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  // ──────────────────────────────────────────────
  // ENV
  // ──────────────────────────────────────────────
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || 'https://courtnews.org',
  },
};

module.exports = nextConfig;
