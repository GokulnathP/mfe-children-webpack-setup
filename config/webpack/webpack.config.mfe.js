const Dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const DynamicContainerPathPlugin = require('dynamic-container-path-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

Dotenv.config({ path: './config/env/.env.mfe' });

module.exports = (env) => {
  const { PORT = '3002' } = env;

  const developmentConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      host: 'localhost',
      port: PORT,
      hot: true,
      open: true,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    },
    output: {
      publicPath: 'auto',
      filename: 'mfe1.[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          loader: 'babel-loader',
          exclude: /node-modules/,
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
        {
          test: /\.ts|tsx$/,
          use: 'ts-loader',
          exclude: /node-modules/,
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'mfe1',
        filename: 'remote-mfe1.js',
        library: { type: 'var', name: 'mfe1' },
        exposes: {
          './MFE1': './src/App',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: '18.2.0' },
          'react-dom': { singleton: true, eager: true },
        },
      }),
      new DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
      new DynamicContainerPathPlugin({
        iife: () => 'http://localhost:3002/',
        entry: 'dev',
      }),
    ],
  };

  return merge(commonConfig, developmentConfig);
};
