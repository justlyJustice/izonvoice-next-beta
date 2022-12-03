/** @type {import('next').NextConfig} */
const nextConfig = {
  /* reactStrictMode: true, */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cdnjs.cloudflare.com",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
