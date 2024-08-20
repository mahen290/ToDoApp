import React from 'react';
import { useState } from 'react';
import './ToDo.css';

function ToDo({ ToDoData, isFinished, changeFinished }) 
{
  const [ finished, setFinished ] = useState(isFinished);
  return (
    <div className = "todo-wrapper">
      <input type = "checkbox" checked = { finished } onChange = { (event) => { 
        setFinished(event.target.checked)         
        changeFinished(event.target.checked)
      }} />
        <h2> { ToDoData } </h2>
        <button> Edit </button>
        <button> Delete </button>
    </div>
  );
}

export default ToDo;