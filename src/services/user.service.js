import http from "../httpcommon"
class UserDataService
{
    getUser(data)
    {
        return http.post("/login",data)
    }
    create(data)
    {
        console.log(data)
        return http.post("/",data)
    }   
}
export default new UserDataService();