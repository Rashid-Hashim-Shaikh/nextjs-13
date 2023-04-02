/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
 
};

module.exports = nextConfig;
