import {createReducer} from "@reduxjs/toolkit/src";
import {loginRequest} from "../actions/login";


const initialState = {
    data:{},
    error:null
}

export const loginReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(loginRequest.fulfilled,(state, action)=>{
            state.data = action.payload
        })
        .addCase(loginRequest.rejected,(state, action)=>{
            state.error = action.payload.data.message
        })
})
