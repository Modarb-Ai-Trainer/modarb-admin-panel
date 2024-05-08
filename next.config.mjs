/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['loremflickr.com'],
  },
  env: {
    URI: process.env.URI,
  }
};

export default nextConfig;
