import React from 'react';
import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import AddToDo from './components/AddToDo/AddToDo';
import { useState } from 'react';
import ToDoContext from './context/ToDoContext';

function App() 
{
  const [ list, setList ] = useState( [ 
    { id: 1, tododata: 'Take Tea', finished: false }, 
    { id: 2, tododata: 'Go To Gym', finished: true } 
  ] );

  return (
    <div>
      <ToDoContext.Provider value = {{ list, setList }}>
      <h1> My ToDo App With UseContext And Redux </h1>
      <div className = "toDo_Container">
        <h2 className = "toDo_Heading"> My ToDo Application </h2>
        <hr size = "1" color = "indigo" />
      </div>

      <AddToDo updateList = { (todo) => setList([...list, { id: list.length + 1, tododata: todo, finished: false } ]) } />
      <ToDoList />
      </ToDoContext.Provider>
    </div>
  )
};

export default App;