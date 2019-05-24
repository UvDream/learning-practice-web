import React, {Component} from "react";
const suffix='被调用,this指向:';
export default class ThisDirection extends Component{
    handler(){
        console.log(`handler${suffix}`,this)
    }
    render(){
        return(
            <div>
                <button onClick={this.handler}>this指向</button>
            </div>
        )
    }
}