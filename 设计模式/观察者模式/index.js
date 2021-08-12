/*
 * @Author: wangzhongjie
 * @Date: 2021-08-12 11:14:50
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-12 13:39:34
 * @Description: 观察者模式
 * @Email: UvDream@163.com
 */

class Subject{
    constructor(){
        this.state={}
        this.observers=[]
    }
    getState(){
        return this.state
    }
    setState(state){
        this.state=state
        this.notify()
    }
    notify(){
        this.observers.forEach(observer=>{
            observer.update()
        })
    }
    attach(observer){
        this.observers.push(observer)
    }
}
class Observer{
    constructor(name,subject){
        this.name=name
        this.subject=subject
        this.subject.attach(this)
    }
    update(){
        console.log(`${this.name} update, state:${this.subject.getState()}`)
    }
}
const s = new Subject()
const o1 = new Observer('o1', s)
const o2 = new Observer('o2', s)
s.setState(1234)