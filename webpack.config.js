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
      { test: /\.txt.html$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      serviceWorker: '/service-worker.js',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      {from: './lib/service-worker.js', to: './service-worker.js'},
    ]),
  ],
};

if (isDev) {
  conf = Object.assign(conf, {
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      compress: true,
      port: 3000,
    }
  });
}

module.exports = conf;
