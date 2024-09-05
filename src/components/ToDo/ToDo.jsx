import React from 'react';
import { useState } from 'react';
import './ToDo.css';
import { toast } from 'react-hot-toast';

function ToDo( { todoData, isFinished, changeFinished, onEdit, onDelete } ) 
{

  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  // console.log(todoData);


  return (

    <div className = "todo-wrapper">

      <input type = "checkbox" checked = { finished } onChange = { (event) => {
          setFinished(event.target.checked)
          changeFinished(event.target.checked)
          toast.success(event.target.checked ? "ToDo Marked Done..!" : "ToDo Marked Not Done..!");
        }}
      />

      <h2> {(isEditing) ? <input type = "text" value = { editText }
        onChange = { (event) => setEditText(event.target.value) } /> :
        <span> { todoData } </span>}
      </h2>

      <button onClick = {() => {
          setIsEditing(!isEditing);
          onEdit(editText);
          toast.success(isEditing ? "ToDo Edited Successfully..!" : "Edit Mode Enabled..!");
        }}> { !isEditing ? 'Edit' : 'Save' } 
      </button>

      <button onClick = { () => {
                onDelete();
                toast.success("ToDo Deleted Successfully");
            }}> Delete 
      </button>

    </div>
  );

}

export default ToDo;