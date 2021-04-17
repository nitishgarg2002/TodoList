import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const Addtodo = () => {
    return (
        <div>
            <div className="addtodo" >
                <div >
                    <div>Name</div>
                    <InputGroup size="lg" className="form-control-lg">
                        <InputGroup.Prepend>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                </div>
                <div>
                    <div>Description</div>
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                </div>

            </div>




        </div>
    );
}
export default Addtodo;
