const withPWA = require('next-pwa')({
  output: 'export',
  dest: 'public',
  register: true,
  skipWaiting: true
})

module.exports = {
  reactStrictMode: true
}
