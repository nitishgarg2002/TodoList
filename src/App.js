import './App.css';
import React from 'react';
import Addtodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoCard from './TodoCard';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

 
  render() {
    const {input} =this.state;
    return (
      <div className="app" >
        <h1 className="h1" >My Todos</h1>
        <Addtodo />
        {/* <TodoCard/> */}
      </div>
    );
  }
}

export default App;
