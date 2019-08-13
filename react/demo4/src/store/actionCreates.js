/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 09:16:08
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 14:47:05
 * @Description:仓库
 * @Email: uvdream@163.com
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";
import axios from "axios";
export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});
export const addItemAction = () => ({
  type: ADD_ITEM
});
export const deleteItemAction = index => ({
  type: DELETE_ITEM,
  index
});
export const getListAction = data => ({
  type: GET_LIST,
  data
});
export const getToList = () => {
  return dispatch => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
      )
      .then(res => {
        const data = res.data;
        const action = getListAction(data);
        dispatch(action);
      });
  };
};
