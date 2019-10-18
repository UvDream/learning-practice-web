import './Db.dart';

class Mssql implements Db {
  @override
  String url;
  Mssql(this.url);
  @override
  add(String data) {
    print("mssql添加到=$data");
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