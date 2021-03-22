
const promise = new Promise((resolve, reject) => {
    if (/*成功*/) {
        resolve(value)
    } else {
        reject(error)
    }
})
promise.then(function (value) {
    // success
}, function (error) {
    // failure
}).catch(function (error) {
    console.log("发生错误", error)
})
// 异步加载图片
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
loadImageAsync('http://www.pic.uvdream.cn/1616131986开发计划.png')}
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

// 成功后抛出错误是无效的
const promise = new Promise(function (resolve, reject) {
    resolve('ok');
    throw new Error('test');
});
promise
    .then(function (value) { console.log(value) })
    .catch(function (error) { console.log(error) });

let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.reject(3)
const res = Promise.all([p1, p2, p3]) //此时输出为 [[PromiseState]]是rejected，[[PromiseResult]]是3的Promise
const res = Promise.all([p1, p2])//此时输出为 [[PromiseState]]是fulfilled，[[PromiseResult]]是[1,2]的Promise
promise.finally(() => {

})
// 等同于
promise.then(result => {
    //...
    return result
}, error => {
    //...
    throw error
})