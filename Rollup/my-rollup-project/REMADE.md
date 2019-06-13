# rollup src/main.js -f cjs
-f 选项（--output.format 的缩写）指定了所创建 bundle 的类型——这里是 CommonJS（在 Node.js 中运行）。由于没有指定输出文件，所以会直接打印在 stdout 中

# rollup src/main.js -o bundle.js -f cjs
你也可以用 rollup src/main.js -f cjs > bundle.js，但是我们之后会提到，这种方法在生成 sourcemap 时灵活性不高。）
```
rollup --config rollup.config.dev.js
rollup --config rollup.config.prod.js
```