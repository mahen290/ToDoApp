import React from 'react';
import './App.css';
import TodoList from './components/ToDo/ToDoList';
import AddTodo from './components/AddToDo/AddToDo';
import { useState } from 'react';

function App() {

  const [ list, setList ] = useState([
    { id: 1, tododata: 'Take Tea', finished: false },
    { id: 2, tododata: 'Go To Gym', finished: false }
  ]);
  return (
    <div>

      <h1> My ToDo App With Context API And Redux ToolKit </h1>

      <div className = "toDo_Container">
        <h2 className = "toDo_Heading"> My To_Do Application </h2>
        <hr size = "1" color = "indigo" />
      </div>

      <AddTodo updateList = { (todo) => setList([ ...list, 
        { id: list.length + 1, tododata: todo, finished: false }
        ])
      } />

      <TodoList list = { list } />
    </div>
  )
}

export default App;