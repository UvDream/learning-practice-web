import { SyncWaterfallHook } from "tapable"
// @ts-ignore
const hook = new SyncWaterfallHook([1, 1, 1])
// @ts-ignore
hook.tap('printName', (name: string, sex: any, age: any) => {
    const nameStr = '我的名字是' + name;
    console.log(nameStr);
    return { sex, age };
})
// @ts-ignore
hook.tap('printSex', (data: any) => {
    const sexStr = '我的性别 ' + data.sex;
    console.log(sexStr);
    console.log(data.name);
    return data.age;
})
hook.tap('printAge', (age) => {
    const ageStr = '我的年纪' + age;
    console.log(ageStr);
})
// @ts-ignore
hook.call("张三", "男", 27)