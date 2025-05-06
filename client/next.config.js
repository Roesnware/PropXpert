/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      ODDS_API_KEY: process.env.ODDS_API_KEY, // API key
      INTERNAL_API_BASE: process.env.INTERNAL_API_BASE, // backend
    },
    images: {
      domains: ['examplecdn.com', 'anotherdomain.com'], // player/team images
    },
  }
  
  module.exports = nextConfig