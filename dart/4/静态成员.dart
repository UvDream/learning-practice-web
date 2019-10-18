class Person {
  static String name = "离散";
  int age = 20;
  static void show() {
    print('静态方法=>' + name);
  }

  void printInfo() {
    //非静态方法可以访问静态成员以及非静态成员
    print(name); //访问静态属性
    print(this.age); //访问非静态属性
    show(); //调用静态方法
  }

  static void printUserInfo() {
    print(name); //调用静态属性
    show(); //调用静态方法
    // print(this.age); //静态方法没法访问非静态属性
    //静态方法没法调用非静态方法
  }
}

main() {
  print("打印====" + Person.name);
  Person.show();
  Person p = new Person();
  p.printInfo();
  Person.printUserInfo();
}
