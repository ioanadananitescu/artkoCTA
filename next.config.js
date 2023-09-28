/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
      serverActions:true
    },
  images: {
      domains: ['res.cloudinary.com'],
    }, 
  
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
    webpack:(config, {isServer}) => {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      if (!isServer) {
        // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
            fs: false
        }
    }
      
      return config
    }
  }
 
  
  module.exports = nextConfig