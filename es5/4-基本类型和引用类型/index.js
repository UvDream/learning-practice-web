/*
 * @Author: wangzhongjie
 * @Date: 2020-05-28 06:15:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-29 06:45:20
 * @Description: 基本类型和引用类型
 * @Email: UvDream@163.com
 */ 

// 1.动态属性
// 基本类型
var name="张三"
// name.age=1
console.log(name.age) //不会出现错误,但是undefined
// 复制变量值
var num1=5
var num2=num1
num2=7
console.log(num1,num2)

var obj1=new Object()
var obj2=obj1
obj1.name="张三"
console.log(obj2.name)
// 传递参数
function add(num){
    num+=10
    return num
}
var count=20
var result=add(count)
console.log(count)//20
console.log(result)//30


function setName(obj){
    obj.name="张三"
    obj=new Object()
    obj.name="李四"
}
var person=new Object()
setName(person)
console.log(person) //{name:"张三"}

// 2.检测类型
var a="张三"
var b=true
var c=22
var d;
var e=null
var f=new Object()
console.log("检测类型")
console.log(typeof(a))//string
console.log(typeof(b))//boolean
console.log(typeof(c))//number
console.log(typeof(d))//undefined
console.log(typeof(e))//object
console.log(typeof(f))//object
