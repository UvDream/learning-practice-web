// 1.原型链继承
// 存在问题,引用值共享
// function Super(){
//     // this.a='1'
//     this.a=[1,2,3,4]
// }
// Super.prototype.func=function(){
//     console.log( '原型上方法')
// }
// function Sub(){}

// Sub.prototype=new Super()
// var sub=new Sub()
// var sub1=new Sub()


// console.log(sub.a)
// sub.func()
// console.log(sub)
//
// // sub.a='333'
// sub.a.push(5)
// console.log(sub.a)
// console.log(sub1.a)



// 2.构造函数继承
// 没办法拿到原型上方法
function Super(){
    this.a=[1,2,3,4]
    // this指向window
}
Super.prototype.func=function(){
    console.log( '原型上方法')
}


function Sub(){
    // Super()
    Super.call(this)
}

// sub.a='333'
var sub=new Sub()
var sub1=new Sub()
// sub.func()
sub.a.push(5)
console.log(sub.a)
console.log(sub1.a)