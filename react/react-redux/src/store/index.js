/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 15:30:44
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 15:31:56
 * @Description: 
 * @Email: UvDream@163.com
 */
import { createStore } from "redux";
import reducer from "./reducer";
const store=createStore(reducer);
export default store;