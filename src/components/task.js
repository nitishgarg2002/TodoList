import React from 'react';


const Task = ({user,onDelete}) => {
    return (
        <div>
            <button onClick= {() =>onDelete(user.id)}>
                {user}
            </button>
        </div>
    );
}
export default Task;
   