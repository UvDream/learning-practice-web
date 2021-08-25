"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tapable_1 = require("tapable");
// @ts-ignore
var hook = new tapable_1.SyncBailHook(['name', 'sex', 'age']);
// @ts-ignore
hook.tap("printName", function (name) {
    var nameStr = "我的名字是" + name;
    console.log(nameStr);
    return nameStr;
});
// @ts-ignore
hook.tap("printSex", function (name, sex) {
    var sexStr = "我的性别是" + sex;
    console.log(sexStr);
});
// @ts-ignore
hook.tap("printAge", function (name, sex, age) {
    var ageStr = "我的年纪是" + age;
    console.log(ageStr);
});
// @ts-ignore
hook.call("张三", "男", 29);
