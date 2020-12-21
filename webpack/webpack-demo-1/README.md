# 安装 webpack

```
npm install webpack webpack-cli --save-dev
```

# 查看仓库版本

```
./node_modules/.bin/webpack -v
```

# 初识 webpack

..webpack 构成

# 简单实用

....

# npm script 运行

....

# 核心概念

## Entry

## Output

## Loaders

| 名称          | 描述                          |
| ------------- | ----------------------------- |
| babel-loader  | 转换 es6,es7 等 js 新特性语法 |
| css-loader    | 支持.css 文件的加载和解析     |
| less-loader   | 将 less 文件转换成 css        |
| ts-loader     | 将 Ts 转换为 js               |
| file-loader   | 进行图片,文字等打包           |
| raw-loader    | 将文件以字符串的形式导入      |
| thread-loader | 多进程打包 js 和 css          |

## Plugins

| 名称                     | 描述                                             |
| :----------------------- | ------------------------------------------------ |
| CommonsChunkPlugin       | 将 chunks 相同的模块代码提取为公共 js            |
| CleanWebpackPlugin       | 清理构建目录                                     |
| ExtractTextWebpackPlugin | 将 css 从 bunlde 文件里提取成一个独立的 css 文件 |
| CopyWebpackPlugin        | 将文件或者文件夹拷贝到构建的输出目录             |
| HtmlWebpackPlugin        | 创建 html 文件去承载输出 bundle                  |
| UglifyjsWebpackPlugin    | 压缩 js                                          |
| ZipWebpackPlugin         | 将打包出的资源生成一个 zip 包                    |

```
'use strict';
const path=require('path')
module.exports={
    entry:{
        index:'./src/index.js',
        search:'./src/search.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    <!-- 插件 -->
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html})
    ]
    mode:'production'
}
```

## Mode

### mode的内置函数功能

| 选项        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| development | 设置`process.env.NODE_ENV`的值为`development`,开启`NamedChunksPlugin`和`NamedModulesPlugin` |
| production  | 设置`process.env.NODE_ENV`的值为production,开启`FlagDependencyusagePlugin`,`FlagIncludedChunksPlugin`,`ModuleConcatenationPlugin`,`NoEmitOnErrorsPlugin`,`OccurrenceOrderPlugin`,`SideEffectsFlagPlugin`和`TerserPlugin` |
| none        | 不开启                                                       |

