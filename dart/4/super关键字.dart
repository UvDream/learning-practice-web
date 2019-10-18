class Person {
  String name;
  int age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}

// 有参数的父类
class Web extends Person {
  Web(String name, int age) : super(name, age);
}

main() {
  Person p = new Person("李四", 11);
  p.printInfo();
  Web w = new Web("张三", 12);
  w.printInfo();
}
