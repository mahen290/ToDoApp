import React from 'react';
import ToDo from './ToDo';
     
function TodoList({ list }) 
{
  return (
    <div>
      {
        list.length > 0 && list.map((todo) => <ToDo key = { todo.id } ToDoData = { todo.tododata } />)
      }
    </div>
  );
}
export default TodoList;