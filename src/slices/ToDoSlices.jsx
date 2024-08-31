import React from 'react';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
};

const ToDoSlices = createSlice({
    name: 'todo',
    initialState,
    reducers: { 
        addTodo: (state, action) => {
            let todoText = action.payload.todoText;
            state.todoList.push({ id: state.todoList.length + 1, todoData: todoText, finished: false })
        },

        editTodo: (todo, action) => {
            let payloadTodo = action.payload.todo;
            let todoText = action.payload.todoText;
            todo.todoList = todo.todoList.map(t => {
                if(t.id == payloadTodo.id) 
                {
                    t.todoData = todoText;
                }
                return t;
                });
        }, 

        deleteTodo: (todo, action) => { 
            let payloadTodo = action.payload.todo;
            todo.todoList = todo.todoList.filter(t => t.id != payloadTodo.id)
        },

        finishedTodo: (todo, action) => {
            let payloadTodo = action.payload.todo;
            let isfinished = action.payload.isfinished;
            todo.todoList = todo.todoList.map(t => {
                if(t.id == payloadTodo.id) 
                {
                    todo.finished = isfinished
                }
                return t;
                });
        }
    }
});

export const { addTodo, editTodo, deleteTodo, finishedTodo } = ToDoSlices.actions;

export default ToDoSlices.reducer;
