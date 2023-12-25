import {configureStore} from "@reduxjs/toolkit";

import reducer from "./reducers";
import Api from "../Api";

const store = configureStore({
    reducer,
    devTools:true,
})

export default store
