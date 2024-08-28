import React from 'react';
import './AddToDo.css';
import { useContext, useState } from 'react';
import ToDoDispatchContext from "../../context/ToDoDispatchContext";

function AddToDo() 
{
  const [ inputItem, setInputItem ] = useState('');
  const { dispatch } = useContext(ToDoDispatchContext);
  return (
    <div className = "add-wrapper">
      <input className = "input" type = "text" placeholder = "Enter Your New ToDo Here" value = { inputItem } onChange =  { (event) => setInputItem(event.target.value) } /> 

      <button className = "AddToDoBtn" onClick = { () => { dispatch( { type: 'add_todo', payload: { tododata: inputItem } }); setInputItem(''); } }> Add New ToDo </button> 
    </div>
    );
}
export default AddToDo;