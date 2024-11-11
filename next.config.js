// next.config.js
const nextConfig = {
  output: 'standalone',
  experimental:{appDir: true},
  images: {
    unoptimized: true, // Required for static exports when using <Image> component
  },
};

module.exports = nextConfig;