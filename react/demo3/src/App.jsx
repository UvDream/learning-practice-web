
import React, { Component } from 'react';
import "./App.css"
import Hooks from "./hooks/hook";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main">
                <h1>React Hooks</h1>
                <div className="body">
                    <section>
                        <Hooks />
                    </section>
                </div>
            </div>
         );
    }
}
 
export default App;