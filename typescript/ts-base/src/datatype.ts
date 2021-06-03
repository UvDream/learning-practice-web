/*
 * @Author: wangzhongjie
 * @Date: 2020-04-02 16:46:58
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-06-02 17:57:02
 * @Description:数据类型
 * @Email: UvDream@163.com
 */
// 原始数据类型
let bool: boolean = true;
let num: number = 123;
let str: string = "abc";
// str = 123;

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3, 4];
// 联合类型
let arr3: Array<number | string> = [1, 2, 3, 4, "abc"];

//
// 元祖

let ancestor: [number, string] = [0, "1"];
ancestor.push(2);
// 元祖可以插入元素,但是不可以访问
console.log(ancestor);
// ancestor[2]

//
// 函数
let add = (x: number, y: number) => x + y;
//函数类型,未实现
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
// let obj: object = { x: 1, y: 2 };
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

// undefined,null
let un: undefined = undefined;
let nu: null = null;
console.log(un == nu);
console.log(un === nu);
// num=nu;这是不允许的,只有let num: number | undefined | null  = 123;

// void
let noReturn = () => { };

// any
let x;
x = 1;
x = [];
x = () => { };

// never
let error = () => {
  throw new Error("error");
};
let endless = () => {
  while (true) { }
};
