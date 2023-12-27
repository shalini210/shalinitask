import http from "../httpcommon"
class BlogDataService
{
    getblog(data)
    {
        return http.get("/blog/",data)
    }
    createblog(data)
    {
        console.log(data)
        return http.post("/blog/addblog",data)
    }   
    deleteblog(data)
    {
      
        return http.delete("/blog/"+data.id);
    }
    updateblog(data)
    {
        return http.put("/blog",data)
    }
}
export default new BlogDataService();