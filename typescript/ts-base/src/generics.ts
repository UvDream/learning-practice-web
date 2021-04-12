/*
 * @Author: wangzhongjie
 * @Date: 2020-04-09 20:53:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-04-12 22:26:27
 * @Description:泛型
 * @Email: UvDream@163.com
 */
function log<T>(value: T): T {
  console.log(value);
  return value;
}
// 调用方式
// 1
log<string[]>(["a", "b"]);
// 2
log(["a", "b"]);

// 定义泛型函数
type Log = <T>(value: T) => T;
let mylog: Log = log;

// 泛型接口
// interface Logs<T> {
//   (value: T): T;
// }
// let mylogs: Logs<number> = log;

// 指定默认类型
interface Logs<T = string> {
  (value: T): T;
}
let mylogs: Logs = log;




class Login<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}
let log1 = new Login<number>();
log1.run(1);
let log2 = new Login();
log2.run("1");

// 泛型约束
interface Length {
  length: number;
}
function out<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
