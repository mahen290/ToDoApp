import React from 'react';

const list = [
    { id: 1, todoData: 'todo1' },
    { id: 2, todoData: 'todo2' }
];
     
function TodoList() 
{
  return (
    <div>
      {
        list.length > 0 && list.map( (todo) => <toDo_data key = { todo.id } todoData = { todo.todoData } />)
      }
    </div>
  );
}

export default TodoList;
    




