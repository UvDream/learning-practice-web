# `Object.defineProperty()` 

>  方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

## 语法

```
Object.defineProperty(obj, prop, descriptor)
```

> obj:要定义属性的对象
>
> prop:要求或修改的属性的名称或 Symbol
>
> descriptor:要定义或修改的属性描述符

|            | configurable                                                                                                       | enumerable                                                                                                      | value                                                                  | writable                                                                                                 | get                                                                                                                                                                                                                         | set                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 描述       | 当且仅当该属性的 `configurable` 键值为 `true` 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。 | 当且仅当该属性的 `enumerable` 键值为 `true` 时定义了对象的属性可以在 for...in 循环和 `Object.keys()` 中被枚举。 | 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。 | 当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被[`赋值运算符`]改变。 | 属性的 getter 函数，如果没有 getter，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。 | 属性的 setter 函数，如果没有 setter，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。 |
| 默认值     | false                                                                                                              | false                                                                                                           | undefined                                                              | false                                                                                                    | undefined                                                                                                                                                                                                                   | undefined                                                                                                                                                     |
| 数据描述符 | 可以                                                                                                               | 可以                                                                                                            | 可以                                                                   | 可以                                                                                                     | 不可以                                                                                                                                                                                                                      | 不可以                                                                                                                                                        |
| 存取描述符 | 可以                                                                                                               | 可以                                                                                                            | 不可以                                                                 | 不可以                                                                                                   | 可以                                                                                                                                                                                                                        | 可以                                                                                                                                                          |

```

// writable
const object1={}
Object.defineProperty(object1,"age",{
    value:42,
    writable:false
})
console.log(object1)//{age:42}
object1.age=26
console.log(object1) //{age:42}

// enumerable,可被for...in遍历
Object.defineProperty(object1,"sex",{
    value:"男",
    enumerable:true
})
console.log(object1)//{age: 42, sex: "男"}
console.log(Object.keys(object1));// 打印["sex"]
// set/get
let temp=null
Object.defineProperty(object1,"name",{
    get(){
        console.log("这是get")
        return temp
    },
    set(val){
        console.log("这是set",val)
        temp=val
    }
})
console.log(object1.name) //获取属性值,是get
object1.name="张三"//设置属性值是set
console.log(object1)
```



## 简单应用

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=false"
    />
    <title>MVVM</title>
  </head>
  <body>
    <p>
      Hello,
      <span id="name"></span>
    </p>
    <input type="text" id="input" />
  </body>
  <script>
    const obj = {
      input: "",
    };
    const inputDOM = document.getElementById("input");
    const nameDOM = document.getElementById("name");
    inputDOM.addEventListener("input", function (e) {
      obj.input = e.target.value;
    });
    Object.defineProperty(obj, "input", {
      set: function (newValue) {
        nameDOM.innerHTML = newValue.trim().toUpperCase();
      },
    });
  </script>
</html>
```



# `Proxy`

> 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）

## 语法

```
const p = new Proxy(target, handler)
```

> `handler`:包含捕捉器（trap）的占位符对象，可译为处理器对象。

> traps:提供属性访问的方法。这类似于操作系统中捕获器的概念。

> target:被 Proxy 代理虚拟化的对象。它常被作为代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）

```javascript
console.log("-----------------------------------------------------------")
var obj=new Proxy({},{
    get(target,key,receiver){
        console.log("这是get",target,"|",key,"|",receiver)
        return Reflect.get(target,key,receiver)
    },set(target,key,value,receiver){
        console.log("这是set",target,"|",key,"|",value,"|",receiver)
        return Reflect.set(target,key,value,receiver)
    }
})
console.log("获取")
obj.count=1;
console.log("改变")
++obj.count
console.log("再次获取")
console.log(obj.count)
```



![image-20200609065309990](https://gitee.com/UvDream/images/raw/master/images/20200609065312.png)

以上代码Proxy实际上重载了点运算符,即是用自己定义覆盖了语言的原始定义