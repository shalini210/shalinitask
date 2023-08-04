import { useContext } from "react"
import { UserContext } from "../userContext"

export default function()
{
    const UC = useContext(UserContext)
    return(
        <>
        
        <input type="button" value="Logout" onClick={()=>UC.setname("")}/>
        </>
    )
}