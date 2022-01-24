import './App.css';
import React, { useState } from "react";
import {BrowserRouter as Router, Route, Navigate} from 'react-router-dom';
//import { useAlert } from 'react-alert';

import About from './components/About';
import Products from './components/Products';
import DonateGoods from './components/DonateGoods';
import Register from './components/Register';
import Login from './components/Login';
import Fundraising from './components/Fundraising';
import Homepage from "./components/Homepage";




export default function App() {

  const [user,setLoginUser] = useState({})
  console.log(user);

  return (
    <div className="App">

      <Router>
        
        {/* <Route path="/" component={Homepage}/> */}
        <Route path="/Homepage" component={Homepage}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        <Route path="/fundrasising" component={Fundraising} />
        <Route path="/donate" component={DonateGoods} />
        <Route path="/requestgoods/*" component={Products} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  )
};
