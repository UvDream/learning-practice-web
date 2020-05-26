/*
 * @Author: wangzhongjie
 * @Date: 2020-05-22 06:58:54
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-22 07:10:09
 * @Description: ++ --
 * @Email: UvDream@163.com
 */ 
// 递增递减操作符规则
// s=a++先赋值后计算 s=++a先计算后赋值
// 1.包含数字的字符串,先转换为数字,在执行操作符
var a="2"
var b=a++
console.log(b,a)//2,3
// 2.不包含有效字符串,则为NAN
var c="z"
console.log(c++)//NAN
// 3.false转换为0再计算,true转换为1再计算
var d=false
console.log(d++)//0
// 4.浮点数时,直接执行
var e=1.1
console.log(++e)
// 5.对象时,先调用valueOf()方法取得一个可供操作的值,然后执行上面规则
var f={
    valueOf:function(){
        return -1
    }
}
console.log(++f)
