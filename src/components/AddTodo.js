import React from 'react';
import { Button, InputGroup, Form, FormControl, Row, Container, Col } from 'react-bootstrap';
import TodoCard from '../TodoCard';


class Addtodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      desc: '',
      list: []
    }
  }

  onNameChange(name) {
    this.setState({
      input: name
    })

  }
  onDescChange(desc) {
    this.setState({
      desc: desc
    })

  }
  onAdd() {
    if (this.state.input !== '' && this.state.desc !== '') {

      const userValue = {

        input: this.state.input,
        desc: this.state.desc
      };
      const list = [...this.state.list];
      list.push(userValue);
      console.log(list);
      this.setState({
        list,
        input: '',
        desc: '',
      });
    }


  }
  deleteItem(key){
    console.log('delete');
    console.log(key);
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== key);
    this.setState({
      list:updateList,
    });
  }
  render() {

    return (
      <>
        <Row>
          <div className="container bg-dark text-light rounded my-5 d-flex flex-row h-50" >
            <Col>
              <div>
                <div className="my-3" >Name</div>
                <InputGroup size="lg" className="mb-5 rounded">
                  <InputGroup.Prepend>
                  </InputGroup.Prepend>
                  <FormControl value={this.state.input} onChange={item => this.onNameChange(item.target.value)} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
              </div>
            </Col>
            <Col>
              <div className="" >
                <div className="my-3">Description</div>
                <InputGroup className="mb-5 " size="lg">
                  <InputGroup.Prepend>
                  </InputGroup.Prepend>
                  <FormControl value={this.state.desc} onChange={item => this.onDescChange(item.target.value)} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
              </div>
            </Col>
            <Col>
              <div className="float-right" >
                <Button onClick={() => this.onAdd()} className="h-25 text-light float-right mt-5 auto mx-5 rounded-pill shadow-none" variant="warning">Add Todo</Button>
              </div>
            </Col>
          </div>
        </Row>
        {
          this.state.list.map((item,index)=>{ return(
            <TodoCard name={item.input} desc = {item.desc} key={`${index}`} id= {index} delete={this.deleteItem} />
          )})
        }
      </>
    );
  }

}
export default Addtodo;
