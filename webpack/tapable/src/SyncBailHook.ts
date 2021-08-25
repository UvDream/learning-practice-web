import { SyncBailHook } from "tapable";
// @ts-ignore
const hook = new SyncBailHook(['name', 'sex', 'age'])
// @ts-ignore
hook.tap("printName", (name) => {
    const nameStr = "我的名字是" + name
    console.log(nameStr);
    return nameStr
})
// @ts-ignore
hook.tap("printSex", (name, sex) => {
    const sexStr = "我的性别是" + sex
    console.log(sexStr);
})
// @ts-ignore
hook.tap("printAge", (name, sex, age) => {
    const ageStr = "我的年纪是" + age
    console.log(ageStr);
})
// @ts-ignore
hook.call("张三", "男", 29)