import React from 'react';
import ToDo from './ToDo';
import { useContext } from 'react';
import ToDoContext from '../../context/ToDoContext';


function ToDoList() 
{

  const { list, setList } = useContext(ToDoContext);

  return (

    <div>

      {
        list.length > 0 && list.map( (todo) =>
          <ToDo 
            key = { todo.id }
            id = { todo.id }
            ToDoData = { todo.tododata }
            isFinished = { todo.finished }

            changeFinished = { (isFinished) => {
              console.log("isFinished", isFinished);

            const updatedList = list.map( (t) => {
                if (t.id == todo.id) 
                {
                  todo.finished = isFinished
                }
                return t;
              })
              setList(updatedList);
            }}

            onDelete = {() => {
              const updatedList = list.filter( t => t.id != todo.id );
              setList(updatedList);
            }}

            onEdit = { (todoText) => {
              const updatedList = list.map( (t) => {
                if (t.id == todo.id) 
                {
                  todo.tododata = todoText;
                }
                return t;
              })
              setList(updatedList)
            }}

          />
        )
      }
    </div>
  );
}

export default ToDoList;