class Person {
    protected name: string
    protected constructor(name: string) {
        this.name = name
    }
}
class Man extends Person {
    private address: string
    constructor(name: string, address: string) {
        super(name)
        this.address = address
    }
    public getMsg() {
        console.log(`我的名字是${this.name},地址是${this.address}`);
    }
}
let man = new Man("张三", "雨花南路")
console.log(man);//Man { name: '张三', address: '雨花南路' }
console.log(man.getMsg());//我的名字是张三,地址是雨花南路
let person = new Person("李四")
