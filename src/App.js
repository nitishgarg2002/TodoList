import './App.css';
import React from 'react';
import Addtodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoCard from './TodoCard';
class App extends React.Component {
  constructor() {
    super();
    this.state = {

      input: '',
      list: []
    }
  }
  inputadd = (event) => {
    this.setState({
      input: event.target.value
    });
    // console.log(this.state.input);
  }
  onsubmit = () => {
    if (this.state.input !== '') {
      const input = {
        id: Math.random(),
        value: this.state.input
      };
      const list = [...this.state.list];
      list.push(input);
      this.setState({
        list,
        input: ""
      });
    }
  }
  onDelete = (key) => {
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== key);
    this.setState({
      list: updateList,
    });
  }
  render() {
    return (
      <div className="app" >
        <h1 className="h1" >My Todos</h1>
        <Addtodo/>
        <TodoCard/>
      </div>
    );
  }
}

export default App;
