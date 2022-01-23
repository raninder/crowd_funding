import './App.css';
import React, { useState } from "react";
// import {BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
import RequestGoods from './components/RequestGoods';
import DonateGoods from './components/DonateGoods';
import Register from './components/Register';
import DonateMoney from './components/DonateMoney';
import Login from './components/Login';
import Donate from './components/Donate';
import Search from './components/Search';
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
        <Link to="/DonateMoney">DonateMoney </Link>
     
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
          <Route path="/"><Homepage/></Route>
          </Switch>
          {/* <Routes> */}
          {/* <Route path="/requestgoods/*" element={<Products />} />
          <Route path="/donategoods/" element={<DonateGoods />} />
          {/* <Route path="/products/*" element={<Product />} /> */}
          {/* <Route path="/" element={<Home />}/>
          <Route path="*" element={<Navigate to="/" />} />  */}
       
        {/* </Routes> */}
        
      </Router>
    </div>
  );
};
  
export default App;
