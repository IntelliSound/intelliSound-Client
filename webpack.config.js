'use strict';

require('dotenv').config();
const PRODUCTION = process.env.NODE_ENV === 'production';
const { EnvironmentPlugin, DefinePlugin } = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

let webpackConfig = module.exports = {};
webpackConfig.entry = `${__dirname}/src/main.js`,
webpackConfig.output = {
  path: `${__dirname}/src/build`,
  filename: 'bundle.[hash].js',
  publicPath: process.env.CDN_URL,
};

webpackConfig.plugins = [
  new htmlWebpackPlugin(),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __API_URL__ : JSON.stringify(process.env.API_URL),
  }),
  new extractTextPlugin('bundle.[hash].scss'),
];

if(PRODUCTION){
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new UglifyPlugin(),
    new CleanPlugin(),
  ]);
}

webpackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader',
    },
  ],
};

webpackConfig.devtool = PRODUCTION ? undefined : 'eval-source-map';
webpackConfig.devServer = {
  historyApiFallback: true,
};
