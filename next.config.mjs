/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['private-user-images.githubusercontent.com', 'pranjal-rana.vercel.app', 'ai.hackberkeley.org', 's3.amazonaws.com'],
  },

};

export default nextConfig;
