/*
 * @Author: wangzhongjie
 * @Date: 2020-04-09 20:36:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-04-12 22:15:50
 * @Description:类与接口
 * @Email: UvDream@163.com
 */
interface Human {
  name: string;
  eat(): void;
}
// class implements interface 类实现接口
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() { }
  sleep() { }
}
// 接口只能约束类的共有成员
// interface extends interface 接口继承接口
interface Man extends Human {
  run(): void;
}
interface Child {
  cry(): void;
}
interface Boy extends Man, Child { }
let boy: Boy = {
  name: "",
  run() { },
  eat() { },
  cry() { },
};

//接口继承类
class Auto {
  state = 1;
  //   private state2 = 0;
}
// interface extends class 接口继承类
interface AutoInterface extends Auto { }
// class extends interface 类继承接口
class C implements AutoInterface {
  state = 1;
}
class Bus extends Auto implements AutoInterface { }
