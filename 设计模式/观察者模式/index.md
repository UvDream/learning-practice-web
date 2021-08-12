<!--
 * @Author: wangzhongjie
 * @Date: 2021-08-12 11:14:39
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-12 13:46:42
 * @Description:观察者模式
 * @Email: UvDream@163.com
-->

# 观察者模式

## 简介

一对多

## 示例

```js
/*
 * @Author: wangzhongjie
 * @Date: 2021-08-12 11:14:50
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-12 13:39:34
 * @Description: 观察者模式
 * @Email: UvDream@163.com
 */

class Subject {
  constructor() {
    this.state = {};
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notify();
  }
  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
  attach(observer) {
    this.observers.push(observer);
  }
}
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(`${this.name} update, state:${this.subject.getState()}`);
  }
}
const s = new Subject();
const o1 = new Observer("o1", s);
const o2 = new Observer("o2", s);
s.setState(1234);
```

## 场景

- vue2 defineProperty

```js
function update() {
  console.log("更新啦");
}

const newPrototype = Array.prototype;
const arrProto = Object.create(newPrototype);
// 由于Object.defineProperty不能监听数组，此处重写数组的方法
// 此处只演示数组的push方法，其他方法的实现与此一致
arrProto.push = function () {
  update();
  newPrototype.push.call(this, ...arguments);
};
function watcherFn(obj) {
  // 如果是数组，重写obj的原型指向arrProto
  if (Array.isArray(obj)) {
    obj.__proto__ = arrProto;
  } else {
    for (let k of Object.keys(obj)) {
      register(obj, k, obj[k]);
    }
  }
}

function register(obj, key, value) {
  if (typeof value === "object") {
    watcherFn(value);
  } else {
    Object.defineProperty(obj, key, {
      get() {
        return value;
      },
      set(val) {
        if (val !== value) {
          update();
          value = val;
        }
      },
    });
  }
}

const obj = {
  name: "h",
  info: {
    address: "bj",
  },
  likes: ["music"],
};

watcherFn(obj);

obj.name = "b";
obj.info.address = "gz";
obj.likes.push("sing");
console.log(obj); // 更新啦 × 3
```
