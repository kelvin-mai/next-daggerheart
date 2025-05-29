import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/create',
        destination: '/card/create',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
