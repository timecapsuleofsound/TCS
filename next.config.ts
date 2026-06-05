import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses with gzip
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // React strict mode for best practices
  reactStrictMode: true,

  // Generate ETags for caching
  generateEtags: true,

  images: {
    // Allow Unsplash images (stock hero/placeholder images)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Responsive image sizes served by Next.js image CDN
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Prefer modern formats (AVIF > WebP > original)
    formats: ["image/avif", "image/webp"],
    // NOTE: logo.PNG is 680KB — flag for SVG export before launch (TCS-26 debt)
    // A proper SVG version will eliminate this as a performance concern.
  },
};

export default nextConfig;
