// class Rect {
//   num height;
//   num width;
//   Rect(this.height, this.width);
//   area() {
//     return this.height * this.width;
//   }
// }

// void main() {
//   Rect r = new Rect(10, 4);
//   print(r.area());
// }

// class Rect {
//   num height;
//   num width;
//   Rect(this.height, this.width);
//   // get方法
//   get area {
//     return this.height * this.width;
//   }

// // set方法
//   set areaHeight(value) {
//     this.height = value;
//   }
// }

// void main() {
//   Rect r = new Rect(10, 4);
//   print(r.area); //调用直接调用属性的方式
//   r.areaHeight = 5;
//   print(r.area);
// }
class Rect {
  num height;
  num width;
  Rect()
      : height = 2,
        width = 1 {
    print("打印,${this.height}");
  }
  area() {
    return this.height * this.width;
  }
}

void main() {
  Rect r = new Rect();
  print(r.area());
}
