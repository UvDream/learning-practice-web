import React from 'react';
import './index.css';
import App from './App';
import {
    render,
    unmountComponentAtNode
} from 'react-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
console.log("首次挂载")
let instance=render(<App />,document.getElementById('root'))
window.renderComponent=()=>{
    console.log("挂载")
    instance = render( < App /> , document.getElementById("root"))
}
window.setState=()=>{
    console.log("更新")
    instance.setState({foo:'bar'})
}
window.unmountComponentAtNode=()=>{
    console.log("卸载")
    unmountComponentAtNode(document.getElementById('root'))
}