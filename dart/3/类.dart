void main() {
  // var p1 = new Person();
  // print(p1.age);
  // p1.getInfo();
  // p1.setInfo(30);
  // p1.getInfo();
  Person p1 = new Person('张三', 12);
  p1.printInfo();
  Person p2 = new Person('李四', 22);
  p2.printInfo();
}

// class Person {
//   String name = "张三";
//   int age = 23;
//   // 默认构造函数
//   Person() {
//     print('这是构造函数内容');
//   }
//   void getInfo() {
//     print("$name----$age");
//     print("${this.name}---${this.age}");
//   }

//   void setInfo(age) {
//     this.age = age;
//   }
// }

class Person {
  String name;
  int age;
  // Person(String name, int age) {
  //   this.name = name;
  //   this.age = age;
  // }
  // 构造函数简写
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}的年纪:${this.age}");
  }
}
