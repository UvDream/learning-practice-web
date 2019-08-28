// main() {
//   print("你好,Dart!");
// }

//表示main方法没返回值
// dart具有自动类型推导var
void main() {
  print("你好,Dart!");
  var str = '你好';
  print(str);
  // 字符串
  String str1 = "这是字符串";
  print(str1);
  // 数字类型
  int num = 123;
  print(num);
  // 常量 const final
  const PI = 3.14159;
  print(PI);
  final PI1 = 3.14159;
  print(PI1);
  // final 不仅常量,而且运行时的常量
  final a = new DateTime.now();
  print(a);
}
