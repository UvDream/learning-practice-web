import React, { Component } from "react";
import { Input, Button, List } from "antd";

class ToDoListUi extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: "10px" }}>
          <Input
            placeholder="请输入新增内容"
            style={{ width: "250px", marginRight: "20px" }}
            onChange={this.props.changeInputValue}
            value={this.props.inputValue}
          />
          <Button type="primary" onClick={this.props.clickBtn}>
            新增
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  this.props.deleteItem(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default ToDoListUi;
