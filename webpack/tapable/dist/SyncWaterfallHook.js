"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tapable_1 = require("tapable");
// @ts-ignore
var hook = new tapable_1.SyncWaterfallHook(["name", "sex", "age"]);
// @ts-ignore
hook.tap('printName', function (name, sex, age) {
    var nameStr = '我的名字是' + name;
    console.log(nameStr);
    return { sex: sex, age: age };
});
// @ts-ignore
hook.tap('printSex', function (data) {
    var sexStr = '我的性别 ' + data.sex;
    console.log(sexStr);
    console.log(data.name);
    return data.age;
});
hook.tap('printAge', function (age) {
    var ageStr = '我的年纪' + age;
    console.log(ageStr);
});
// @ts-ignore
hook.call("张三", "男", 27);
