// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports when using <Image> component
  },
  experimental: {
    appDir: true, // Keep this only if your project requires it
  },
};

module.exports = nextConfig;