
var config = require('./webpack.config');
var CompressionPlugin = require('compression-webpack-plugin');
config.mode='production';
config.plugins.push(
  new CompressionPlugin({
    filename: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$/,
    minRatio: 0.8
  })
);
module.exports = config;