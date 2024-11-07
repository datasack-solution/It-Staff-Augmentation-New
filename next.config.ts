import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['bunny-wp-pullzone-dgpgtislbk.b-cdn.net'], // Add your external image hostname here
  },
};

export default nextConfig;


module.exports = nextConfig;