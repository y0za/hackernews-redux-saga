var path = require('path')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: projectRoot
      }
    ]
  }
}
