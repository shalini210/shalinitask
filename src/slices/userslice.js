import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { UserContext } from "../userContext";
import userService from "../services/user.service";
import { useContext } from "react";
const initialState=[];

export const select = createAsyncThunk("/select",async(data)=>
{
    console.log(data)
    const res = await userService.getUser(data);
    console.log("inside select")
    return res.data;
})
export const createUser = createAsyncThunk("/create",async(data)=>
{    
    const res = await userService.create(data);
    return res.data;
})


export const userSlice = createSlice(
    {
        name:'user',
        initialState,
        extraReducers:{
            [createUser.fulfilled]:(state,action)=>
            {
                console.log("added")
                const uname = action.payload.data;
                // const UC = useContext(UserContext)
                // const Setdata=()=>{
                //     UC.setname(uname)}                         
            },
            [select.fulfilled]:(state,action)=>
            {
                                
                const uname = action.payload.data;
                // const UC = useContext(UserContext)
    //             const Setdata=()=>{
    //                 UC.setname(uname)
    // }
               return action.payload.data
            },            
        }
    }
)
const {reducer} = userSlice;
export default reducer;
