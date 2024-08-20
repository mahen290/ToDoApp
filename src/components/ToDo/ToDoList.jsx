import React from 'react';
import ToDo from './ToDo';
     
function TodoList({ list, setList }) 
{
  return (
    <div>
      {
        list.length > 0 && list.map( (todo) => 
        <ToDo>
          key = { todo.id } 
          id = { todo.id } 
          ToDoData = { todo.tododata } 
          isFinished = { todo.finished }

          changeFinished = { ( isFinished ) => {
            console.log("isFinished", isFinished);

            const updatedList = list.map( (t) => 
            {
              if(t.id === todo.id) 
              {
                todo.finished = isFinished
              }
              return t;
            }
          )
            setList(updatedList);
          }
        }
        </ToDo>
      )
      }
    </div>
  );
}
export default TodoList;