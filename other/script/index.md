# zx

> 为了更好的用`javascript`写脚本

# 安装

```Bash
npm install -g zx
```

> Node Version≥16.0.0

# 使用

## 基本使用

`zx`使用`javascript`写脚本有两种文件格式

- `*.mjs`
- `*.js`
  `js`文件不能直接`await`必须
  ```JavaScript
  void async function () {
    await ...
  }()
  ```

## 扩展使用

### 执行`markdown`编写的脚本

```JavaScript
zx ./index.md
```

### 执行`typescrpt`脚本

```TypeScript
import {$} from 'zx'
// Or
import 'zx/globals'

void async function () {
  await $`ls -la`
}()
```

- 使用`ts-node`作为 node 的 loader

```Bash
node --loader ts-node/esm script.ts
```

- 你需要设置`package.json`以及`tsconfig.json`
- `package.json`
  ```JSON
  {
    "type": "module"
  }
  ```
- `tsconfig.json`
  ```JSON
  {
    "compilerOptions": {
      "module": "ESNext"
    }
  }
  ```

### 加载远程脚本

```Bash
zx https://medv.io/example-script.mjs
```

# 一些方法

## `cd()`

进入目录

```TypeScript
cd('/tmp')
await $`pwd` // outputs /tmp
```

## `fetch()`

```TypeScript
let resp = await fetch('http://wttr.in')
if (resp.ok) {
  console.log(await resp.text())
}
```

## `question()`

提问的形式获取你的输入参数

```TypeScript
#!/usr/bin/env zx
let q1 = await question("我帅吗");
console.log(q1);
let q2 = await question("我需要获取你的参数", {
  choices: Object.keys(process.env),
});
console.log(q2);

```

## `sleep()`

类似`setTimeout`的一个函数

```TypeScript
await sleep(1000)

```

## `nothrow`

改变$的行为，使其在非零退出码上不抛出异常

# 包

## `chalk`

[chalk - npm (npmjs.com)](https://www.npmjs.com/package/chalk)

```TypeScript
console.log(chalk.blue('Hello world!'))
```

## `yaml`

[yaml - npm (npmjs.com)](https://www.npmjs.com/package/yaml)

```TypeScript
console.log(YAML.parse('foo: bar').foo)
```

## `fs`

[fs-extra - npm (npmjs.com)](https://www.npmjs.com/package/fs-extra)

```TypeScript
let content = await fs.readFile('./package.json')
```

## `globby`

读取目录下所有同名文件

[sindresorhus/globby: User-friendly glob matching (github.com)](https://github.com/sindresorhus/globby)

```TypeScript
let packages = await globby(['package.json', 'packages/*/package.json'])

let pictures = globby.globbySync('content/*.(jpg|png)')
```

```TypeScript
await $`svgo ${await glob('*.svg')}`
```

## `os`

[https://nodejs.org/api/os.html](https://nodejs.org/api/os.html)

```TypeScript
await $`cd ${os.homedir()} && mkdir example`
```

## `path`

[Path | Node.js v17.4.0 Documentation (nodejs.org)](https://nodejs.org/api/path.html)

```TypeScript
await $`mkdir ${path.join(basedir, 'output')}`
```

## `minimist`

[minimist - npm (npmjs.com)](https://www.npmjs.com/package/minimist)

# 配置

## `$.shell`

设置指定的`shell`工具

```TypeScript
$.shell = '/usr/bin/bash'
```

## `$.prefix`

设置命令行前缀

默认是`set -euo pipefail`或者使用 cli 指令`--prefix='set -e;`

## `$.quote`

指定在命令替换期间转义特殊字符的函数

## `$.verbose`

指定详细信息,默认是`true`
