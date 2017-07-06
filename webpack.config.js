'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('component-styles.css');
var path = require('path');

/*
 * Default webpack configuration for development
 */
var config = {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill', __dirname + '/app/AppEntry.js'],
  output: {
    path: __dirname + '/app/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          failOnWarning: false,
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader?parser=postcss-scss'])
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: './app/public',
    historyApiFallback: true,
    inline: true
  }
};

if ('development' === process.env.NODE_ENV) {
  console.log('In development mode, lets setup some environment variables');
  config.plugins.push(...[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]);
}

module.exports = config;
