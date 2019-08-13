/*
 * @Author: wangzhongjie
 * @Date: 2019-08-07 09:35:09
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 14:41:22
 * @Description:redux入口
 * @Email: UvDream@163.com
 */
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);
export default store;
