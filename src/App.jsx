import React from 'react';
import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import AddToDo from './components/AddToDo/AddToDo';

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, editTodo, deleteTodo, finishedTodo } from './slices/ToDoSlices';
import { Toaster } from 'react-hot-toast';

function App() 
{
  // const [ list, setList ] = useState( [ 
  //   { id: 1, tododata: 'Take Tea', finished: false }, 
  //   { id: 2, tododata: 'Go To Gym', finished: false } 
  // ] );
  
  const dispatch = useDispatch();
  const actions = bindActionCreators( { addTodo, editTodo, deleteTodo, finishedTodo }, dispatch);

  return (
    <div>
      <h1 className = "heading"> My ToDo App With UseContext And Redux </h1>
        <div className = "todo_container">
          <h2 className = "todo_heading"> My ToDo Application </h2>
          <hr className = "h-rule" size = "1" color = "white" />
        </div>
        <AddToDo addTodo = { actions.addTodo } />
        <ToDoList 
          editToDo = { actions.editTodo } 
          deleteToDo = { actions.deleteTodo } 
          finishedToDo = { actions.finishedTodo } 
        />
      <Toaster />
    </div>
  )
};

export default App;