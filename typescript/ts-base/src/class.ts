/*
 * @Author: wangzhongjie
 * @Date: 2020-04-03 14:54:07
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-03 15:05:50
 * @Description:类
 * @Email: UvDream@163.com
 */
class Dog {
  constructor(name: string) {
    this.name = name;
  }
  public name: string;
  run() {}
  //   私有属性,只能自己调用
  private pri() {}
  //   受保护成员,类和子类能访问
  protected pro() {}
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
