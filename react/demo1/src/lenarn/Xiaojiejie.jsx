import React, {Component, Fragment} from 'react';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'
import { CSSTransition, TransitionGroup} from 'react-transition-group'

export default class Xiaojiejie extends Component {
  // 在某一时刻,可以自动执行的函数
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            list: ['基础按摩', '精油推背']
        }
    }
    // 第一次进入页面在此生命周期请求远程数据
    componentDidMount(){
      axios.get('https://www.easy-mock.com/mock/5d02185141a8893fef9bb9f5/example/getUser')
          .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
          .catch((error)=>{console.log('axios 获取数据失败'+error)})
  }
    render() {
      console.log("render函数")
        return (
          <Fragment>
            {/* jsx注释 */}
            {/* htmlFor和for冲突 */}
            <label htmlFor="add">增加服务:</label>
            <input
              id="add"
              value={this.state.inputVal}
              onChange={this.inputChange.bind(this)}
              ref={(input)=>{this.input=input}}
              className="input"
            />
            <button onClick={this.addList.bind(this)}>增加服务</button>
            <ul ref={(ul)=>{this.ul=ul}}>
              {/* html解析
                dangerouslySetInnerHTML={{__html:item}} */}
              {this.state.list.map((item, index) => {
                return (
                  <li
                    key={index + item}
                    onClick={this.deleteItem.bind(this, index)}
                    dangerouslySetInnerHTML={{ __html: item }}
                  >
                    {/* {item} */}
                  </li>
                );
              })}
              <hr />
              <TransitionGroup>
              {this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={2000}
                    classNames='boss-text'
                    unmountOnExit
                    key={index+item}
                    >
                  <XiaojiejieItem
                    key={index + item}
                    // 传值
                    // avname='服务员A'
                    content={item}
                    index={index}
                    // 传递方法
                    deleteItem={this.deleteItem.bind(this)}
                    />
                    </CSSTransition>
                );
              })}
              </TransitionGroup>
            </ul>
          </Fragment>
        );
    }

    //输入框改变
    inputChange(e) {
        console.log(e.target.value);
        //this.state.inputVal=e.target.value
        this.setState({
            // inputVal: e.target.value
            // ref写法
            inputVal:this.input.value
        })
    }

    //新增列表
    addList() {
      // setState异步方法
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal:''
        },()=>{
        console.log('长度',this.ul.querySelectorAll('li').length)
        })
        console.log(this.ul.querySelectorAll('li').length)
    }
    //删除列表项
    deleteItem(index){
        console.log(index);
        let list=this.state.list;
        list.splice(index,1);
        //错误写法,严禁操作state里面的值,影响性能
        //this.state.list.splice(index,1);
        this.setState({
            list:list
        })
    }
}