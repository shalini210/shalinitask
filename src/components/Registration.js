import { createUser } from "../slices/userslice"
import { useDispatch } from "react-redux/es/exports"
import { useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../userContext";
export default function()
{
    const dispath = useDispatch();
    const name = useRef("");
    const email=useRef("");
    const pwd = useRef("");
    const UC = useContext(UserContext)
    const register = ()=>
    {
        if(name.current.value==""|| email.current.value=="" ||pwd.current.value=="")
        {
            alert("please fill all the fields");
            return;
        }
        const data = {"username":name.current.value,"email":email.current.value,"pwd":pwd.current.value}
       const data1= dispath(createUser(data));
        
        data1.then((d)=>{
         console.log(d.payload)
         alert(d.payload)
        UC.setname(name.current.value)
         }
        )
    }
    return (
        <>
        
        <p>name: <input type="text" ref={name}/></p>
        <p>email: <input type="text" ref={email}/></p>
        <p>password: <input type="text" ref={pwd}></input></p>
        <p>
            <input type="button" value="signup" onClick={()=>register()}/>
            <input type="button" value="cancel"/>
        </p>
        
        </>
    )
}