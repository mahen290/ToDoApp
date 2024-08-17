import React from 'react';
import './ToDo.css';

function ToDo({ ToDoData }) 
{
  return (
    <div className = "todo-wrapper">
        <input type = "checkbox" />
          <h2> { ToDoData } </h2>
        <button> Edit </button>
        <button> Delete </button>
    </div>
  );
}

export default ToDo;