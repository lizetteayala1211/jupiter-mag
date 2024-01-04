/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
    PLANET_API_KEY: process.env.PLANET_API_KEY,
  },
}

module.exports = nextConfig
