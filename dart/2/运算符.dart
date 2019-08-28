main() {
  // 算术运算符
  // * 特殊:取整 a~/b
  int a = 13;
  int b = 2;
  print(a ~/ b); //取整
  print(a % b);

  // 关系运算符
  //  == != > < >= <=

  // 逻辑运算符
  bool flag = true;
  print(!flag); //取反
  // && 并且
  // || 或者

  // 赋值运算符 = ??=
  int d = 10;
  d ??= 23; //如果b为空的话23赋值给b
  print(d);

  // 复合运算符
  var c = 12;
  c += 10; //c=c+10;
  print(c);
}
