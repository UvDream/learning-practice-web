/*
 * @Author: wangzhongjie
 * @Date: 2020-04-09 20:36:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-09 20:44:39
 * @Description:类与接口
 * @Email: UvDream@163.com
 */
interface Human {
  name: string;
  eat(): void;
}
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {}
  sleep() {}
}
// 接口只能约束类的共有成员

interface Man extends Human {
  run(): void;
}
interface Child {
  cry(): void;
}
interface Boy extends Man, Child {}
let boy: Boy = {
  name: "",
  run() {},
  eat() {},
  cry() {},
};

//接口继承类
class Auto {
  state = 1;
  //   private state2 = 0;
}
interface AutoInterface extends Auto {}
class C implements AutoInterface {
  state = 1;
}
class Bus extends Auto implements AutoInterface {}
