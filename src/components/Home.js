import { useContext } from "react"
import { UserContext } from "../userContext"
import Createblog from "./Createblog"
import Logout from "./Logout"

export default function()
{
    const UC = useContext(UserContext)
    return(
        <>
        welcome {UC.name}
        below is create blog
        <Createblog></Createblog>
        <br></br>
        <br></br>
        <Logout></Logout>
       
        </>
    )
}