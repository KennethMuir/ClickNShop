/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  // Disable Turbopack and use webpack instead
  webpack: (config, { isServer }) => {
    // Fix module resolution for @/ aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': false, // Will be handled by jsconfig.json
    }
    return config
  },
  // Enable experimental features for better compatibility
  experimental: {
    // https://nextjs.org/docs/app/building-your-application/optimizing/soft-opt-in
    optimizeServerReact: true,
    // Disable turbolinks for API routes
    turbo: {
      webpackConfig: {
        resolve: {
          alias: {
            '@': path.join(__dirname, 'src')
          }
        }
      }
    }
  },
}

module.exports = nextConfig