/*
 * @Author: wangzhongjie
 * @Date: 2020-05-08 19:49:12
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-08 21:00:55
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
// 1)参数个数
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2);

// 可选参数和剩余参数
let a1 = (p1: number, p2: number) => {};
let b1 = (p1?: number, p2?: number) => {};
let c1 = (...args: number[]) => {};
a1 = b1;
a1 = c1;
// 可选参数不可兼容必传参数<strictNullChecks>
b1 = c1;
b1 = a1;
c1 = a1;
c1 = b1;

// 2)参数类型
let handler3 = (a: string) => {};
// hof(handler3);
interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d;
//p2d = p3d; //如果想他通过则tsconfig strictFunctionTypes=false

// 3)返回值类型成员少的兼容多的
let f1 = () => ({ name: "j" });
let g = () => ({ name: "j", age: "12" });
f1 = g;
// g = f1;
// 函数重载

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// 枚举类型兼容性
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Yellow,
}
let fruit: Fruit.Apple;
let no: number = Fruit.Apple;
// let Color:Color.Red=Fruit.Apple //枚举之间不兼容

// 类兼容
class A {
  constructor(p: number, q: number) {}
  id: number = 1;
  // private name: string = "";
}
class B {
  static s = 1;
  constructor(p: number) {}
  id: number = 2;
  // private name: string = "";
}
let aa = new A(1, 2);
let bb = new B(1);
//有私有成员不兼容
aa = bb;
bb = aa;
class C1 extends A {}
let cc = new C1(1, 2);
cc = aa;

//泛型兼容性
interface Empty<T> {
  value: T;
}
// let obj1:Empty<number> ={}
// let obj2:Empty<string>={}
// obj1=obj2

let log3 = <T>(x: T): T => {
  console.log(x);
  return x;
};
let log4 = <T>(y: T): T => {
  console.log(y);
  return y;
};
log3 = log4;
