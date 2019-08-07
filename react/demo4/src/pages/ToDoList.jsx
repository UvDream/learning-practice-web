import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "../store";
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
          <Button type="primary">新增</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
  changeInputValue(e) {
    const action = {
      type: "changeInput",
      value: e.target.value
    };
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
}

export default ToDoList;