/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
 /*    images: {
      domains: ['lh3.googleusercontent.com'],
    }, */
  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          
        },
      ],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
 
  
  module.exports = nextConfig