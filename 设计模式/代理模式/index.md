<!--
 * @Author: wangzhongjie
 * @Date: 2021-08-12 11:11:44
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-12 11:14:04
 * @Description:代理模式
 * @Email: UvDream@163.com
-->

# 代理模式

## 简介

使用者无醛访问目标对象,中间需要设置代理,通过代理授权控制,例如`vpn`

## 示例

```js
const data = {
  name: "a",
  age: 18,
  likes: [],
};

// 为data创建一个代理
const proxyData = new Proxy(data, {
  get(target, key, receiver) {
    const result = Reflect.get(target, key, receiver);
    console.log("get");
    return result;
  },
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    console.log("set");
    return result;
  },
});

// 通过改变proxyData而不是data，进行代理
proxyData.name = "2";
proxyData.likes.push("eat");
// 打印data
console.log(data); // 'set' 'get' { age: 18, likes: ["eat"], name: "2" }
```

## 场景

- 事件代理(委托)

```js
<ul id="ul">
  <li>111</li>
  <li>222</li>
  <li>333</li>
  <li>444</li>
</ul>;

window.onload = function () {
  var oUl = document.getElementById("ul");
  // 通过事件冒泡，直接为父组件绑定事件
  oUl.onclick = function (ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() == "li") {
      alert(target.innerHTML);
    }
  };
};
```
