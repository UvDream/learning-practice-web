import React, { Component } from 'react';
import './style.css'

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