/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 09:16:08
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 14:28:49
 * @Description:redux
 * @Email: uvdream@163.com
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: []
};

export default (state = defaultState, action) => {
  //   Reducer里只能接受state,不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list;
    console.log(newState);
    return newState;
  }
  return state;
};
