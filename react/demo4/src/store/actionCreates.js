/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 09:16:08
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 14:26:04
 * @Description:方法
 * @Email: uvdream@163.com
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";
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
