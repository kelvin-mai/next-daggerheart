/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/create',
        destination: '/card/create',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
