/*
 * @Author: wangzhongjie
 * @Date: 2020-05-08 19:49:12
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-08 20:08:59
 * @Description:类型推断
 * @Email: UvDream@163.com
 */
/*
! 从右向左推断
*/
let a = 1;
let b = [1, null];

let c = (x1 = 1) => x1 + 1;

// window.onkeydown = (event) => {
//   console.log(event);
// };
interface Foo {
  bar: number;
}
// let foo = {} as Foo; //类型断言,避免滥用
// foo.bar = 1;
let foo: Foo = {
  bar: 1,
};

/*
 *类型兼容
 */
let s: string = "a";
s = null;

/**
 * @description: 接口兼容
 */
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let x2: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };
x2 = y;
// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}
// 1)
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2);
