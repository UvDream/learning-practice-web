<!--
 * @Author: wangzhongjie
 * @Date: 2021-08-12 11:04:57
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-12 11:10:58
 * @Description:装饰器模式
 * @Email: UvDream@163.com
-->

# 装饰器模式

不改变原有的结构和功能,将现有对象和装饰器进行分离,两者独立存在

## 示例

```js
class Circle {
  draw() {
    console.log("画圆圈");
  }
}
class Expand {
  constructor(circle) {
    this.circle = circle;
  }
  setBorder() {
    console.log("设置边框");
  }
  draw() {
    this.circle.draw();
    this.setBorder();
  }
}
let c = new Circle();
let expand = new Expand();
expand.draw();
```

## 场景

- ES7 装饰器

```js
// @testable是一个装饰器,修改了`MyTestableClass`这个类的行为
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  // 为它加上了静态属性`isTestable`
  target.isTestable = true;
}

MyTestableClass.isTestable; // true
```

- vue-class-component
