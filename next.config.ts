import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // Optional, leave empty unless specific port is needed
        pathname: '/**', // Optional, allows all paths under this domain
      }
    ],
  }
  /* config options here */
};

export default nextConfig;
