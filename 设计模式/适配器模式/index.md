# 适配器模式

## 简介

`mac` 笔记本 `type-c` 接口,没办法接 `hdmi`和 `usb`,这时候需要一个转接头

## 示例

```js
class iphone {
  getName() {
    return "我是iphone接口";
  }
}
class Target {
  constructor() {
    this.t = new iphone();
  }
  getName() {
    return `${this.t.getName()},已经转化为安卓接口了`;
  }
}
const target = new Target();
console.log(target.getName());
```

## 场景

- `vue`的`computed`
  vue 中有时 data 中的数据不满足于某个需求的使用，通常可以通过计算属性 computed 重新组装一个新的数据

```
computed: {
  if(this.count>=60){
      return "及格"
  }else{
      return "不及格"
  }
  }
```
