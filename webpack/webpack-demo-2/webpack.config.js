const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  devServer:{
    port:'3001',
    hot:true,
    stats:'errors-only',
    compress:true,

  },
  devtool:"eval-cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    })
  ]
}
