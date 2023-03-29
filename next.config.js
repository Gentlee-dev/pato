/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["d3vyx3prc502np.cloudfront.net"],
  },
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
