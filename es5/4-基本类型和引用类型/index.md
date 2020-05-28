# 基本类型和引用类型

![](https://gitee.com/UvDream/images/raw/master/images/20200529062814.png)

## 动态属性

> 基本类型

```
var name="张三"
// name.age=1
console.log(name.age) //不会出现错误,但是undefined
```

> 引用类型

```
var obj1=new Object()
var obj1.name="张三"
console.log(obj2.name)//{name:"张三"}
```

## 复制变量

> 基本类型

```
var num1=5
var num2=num1
num2=7
console.log(num1,num2)//5,7
```

> 引用类型

```
var obj1=new Object()
var obj2=obj1
obj1.name="张三"
console.log(obj2.name)//张三
```

![image-20200529070159476](https://gitee.com/UvDream/images/raw/master/images/20200529070201.png)

## 传递参数

> 基本类型

```
function add(num){
    num+=10
    return num
}
var count=20
var result=add(count)
console.log(count)//20
console.log(result)//30
```

> 引用类型

```
function setName(obj){
    obj.name="张三"
    obj=new Object()
    obj.name="李四"
}
var person=new Object()
setName(person)
console.log(person) //{name:"张三"}
```
