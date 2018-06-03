const path = require('path');
const resolve = function(dir) {
  return path.resolve(__dirname, '..', dir);
};

module.exports = {
  entry: resolve('src/main.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: resolve('src'),
    port: 8081
  },
  resolve: {
    extensions: ['.jsx', '.ts', '.js', '.json']
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
