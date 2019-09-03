/*
 * @Author: wangzhongjie
 * @Date: 2019-09-03 10:15:47
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-09-03 10:18:38
 * @Description: 多态
 * @Email: UvDream@163.com
 */
abstract class Animal {
  // 父类方法不实现,让子类去实现,子类多元化操作就是多态
  eat(); //抽象方法
}

class Dog extends Animal {
  @override
  eat() {
    print('小狗');
  }

  @override
  run() {
    print("小狗在跑");
  }
}

class Cat extends Animal {
  @override
  eat() {
    print("小猫");
  }

  @override
  run() {
    print("小猫在睡觉");
  }
}

void main() {
  Dog d = new Dog();
  d.eat();
  d.run();
  Cat c = new Cat();
  c.eat();
  // 多态
  Animal a = new Dog();
  a.eat();
}
