/*
 * @Author: wangzhongjie
 * @Date: 2021-07-12 14:07:41
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-12 14:42:01
 * @Description: 
 * @Email: UvDream@163.com
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { options } = require('less');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const rootDir = process.cwd();

module.exports = {
  entry: path.resolve(rootDir, 'src/index.js'),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'bundle.[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        include: path.resolve(rootDir, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        // use: ['style-loader', 'css-loader', 'less-loader'],
        use: [
          MiniCssExtractPlugin.loader,
        //   'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                compileType: 'module',
                localIdentName: "[local]__[hash:base64:5]",
              },
            },
          },
          'less-loader',
          {
              loader:'postcss-loader',
              options:{
                  postcssOptions:{
                      plugin:[
                          ['autoprefixer']
                      ]
                  }
              }
          },
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new OptimizeCssPlugin(),
  ],
}
