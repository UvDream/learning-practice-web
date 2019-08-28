main() {
  // 1.Number与String类型转换
  // Number=>String toSring()
  // String=>Number int.parse() double.parse()
  String a = '123';
  print(a);
  print(int.parse(a));
  String b = '';
  try {
    var c = double.parse(b);
    print(c);
  } catch (err) {
    print('错误了');
  }
  // 2.其他=>bool
  var str = "123";
  if (str.isEmpty) {
    print("str空");
  } else {
    print('str不为空');
  }
  var num = 123;
  if (num == 0) {
    print('0');
  } else {
    print("非0");
  }
}
