
const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/dotalobbysquad" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: prefix,
  assetPrefix: prefix,
}

module.exports = nextConfig