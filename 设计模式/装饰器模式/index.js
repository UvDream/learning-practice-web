/*
 * @Author: wangzhongjie
 * @Date: 2021-08-12 11:04:53
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-12 11:08:38
 * @Description: 装饰器模式
 * @Email: UvDream@163.com
 */
class Circle{
    draw(){
        console.log("画圆圈");
    }
}
class Expand{
    constructor(circle){
        this.circle=circle
    }
    setBorder(){
        console.log("设置边框");
    }
    draw(){
        this.circle.draw()
        this.setBorder()
    }
}
let c=new Circle()
let expand=new Expand()
expand.draw()