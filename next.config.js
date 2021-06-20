const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/icons'),
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
