import React from 'react';
import './button.css';
const Button = ({tasks,onDelete}) => {
    return (
       
            <div>
            <button onClick= {() => this.onDelete(tasks.id)}>
            
            </button>
        </div>
        
    );
}
export default Button;