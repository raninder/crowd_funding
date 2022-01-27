
import './App.css';
import React, { useState } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About';
import RequestGoods from './components/RequestGoods';
import DonateGoods from './components/DonateGoods';
import Register from './components/Register';
import DonateMoney from './components/DonateMoney';
import Login from './components/Login';
import Donate from './components/Donate';
import Search from './components/Search';
import Fundraising from './components/Fundraising';
import Homepage from "./components/Homepage";
import DonateForm from './components/DonateForm';
import Cart from './components/Cart';
import Navbar from './components/Navbar/Navbar';
import UserRequest from './components/UserRequest';
export default function App() {

  const [user,setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path="/Homepage"><Homepage/></Route>
        <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
        <Route path="/Register"><Register/></Route>
        <Route path="/fundrasising" component={Fundraising} />
        <Route path="/donategoods" component={DonateGoods} />
        <Route path="/requestgoods/*" component={RequestGoods} />
        <Route path="/about" component={About} />
        <Route path="/Fundraising/">< Fundraising/></Route>
        <Route path="/DonateMoney/">< DonateMoney/></Route>
        <Route path="/Donate/">< Donate/></Route>
        <Route path="/Search/">< Search/></Route>
        <Route path="/DonateForm"><DonateForm /></Route>
        <Route path="/Cart/"><Cart/></Route>
        <Route path="/UserRequest/">< UserRequest/></Route>
      </Router>
    </div>
  )

};