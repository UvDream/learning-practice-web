import React, { useState,createContext,useContext } from 'react';

// createContext,useContext使用方法
const CountContext=createContext();
function Counter(){
    let count=useContext(CountContext)
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
function Example4(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <p> 第四个点击示例:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    );
}
 
export default Example4;