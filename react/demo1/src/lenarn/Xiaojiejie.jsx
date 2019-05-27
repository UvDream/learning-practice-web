import React, {Component, Fragment} from 'react';

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
                <input value={this.state.inputVal} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addList.bind(this)}>增加服务</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>
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
            list: [...this.state.list, this.state.inputVal]
        })
    }
}