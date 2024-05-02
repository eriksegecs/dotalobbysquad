
/** @type {import('next').NextConfig} */

const basePath = '/dotalobbysquad'

const nextConfig = {
  basePath: basePath,
  output: 'export',
  images: {
    domains: ['avatars.steamstatic.com', 'uploadthing.com', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig