var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var env = process.env.NODE_ENV;

var isDev = env === 'development';
var isProd = env === 'production';

let conf = {
  watch: false ,
  mode: isProd ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt.html$/, use: 'raw-loader' },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      serviceWorker: '/service-worker.js',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      {from: './service-worker.js', to: './service-worker.js'},
    ]),
  ],
};

module.exports = conf;
