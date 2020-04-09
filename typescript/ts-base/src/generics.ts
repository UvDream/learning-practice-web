/*
 * @Author: wangzhongjie
 * @Date: 2020-04-09 20:53:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-09 20:59:37
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
