/*
 * @Author: wangzhongjie
 * @Date: 2020-06-01 06:42:59
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-04 06:15:48
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

const obj = {
    foo: 1,
    get bar() {
      return 2;
    }
  };
  
  let copy = Object.assign({}, obj);
  console.log(copy); // { foo: 1, bar: 2 } copy.bar的值来自obj.bar的getter函数的返回值
  
  // 下面这个函数会拷贝所有自有属性的属性描述符
  function completeAssign(target, ...sources) {
    sources.forEach(source => {
      let descriptors = Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});
  
      // Object.assign 默认也会拷贝可枚举的Symbols
      Object.getOwnPropertySymbols(source).forEach(sym => {
        let descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }
  
  copy = completeAssign({}, obj);
  console.log(copy);
  // { foo:1, get bar() { return 2 } }

// Object.is()
console.log(Object.is('foo','foo'))
let foo={a:1}
let bar={age:1}
console.log(Object.is(foo,foo))
console.log(Object.is(foo,bar))
