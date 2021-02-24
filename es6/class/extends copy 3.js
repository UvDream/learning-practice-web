//2.寄生组合继承
// 存在问题,Sub原型方法可能不能被调用被覆盖了
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
// Sub.prototype=new Super()
if(!Object.create){
    Object.create=function(proto){
        function F(){}
        F.prototype=proto;
        return new F()
    }
}
Sub.prototype.say=function(){
    console.log("Sub原型")
}
Sub.prototype=Object.create(Super.prototype)
// Sub.prototype.say=function(){
//     console.log("Sub原型")
// }
var sub=new Sub()
var sub1=new Sub()
sub.func()
sub.say()
sub.a.push(5)
console.log(sub.a)
console.log(sub1.a)


// 圣杯继承
class Person{

}
class People extends Person{

}
