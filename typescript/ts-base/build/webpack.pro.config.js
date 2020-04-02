const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        // 清空dist目录
        new CleanWebpackPlugin()
    ]
}
