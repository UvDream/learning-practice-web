/*
 * @Author: wangzhongjie
 * @Date: 2020-05-26 06:57:52
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-26 07:12:49
 * @Description: 乘性操作符
 * @Email: UvDream@163.com
 */ 

// 乘法(*)
// 1.NAN*?或者?*NAN=>NAN
// 2.Infinity*0=>NAN
// 3.Infinity*非0=>Infinity或者-Infinity
// 4.Infinity*Infinity=>Infinity
// 5.如果有一个不是数值,则内部调用Number将其转换为数值
console.log(Infinity*Infinity)

// 除法(/)
// 1.NAN/?或者?/NAN=>NAN
// 2.Infinity/Infinity=>NAN
// 3.0/0=>NAN
// 4.?/0=>Infinity或者-Infinity
// 5.Infinity/非0=>Infinity或者-Infinity
// 6.如果有一个不是数值,则内部调用Number将其转换为数值

// 求模(%)
// 1.无穷大值%有限大=>NAN
// 2.0%有限大数值=>NAN
// 3.Infinity%Infinity=>NAN
// 4.有限大数值%无穷大数值=>被除数
// 5.?%0=>0