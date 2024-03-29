/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    sassOptions: {
        includePaths: [ path.join(__dirname, 'styles') ],
    },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uptime.betterstack.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
