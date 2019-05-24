import React,{Component} from 'react';
// import React from 'react';
// const Component=React.Component;
import './App.css';
import Counter from "./Counter"
import MessageList1 from "./Messagelist1";
import MessageList2 from "./Messagelist2";
import Life from "./one/app";
import ThisDirection from "./one/this";
class App extends Component {
  render(){
    return(
      <div className="main">
        <section>
          < Counter />
        </section>
        < section >
        <MessageList1 />
        </section>
        <section >
          < MessageList2 />
        </section>
        <section >
          <Life />
          </section>
        <section>
          < ThisDirection />
        </section>
      </div>
    )
  }
}
export default App;