/*
 * @Author: wangzhongjie
 * @Date: 2019-09-03 10:52:26
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-09-03 10:57:33
 * @Description: 继承和mixins
 * @Email: UvDream@163.com
 */
class Person {
  String name;
  num age;
  Person(this.name, this.age);
  printInfo() {
    print("Person");
  }
}

class A {
  String name = "A的名字";
  printA() {
    print("A");
  }

  void run() {
    print("a.run");
  }
}

class B {
  printB() {
    print("B");
  }

  void run() {
    print("b.run");
  }
}

class C extends Person with A, B {
  C(String name, num age) : super(name, age);
}

void main() {
  C c = new C('张三', 11);
  c.printA();
  c.printB();
  c.printInfo();
  print(c.name);
  c.run();
}
