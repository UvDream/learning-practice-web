/*
 * @Author: wangzhongjie
 * @Date: 2019-05-22 17:32:03
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-05-22 17:47:22
 * @Description: context传递值
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types';
// 按钮
function Button(props,context) {
    return ( 
        <button style = {
            {
                background: context.color
            }
        } > {
            props.children
        } </button>
    )
}
Button.propTypes = {
    children: PropTypes.string.isRequired
}
Button.contextTypes={
    color:PropTypes.string.isRequired
}
// 消息
function Message(props) {
    return ( 
        <li> {props.text} <Button> 删除</Button> </li>
    )
}
Message.propType = {
    text: PropTypes.string.isRequired,
}
class MessageList extends Component {
    getChildContext(){
        return {color:"orange"}
    }
    render(){
        const messages=[
             {text: "Hello"}, 
             {text: "React"}
        ];
        const children=messages.map((message,key)=>
        <Message key={key} text={message.text} />
        )
        return(
            <div>
                <p>
                    通过Context将color传递给里面的Button组件
                </p>
                <ul>{children}</ul>
            </div>
        )
    }
}
MessageList.childContextTypes={
    color:PropTypes.string.isRequired
}
export default MessageList;