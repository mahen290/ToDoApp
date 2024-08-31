import { combineReducers } from "redux";

import ToDoReducer from "./slices/ToDoSlices";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers( { todo: ToDoReducer } );

const Store = configureStore({
    reducer: {
        todo: ToDoReducer
    },
    devTools: process.env.NODE_ENV !== 'production', 
})

export default Store;