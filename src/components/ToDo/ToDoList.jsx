import React from 'react';
import ToDo from './ToDo';
import { useSelector } from "react-redux";

function ToDoList( { finishedToDo, editToDo, deleteToDo } ) 
{
  
  const list = useSelector( (state) => state.todo);

    function onFinished(todo, isFinished) 
    {
      finishedToDo(todo, isFinished);
    }

    function onEdit(todo, todoText) 
    {
      editToDo(todo, todoText);
    }

    function onDelete(todo) 
    {
      deleteToDo(todo);
    }

  return (

    <div>
      {
        list.length > 0 && list.map( (todo) =>
          <ToDo 
            key = { todo.id }
            id = { todo.id }
            todoData = { todo.todoData }
            isFinished = { todo.finished }
            changeFinished = { (isFinished) => onFinished(todo, isFinished) }
            onDelete = { () => { onDelete(todo) } } 
            onEdit = { (todoText) => onEdit(todo, todoText) }
          />
        )
      }
    </div>

  );

}

export default ToDoList;