import React, {Component, Fragment} from 'react';

export default class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: 'xxxx',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <input value={this.state.inputVal} onChange={this.inputChange.bind(this)}/>
                <button>增加服务</button>
                <ul>
                    <li>头部按摩</li>
                    <li>精油推拿</li>
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        console.log(e.target.value);
        //this.state.inputVal=e.target.value
        this.setState({
            inputVal: e.target.value
        })
    }
}