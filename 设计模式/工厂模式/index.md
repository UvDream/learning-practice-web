# 工厂模式

## 简介

工厂模式主要就是创建一个实例提供了接口,将 new 操作进行单独封装

## 示例

```js
class HanBao {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log("汉堡初始化");
  }
}
class KFC {
  create(name) {
    return new HanBao(name);
  }
}
let kfc = new KFC();
let food = kfc.create("香辣鸡腿堡");
food.init();
console.log(food);
```

## 场景

- 在`jquery`中获取元素,我们不是`new jquery()`

```js
class jQuery {
  constructor(selector) {
    // ...
  }
  append() {}
  addClass() {}
  // ...
}

window.$ = function (selector) {
  return new jQuery(selector);
};
```
