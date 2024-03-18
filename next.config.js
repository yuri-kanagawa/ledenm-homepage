const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    runtime: 'experimental-edge',
    appDir: true
  },
  reactStrictMode: true,
  swcMinify: true
}
