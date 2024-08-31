import React, { useState } from 'react';
import './AddToDo.css';

function AddToDo({ addTodo }) 
{

  const [ inputItem, setInputItem ] = useState('');
 
  return (
    <div className = "add-wrapper">
      <input 
        className = "input" 
        type = "text" 
        placeholder = "Enter Your New ToDo Here" 
        value = { inputItem } 
        onChange = { (event) => setInputItem(event.target.value)} 
      />

      <button 
        className = "AddToDoBtn" 
        onClick = { () => { 
          addTodo({ todoText: inputItem });
          setInputItem(''); }}> 
          Add New ToDo 
      </button>
    </div>
  );

}

export default AddToDo;