import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import { useState ,useEffect} from 'react';
import {UserContext} from "./userContext"
import { select } from './slices/blogslice';
import { useDispatch } from 'react-redux/es/exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/esm/Row';
function App() {
  const dispatch = useDispatch();
const [blogslist,setblogslist] =    useState([])
    const [rows,setrows]=useState([]);
  const [name,setname] =useState('');
  const [title,settitle]=useState("");
  const [category,setcategory]=useState("");
  const [des,setdes] = useState("");
  const data="";
  const setDes=(x)=>
  {
    settitle(x.title);
    setcategory(x.category);
    setdes(x.des)
  }
  const getdata=()=>
  {const data1=   dispatch(select(data));    
  data1.then((d)=>{          
     const list =d.payload.map((x)=>
     { 
       return  <tr><td><p onClick={()=>setDes(x)}><u>{x.title}</u></p></td></tr>
     }
     )
     console.log(list);
     setrows(list);
  }
 
 )
  }
 useEffect(()=>{getdata()},[]);
  return (
    <UserContext.Provider value={{name:name,setname:setname}}>
    <div className="App">
      <h2>Welcome to Blogger</h2>
      
  <table style={{width:'600px',float:'left',backgroundColor:'#313d60',color:'white'}}>
    <tr><td><h2><u>Blog list</u></h2></td></tr>
    {rows}
  </table>
  <div style={{backgroundColor:'#ffb733',width:'700px',float:'left'}}>
    <h2 ><u>Blog details</u></h2>
    <h3>{title}</h3>
   <h3> {category}</h3>
    <p>{des}</p>
  </div>
        <h1>User Home</h1>
        <Row>
        {name==""?<div>
      <Registration></Registration>
      <hr></hr>
      <Login></Login></div>:<Home></Home>}
      </Row>
    </div>
     </UserContext.Provider>
  );
}

export default App;
