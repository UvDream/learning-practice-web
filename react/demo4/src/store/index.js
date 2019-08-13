/*
 * @Author: wangzhongjie
 * @Date: 2019-08-07 09:35:09
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 14:58:14
 * @Description:redux入口
 * @Email: UvDream@163.com
 */
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySagas from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

//thunk
// const enhancer = composeEnhancers(applyMiddleware(thunk));

//sagas
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);

//sagas
sagaMiddleware.run(mySagas);
export default store;
