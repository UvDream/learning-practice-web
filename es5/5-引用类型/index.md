Object 类型

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

<iframe src="https://tool.lu/coderunner/embed/8Zm.html" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>
