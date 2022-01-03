const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/icons'),
  images: {
    disableStaticImages: true
  },
  env: {
    OPEN_SEA_BASE_URL: process.env.OPEN_SEA_BASE_URL,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config, options) {
      config.module.rules.push({
    test: /\.mp3$/,
    use: {
      loader: 'url-loader',
    },
  });
  return config
  }
})
