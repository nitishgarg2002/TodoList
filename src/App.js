import './App.css';
import React from 'react';
import Button from './components/button'
import Task from './components/task';
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
      <div>
        <input  type="text" onChange={this.inputadd} value={this.state.input} />
        <button  onClick={this.onsubmit}>
          Add</button>
        {this.state.list.map(tasks => {
          return (
            <li>
               <button onClick={() => this.onDelete(tasks.id)}>
              {tasks.value}{`\n`}
            </button>
            </li>
            
    )
        })}

        {/* {console.log(this.state.list[1])} */}
      </div>
    );
  }
}

export default App;
