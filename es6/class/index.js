// JS 最标准的面向对象实现模式 => 基于原型继承的构造函数模式
// function Circle(center, radius) {
//     this.center = center;
//     this.radius = radius;
// }
// Circle.prototype.getCircumference = function () {
//     return 2 * Math.PI * this.radius;
// }
// const circle = new Circle([1, 1], 10);
// console.log(circle.getCircumference());

// // ‘语法糖‘ 适应java c++的语法模式
// class Circle {
//     // 构造器
//     constructor(center, radius) {
//         this.center = center;
//         this.radius = radius;
//         this.calculateCircumference = this.calculateCircumference.bind(this);
//     }
//     // 方法
//     calculateCircumference() {
//         return 2 * Math.PI * this.radius;
//     }
// }
// // 一个类 => n个实例
// const circle = new Circle([1, 1], 10);
// // console.log(Object.getPrototypeOf(circle) === Circle.prototype);
// console.log(circle.calculateCircumference()); // 62.83185307179586
// const newfunc = circle.calculateCircumference;
// console.log(newfunc()); 


// /*
//  * 构造函数在严格模式下必须通过new调用
//  */
// function Square(length, height) {
//     'use strict'
//     this.length = length;
//     this.height = height;
// }
// Square(10, 10); // TypeError: Cannot set property 'length' of undefined

// /*
//  * class默认为严格模式函数，因而也必须通过new调用
//  */
// class Circle {
//     constructor() { }
//     calculateCircumference() { }
// }
// Circle(); // TypeError: Class constructor Circle cannot be invoked without 'new'


// class能够很轻松地实现类与类之间的继承
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}

/*
 * 用extends建立class之间的继承关系
 */
class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y); // 调用父类的constructor(x, y)
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
// 一个父类 => 一个子类 => ....... => 第n个子类 => n个实例
const circle = new Circle(0, 0, 10);
circle.move(1, 1);
console.log(circle.x); // 1 
console.log(circle.y); // 1
console.log(circle.calculateArea()); // 314.1592653589793



// /*
//  * 父类
//  */
// function Shape(x, y) {
//     this.x = x;
//     this.y = y;
// }

// Shape.prototype.move = function (x, y) {
//     this.x += x;
//     this.y += y;
// }

// /*
//  * 子类
//  */
// function Circle(x, y, r) {
//     // 需要调用父类构造函数，才能继承父类的属性
//     Shape.call(this, x, y);
//     this.r = r;
// }
// console.log(Circle.prototype.constructor); // [Function: Circle]

// /**
//  * 将Circle.prototype的原型设定为Shape.prototype
//  */
// Circle.prototype = Object.create(Shape.prototype);
// console.log(Object.getPrototypeOf(Circle.prototype) === Shape.prototype); // true

// /**
//  * 修正Circle.prototype.constructor指针
//  */
// console.log(Circle.prototype.constructor); // [Function: Shape]
// Circle.prototype.constructor = Circle;
// console.log(Circle.prototype.constructor); // [Function: Circle]

// Circle.prototype.calculateArea = function () {
//     return this.r * 2 * Math.PI;
// }

// const circle = new Circle(0, 0, 10);
// circle.move(1, 1);
// console.log(circle.x); // 1 
// console.log(circle.y); // 1
// console.log(circle.calculateArea()); // 62.83185307179586
