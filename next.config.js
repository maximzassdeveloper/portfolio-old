const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')

    return config
  },
  sassOptions: {
    additionalData: '@import "vars";',
    includePaths: [path.join(__dirname, 'src', 'styles')]
  },
}

module.exports = nextConfig
