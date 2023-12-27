import http from "../httpcommon"
class UserDataService
{
    getUser(data)
    {
        return http.post("/user/login",data)
    }
    create(data)
    {
        console.log(data)
        return http.post("/user/",data)
    }   
}
export default new UserDataService();