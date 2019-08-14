import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import './index.css'
import Video from './pages/Video'
import WorkPlace from './pages/WorkPlace';
function AppRouter(){
    let routerConfig=[
        {id:1,title:'博客首页',path:'/',exact:true,component:Index},
        {id:2,title:'视频教程',path:'/video/',exact:false,component:Video},
        {id:3,title:'职场技能',path:'/workplace/',exact:false,component:WorkPlace}

    ]
    return (
        <Router>
        <div className="mainDiv">
          <div className="leftNav">
              <h3>一级导航</h3>
              <ul>
                  {/* <li> <Link to="/">博客首页</Link> </li>
                  <li><Link to="/video/">视频教程</Link> </li>
                  <li><Link to="/workplace/">职场技能</Link> </li> */}
                  {
                      routerConfig.map((item,index)=>{
                          return(
                              <li key={index}>
                                  <Link to={item.path}>{item.title}</Link>
                              </li>
                          )
                      })
                  }
              </ul>
          </div>
          
          <div className="rightMain">
              {/* <Route path="/"  exact component={Index} />
              <Route path="/video"  component={Video} />
              <Route path="/workplace"  component={WorkPlace} /> */}
               {
                      routerConfig.map((item,index)=>{
                          return(
                            <Route key={index} path="{item.path}" exact={item.exact}  component={item.component} />
                          )
                      })
                  }
          </div>
        </div>
    </Router>
    )
}
export default AppRouter;