/*
 * @Author: wangzhongjie
 * @Date: 2021-07-12 14:07:41
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-12 15:16:43
 * @Description: 
 * @Email: UvDream@163.com
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除上次构建产物
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { options } = require('less');
// 自动加前缀
const autoprefixer = require('autoprefixer');
// 拆分css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const rootDir = process.cwd();

module.exports = {
    entry: path.resolve(rootDir, 'src/index.ts'),
    output: {
        path: path.resolve(rootDir, 'dist'),
        filename: 'bundle.[contenthash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            {
                test: /\.(jsx|js)$/,
                use: 'babel-loader',
                include: path.resolve(rootDir, 'src'),
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                type: 'asset',
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
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugin: [
                                    ['autoprefixer']
                                ]
                            }
                        }
                    },
                ]
            },
        ]
    },
    resolve:{
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        //   html处理
        new HtmlWebpackPlugin({
            template: path.resolve(rootDir, 'public/index.html'),
            inject: 'body',
            scriptLoading: 'blocking',
        }),
        // 清除上次构建产物
        new CleanWebpackPlugin(),
        // 拆分css
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        //   压缩css
        new OptimizeCssPlugin(),
    ],
}
