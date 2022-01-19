import React, { useState } from "react";
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Fundraising from './components/Fundraising';
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link

} from "react-router-dom";
function App() {
  
  const [user,setLoginUser] = useState({})
  console.log(user);
  return (
    <div className="App">
      <Router>
      
        <Link to="/">Homepage </Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
<Switch>
  <Route exact path="/">
    {
      user && user._id? <Homepage/>:<Login/>
    }</Route>
    
  <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
  <Route path="/Register"><Register/></Route>
</Switch>

      </Router>
      </div>
);

}

export default App;
