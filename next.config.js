/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: { unoptimized: true }
}

module.exports = nextConfig