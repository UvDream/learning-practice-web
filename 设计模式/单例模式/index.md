![](https://gitee.com/Uvdream/images/raw/master/images/20200708152110.png)

# 定义

保证一个类仅有一个实例，并提供一个访问它的全局访问点

# 实现

> 要实现一个标准的单例模式并不复杂，无非是用一个变量来标志当前是否已经为某个类创建
> 过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象

```
    var Cat = function (name) {
      this.name = name;
      this.instance = null;
    };
    Cat.prototype.getName = function () {
      console.log(this.name);
    };
    Cat.getInstance = function (name) {
      console.log("获取", this.instance, name);
      if (!this.instance) {
        this.instance = new Cat(name);
      }
      return this.instance;
    };
    var a = Cat.getInstance("猫咪1");
    var b = Cat.getInstance("猫咪2");

    console.log(a);
    console.log(b);
```
