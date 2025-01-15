import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/v1/search/:path*',
        destination: 'https://openapi.naver.com/v1/search/:path*',
      },
    ];
  },
};

export default nextConfig;
