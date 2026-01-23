/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/oncobrain-website',
  assetPrefix: '/oncobrain-website/',
}

module.exports = nextConfig
