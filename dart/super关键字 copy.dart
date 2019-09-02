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
  String sex;
  Web(String name, int age, String sex) : super(name, age) {
    this.sex = sex;
  }
  // 给命名构造函数传参
  //  Web(String name, int age, String sex) : super.xxx(name, age) {
  //   this.sex = sex;
  // }
  run() {
    print("${this.name}年纪=${this.age},性别是:${this.sex}");
  }
}

main() {
  Person p = new Person("李四", 11);
  p.printInfo();
  Web w = new Web("张三", 12, "男");
  w.printInfo();
  w.run();
}
