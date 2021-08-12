/*
 * @Author: wangzhongjie
 * @Date: 2021-08-12 11:11:31
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-12 11:13:10
 * @Description: 代理模式
 * @Email: UvDream@163.com
 */
const data = {
    name: 'a',
    age: 18,
    likes: []
  }
  
  // 为data创建一个代理
  const proxyData = new Proxy(data, {
    get(target, key, receiver) {
      const result = Reflect.get(target, key, receiver)
      console.log('get')
      return result
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
      console.log('set')
      return result
    }
  })
  
  // 通过改变proxyData而不是data，进行代理
  proxyData.name = '2'
  proxyData.likes.push('eat')
  // 打印data
  console.log(data) // 'set' 'get' { age: 18, likes: ["eat"], name: "2" }
  