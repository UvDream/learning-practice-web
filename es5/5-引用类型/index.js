/*
 * @Author: wangzhongjie
 * @Date: 2020-06-01 06:42:59
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-02 06:52:23
 * @Description: 引用类型
 * @Email: UvDream@163.com
 */ 

var person=new Object()
person.name="张三"
person.age=18


var person={
    name:"张三",
    age:18
}
// Object.assign(target, ...sources)target=目标对象,sources=源对象
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

console.log(returnedTarget);