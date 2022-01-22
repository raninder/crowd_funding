import './App.css';

import {BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import DonateGoods from './components/DonateGoods';
// import { useAlert } from 'react-alert';
// import Product from './components/Product';

const App = () => {
  return (
    <div className="App">
      <h2>AbleTheDisable</h2>

      <Router>
        <Link to="/">Home </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/about">About </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/requestgoods">Request Goods </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/donategoods">Donate Goods </Link>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/requestgoods/*" element={<Products />} />
          <Route path="/donategoods/" element={<DonateGoods />} />
          {/* <Route path="/products/*" element={<Product />} /> */}
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
      </Router>
    </div>
  );
};

export default App;

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
      
        <Link to="/"><i class="fa fa-fw fa-home"></i>Homepage </Link>
        <Link to="/Login"><i class="fa fa-fw fa-user"></i>Login</Link>
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
