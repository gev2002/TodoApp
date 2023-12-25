import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";
import Account from "../../helpers/Account";


export const loginRequest = createAsyncThunk(
    'login-request',
    async (payload,thunkAPI)=>{
        try{
            const {data} = await Api.login(payload)
            console.log(data, 'actttttion')
            const {token} = data
            await Account.setToken(token)
            return data
        }catch (e) {
           return  thunkAPI.rejectWithValue(e.response)
        }
    }
)
