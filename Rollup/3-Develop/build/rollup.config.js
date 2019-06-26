const path = require('path');
const babel = require('rollup-plugin-babel');
const serve = require('rollup-plugin-serve');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = {
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd',
    sourcemap: true, // 开发模式，开启sourcemap文件的生成
  }, 
  plugins: [
    // 使用和配置babel编译插件
    babel({
      "presets": [
        ["env", {
          "modules": false
        }],
      ],
      "plugins": [
        "transform-object-rest-spread",
      ],
    }),
    // 使用开发服务插件
    serve({
      port: 3001,
      // 设置 exmaple的访问目录和dist的访问目录
      contentBase: [resolveFile('example'), resolveFile('dist')]
    })
  ],
}
