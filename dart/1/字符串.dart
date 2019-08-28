void main() {
  // 1.字符串定义
  String str1 = "你好";
  String str2 = 'dart';
  print(str1 + '----连接----' + str2);
  // 三个单引号可以定义多行字符串
  String str3 = '''hhhhh
  jjjj''';
  print(str3);
  // 2.字符串拼接
  print('$str1$str2');
  print(str1 + str2);
}
