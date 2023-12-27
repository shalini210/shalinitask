import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../userContext"
import { deleteblog, select, updateblog } from "../slices/blogslice"
import { createBlog } from "../slices/blogslice"
import { useDispatch } from "react-redux/es/exports"

export default function()
{
    const [iuflag,setiuflag] = useState("insert");
    const [blogslist,setblogslist] =    useState([])
    const [rows,setrows]=useState([]);
    const dispatch = useDispatch();
    const UC = useContext(UserContext)
    const title = useRef("")
    const category = useRef("")
    const des = useRef("")
    const id = useRef()
    const data = {}    
     const getdata=()=>
     {const data1=   dispatch(select(data));    
     data1.then((d)=>{        
        console.log("hello ")
        console.log(d.payload);
        // setblogslist(d.payload);
        console.log(blogslist)
        const deleteBlog=(id)=>
        {
            dispatch(deleteblog({"id":id}));
            getdata()
        }
        const list =d.payload.map((x)=>
        { 
            console.log(x);
            
            return  <tr><td>{x.title}</td><td>{x.category}</td><td>{x.des}</td>
            <td><input type="button" value="edit" onClick={()=>editdata(x)}/></td>
            <td><input type="button" value="delete" onClick={()=>deleteBlog(x._id)}/></td>
            </tr>}
        )
        console.log(list);
        setrows(list);
     }
    
    )
     }
    useEffect(()=>{getdata()},[]);
    const editdata=(x)=>
    {
        title.current.value=x.title;
        category.current.value=x.category;
        des.current.value=x.des;
        id.current.value = x._id;
        setiuflag("update");
    }
    const addblog = ()=>
    {
        if(title.current.value==""|| category.current.value=="" ||des.current.value=="")
        {
            alert("please fill all the fields");
            return;
        }
        const data = {id:id.current.value,title:title.current.value,category:category.current.value,des:des.current.value}
        let data1;
        if(iuflag=="insert")
        {
       data1= dispatch(createBlog(data));
        }
        else
        {
        data1=dispatch(updateblog(data))    ;
        }
        
        data1.then((d)=>{
         console.log(d.payload)
         alert(d.payload)
         title.current.value="";
         category.current.value="";
         des.current.value="";
         setiuflag("insert");
         getdata();
        // UC.setname(name.current.value)
         }
        )
    }
    return(
        <>
        <h1>Add new Post</h1>
        Title: <input type="text" ref={title}/> 
        Category: <input type="text" ref={category}/>
        des : <input type="textarea" ref={des}/>
        <input type="text" ref={id} style={{display:'none'}}/>
        <input type="button" value="Save" onClick={()=>addblog()}/>
        <input type="button" value="cancel"/>
<table>
    <tr><th>Title</th><th>Category</th><th>description</th> <th>edit</th><th>Delete</th></tr>
    {rows}
</table>
        
        </>
    )

}