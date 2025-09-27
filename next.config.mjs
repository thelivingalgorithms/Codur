/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: false, // Disable CSS optimization temporarily
  },
  images: {
    domains: [], // Add any external image domains if needed
  },
};

export default nextConfig;
