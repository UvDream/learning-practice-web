/*
 * @Author: wangzhongjie
 * @Date: 2020-04-03 14:07:04
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-03 14:17:59
 * @Description:接口
 * @Email: UvDream@163.com
 */
let adds: (x: number, y: number) => number;
// 接口定义函数
interface Aadd {
  (x: number, y: number): number;
}
// 类型别名
type Add = (x: number, y: number) => number;
let ad: Add = (a, b) => a + b;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0";
  lib.doSomething = () => {};
  return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
lib2();
