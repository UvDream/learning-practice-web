import React, { Component } from "react";
import PropTypes from 'prop-types';
class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // 解决性能问题
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content!==this.props.content){
      return true;
    }else{
      return false;
    }
  }
  render() {
    return <li onClick={this.handleClick}>
    {this.props.avname}
    {this.props.content}</li>;
  }
  //   子组件调用父组件方法
  handleClick() {
    console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
}
// propTypes校验
XiaojiejieItem.propTypes={
  avname:PropTypes.string.isRequired,
  content:PropTypes.string,
  index:PropTypes.number,
  deleteItem:PropTypes.func
}
XiaojiejieItem.defaultProps={
  avname:'服务员B-'
}
export default XiaojiejieItem;
