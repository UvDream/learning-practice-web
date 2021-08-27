class Animal {
    constructor() {
        console.log('animal');
    }
    get() {
        console.log("这是个动物类");
    }
}
class Cat extends Animal {
    constructor() {
        console.log("这是猴子");
        super()
    }
    init() {
        super.get()
    }
}
var cat = new Cat()
cat.init()