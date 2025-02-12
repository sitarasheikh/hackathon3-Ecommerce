// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     optimizeCss: true, // Optimize CSS
//   },
//   webpack(config) {
//     config.cache = false; // Disable Webpack caching to avoid snapshot issues
//     return config;
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // Optimize CSS
  },
  webpack(config) {
    config.cache = false; // Disable Webpack caching to avoid snapshot issues
    return config;
  },
  images: {
    domains: ["cdn.sanity.io"], // Allow Sanity CDN for next/image
  },
};

export default nextConfig;

