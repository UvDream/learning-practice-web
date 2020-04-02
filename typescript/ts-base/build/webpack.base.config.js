const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry: './src/index.ts',
    // 输出
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            // ts
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 开启html首页
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ]
}
