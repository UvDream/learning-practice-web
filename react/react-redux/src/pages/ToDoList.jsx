import React, { Component } from 'react';
import {Button,Input} from 'antd';
// import store from '../store';
import {connect} from 'react-redux';
class ToDoList extends Component {

    render() { 
        return (  
        <div>
            <div>
                <Input placeholder="请输入" value={this.props.inputValue} style={{ width: "250px", marginRight: "20px" }} onChange={this.props.inputChange} />
                <Button type="primary" onClick={this.props.clickBtn}>提交</Button>
            </div>
            <ul>
              { this.props.list.map((item,index)=>{
                    return (
                        <li key={index} onClick={()=>{this.props.deleteItem(index)}}>{item}</li>
                    )
              })}
            </ul>
        </div>
        );
    }
    
}
// 映射
 const stateToProps=(state)=>{
     return {
         inputValue:state.inputValue,
         list:state.list
     }
 }
 const dispatchToProps=(dispatch)=>{
     return {
         inputChange(e){
            let action={
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
         },
         clickBtn(){
             let action={
                 type:'add_item'
             }
             dispatch(action)
         },
         deleteItem(index){
             let action={
                 type:'delete_item'
             }
             dispatch(action)
         }
     }
 }
export default connect(stateToProps,dispatchToProps)(ToDoList);