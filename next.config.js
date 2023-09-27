/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = withVideos(nextConfig);
