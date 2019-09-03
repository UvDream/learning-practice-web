import './Db.dart';

class Mysql implements Db {
  @override
  String url;
  @override
  Mysql(this.url);
  add(String data) {
    print("mysql添加到=$data");
  }

  @override
  delete() {
    return null;
  }

  @override
  save() {
    return null;
  }
}
