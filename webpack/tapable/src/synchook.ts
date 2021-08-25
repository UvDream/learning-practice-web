
import { SyncHook } from "tapable";
// @ts-ignore
const hook = new SyncHook(['name', 'sex'])
// @ts-ignore
hook.tap('printName', (name: string) => {
    console.log('我的名字是' + name);
})
// @ts-ignore
hook.tap("printSex", (name: string, sex: string) => {
    console.log("我的性别是", sex);
})
// @ts-ignore
hook.call("张三", "男")