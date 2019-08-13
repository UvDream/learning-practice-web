/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 15:31:44
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 16:32:42
 * @Description: 
 * @Email: UvDream@163.com
 */
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'
const defaultState={
    inputValue:"呵呵",
    list:[]
}
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue=[]
        return newState;
    }
    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}