import React from 'react';
import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import AddToDo from './components/AddToDo/AddToDo';
import { useReducer } from 'react';
import ToDoContext from './context/ToDoContext';
import ToDoDispatchContext from "./context/ToDoDispatchContext";
import ToDoReducer from "./reducers/ToDoReducer";

function App() 
{
  // const [ list, setList ] = useState( [ 
  //   { id: 1, tododata: 'Take Tea', finished: false }, 
  //   { id: 2, tododata: 'Go To Gym', finished: false } 
  // ] );
  
  const [ list, dispatch ] = useReducer(ToDoReducer, []);

  return (
    <div>
      <ToDoContext.Provider value = { { list } }>
      <ToDoDispatchContext.Provider value = { { dispatch } }>
          <h1 className="heading"> My ToDo App With UseContext And Redux </h1>
          <div className = "toDo_Container">
              <h2 className = "toDo_Heading"> My ToDo Application </h2>
              <hr size = "1" color = "indigo" />
          </div>
          <AddToDo />
          <ToDoList />
      </ToDoDispatchContext.Provider>
      </ToDoContext.Provider>
    </div>
  )
};
export default App;