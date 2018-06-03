const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = function(dir) {
  return path.resolve(__dirname, '..', dir);
};

module.exports = {
  entry: resolve('src/main'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: resolve('src'),
    port: 8081
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              fallback: 'file-loader'
            }
          }
        ]
      },
      {
        test: /\.svg/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.HotModuleReplacementPlugin()]
};
