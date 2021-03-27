
import './App.css';

import React from 'react';
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
      this.state.list.push(this.state.input);
      this.setState({
        input: "",
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
        <input type="text" onChange={

          this.inputadd} value={this.state.input} />
        <button onClick={this.onsubmit}>Add</button>
        {this.state.list.map((user, i) => <Task key={i} user={user} onDelete = {this.onDelete}
        />)
        }
        
       
        
        {/* {console.log(this.state.list[1])} */}
      </div>

    );


  }
}

export default App;
