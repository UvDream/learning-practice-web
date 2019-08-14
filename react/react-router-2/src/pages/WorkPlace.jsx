import React from 'react';
import {  Route,Link } from "react-router-dom";
import Money from './workplace/Money';
import GetUp from './workplace/GetUp';
function WorkPlace(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to="/workplace/getup/">早起</Link>
                    </li>
                    <li>    
                    <Link to="/workplace/money/">赚钱</Link>
                    </li>
                </ul>

            </div>
            <div className="videoContent">
                <div>
                    <h3>技能</h3>
                    <Route path="/workplace/getup/" component={GetUp}></Route>
                    <Route path="/workplace/money/" component={Money}></Route>
                </div>
            </div>
        </div>
    )
}
export default WorkPlace;