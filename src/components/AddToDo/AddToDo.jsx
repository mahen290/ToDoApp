import React, { useState } from 'react';
import './AddToDo.css';
import { toast } from 'react-hot-toast';

function AddToDo({ addTodo }) 
{
  const [ inputItem, setInputItem ] = useState('');
  const handleAddToDo = () => {

    if (inputItem.trim()) 
    {
      addTodo( { todoText: inputItem } );
      toast.success("ToDo Added Successfully..!");
      setInputItem('');
    } 
    
    else 
    {
      toast.error("Please Enter Valid ToDo..!");
    }
  }
  return (

    <div className = "add-wrapper">
      <input 
        className = "input" 
        type = "text" 
        placeholder = "Enter Your New ToDo" 
        value = { inputItem } 
        onChange = { (event) => setInputItem(event.target.value) } 
      />

      <button 
        className = "AddToDoBtn" 
        onClick = { handleAddToDo }> Add New ToDo 
      </button>
    </div>
  );
}

export default AddToDo;