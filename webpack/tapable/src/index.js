"use strict";
exports.__esModule = true;
var tapable_1 = require("tapable");
var hook = new tapable_1.SyncHook(['name', 'sex']);
hook.tap('printName', function (name) {
    console.log('我的名字是' + name);
});
hook.tap("printSex", function (name, sex) {
    console.log("我的性别是", sex);
});
hook.call("张三", "男");
