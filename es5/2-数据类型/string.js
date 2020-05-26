/*
 * @Author: wangzhongjie
 * @Date: 2020-05-22 06:33:54
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-22 06:47:14
 * @Description: toString
 * @Email: UvDream@163.com
 */ 
// toString()
// 1.基本使用,null/undefined无法转换
var number=11
console.log(number.toString())
// var a=null
// console.log(a.toString())
// var b=undefined
// console.log(b.toString())
// 2.toString()默认无需参数,也可以传入一个数值参数,为进制参数
console.log(number.toString())//11
console.log(number.toString(2))//1011
console.log(number.toString(8))//13
console.log(number.toString(10))//11
console.log(number.toString(16))//b
// String(),在值不知道是不是null或者undefined的时候可以利用String()转换
// 1.有toString()方法,返回对应结果
//2.如果是null,则返回"null"
//3.如果是undefined,则返回"undefined"
console.log(String(10))//"10"
console.log(String(true))//"true"
console.log(String(null))//"null"
console.log(String(undefined))//"undefined"

