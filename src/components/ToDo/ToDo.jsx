import React from 'react';
import { useState } from 'react';
import './ToDo.css';

function ToDo({ todoData, isFinished, changeFinished, onEdit, onDelete }) {

  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  // console.log(ToDoData);


  return (

    <div className = "todo-wrapper">

      <input type = "checkbox" checked = {finished} onChange = { (event) => {
        setFinished(event.target.checked)
        changeFinished(event.target.checked)
      }} />

      <h2> {(isEditing) ? <input type = "text" value = { editText }
        onChange = { (event) => setEditText(event.target.value) } /> :
        <span> { todoData } </span>}
      </h2>

      <button onClick = {() => {
          setIsEditing(!isEditing);
          onEdit(editText);
        }}> {(!isEditing) ? 'Edit' : 'Save'} 
      </button>

      <button onClick={onDelete}> Delete </button>

    </div>
  );
}
export default ToDo;