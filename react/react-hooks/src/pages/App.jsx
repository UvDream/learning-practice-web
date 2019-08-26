import React, { useState, useEffect } from 'react';
import Example from './example'
import Exampled from './example3'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Example4 from './example4'
import '../index'
// useEffect 离开生命周期
function Index() {
    useEffect(() => {
        console.log(`useEffect,Index页面`)
        return () => {
            console.log("-----------离开Index页面")
        }
    }, [])
    return (
        <h1>这是首页</h1>
    )
}
function List() {
    useEffect(() => {
        console.log(`useEffect,List页面`)
        return () => {
            console.log("+++++++++++++离开列表页面")
        }
    })
    return (
        <div>列表</div>
    )
}
function App() {
    const [count, setCount] = useState(0); //数组解构
    //  生命周期函数
    useEffect(() => {
        console.log(`生命周期函数useEffect${count}`)
        return () => {
            console.log('0000000000000000000')
        }
    }, [count])

    return (
        <div className="main">
            <section>
                你点击的次数{count}
                <button onClick={() => { setCount(count + 1) }}>点击</button>
            </section>
            <section>
                <Example />
            </section>
            <section>
                <Exampled />
            </section>
            <section>
                <Router>
                    <ul>
                        <li>
                            <Link to="">首页</Link>
                        </li>
                        <li>
                            <Link to="/list/">列表</Link>
                        </li>
                    </ul>
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/" component={List}></Route>
                </Router>
            </section>
            <section>
                <Example4 />
            </section>
        </div>
    )
}

export default App;