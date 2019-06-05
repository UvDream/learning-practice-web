import React, { Component } from "react";
class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
  //   子组件调用父组件方法
  handleClick() {
    console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
}

export default XiaojiejieItem;
