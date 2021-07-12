/*
 * @Author: wangzhongjie
 * @Date: 2021-07-12 14:07:53
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-12 14:08:56
 * @Description: 
 * @Email: UvDream@163.com
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: '3001', // 默认是 8080
    hot: true,
    stats: 'errors-only', // 终端仅打印 error
    compress: true, // 是否启用 gzip 压缩
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:80',
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
});
