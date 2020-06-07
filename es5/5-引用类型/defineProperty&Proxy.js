/*
 * @Author: wangzhongjie
 * @Date: 2020-06-08 06:10:55
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-08 07:21:11
 * @Description: defineProperty&Proxy
 * @Email: UvDream@163.com
 */ 
// writable
const object1={}
Object.defineProperty(object1,"age",{
    value:42,
    writable:false
})
console.log(object1)//{age:42}
object1.age=26
console.log(object1) //{age:42}

// enumerable,可被for in遍历
Object.defineProperty(object1,"sex",{
    value:"男",
    enumerable:true
})
console.log(object1)//{age: 42, sex: "男"}
console.log(Object.keys(object1));// 打印["sex"]
// set/get
Object.defineProperty(object1,"name",{
    configurable: true,
    get(){
        console.log("这是get")
        return this.name
    },
    set(val){
        console.log("这是set",val)
        this.name=val
    }
})
console.log(object1.name) //获取属性值,是get
object1.name="张三"//设置属性值是set
console.log(object1)