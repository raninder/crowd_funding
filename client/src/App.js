import './App.css';
import React, { useState } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import About from './components/About';
// import Products from './components/Products';
// import Home from './components/Home';
// import About from './components/About';
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

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// };

import Homepage from "./components/Homepage";
import FundraisingOption from './components/FundraisingOptions';
import Navbar from './components/Navbar/Navbar';



export default function App() {
  const [user,setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
   
        <Navbar/>
        <Route path="/Homepage"><Homepage/></Route>
        {/* <Route path="/"><Homepage/></Route> */}
        <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
        <Route path="/Register"><Register/></Route>
        <Route path="/fundraising" component={Fundraising} />
        <Route path="/fundraisingoption" component={FundraisingOption} />
        <Route path="/donategoods" component={DonateGoods} />
        {/* <Route path="/requestgoods/*" component={Products} /> */}
        <Route path="/requestgoods/*" component={RequestGoods} />
        <Route path="/donatemoney" component={DonateMoney} />
        <Route path="/donate/" component={Donate}/>
        <Route path="/about" component={About} />
        <Route path="/search"  component = {Search}/>
        <Route path="/cart1/"component = {Cart1}/>
        <Route path="/donateform" component = {DonateForm} />
        <Route path="/userrequest/" component={UserRequest}/>
      </Router>
    </div>
  )
};
