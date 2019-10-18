import React, { Component } from 'react';
class Exampled extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    componentDidMount(){
        console.log(`componentDidMount=>${this.state.count}`)
    }
    componentDidUpdate(){
        console.log(`componentWillUpdate=>${this.state.count}`)

    }
    render() { 
        return ( 
            <div>
            你点击的次数{this.state.count}
        <button onClick={this.addCount.bind(this)}>点击</button>
        </div>
         );
    }
    addCount(){
        this.setState({count:this.state.count+1})
    }
}
 
export default Exampled;