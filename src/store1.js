// import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userslice";
export const  store1 = configureStore(
    {
        reducer:{
            student:userReducer,
        },
        devTools:true
    }
)