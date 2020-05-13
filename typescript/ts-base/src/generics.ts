/*
 * @Author: wangzhongjie
 * @Date: 2020-04-09 20:53:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-09 21:18:52
 * @Description:泛型
 * @Email: UvDream@163.com
 */
function log<T>(value: T): T {
  console.log(value);
  return value;
}
log<string[]>(["a", "b"]);
log(["a", "b"]);

type Log = <T>(value: T) => T;
let mylog: Log = log;
interface Logs<T> {
  (value: T): T;
}
let mylogs: Logs<number> = log;

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
