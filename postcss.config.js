var webpack = require('webpack');
module.exports = {
  plugins: [
    require('postcss-import')({addDependencyTo: webpack}),
    require('autoprefixer')
  ]
};