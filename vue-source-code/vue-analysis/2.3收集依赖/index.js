import Dep from "./deep";

// defineProperty简单封装
function defineReactive(data,key,val){
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