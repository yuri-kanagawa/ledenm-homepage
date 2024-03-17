const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

module.exports = {
  output: 'export',
  experimental: {
    appDir: true
  },
  reactStrictMode: true
}
