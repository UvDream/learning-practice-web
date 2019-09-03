class Person {
  String name = "张三";
  int age = 12;
  void printInfo() {
    print("${this.name}---${this.age}");
  }
}

class Web extends Person {
  Web() {
    print('Web构造方法');
  }
}

main() {
  Web web = new Web();
  print(web.age);
  web.printInfo();
}
