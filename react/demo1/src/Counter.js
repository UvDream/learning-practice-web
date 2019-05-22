import React,{Component} from 'react'

export default class Counter extends Component{
    constructor(){
        super()
        this.state={value:0}
    }
    render(){
        return(
            <div>
                < button onClick = {
                    () => this.setState({
                        value: this.state.value + 1
                    })
                } >
                    点击
                </button>
                Counter组件的内部状态:
                <pre>{JSON.stringify(this.state,null,2)}</pre>
            </div>
        )
    }
}