/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Generates static files in /out — required for Cloudflare Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,     // Already set — required for static export
  },
}

export default nextConfig
