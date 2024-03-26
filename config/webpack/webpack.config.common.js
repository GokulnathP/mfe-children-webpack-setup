const path = require('path');
const { ProvidePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBarPlugin = require('webpackbar');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, './src'),
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|eot|ttf|woff|woff2)$/,
        type: 'asset/inline',
      },
      {
        test: /\.gql$/,
        exclude: /node_modules/,
        use: '@graphql-tools/webpack-loader',
      },
    ],
  },
  plugins: [
    new ProvidePlugin({ Promise: 'es6-promise-promise' }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new WebpackBarPlugin({ color: '#00DE00' }),
    new CopyPlugin({ patterns: [{ from: './public/locales', to: 'locales' }] }),
  ],
};
