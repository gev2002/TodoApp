import {createReducer} from "@reduxjs/toolkit/src";
import {todosRequest} from "../actions/todo";

const initialState = {
    todos:[],
    error:null
}

export const todosReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(todosRequest.fulfilled,(state,action)=>{
            state.todos = action.payload.todos
        })
        .addCase(todosRequest.rejected,(state,action)=>{
            state.error = action.payload.data.message
        })
})
