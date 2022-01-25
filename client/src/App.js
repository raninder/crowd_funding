import './App.css';
import React, { useState } from "react";
import RequestGoods from './components/RequestGoods';
import DonateGoods from './components/DonateGoods';
import Register from './components/Register';
import DonateMoney from './components/DonateMoney';
import Login from './components/Login';
import Donate from './components/Donate';
import Search from './components/Search';
import Cart1 from './components/Cart1';
import DonateForm from './components/DonateForm';
 import UserRequest from './components/UserRequest';
import Fundraising from './components/Fundraising';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
import Homepage from "./components/Homepage";
// import { useAlert } from 'react-alert';


const App = () => {
  const [user,setLoginUser] = useState({})
  console.log(user);
  return (
    <div className="App">
      <h2>AbleTheDisable</h2>

      <Router>
      
     
      <Link to="/"><i class="fa fa-fw fa-home"></i>Homepage </Link> &nbsp;&nbsp;&nbsp;&nbsp;
      {/* <Link to="/Login"><i class="fa fa-fw fa-user"></i>Login</Link> &nbsp;&nbsp;&nbsp;&nbsp; */}
      {/* <Link to="/Register">Register</Link> &nbsp;&nbsp;&nbsp;&nbsp; */}
        <Link to="/RequestGoods">RequestGoods </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/DonateGoods">DonateGoods </Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Fundraising">Fundraising </Link>&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Link to="/Cart1">Cart1 </Link>&nbsp;&nbsp;&nbsp;&nbsp; */}
        <Link to="/DonateMoney">DonateMoney </Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/UserRequest" className="btn btn-primary">UserRequest </Link>
        {/* Routes for new version, Switch for old version of rreact-router-dom */}
        {/* <Routes> */}
        <Switch>
          {/* <Route exact path="/">
          {
          user && user._id? <Homepage/>:<Login/>
          }
          </Route> */}
       
          <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
          <Route path="/Register"><Register/></Route>
          <Route path="/RequestGoods">< RequestGoods/></Route>
          <Route path="/DonateGoods/">< DonateGoods/></Route>
          <Route path="/Fundraising/">< Fundraising/></Route>
          <Route path="/DonateMoney/">< DonateMoney/></Route>
          <Route path="/Donate/">< Donate/></Route>
          <Route path="/Search/">< Search/></Route>
          <Route path="/Cart1/">< Cart1/></Route>
          <Route path="/DonateForm/">< DonateForm/></Route>
          <Route path="/UserRequest/">< UserRequest/></Route>
          <Route path="/"><Homepage/></Route>
          </Switch>
          
        
      </Router>
    </div>
  );
};
  
export default App;
