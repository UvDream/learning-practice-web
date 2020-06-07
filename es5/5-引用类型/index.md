# 创建方式

![](https://gitee.com/UvDream/images/raw/master/images/20200604062908.png)

> 1 .new 操作符后跟 Object 构造函数

```

var person=new Object()

person.name="张三"

person.age=18

```

> 2. 对象字面量表示法

```

var person={

name:"张三",

age:18

}

```

> 3. (和 new Object()相同)

```

var person={}

```

# 访问方式

> 1. 点表示法

```

person.name

```

> 2 .括号表示法

```

person["name"]

```

两种方法没啥区别,括号语法主要优点通过变量访问属性,如果出现属性名是关键字或者保留字我们使用括号表示法

# 构造函数方法

## `Object.assign(target, ...sources)`target=目标对象,sources=源对象

```

const target = { a: 1, b: 2 };

const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

console.log(returnedTarget);

```

<iframe src="https://tool.lu/coderunner/?id=8Zm" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>

### 用法示例

> 为对象添加属性

```

class Point{

construct(x,y){

Object.assign(this,{x,y})

}

}

```

> 为对象添加方法

```

Object.assign(SomeClass.prototype,{

someMethod(arg1,arg2){

...

},

anotherMethod(){

...

}

})

```

等同于

```

SomeClass.prototype.someMethod=function(arg1,arg2){

...

}

SomeClass.prototype.anotherMethod=function(){

...

}

```

> 复制一个对象

> 深拷贝

> 合并对象

> 合并相同属性的对象

> 拷贝 symbol 类型的属性

```

const o1 = { a: 1 };

const o2 = { [Symbol('foo')]: 2 };

const obj = Object.assign({}, o1, o2);

console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(foo)]

```

<iframe src="https://tool.lu/coderunner/?id=8ZS" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>

> 继承属性和不可枚举属性是不能拷贝的

```

const obj = Object.create({foo: 1}, { // foo 是个继承属性。

bar: {

  value: 2 // bar 是个不可枚举属性。

},

baz: {

  value: 3,

  enumerable: true // baz 是个自身可枚举属性。

}

});

const copy = Object.assign({}, obj);

console.log(copy); // { baz: 3 }

```

<iframe src="https://tool.lu/coderunner/embed/8ZT.html" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>

> 原始类型会包装成为对象

```

const v1 = "abc";

const v2 = true;

const v3 = 10;

const v4 = Symbol("foo")

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);

// 原始类型会被包装，null 和 undefined 会被忽略。

// 注意，只有字符串的包装对象才可能有自身可枚举属性。

console.log(obj); // { "0": "a", "1": "b", "2": "c" }

```

<iframe src="https://tool.lu/coderunner/?id=8ZU" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>

> 异常会打断后续拷贝任务

```

const target = Object.defineProperty({}, "foo", {

value: 1,

writable: false

}); // target 的 foo 属性是个只读属性。

Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});

// TypeError: "foo" is read-only

// 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。

console.log(target.bar); // 2，说明第一个源对象拷贝成功了。

console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。

console.log(target.foo); // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。

console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。

console.log(target.baz); // undefined，第三个源对象更是不会被拷贝到的。

```

> 拷贝访问器

```

const obj = {

foo: 1,

get bar() {

return 2;

}

};

let copy = Object.assign({}, obj);

console.log(copy); // { foo: 1, bar: 2 } copy.bar 的值来自 obj.bar 的 getter 函数的返回值

// 下面这个函数会拷贝所有自有属性的属性描述符

function completeAssign(target, ...sources) {

sources.forEach(source => {

let descriptors = Object.keys(source).reduce((descriptors, key) => {

descriptors[key] = Object.getOwnPropertyDescriptor(source, key);

return descriptors;

}, {});

// Object.assign 默认也会拷贝可枚举的 Symbols

Object.getOwnPropertySymbols(source).forEach(sym => {

let descriptor = Object.getOwnPropertyDescriptor(source, sym);

if (descriptor.enumerable) {

  descriptors[sym] = descriptor;

}

});

Object.defineProperties(target, descriptors);

});

return target;

}

copy = completeAssign({}, obj);

console.log(copy);

// { foo:1, get bar() { return 2 } }

```

## `Object.is()` 判断两个值是否是相同的值,所有 NaN 值都相等（这与==和===不同）

```

console.log(Object.is('foo','foo'))

let foo={a:1}

let bar={age:1}

console.log(Object.is(foo,foo))

console.log(Object.is(foo,bar))

```

## `Object.keys(obj),Object.values(obj),Object.entries(obj)`

```
const obj = {
    foo: 1,
    get bar() {
      return 2;
    }
  };
let arr=["a","b","c"]
console.log(Object.keys(arr))
// let obj={0:"a",1:"b",2:"c"}
console.log(Object.keys(obj)) //[ 'foo', 'bar' ]
console.log(Object.values(obj)) //[ 1, 2 ]
console.log(Object.entries(obj)) //[ [ 'foo', 1 ], [ 'bar', 2 ] ]
```

<iframe src="https://tool.lu/coderunner/?id=91q" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>
## `Object.create(proto[, propertiesObject])`方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

```
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
this.x += x;
this.y += y;
console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```
