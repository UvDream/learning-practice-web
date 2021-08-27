export interface Person {
    name: string
}
// implements 是对某个接口实现.必须满足接口的类型规范
class Man implements Person {
    public name = "222"
    public age = 18
}
//extends是对某个类的继承，可获取父类的所有的静态属性
class OldMan extends Man {
    constructor() {
        super()
        console.log(this.name);
        console.log(this.age);
    }
}
const oldMan = new OldMan()
console.log(oldMan);
