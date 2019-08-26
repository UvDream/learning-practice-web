import React, { useState,useMemo } from 'react';
function Example7() {
    const [xiaohong, setXiaohong] = useState('小红在等待')
    const [zhiling, setZhiling] = useState('志玲在等待')
    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+"走过来")}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}
function ChildComponent({name,children}){
    function changeXiaohong(){
        console.log("他来了")
        return name+'小红真的来了'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const actionXiaohong=useMemo(()=>changeXiaohong(name),[name])
    return(
        <>
        <div>{actionXiaohong}</div>
        <div>{children}</div>
        </>
    )
}
export default Example7;