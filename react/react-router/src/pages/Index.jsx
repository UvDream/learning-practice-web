import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:1,title:'第1篇文章'},
                {cid:2,title:'第2篇文章'},
                {cid:3,title:'第3篇文章'}

            ]
         }
    }
    render() { 
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (

                                <li key={index}>
                                    <Link to={'/list/'+item.cid}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Index;