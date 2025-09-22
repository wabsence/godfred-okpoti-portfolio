/** @type {import('next').NextConfig} */
const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
  images: {
    // domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // This disables Image Optimization for static export
  },
  trailingSlash: true,
  output: 'export',
//   distDir: 'dist',
}

module.exports = nextConfig