# 单例模式

## 简介

所谓的单例, 就是指一个类只有一个实例, 不管你 new 多少次, 都是这一个实例

## 示例

- 标识符形式

```js
class Single {
  constructor() {
    this.isLogin = false;
  }
  login() {
    this.isLogin = true;
  }
}
// 标识flag
var instance;
function getSingle() {
  if (!instance) instance = new Single();
  return instance;
}
const a = getSingle();
const b = getSingle();
a.login();
console.log(a == b);
console.log(b.isLogin);
```

- 利用闭包

```js
class Single {
  constructor() {
    this.isLogin = false;
  }
  login() {
    this.isLogin = true;
  }
}
Single.getInstance = (function () {
  let instance;
  // 利用闭包把外部函数的变量保存在内存中
  return function () {
    if (!instance) {
      instance = new Single();
    }
    return instance;
  };
})();
const c = Single.getInstance();
const d = Single.getInstance();
c.login();
console.log(c == d);
console.log(d.isLogin);
```

## 场景

- vuex
  通过传入 Vue 实例对象,如果一已经穿如果,提示已经传入实例,否则再将 vuex 初始化逻辑写进 vue 的钩子函数
- vue-router
