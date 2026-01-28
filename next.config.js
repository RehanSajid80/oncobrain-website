/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath and assetPrefix removed for Azure deployment
  // For GitHub Pages, uncomment these lines:
  // basePath: '/oncobrain-website',
  // assetPrefix: '/oncobrain-website/',
}

module.exports = nextConfig
