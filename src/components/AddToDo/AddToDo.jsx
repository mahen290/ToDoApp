import React from 'react';
import './AddToDo.css';
import { useState } from 'react';

function AddToDo({ updateList }) 
{
  const [ inputItem, setInputItem ] = useState('');
  return (
    <div className = "add-wrapper">

      <input className = "input" type = "text" placeholder = "Enter Your New ToDo Here" value = { inputItem } onChange =  { (event) => setInputItem(event.target.value) } /> 

      <button onClick = { () => { updateList( inputItem ); setInputItem(''); }}> Add. </button>
      
    </div>
    );
}

export default AddToDo;