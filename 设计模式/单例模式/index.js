
class Single{
    constructor(){
        this.isLogin=false
    }
    login(){
        this.isLogin=true
    }
}
// 第一种
var instance
function getSingle(){
    if (!instance) instance=new Single()
    return instance
}
const a=getSingle()
const b=getSingle()
a.login()
console.log(a==b);
console.log(b.isLogin);
// 第二种
Single.getInstance=(function(){
    let instance
    return function(){
        if(!instance){
            instance= new Single()
        }
        return instance
    }
})()
const c=Single.getInstance()
const d=Single.getInstance()
c.login()
console.log(c==d);
console.log(d.isLogin);