import './App.css';


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
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './components/CheckoutForm';

function App() {

  const [user, setLoginUser] = useState({})
 


  return (
    <div className="App">

      <Router>

        <Link to="/"><i class="fa fa-fw fa-home"></i>Homepage </Link>
        <Link to="/Login"><i class="fa fa-fw fa-user"></i>Login</Link>
        <Link to="/Register">Register</Link>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage /> : <Login />
            }<Homepage /></Route>

          <Route path="/Login"><Login setLoginUser={setLoginUser} /></Route>
          <Route path="/Register"><Register /></Route>
        </Switch>

      </Router>
      
    </div>
  );

}

export default App;
