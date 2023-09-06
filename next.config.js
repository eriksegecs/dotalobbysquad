
const isProd = process.env.NODE_ENV === "production"
const prefix = isProd ? "/dotalobbysquad" : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = {
  basePath: prefix,
  assetPrefix: prefix,
}
