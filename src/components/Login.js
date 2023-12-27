import {  select } from "../slices/userslice"
import { useDispatch } from "react-redux/es/exports"
import { useRef } from "react";
import { UserContext } from "../userContext";
import { useContext } from "react";
import { Form } from "react-bootstrap";

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function()
{
    const dispatch = useDispatch();
    // const name = useRef("");
    const email=useRef("");
    const pwd = useRef("");
    const UC = useContext(UserContext)
    const userlogin=()=>
    {
        if(email.current.value=="" ||pwd.current.value=="")
        {
            alert("please fill all the fields");
            return;
        }
        const data = {"email": email.current.value,"pwd":pwd.current.value};
        console.log("inside select")
       const data1=     dispatch(select(data));    
       let name =UC.name;
       data1.then((d)=>{
        console.log(d)
        if(d.payload.data.length >0)
            {
                console.log(d.payload.data[0])
                name=d.payload.data[0].username
            console.log("name is "+name)
            if (name!="" && name!=undefined)
            {
                console.log(name.name)
                UC.setname(name.name)
            }}
            else
            {
                alert("invalid user");
            }
        }
       )
         
               
    
    }
    return(
        <>
       
        <label>email: </label><input type="text" ref={email}/>
        <label>password: </label> <input type="text" ref={pwd}/>
        
            <input type="button"  value="Login" onClick={()=>userlogin()}/>
            
        </>
    )
}