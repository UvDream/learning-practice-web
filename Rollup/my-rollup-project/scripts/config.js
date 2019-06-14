const aliases = require('./alias')
const path = require('path')
const flow = require('rollup-plugin-flow-no-whitespace')
const alias = require('rollup-plugin-alias')
import json from 'rollup-plugin-json'
import { version } from '../package.json';



const banner =
  '/*!\n' +
  ` * Vue.js v${version}\n` +
  ` * (c) 2014-${new Date().getFullYear()} UvDream\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const resolve = p => {
  const base = p.split('/')[0]
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, '../', p)
  }
}

const builds={
  'web-full-dev': {
    entry: resolve('src/main.js'),
    dest: resolve('dist/UV.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  },
}
function genConfig(name){
  console.log("获取名字",name)
  const opts = builds[name]
  console.log(opts)
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [
      flow(),
      json(),
      alias(Object.assign({}, aliases, opts.alias))
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || 'Vue'
    },
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    }
  }
  return config

}
  if (process.env.TARGET) {
    console.log("1111",process.env.TARGET)
    module.exports = genConfig(process.env.TARGET)
  }