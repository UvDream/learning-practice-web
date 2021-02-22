# 原型
## 定义

原型就是一个对象,其它的对象可以通过原型实现属性的继承,除`prototype`外

```js
 var arr = [1, 2, 3], obj = {}
 var fn = function () { }
 console.dir(arr)
 console.dir(obj)
 console.dir(fn)
```

![image-20210129145444472](https://gitee.com/Uvdream/images/raw/master/images/20210129145444.png)

## 图解

![原型 (3)](https://gitee.com/Uvdream/images/raw/master/images/20210201100159.png)

## 原型规则

- 1.所有的引用类型(数组,对象,函数)都具有对象的也行,即自由扩展属性(除了`null`外)

- 2.所有的引用类型都有一个`__proto__`属性(隐式原型属性),属性值是一个普通的对象

  ```js
  console.log(arr.__proto__)
  console.log(obj.__proto__)
  console.log(fn.__proto__)
  ```

- 3.所有的函数,都有一个` prototype`(显式原型）属性,属性值也是一个普通的对象

```js
console.log(fn.prototype)
```

- 4.所有的引用类型(数组,对象,函数)， `_proto_` 属性值(隐式原型属性）指向它的构造函数的`prototype`属性值

  > __proto__===contructor.prototype(<u>**大多数情况下,proto可以理解为`构造器的原型`,即proto===construct.prototype**</u>)

```js
 console.log(arr.__proto__ === arr.constructor.prototype)
 console.log(obj.__proto__ === obj.constructor.prototype)
 console.log(fn.__proto__ === fn.constructor.prototype)
```

## 原型(__proto__)指向

### 1、字面量方式

![原型指向-字面量](https://gitee.com/Uvdream/images/raw/master/images/20210129154856.png)

```
var a = {};
console.log(a.__proto__);  //Object {}
console.log(a.__proto__ === a.constructor.prototype); //true
```

### 2、构造器方式

![原型指向-构造器](https://gitee.com/Uvdream/images/raw/master/images/20210129154908.png)

```
var A = function(){};
var a = new A();
console.log(a.__proto__); //A {}
console.log(a.__proto__ === a.constructor.prototype); //true
console.log(a.__proto__===A.prototype)//true
```

### 3、Object.create()方式

![原型指向-Object.create](https://gitee.com/Uvdream/images/raw/master/images/20210129154916.png)

```
var a1 = {a:1}
var a2 = Object.create(a1);
console.log(a2.__proto__); //Object {a: 1}
console.log(a2.__proto__ === a2.constructor.prototype);//false
console.log(a.__proto__===a1)
```

