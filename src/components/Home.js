import { useContext } from "react"
import { UserContext } from "../userContext"
import Logout from "./Logout"

export default function()
{
    const UC = useContext(UserContext)
    return(
        <>
        welcome {UC.name}
        <Logout></Logout>
       
        </>
    )
}