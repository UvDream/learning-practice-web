class Promise {
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'
    constructor(executor) {
        // 保存promise状态
        this.status = Promise.PENDING;
        // 保存promise结果
        this.value = null;
        // 解决setTimeOut问题,保存异步回调列表
        this.callbacks = []
        try {
            executor(this.resolve.bind(this), this.rejected.bind(this))
        } catch (error) {
            this.rejected(error)
        }
    }
    resolve(value) {
        if (this.status === Promise.PENDING) {
            this.status = Promise.FULFILLED
            this.value = value
            setTimeout(() => {
                // 解决setTimeOut问题
                this.callbacks.map(callback => {
                    callback.onResolved(value)
                })
            });

        }
    }
    rejected(value) {
        if (this.status === Promise.PENDING) {
            this.status = Promise.REJECTED
            this.value = value
            setTimeout(() => {
                // 解决setTimeOut问题
                this.callbacks.map(callback => {
                    callback.onRejected(value)
                })
            });

        }
    }
    then(onResolved, onRejected) {
        if (typeof onResolved !== 'function') {
            // then()的穿透解决
            onResolved = value => value
        }
        if (typeof onRejected !== 'function') {
            // then()的穿透解决
            onRejected = value => value
        }
        return new Promise((resolve, rejected) => {
            if (this.status === Promise.PENDING) {
                this.callbacks.push({
                    onResolved: value => {
                        try {
                            let result = onResolved(value)
                            if (result instanceof Promise) {
                                result.then(resolve, rejected)
                            } else {
                                resolve(result)
                            }
                        } catch (error) {
                            // onRejected(error)
                            rejected(error)
                        }
                    },
                    onRejected: value => {
                        try {
                            let result = onRejected(value)
                            if (result instanceof Promise) {
                                result.then(resolve, rejected)
                            } else {
                                resolve(result)
                            }
                        } catch (error) {
                            // onRejected(error)
                            rejected(error)
                        }
                    }
                })
            }
            if (this.status === Promise.FULFILLED) {
                setTimeout(() => {
                    try {
                        let result = onResolved(this.value)
                        if (result instanceof Promise) {
                            result.then(resolve, rejected)
                        } else {
                            resolve(result)
                        }
                    } catch (error) {
                        // onRejected(error)
                        rejected(error)
                    }
                })

            }

            if (this.status === Promise.REJECTED) {
                setTimeout(() => {
                    try {
                        let result = onRejected(this.value)
                        if (result instanceof Promise) {
                            result.then(resolve, rejected)
                        } else {
                            resolve(result)
                        }
                    } catch (error) {
                        // onRejected(error)
                        rejected(error)
                    }
                })

            }
        })
    }
}











// // 测试代码
// new Promise(function (res, rej) {
//     setTimeout(_ => res('成功'), 500)
// }).then(res => {
//     console.log(res);
//     return '第一个.then成功'
// }).then(res => {
//     console.log(res);
//     return new Promise(function (resolve) {
//         setTimeout(_ => resolve('第二个.then成功'), 500)
//     })
// }).then(res => {
//     console.log(res)
//     return new Promise(function (resolve, reject) {
//         setTimeout(_ => reject('第三个失败'), 1000)
//     })
// }).then(res => {
//     res
//     console.log(res)
// }, rej => console.log(rej));