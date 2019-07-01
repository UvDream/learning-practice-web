import Dep from "./deep";
/**
 * Observer类会附加每一个被侦测的object上
 * 一旦被附加上,Observer会将object的所有属性转换为getter/setter的形式
 * 来收集属性的依赖,并且当属性发生变化时会通知这些依赖
 */
export class Observer{
    constructor(value){
        this.value=value
        if(!Array.isArray(value)){
            this.walk(value)
        }
    }
    /**
     * walk会将每一个属性转换成getter/setter的形式来侦测变化
     * 这个方法只有在数据类型为object时被调用
     */
    walk(obj){
        const keys=Object.keys(obj)
        for(let i=0;i<keys.length;i++){
            defineReactive(obj,keys[i],obj[keys[i]])
        }   
    }
}


// defineProperty简单封装
function defineReactive(data,key,val){
    // 递归子属性
    if(typeof val==='object'){
        new Observer(val)
    }
    // 收集依赖
    let dep=new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            // deep.push(window.target)
            dep.depend()
            return val
        },
        set:function(newVal){
            if(val === newVal){
                return
            }
            // for(let i=0;i<dep.length;i++){
            //     dep[i](newVal,val)
            // }
            dep.notify()
            val=newVal
        }
    })
}