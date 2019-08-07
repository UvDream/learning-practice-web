import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from '../store';
// const data = [
//     '早上八点开会',
//     '晚上八点下班'
// ]
class ToDoList extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState())
        this.state=store.getState()
    }
    render() { 
        return ( 
            <div>
                <div style={{margin:'10px'}}>
                    <Input placeholder={this.state.inputValue} style={{ width: '250px',marginRight:'20px' }} />
                    <Button  type="primary" >新增</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List bordered dataSource={this.state.list} renderItem={item => (<List.Item>{item}</List.Item>)} />
                </div>
            </div> 
         );
    }
}
 
export default ToDoList;