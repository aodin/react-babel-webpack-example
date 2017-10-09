const path = require('path');

const merge = require('webpack-merge');

const common = require('./webpack.common.js');


module.exports = merge(common, {
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: []
});
