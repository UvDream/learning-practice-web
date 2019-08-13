import React from 'react';
import {Button,Input} from 'antd';
// import store from '../store';
import {connect} from 'react-redux';
const ToDoList=(props)=>{
    let {inputValue,inputChange,clickBtn,deleteItem,list}=props;
    return (  
    <div>
        <div>
            <Input placeholder="请输入" value={inputValue} style={{ width: "250px", marginRight: "20px" }} onChange={inputChange} />
            <Button type="primary" onClick={clickBtn}>提交</Button>
        </div>
        <ul>
          { list.map((item,index)=>{
                return (
                    <li key={index} onClick={()=>{deleteItem(index)}}>{item}</li>
                )
          })}
        </ul>
    </div>
    );
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
                 type:'delete_item',
                 index
             }
             dispatch(action)
         }
     }
 }
export default connect(stateToProps,dispatchToProps)(ToDoList);