import './App.css';
import React from 'react';
import Addtodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
 
  render() {

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
