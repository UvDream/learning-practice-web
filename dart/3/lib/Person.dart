class Person {
  String name;
  int age;
  // 私有属性
  String _sex = "男";
  Person(this.name, this.age);
  void printInfo() {
    print("${this.name}的年纪:${this.age}");
  }

  String getName() {
    return _sex;
  }

// 私有方法
  void _run() {
    print("私有方法");
  }

  exitFunc() {
    this._run();
  }

  Person.now() {
    print("我是命名构造函数");
  }
  Person.setInfo(String name, int age) {
    this.name = name;
    this.age = age;
  }
}
