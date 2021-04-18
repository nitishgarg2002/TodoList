import React from 'react';
import { Button, InputGroup, Form, FormControl,Row,Container,Col } from 'react-bootstrap';


const Addtodo = () => {
  return (
    <>
<Row>
    <div  className="container bg-dark text-light rounded my-5 d-flex flex-row h-50" >
      <Col>
      <div>
        <div className="my-3" >Name</div>
        <InputGroup size="lg" className="mb-5 rounded">
          <InputGroup.Prepend>
          </InputGroup.Prepend>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
      </div>
      </Col>
      <Col>
      <div className="" >
        <div className="my-3">Description</div>
        <InputGroup className="mb-5 " size="lg">
          <InputGroup.Prepend>
          </InputGroup.Prepend>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
      </div>
      </Col>
      <Col>
      <div  className="float-right" >
      <Button className="h-25 text-light float-right mt-5 auto mx-5 rounded-pill shadow-none" variant="warning">Add Todo</Button>
      </div>
      </Col>
    </div>
      </Row>
    </>
  );
}
export default Addtodo;
