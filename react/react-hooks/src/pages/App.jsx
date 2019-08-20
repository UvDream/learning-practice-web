import React, { useState } from 'react';
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0}
//     }
//     render() { 
//         return (  
//             <div>
//                 你点击的次数{this.state.count}
//                 <button onClick={this.addCount.bind(this)}>点击</button>
//             </div>
//         );
//     }
//     addCount() {
//         this.setState({
//             count:this.state.count+1
//         })
//     }
// }
function App() {
    const [count, setCount] = useState(0);
    return (
            <div>
                你点击的次数{count}
                <button onClick={()=>{setCount(count+1)}}>点击</button>
            </div>
    )
}
 
export default App;