/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 09:16:08
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 14:12:30
 * @Description:redux
 * @Email: uvdream@163.com
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: ["早上八点上班", "晚上八点下班"]
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
  return state;
};
