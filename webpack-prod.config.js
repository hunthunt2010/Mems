'use strict';
var config = require('./webpack.config');
var webpack = require('webpack');
var stripLoader = require('strip-loader');

//Configure strip-loader to remove all occurrences of console.log
var loader = {
  test: /\.js?$/,
  exclude: /node_modules/,
  loader: stripLoader.loader('console.log', 'debug')
};

//Push our strip loader on the the modules array
config.module.rules.push(loader);

config.devtool = false;

config.plugins.push(...[
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({comments: false})
]);

module.exports = config;