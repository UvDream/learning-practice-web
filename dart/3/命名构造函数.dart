import "./lib/Person.dart";

void main() {
  Person p1 = new Person("张三", 13);
  Person p2 = new Person.now();
  Person p3 = new Person.setInfo("呵呵", 90);
  p3.printInfo();
  // 私有属性访问不到
  // print(p1._sex);
  print(p1.age);
  print(p1.getName());
  // p1._run()
  // 间接调用私有方法
  p1.exitFunc();
}
