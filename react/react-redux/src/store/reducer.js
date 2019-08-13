/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 15:31:44
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 15:32:53
 * @Description: 
 * @Email: UvDream@163.com
 */
const defaultState={
    inputValue:"呵呵",
    list:[]
}
export default (state=defaultState,action)=>{
    if(action.type==='change_input'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type==='add_item'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue=[]
        return newState;
    }
    if(action.type==='delete_item'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}