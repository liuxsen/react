const webpack = require('webpack');
const webpackBuildConfig = require('./webpack.base.config');

webpack(webpackBuildConfig, function(err, stats) {
  if (err) throw err;
  console.log('  Build complete.\n');
});
