/*
 * @Author: wangzhongjie
 * @Date: 2019-09-03 10:39:21
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-09-03 10:41:42
 * @Description: 一个类实现多个接口
 * @Email: UvDream@163.com
 */
abstract class A {
  String name;
  printA();
}

abstract class B {
  printB();
}

class C implements A, B {
  @override
  String name;
  @override
  printA() {
    print("A");
  }

  @override
  printB() {
    return null;
  }
}

void main() {
  C c = new C();
  c.printA();
}
