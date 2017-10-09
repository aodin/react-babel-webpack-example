const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash:12].css',
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Example HTML',
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      minChunks: function(module, count) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            },
          }
        ]
      }
    ]
  }
};
