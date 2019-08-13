import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "../store";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction
} from "../store/actionCreates";
// const data = [
//     '早上八点开会',
//     '晚上八点下班'
// ]
class ToDoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
    this.clickBtn = this.clickBtn.bind(this);
  }
  render() {
    return (
      <div>
        <div style={{ margin: "10px" }}>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "20px" }}
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
          <Button type="primary" onClick={this.clickBtn}>
            新增
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.deleteItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
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
