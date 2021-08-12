class HanBao{
    constructor(name){
        this.name=name
    }
    init(){
        console.log("汉堡初始化");
    }
}
class KFC{
    create(name){
        return new HanBao(name)
    }
}
let kfc=new KFC()
let food=kfc.create("香辣鸡腿堡")
food.init()
console.log(food);