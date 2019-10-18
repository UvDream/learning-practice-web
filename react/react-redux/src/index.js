/*
 * @Author: wangzhongjie
 * @Date: 2019-08-13 15:12:19
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-08-13 15:37:34
 * @Description: 
 * @Email: UvDream@163.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './pages/ToDoList'
import {Provider} from 'react-redux'
import store from './store'
// 提供器
const App=(
    <Provider store={store}>
        <ToDoList />
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));


