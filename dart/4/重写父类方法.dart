class Person {
  String name;
  int age;
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}的年纪:${this.age}");
  }

  work() {
    print("${this.name}在工作...");
  }
}

class Web extends Person {
  Web(String name, int age) : super(name, age);
  run() {
    print('run方法');
    // 子类调用父类方法
    super.work();
  }

// 复写父类方法
  @override
  void printInfo() {
    print("复写的方法=>姓名:${this.name},年龄:${this.age}");
  }
}

main() {
  Web w = new Web("李四", 10);
  w.printInfo();
  w.run();
}
