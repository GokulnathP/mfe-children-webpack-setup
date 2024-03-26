const path = require('path');
const Dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const ReactRefreshTypeScript = require('react-refresh-typescript')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

Dotenv.config({ path: './config/env/.env.dev' });

module.exports = (env) => {
  const { PORT = '3001' } = env;

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
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          loader: 'babel-loader',
          exclude: /node-modules/,
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: [require.resolve('react-refresh/babel')]
          },
        },
        {
          test: /\.ts|tsx$/,
          loader: require.resolve('ts-loader'),
          exclude: /node-modules/,
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({ before: [ReactRefreshTypeScript()] })
          }
        },
      ],
    },
    plugins: [
      new DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
      new ReactRefreshPlugin(),
    ],
  };

  return merge(commonConfig, developmentConfig);
}
