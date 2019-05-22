import React,{Component} from 'react';
// import React from 'react';
// const Component=React.Component;
import './App.css';
import Counter from "./Counter"
import MessageList1 from "./Messagelist1";
import MessageList2 from "./Messagelist2";

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
      </div>
    )
  }
}
export default App;