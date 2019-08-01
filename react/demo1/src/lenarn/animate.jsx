import React, { Component } from 'react';
import './style.css';
import { CSSTransition } from 'react-transition-group'
class Animate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
        }
        this.toToggole =this.toToggole.bind(this)
    }
    render() { 
        return (  
            <div>
                <CSSTransition
                    in={this.state.isShow}   //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    classNames="boss-text"   //className值，防止重复
                    unmountOnExit  //删除dom
                >
            <div>呵呵呵</div>
                </CSSTransition>
                <div className={this.state.isShow?'show':'hide'}>这是标题</div>
                <div>
                    <button onClick={this.toToggole} >点击</button>
                </div>
            </div>
        );
    }
    toToggole(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default Animate;