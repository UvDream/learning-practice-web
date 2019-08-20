import React, { useState } from 'react';
import Example from './example'
function App() {
     const [count, setCount] = useState(0); //数组解构
    

    return (
            <div>
                你点击的次数{count}
            <button onClick={() => { setCount(count + 1) }}>点击</button>
            <Example />
            </div>
    )
}
 
export default App;