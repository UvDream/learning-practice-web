/*
 * @Author: wangzhongjie
 * @Date: 2020-05-26 06:27:11
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-26 06:50:07
 * @Description: 布尔操作符
 * @Email: UvDream@163.com
 */ 
// 逻辑非(!val)
// 1.对象=>false
// 2.空字符串=>true
// 3.非空字符串=>true
// 4.0=>true
// 5.非0数值(包括Infinity)=>false
// 6.null=>true
// 7.NAN=>true
// 8.undefined=>true


// 逻辑与(&&)
// 共同成立才返回true
// 1.obj&&? =>返回第二个
// 2.?&&obj=>第一个操作数求值为true的情况下才返回该对象
// 3.obj&&obj=>返回第二个操作数
// 4.null&&?=>返回null
// 5.NAN&&?=>返回NAN
// 6.undefined&&?=>undefined
var a=true
//var res1=(a&&s)
//console.log(res1) //发生错误  Uncaught ReferenceError: s is not defined

// 逻辑或(||)
// 一个条件成立即成立
// 1.obj&&? =>返回第一个
// 2.第一个求值为false=>返回第二个操作数
// 3.obj||obj=>返回第一个值
// 4.null||null=>null
// 5.NAN||NAN=>NAN
// 6.undefined||undefined=>undefined
// eg1
var res2=(a||s)
console.log(res2) //true
// eg2
var b=false
//var res3=(b||s)
//console.log(res3) //发生错误 ReferenceError: s is not defined
