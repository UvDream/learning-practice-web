/*
 * @Author: wangzhongjie
 * @Date: 2020-04-03 14:54:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-27 10:48:20
 * @Description:类
 * @Email: UvDream@163.com
 */

class Dog {
  constructor(name: string) {
    this.name = name;
  }
  public name: string;
  run() { }
  //   私有属性,只能自己调用
  private pri() { }
  //   受保护成员,类和子类能访问
  protected pro() { }
  //   只读属性
  readonly legs: number = 4;
  //   静态成员,只能类名调用
  static food: string = "bb";
}
console.log(Dog.prototype);
let dog = new Dog("汪汪");
console.log(dog);
// dog.pri();
// dog.pro()
// dog.food;
console.log(Dog.food);

// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string, public num: number) {
    super(name);
    // this一定在super之后
    this.color = color;
  }
  color: string;
}
console.log(Husky.food);

//
// 抽象类
abstract class Animal {
  eat() {
    console.log("吃饭");
  }
  //   抽象方法
  abstract sleep(): void;
}
class Pig extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  sleep() {
    console.log("睡觉");
  }
}
let pig = new Pig("zhu");
pig.eat();
pig.sleep();

// 多态
class Cat extends Animal {
  sleep() {
    console.log("猫睡了");
  }
}
let cat = new Cat();
let animals: Animal[] = [pig, cat];
animals.forEach((i) => {
  i.sleep();
});
// this
class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
// 链式调用
new WorkFlow().step1().step2();
class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}
new MyFlow().next().step1().next();
