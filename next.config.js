// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports when using <Image> component
  },
};

module.exports = nextConfig;