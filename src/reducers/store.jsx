import { combineReducers, createStore } from "redux";

import ToDoReducer from "./ToDoReducer";

const reducers = combineReducers({todo: ToDoReducer});

const store = createStore(reducers);

export default store;