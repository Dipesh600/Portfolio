/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'], // Add any image domains you need
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@shared': './shared',
      '@assets': './app/assets',
    };
    return config;
  },
}

module.exports = nextConfig 