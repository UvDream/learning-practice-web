function Animal() {
    this.cName = "动物";
    this.List = ['小狗', '小猫']
}
Animal.prototype.getName = function () {
    console.log("获取name");
    return this.cName;
};
function Dog() {
    Animal.call(this)
}
Dog.prototype.getAge=function(){
    console.log("获取age");
}
Dog.prototype=new Animal()
Dog.prototype.constructor=Dog

var dog=new Dog()
var dog2=new Dog()
dog2.List.push("老鼠")
console.log(dog.cName);
console.log(dog.List);
console.log(dog2.List);
dog.getName()
dog.getAge()