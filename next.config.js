
const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/dotalobbysquad" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: prefix,
  assetPrefix: prefix,
}

module.exports = nextConfig