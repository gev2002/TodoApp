import {createAction} from "@reduxjs/toolkit";
export const addTodo = createAction('add-todo')
export const deleteTodo = createAction('delete-todo')
export const pinTodo = createAction('pin-todo')
export const doneTodo = createAction('done-todo')
