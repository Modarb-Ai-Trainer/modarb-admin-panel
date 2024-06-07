/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['loremflickr.com'],
    
    domains: ['placehold.co', 'other-allowed-domains.com'],
    dangerouslyAllowSVG: true,
    
  },
  env: {
    URI: process.env.URI,
  }
};

export default nextConfig;
