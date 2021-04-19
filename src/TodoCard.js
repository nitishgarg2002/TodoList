import React from 'react';
import { Button } from 'react-bootstrap';

class TodoCard extends React.Component {
    render() {
        return (
            <>
                <div className="container bg-dark text-light rounded mb-3 d-flex flex-row h-50">
                    <div className="d-flex flex-column mr-5" >
                        <div className="h2 text-warning mt-2" >{this.props.name}</div>
                        <br></br>
                        <div className="my-2 h3" >{this.props.desc}</div>
                    </div>
                    <div >
                        <Button className="  mt-5 ml-5  shadow-none" variant="outline-success">Complete</Button>
                        <Button onClick={() => this.props.delete(this.props.id)} className=" mt-5  ml-5  shadow-none" variant="outline-danger">Delete</Button>
                    </div>


                </div>
            </>
        );
    }

}
export default TodoCard;