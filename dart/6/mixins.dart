/*
1.作为mixin的类只能继承自Object,不能继承其它类
2.作为mixins的类不能有构造函数
3.一个类型可以mixins多个mixins类
4.mixins绝不是继承,也不是接扣,而不是一种全新特性
*/
class A {
  String name = "A的名字";
  printA() {
    print("A");
  }
}

class B {
  printB() {
    print("B");
  }
}

class C with A, B {}

void main() {
  C c = new C();
  c.printA();
  c.printB();
  print(c.name);
}
