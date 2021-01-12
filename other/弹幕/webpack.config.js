const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports={
    entry:'./src/js/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src/index.html')
        })
    ],
    devServer:{
        contentBase:'./',
        open:true
    }
}
