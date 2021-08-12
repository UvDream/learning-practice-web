class iphone{
    getName(){
        return "我是iphone接口"
    }
}
class Target{
    constructor(){
        this.t=new iphone()
    }
    getName(){
        return `${this.t.getName()},已经转化为安卓接口了`
    }
}
const target=new Target()
console.log(target.getName());