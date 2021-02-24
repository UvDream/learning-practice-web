//2组合继承
function Super(){
    console.log('打印')
    this.a=[1,2,3,4]
}
Super.prototype.func=function(){
    console.log( '原型上方法')
}


function Sub(){
    Super.call(this)
}
// 实例化这个时候会被影响,但是call之后被覆盖了就不会被影响,也就是两种组合方式互补
Sub.prototype=new Super()

// sub.a='333'
var sub=new Sub()
var sub1=new Sub()
sub.func()
sub.a.push(5)
console.log(sub.a)
console.log(sub1.a)