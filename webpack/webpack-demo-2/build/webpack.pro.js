/*
 * @Author: wangzhongjie
 * @Date: 2021-07-12 14:08:14
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-12 14:09:29
 * @Description: 
 * @Email: UvDream@163.com
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
});
