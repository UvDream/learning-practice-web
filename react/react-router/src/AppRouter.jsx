import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './pages/Index';
import List from './pages/List';
import Home from './pages/Home';


function AppRouter(){
    return(
        <Router>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/list/123">列表</Link>
                </li>
            </ul>
            {/* exact 精确匹配 */}
            <Route path="/" exact component={Index}></Route>
            <Route path="/list/:id"  component={List}></Route>
            <Route path="/home/"  component={Home}></Route>
        </Router>
    )
}
export default AppRouter;