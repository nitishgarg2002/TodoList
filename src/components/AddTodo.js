import React from 'react';
import { Button, InputGroup, Form, FormControl } from 'react-bootstrap';


const Addtodo = () => {
  return (
    <>
    <div  className="container bg-dark text-light rounded my-5 d-flex flex-row h-50" >
      <div>
        <div className="my-3" >Name</div>
        <InputGroup size="lg" className="mb-5 rounded">
          <InputGroup.Prepend>
          </InputGroup.Prepend>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
      </div>
      <div className="ml-5" >
        <div className="my-3">Description</div>
        <InputGroup className="mb-5 rounded" size="lg">
          <InputGroup.Prepend>
          </InputGroup.Prepend>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
      </div>
      <Button className="h-25 text-light float-right mt-5 auto mx-5 rounded-pill shadow-none" variant="warning">Add Todo</Button>
    </div>

    </>
  );
}
export default Addtodo;
