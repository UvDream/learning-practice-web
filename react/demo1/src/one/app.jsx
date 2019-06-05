/*
 * @Author: wangzhongjie
 * @Date: 2019-05-24 15:18:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-05-24 15:44:28
 * @Description: 生命周期
 */
import React,{Component} from 'react';
export default class Life extends Component{
    render(){
        return(
            <div>
                生命周期
            </div>
        )
    }
    componentWillMount(){
        console.log('渲染前')
    }
    componentDidMount(){
        console.log("第一次渲染后调用")
    }
    componentWillReceiveProps(){
        console.log("组件接收到一个新的prop时被调用,第一次渲染时不会被调用")
    }
    shouldComponentUpdate(){
        console.log("返回一个Boolean值,在组建接收新的props或者state时被调用,在初始化或者使用forceUpdate时不被调用,可以在你确认不需要更新组件的时候使用")
    }
    componentWillUpdate(){
        console.log("在组件接收新的props或者state但是还没render时候被调用,在初始化时不会被调用")
    }
    componentDidUpdate(){
        console.log("在组件更新完成更新后立即调用,在初始化的时候不被调用")
    }
    componentWillUnmount(){
        console.log("在组件dom被移除的时候立即被调用")
    }
}