/*
 * @Author: wangzhongjie
 * @Date: 2020-06-08 06:10:55
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-06-09 06:43:45
 * @Description: defineProperty&Proxy
 * @Email: UvDream@163.com
 */ 
// defineProperty
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
let temp=null
Object.defineProperty(object1,"name",{
    get(){
        console.log("这是get")
        return temp
    },
    set(val){
        console.log("这是set",val)
        temp=val
    }
})
console.log(object1.name) //获取属性值,是get
object1.name="张三"//设置属性值是set
console.log(object1)
// Proxy
console.log("-----------------------------------------------------------")
var obj=new Proxy({},{
    get(target,key,receiver){
        console.log("这是get",target,"|",key,"|",receiver)
        return Reflect.get(target,key,receiver)
    },set(target,key,value,receiver){
        console.log("这是set",target,"|",key,"|",value,"|",receiver)
        return Reflect.set(target,key,value,receiver)
    }
})
console.log("获取")
obj.count=1;
console.log("改变")
++obj.count
console.log("再次获取")
console.log(obj.count)