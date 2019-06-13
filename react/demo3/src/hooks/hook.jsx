import React,{useState} from 'react';
function Hooks() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>你点击了{count}次</p>
            <button onClick={()=>setCount(count + 1)} >
            点击
            </button>
        </div>
    )
}
export default Hooks