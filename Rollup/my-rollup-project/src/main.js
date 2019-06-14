// src/main.js
import foo from './foo.js';
import { version } from '../package.json';

export default function () {
  console.log("测试",foo);
  console.log('version ' + version);
}
