/*
 * @Author: wangzhongjie
 * @Date: 2020-05-27 06:30:20
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-27 06:56:54
 * @Description: with
 * @Email: UvDream@163.com
 */ 
var a={
    name:"张三",
    age:18,
    sex:()=>{
        return "男"
    }
}
with(a){
    var n=name;
    var s=sex()
}
console.log(n,s)//张三,男
function toAdd(num1,num2){
    arguments[1]=10
    console.log(arguments[0]+num2)
}
toAdd(1,2)