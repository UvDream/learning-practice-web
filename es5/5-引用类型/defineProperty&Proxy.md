# `Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

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
