const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  images: {
    domains: ['avatars.githubusercontent.com']
  }
}

module.exports = nextConfig
