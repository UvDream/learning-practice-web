/*
 * @Author: wangzhongjie
 * @Date: 2020-06-11 06:44:55
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-11 07:00:12
 * @Description: Date
 * @Email: UvDream@163.com
 */ 
let now=new Date()
console.log("现在的时间是:",now)
let someDate=new Date("May 25,2004")
console.log(someDate)
//toDateString():返回格式: 星期 月 日 年
console.log(now.toDateString())
// toTimeString（）:返回格式:时 分 秒 时区
console.log(now.toTimeString())
// toLocaleDateString()特定时区 年 月 日
console.log("toLocaleDateString",now.toLocaleDateString())
// toLocaleTimeString()特定时区 时 分 秒
console.log(now.toLocaleTimeString())