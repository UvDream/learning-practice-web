# 创建方式

> 1 new 操作符后跟 Object 构造函数

```
var person=new Object()
person.name="张三"
person.age=18
```

> 2 对象字面量表示法

```
var person={
    name:"张三",
    age:18
}
```

> 3 (和 new Object()相同)

```
var person={}
```

# 访问方式

> 1 点表示法

```
person.name
```

> 2 括号表示法

```
person["name"]
```

两种方法没啥区别,括号语法主要优点通过变量访问属性,如果出现属性名是关键字或者保留字我们使用括号表示法

# 构造函数方法

## Object.assign(target, ...sources)target=目标对象,sources=源对象

```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

console.log(returnedTarget);
```

<iframe src="https://tool.lu/coderunner/?id=8Zm" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>
### 用法示例

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

<iframe src="https://tool.lu/coderunner/?id=8ZS" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>

> 继承属性和不可枚举属性是不能拷贝的

```
const obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

<iframe src="https://tool.lu/coderunner/embed/8ZT.html" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>

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

<iframe src="https://tool.lu/coderunner/?id=8ZU" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>

> 异常会打断后续拷贝任务

```
const target = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false
}); // target 的 foo 属性是个只读属性。

Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});
// TypeError: "foo" is read-only
// 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。

console.log(target.bar);  // 2，说明第一个源对象拷贝成功了。
console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。
console.log(target.foo);  // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
console.log(target.baz);  // undefined，第三个源对象更是不会被拷贝到的。
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
console.log(copy); // { foo: 1, bar: 2 } copy.bar的值来自obj.bar的getter函数的返回值

// 下面这个函数会拷贝所有自有属性的属性描述符
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // Object.assign 默认也会拷贝可枚举的Symbols
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
