/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog.melbetsaffiliates.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig
