
var Person=function(){
    this.a=1
}
Person.prototype={
    b:2,
    constructor:Person
}
Object.prototype.c=3
var person=new Person()
// 原型链
console.log(person.__proto__===Person.prototype)//true
console.log(Person.prototype.__proto__===Object.prototype)//true
console.log(Object.prototype.__proto__)//null
// 特殊情况
console.log(Object.__proto__===Function.prototype)//true
console.log(Function.__proto__===Function.prototype)//true
//由此得出
console.log(Function.__proto__===Object.__proto__)//true
console.log(person.a)
console.log(person.b)
console.log(person.c)
//属性是否存在
//1.检查是否存在自身而不是原型链
console.log(person.hasOwnProperty('a'))
console.log(person.hasOwnProperty('b'))
console.log(person.hasOwnProperty('c'))
//2.检查是否存在原型链
console.log('a' in person)
console.log('b' in person)
console.log('c' in person)
console.log("------")
console.log(person.constructor==Person)
console.log(Person.prototype.constructor==Person)

console.log("es6")
console.log(Object.getPrototypeOf(person))
//constructor
console.log('constructor')
console.log(person.constructor===Person)
console.log(person.constructor)
/** 
 * person:{
 *   a:1,
 *   '__proto__':Person.prototype={
 *        b:2,
 *        '__proto__':Object.prototype={
 *            c:3,
 *            //不存在'__proto__'
 *        }
 *    }
 * } 
 */
