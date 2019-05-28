import React, {Component, Fragment} from 'react';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
export default class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            list: ['基础按摩', '精油推背']
        }
    }

    render() {
        return (
            <Fragment>
            {/* jsx注释 */}
            {/* htmlFor和for冲突 */}
                <label htmlFor="add">增加服务:</label>
                <input id="add" value={this.state.inputVal} onChange={this.inputChange.bind(this)} className='input'/>
                <button onClick={this.addList.bind(this)}>增加服务</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (<li
                                key={index+item}
                                onClick={this.deleteItem.bind(this,index)}
                                //html解析
                                dangerouslySetInnerHTML={{__html:item}}
                            >
                            {/* {item} */}
                            </li>)
                        })
                    }
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                    <XiaojiejieItem />
                                </div>
                            )
                        })
                    }
                    
                </ul>
            </Fragment>
        )
    }

    //输入框改变
    inputChange(e) {
        console.log(e.target.value);
        //this.state.inputVal=e.target.value
        this.setState({
            inputVal: e.target.value
        })
    }

    //新增列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal:''
        })
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