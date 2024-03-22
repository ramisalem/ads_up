/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cloudflare-ipfs.com"], // here your host image
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
