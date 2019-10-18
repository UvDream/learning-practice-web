main() {
  // is判断类型
  var str = "呵呵";
  if (str is String) {
    print('String');
  } else if (str is int) {
    print("int");
  } else {
    print('其他类型');
  }
}
