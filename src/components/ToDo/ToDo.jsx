import React from 'react';
import './ToDo.css';

function ToDo({ toDo_data }) 
{
  return (
    <div className = "todo-wrapper">
        <input type = "checkbox" />
            <h2> { toDo_data } </h2>
        <button> Edit </button>
        <button> Delete </button>
    </div>
  );
}

export default ToDo;