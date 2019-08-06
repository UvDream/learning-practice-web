import React, { Component } from 'react';
import { Input, Button,List } from 'antd';
const data = [
    '早上八点开会',
    '晚上八点下班'
]
class ToDoList extends Component {
    render() { 
        return ( 
            <div>
                <div style={{margin:'10px'}}>
                    <Input placeholder="请输入" style={{ width: '250px',marginRight:'20px' }} />
                    <Button  type="primary" >新增</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List bordered dataSource={data} renderItem={item => (<List.Item>{item}</List.Item>)} />
                </div>
            </div> 
         );
    }
}
 
export default ToDoList;