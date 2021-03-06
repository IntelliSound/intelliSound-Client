'use strict';

require('dotenv').config();

const {DefinePlugin, EnvironmentPlugin} = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const webPackConfig = module.exports = {};

const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

//=======================================

webPackConfig.entry = `${__dirname}/src/main.js`;
webPackConfig.output = {
  path: `${__dirname}/build`,
  filename: 'bundle.[hash].js',
},

//=======================================

webPackConfig.plugins = [
  new HTMLWebpackPlugin({title : 'intelliSound'}),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __API_URL__ : JSON.stringify(process.env.API_URL),
  }),
  new ExtractTextPlugin('bundle.[hash].css'),
];

if(PRODUCTION) {
  webPackConfig.plugins = webPackConfig.plugins.concat([
    new UglifyPlugin(),
    new CleanPlugin(),
  ]);
}

//=======================================

webPackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.(jpg|gif|png|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'image/[name].[hash].[ext]',
        },
      }],
    },
    {
      test:  /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [`${__dirname}/src/style`],
            },
          },
        ],
      }),
    },
  ],
};

webPackConfig.devtool = PRODUCTION ? undefined : 'eval-source-map';

webPackConfig.devServer = {
  historyApiFallback: true,
};
