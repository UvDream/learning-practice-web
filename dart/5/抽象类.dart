abstract class Animal {
  eat(); //抽象方法
  run();
  printInfo() {
    print("抽象类里面普通方法");
  }
}

class Dog extends Animal {
  @override
  eat() {
    print('小狗');
  }

  @override
  run() {
    print("小狗在跑");
  }
}

class Cat extends Animal {
  @override
  eat() {
    print("小猫");
  }

  @override
  run() {
    print("小猫在睡觉");
  }
}

void main() {
  Dog d = new Dog();
  d.eat();
  Cat c = new Cat();
  c.eat();
  c.printInfo();
}
