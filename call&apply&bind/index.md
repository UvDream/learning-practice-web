# 作用

都是用来改变上下文,换句话就是为了改变函数体内 this 指向

# 参数

```
apply(thisObj, [arg1, arg2, arg3, arg4]);
call(thisObj, arg1, arg2, arg3, arg4)
```

eg:

````
 var func = function (a, b, c) {
      console.log(a, b, c);
    };
    func.apply(null, [1, 2, 3]); //1 2 3
    func.call(null, 4, 5, 6); //4 5 6
```
````

# 区别

## 参数

`call` 是包装在 `apply` 上面的一颗语法糖，如果我们明确地知道函数接受多少个参数，而且想
一目了然地表达形参和实参的对应关系，那么也可以用 `call` 来传送参数

> 当时用 call 或者 apply 的时候,如果我们传入的第一个参数为 `null`,函数体内的 `this` 会指向默认的宿主对象,在浏览器中则是 window,但是如果在严格模式下` "use strict";``this ` 还是 `null`

# 用途

## 1.改变 `this` 指向

```
   var obj1 = {
      name: "张三",
    };
    var obj2 = {
      name: "李四",
    };
    window.name = "王五";
    var getName = function () {
      console.log(this.name);
    };
    getName(); //王五
    getName.call(obj1); //张三,执行这句getName函数内的this就指向了obj1对象
    getName.call(obj2); //李四

```

eg:

```
 document.getElementById("div1").onclick = function () {
      var func = function () {
        console.log(this.id); //undefined
      };
      func();
    };
```

这种情况丢失了 `this` 指向问题
解决办法:

> 办法 1:

```
document.getElementById("div1").onclick = function () {
      var func = function () {
        console.log(this.id); //undefined
      };
      func().call(this);
    };

```

> 办法 2

```
document.getElementById = (function( func ){
    return function(){
        return func.apply( document, arguments );
        }
})( document.getElementById );
var getId = document.getElementById;
var div = getId( 'div1' );
alert ( div.id );
```

> 办法 3

```
  document.getElementById("div1").onclick = function () {
      var that = this;
      var func = function () {
        console.log(that.id); //undefined
      };
      func();
    };
```

# 办法 3 拓展 `Function.prototype.bind`

手动实现

```
Function.prototype.bind = function( context ){
  var self = this; // 保存原函数
  return function(){ // 返回一个新的函数
    return self.apply( context, arguments ); // 执行新的函数的时候，会把之前传入的 context
    // 当作新函数体内的 this
  }
};
var obj = {
  name: 'sven'
};
var func = function(){
  alert ( this.name ); // 输出：sven
}.bind( obj);
func()
```

# 借用其他对象,类似继承

eg:

```
var A = function (name) {
      console.log(this); //this已经指向B
      this.name = name;
    };
    var B = function () {
      A.apply(this, arguments);
    };
    B.prototype.getName = function () {
      return this.name;
    };
    var b = new B("张三");
    console.log(b.getName());
```

```

 FU