import React, { Component } from "react";
import store from "../store";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getToList
} from "../store/actionCreates";
import ToDoListUi from "./ToDoListUi";
// const data = [
//     '早上八点开会',
//     '晚上八点下班'
// ]
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  render() {
    return (
      <ToDoListUi
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
  componentDidMount() {
    const action = getToList();
    store.dispatch(action);
  }
  // 输入框改变
  changeInputValue(e) {
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // };
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  // 改变列表
  storeChange() {
    this.setState(store.getState());
  }
  // 添加数据
  clickBtn() {
    // const action = {
    //     type:ADD_ITEM
    // }
    const action = addItemAction();
    store.dispatch(action);
  }
  // 删除数据
  deleteItem(index) {
    // const action = {
    //     type: DELETE_ITEM,
    //     index
    // }
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default ToDoList;
