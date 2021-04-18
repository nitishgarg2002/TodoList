import React from 'react';
import {Button} from 'react-bootstrap';

const TodoCard = () => {
    return (
        <>
        <div className="container bg-dark text-light rounded  d-flex flex-row h-50">
            <div className = "d-flex flex-column mr-5" >
            <div className="h2 text-warning mt-2" >Task 1</div>
            <div className="my-2 h3" >This is task 1</div>
            </div>
            <div > 
            <Button className="  mt-5 ml-5  shadow-none" variant="outline-success">Complete</Button>
            <Button className=" mt-5  ml-5  shadow-none" variant="outline-danger">Delete</Button>
            </div>
            

        </div>
        </>
    );
}
export default TodoCard;