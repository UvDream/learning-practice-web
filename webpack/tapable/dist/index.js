"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tapable_1 = require("tapable");
// @ts-ignore
var hook = new tapable_1.SyncHook(['name', 'sex']);
// @ts-ignore
hook.tap('printName', function (name) {
    console.log('我的名字是' + name);
});
// @ts-ignore
hook.tap("printSex", function (name, sex) {
    console.log("我的性别是", sex);
});
// @ts-ignore
hook.call("张三", "男");
