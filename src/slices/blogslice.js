import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { UserContext } from "../userContext";
import userService from "../services/user.service";
import blogService from "../services/blog.service";
import { useContext } from "react";
const initialState=[];

export const select = createAsyncThunk("/select",async(data)=>
{
    console.log(data);
    const res = await blogService.getblog(data);
    console.log("inside select");
    return res.data;
})
export const createBlog = createAsyncThunk("/create",async(data)=>
{    
    const res = await blogService.createblog(data);
    return res.data;
})
export const deleteblog = createAsyncThunk("/delete",async(data)=>
{
    console.log(data)
    const res = await blogService.deleteblog(data);
    return res.data;
})
export const updateblog=createAsyncThunk("/update",async(data)=>
{
    const res = await blogService.updateblog(data);
    return res.data;
})

export const blogSlice = createSlice(
    {
        name:'blog',
        initialState,
        extraReducers:{
            [createBlog.fulfilled]:(state,action)=>
            {
                console.log("added")
                    const bname = action.payload.data;
                                       
            },
            [select.fulfilled]:(state,action)=>
            {                
                const uname = action.payload.data;
                return action.payload.data
            },
            [deleteblog.fulfilled]:(state,action)=>
            {
                return action.payload.data;
            },
            [updateblog.fulfilled]:(state,action)=>
            {
                return action.payload.data;
            }
        }
    }
)
const {reducer} = blogSlice;
export default reducer;
