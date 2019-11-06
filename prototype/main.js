/*
 * @Author: wangzhongjie
 * @Date: 2019-09-10 17:32:57
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-09-10 17:32:57
 * @Description:原型原型链
 * @Email: UvDream@163.com
 */
function Person(name) {
  this.name = name;
  this.say = function() {
    console.log(this.name);
  };
}
let dog = new Person("dog");
let pig = new Person("pig");
dog.say();
pig.say();
console.log(dog.say === pig.say);
//以上两个结果是不同的,也就是每个实例对象都有自己的一套自己的属性和方法,这样显然很浪费
//这时候的浪费就需要Prototype来解决
function Animal(name) {
  this.name = name;
}
Animal.prototype.say = function() {
  console.log(this.name);
};
Animal.prototype.age = 18;
let cat = new Animal("cat");
let snack = new Animal("snack");
cat.say();
snack.say();
console.log(cat.say === snack.say);
console.log(cat.age, snack.age);
console.log(Animal.constructor);
console.log(Animal.prototype.constructor);
console.log(cat.constructor);
