/*
对象操作符
? 条件运算符
as 类型转换
is 类型判断
.. 级联操作(连缀)
*/

class Person {
  String name;
  int age;
  Person(this.name, this.age) {
    print('这是构造函数内容');
  }
  void getInfo() {
    print("${this.name}---${this.age}");
  }
}

main() {
  // Person p;
  // p?.getInfo();
  // Person p = new Person('呵呵', 12);
  // p?.getInfo();

  // is
  // Person p = new Person('呵呵', 12);
  // if (p is Person) {
  //   p.name = "李四";
  // }
  // p.getInfo();
  // print(p is Object);

  //as
  // var p1;
  // p1 = "";
  // p1 = new Person("王五", 12);
  // p1.getInfo(); //错误
  // (p1 as Person).getInfo();

  Person p1 = new Person("王五", 12);
  p1.getInfo();
  // p1.name = "小子";
  // p1.age = 11;
  // p1.getInfo();

  // .. 连缀操作
  p1
    ..name = "小龟龟"
    ..age = 22
    ..getInfo();
}
