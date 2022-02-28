const withTM = require("next-transpile-modules")(['ui', 'payments'])

module.exports = withTM({
  reactStrictMode: true
})
