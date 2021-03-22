# 介绍

## Promise/A+规范

- 存在三个状态:等待(`pending`),执行中(`fulfilled`),失败(`rejected`)
- 初始态为等待态,可转换为执行中和失败
- 执行中不可转换为其它状态,且必须有一个不可变的终值(`value`)
- 失败状态不可转换为其它状态,且必须有一个不可变的原因(`reason`)
- 必须提供一个`then`方法,以供访问其当前值,终值以及原因
- `then`方法提供两个参数:`onFulfilled`和`onRejected`
- `onFulfilled`和`onRejected`如果不是函数类型,必须忽略
- 如果`executor`执行报错,直接执行`reject`
- 不同的`promise`可以相互套用

更多参考 [promise/A+]([Promises/A+ (promisesaplus.com)](https://promisesaplus.com/#notes))

## Prmose起源与用途

- `Promise`最早在社区提出和实现,在`es6`写入了语言标准
- `Promise`是异步编程的解决方案,比传统的回调函数方式更加合理更加强大更加有呀
- 语法上:使用`Promise`构造函数对异步操作进行封装以生成`Promise`实例
- 功能上:`Promise`对象用来封装一个异步操作并提供统一的API,使用各种异步操作都可以用同步的方式进行处理

## 常用场景

- `fs`文件操作

```js
require('fs').readFile('./index.html',(err,data)=>{

})
```

- `Ajax`操作

```js
$.get('/api/getUser',(data)=>{

})
```

- 定时器

```js
setTimeout(()=>{

},1000)
```

## 为什么使用`Promise`

- 支持链式调用,将异步操作以同步操作的流程表达出来
- 可以解决回调地狱

```js
// 回调地狱典型场景
asyncFunc1(opt,(...args1) => {
    asyncFunc2(opt,(...args2) => {
        asyncFunc3(opt,(...args3) => {
            asyncFunc4(opt,(...args4) => {
                //TODO: some opt
            })
        })
    })
})

```

- 指定回调函数的方式更加灵活
  - 传统方式:必须在启动异步任务之前指定
  - Promise:可以随时监听任务的状态,随时指定回调函数,一个或者多个
- `Promise`提供了统一的api,使得控制异步操作更加容易

# `Promise`优缺点

## 优点

- 对象不受外界影响
- 一旦状态改变,就不会再发生变化

```js
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');
```

> 结果:
>
> Promise
>
> Hi!
>
> resolved.

## 缺点

- 一旦新建,立即执行,无法中途取消
- `Promise`内部跑出的错误,无法反映到外部
- `pedding`状态时无法知道进展到哪一个阶段

# `Promise`使用

## 实例创建

```js
const promise = new Promise((resolve, reject) => {
    if (/*成功*/) {
        resolve(value)
    } else {
        reject(error)
    }
})
```



- `resolve`函数:将`Promise`对象的状态从"未完成"变成"成功"(`pedding`=>`fulfilled`),在异步操作成功时调用,并将异步操作的结果,作为参数传递出去
- `reject`函数:将`Promise`对象的状态从"未完成"变成"失败"(`pedding`=>`reject`),在异步操作失败时调用,并将异步操作报错的错误作为参数传递出去

### 例子(异步加载图片)

```html
<body>
    <div id="app"></div>
</body>
<script>
    function loadImageAsync(url) {
        return new Promise(function (resolve, reject) {
            const image = new Image();

            image.onload = function () {
                resolve(image);
            };

            image.onerror = function () {
                reject(new Error('无法加载图片 ' + url));
            };

            image.src = url;
        });
    }
    var img = loadImageAsync('http://www.pic.uvdream.cn/1616131986开发计划.png')
    img.then(res => {
        console.log(res)
        var d = document.getElementById('app')
        d.appendChild(res)
    })

</script>
```



## Promise.prototype.then()

```js
promise.then(function (value) {
    // success
}, function (error) {
    // failure
});
```

## Promise.prototype.catch()

```js
promise.then(function (value) {
    // success
}, function (error) {
    // failure
}).catch(function(error){
    console.log("发生错误",error)
})
```

## 如果then()方法中出现错误也会被catch()捕捉

```js
const promise = new Promise(function(resolve, reject) {
  throw new Error('test');
});
promise.catch(function(error) {
  console.log(error);
});
```

> 也可以下面写法

```js
// 写法一
const promise = new Promise(function (resolve, reject) {
    try {
        throw new Error('test');
    } catch (e) {
        reject(e);
    }
});
promise.catch(function (error) {
    console.log(error);
});

// 写法二
const promise = new Promise(function (resolve, reject) {
    reject(new Error('test'));
});
promise.catch(function (error) {
    console.log(error);
});
```

> 如果`Promise`状态已经变成`resolved`,再抛出错误是无效的

```js
const promise = new Promise(function (resolve, reject) {
    resolve('ok');
    throw new Error('test');
});
promise
    .then(function (value) { console.log(value) })
    .catch(function (error) { console.log(error) });
```

以上代码是不会抛出错误的

## Promise.resolve()

返回成功或者失败的`Promise`对象

## Prmose.reject()

返回一个失败的`Promise`对象

## Promise.all()

> 方法将多个`Promise`实例,包装成一个新的`Promise`实例

```
const p= Promise.all([p1,p2,p3])
```

p的状态由p1,p2,p3决定

- 只有p1,p2,p3的状态都编程`fulfilled`,p的状态才会编程`fulfilled`,此时p1,p2,p3的返回值组成一个数组,传递给p的回调函数
- 只要p1,p2,p3之中有一个`rejected`,p的状态就变成`rejected`,此时第一个`rejected`的实例的返回值,会传递给p的回调函数

例子

```js
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.reject(3)
const res = Promise.all([p1, p2, p3]) //此时输出为 [[PromiseState]]是rejected，[[PromiseResult]]是3的Promise
const res = Promise.all([p1, p2])//此时输出为 [[PromiseState]]是fulfilled，[[PromiseResult]]是[1,2]的Promise
```

## Promise.prototype.finally()

`finally()`方法用于指定不管`Promise`对象最后状态如何,都会执行的操作,

`finally()`其实就是`then()`方法的特例

```js
promise.finally(() => {
//...
})
// 等同于
promise.then(result => {
    //...
    return result
}, error => {
    //...
    throw error
})
```

## Promise.race()

> 同样将多个`Promise`实例包装成一个新的`Promise`实例`

## Promise.allSettled()

> 接受一组`Promise`实例作为参数,包装秤一个新的`Promise`实例,只有等到所有这些实例都返回结果,不管是`fulfilled`还是`rejected`,包装实例才会结束

## Promise.any()

> 该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。



# 手写Promise











