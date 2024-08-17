import React from 'react';
import './AddTodo.css';
import { useState } from 'react';

function AddTodo({ updateList }) 
{
  const [ input, setInput ] = useState('');
  return (
    <div className = "add-wrapper">
        <input className = "input" type = "text" placeholder = "Enter Your New ToDo Here" value = { input } onChange = {(event) => setInput(event.target.value) } />
        <button className = "AddToDoBtn" onClick = { () => updateList(input) }> Add New Item </button>
    </div>
    );
}

export default AddTodo;