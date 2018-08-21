import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const CopyWebpackPlugin = require('copy-webpack-plugin');


const conf = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      serviceWorker: '/service-worker.js',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      {from: './public/service-worker.js', to: './service-worker.js'}
    ]),
  ],
};

export default conf;
