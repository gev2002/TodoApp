import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";
import Toast from 'react-native-simple-toast';



export const todosRequest = createAsyncThunk(
    'get-todos',async (payload,thunkAPI)=>{
        try{
            const {data} = await Api.getTodos(payload)
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response)
        }
    }
)


export const todoDoneRequest = createAsyncThunk(
    'done-todo', async (payload)=>{
        try {
            console.log(payload, 'don')
            const {status} = await Api.updateTodo(payload)
            if (status === 200){
                Toast.show('Successfully !!!',Toast.SHORT)
            }
        }catch (e) {
            throw e
        }
    }
)


export const todoDeleteRequest = createAsyncThunk(
    'delete-todo', async (payload)=>{
        try {
            const {status} = await Api.deleteTodo(payload)
            if (status === 200){
                Toast.show('Successfully Deleted!!!',Toast.SHORT)
            }
        }catch (e) {
            throw e
        }
    }
)


export const todoPinRequest = createAsyncThunk(
    'pin-todo', async (payload)=>{
        try {
            const {status} = await Api.pinTodo(payload)
            if (status === 200){
                Toast.show('Successfully Pined!!!',Toast.SHORT)
            }

        }catch (e) {
            throw e
        }
    }
)


export const todoAddRequest = createAsyncThunk(
    'add-todo', async (payload) => {
        try {
            const {status} = await Api.addTodo(payload)
            if (status === 200){
                Toast.show('Successfully Added!!!',Toast.SHORT)
            }

        }catch (e) {
            throw e
        }
    }
)
