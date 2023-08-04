import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import { useState } from 'react';
import {UserContext} from "./userContext"
function App() {
  const [name,setname] =useState('')
  return (
    <UserContext.Provider value={{name:name,setname:setname}}>
    <div className="App">
      <h1>Welcome to Dummy Website</h1>
      
  
        <h1>User Home</h1>
        {name==""?<div>
      <Registration></Registration>
      <hr></hr>
      <Login></Login></div>:<Home></Home>}
    </div>
     </UserContext.Provider>
  );
}

export default App;
