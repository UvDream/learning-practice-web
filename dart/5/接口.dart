// 定义一个db库支持mysql ,mssql,mongodb
// 三个类都有同样的方法
// 接口
import './lib/mysql.dart';

main() {
  Mysql mysql = new Mysql('198.92.32.1');
  mysql.add("8080");
}
