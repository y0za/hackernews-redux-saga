var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  entry: (baseConfig.entry || []).concat([
    'webpack-hot-middleware/client?reload=true'
  ]),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
})
