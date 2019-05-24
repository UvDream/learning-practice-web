import React, { Component } from "react";
const suffix = "被调用,this指向:";
export default class ThisDirection extends Component {
  constructor(props) {
    super(props);
  }
  handler() {
    console.log(`handler${suffix}`, this);
  }
  componentDidMount(){
      console.log(`componentDidMount${suffix}`,this);
  }
  componentWillReceiveProps(){
      console.log(`componentWillReceiveProps${suffix}`, this);
  }
  shouldComponentUpdate(){
      console.log(`shouldComponentUpdate${suffix}`, this);
      return true;
  }
  componentDidUpdate(){
      console.log(`componentDidUpdate${suffix}`, this);
  }
 componentWillUnmount(){
      console.log(`componentWillUnmount${suffix}`, this);
 }
  render() {
    console.log(`render${suffix}`,this)
    this.handler()
    window.handler=this.handler;
    window.handler()
    return (
      <div>
        <button onClick={this.handler}>this指向</button>
      </div>
    );
  }
}
