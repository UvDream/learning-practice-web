/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 16:33:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 16:36:57
 * @Description: 
 * @Email: UvDream@163.com
 */
import {
    CHANGE_INPUT,
    ADD_ITEM,
    DELETE_ITEM
} from './actionTypes'
export const inputChangeAction = value => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM
})
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})