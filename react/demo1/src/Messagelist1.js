import React from 'react'
import PropTypes from 'prop-types';
// 按钮
function Button(props){
    return(
        <button style={{background:props.color}}>
            {props.children}
        </button>
    )
}
Button.propType={
    color:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}

// 消息
function Message(props){
    return(
        <li>
            {props.text}<Button color={props.color}>删除</Button>
        </li>
    )
}
Message.propType={
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}
// 列表
function MessageList(){
    const color="red"
    const messages=[
        {text:"Hello"},
        {text:"React"}
    ]
    const children=messages.map((message,key)=>
        <Message key={key} text={message.text} color={color}/>
    );
    return(
        <div>
            <p>
                通过props将color逐层传递给里面的Button组件
            </p>
            <ul>
                {children}
            </ul>
        </div>
    )
}
export default MessageList;