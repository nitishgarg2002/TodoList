
import './App.css';

import React from 'react';
import Task from './components/task';
class App extends React.Component{
  constructor() {
    super();
    this.state={
     
      input: '',
      list: []
    }
  }
  inputadd=(event)=>{

   this.setState({

     input: event.target.value 
    });
   // console.log(this.state.input);
  }
   onsubmit() {
    if(this.state.input !== ''){
      const userInput = {
        id: Math.random(),
        value: this.state.input
      }
      const list = [...this.state.list];
      list.push(userInput);
      this.setState({
      
        input: "",
      });
    }
  } 
  render() {
    return (
    
      <div>
        <input type="text" onChange={

          this.inputadd}  value={this.state.input} />
       <p>
       <button onClick ={()=>onsubmit()}>Add</button>
         </p> 
        {this.state.list.map( user =><Task user ={user}/>)
    }
      </div>
    );
  
  
  }
}

export default App;
