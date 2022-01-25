import React,{useState} from 'react'
import axios from 'axios';
import {
    BrowserRouter as Router, 

    Link,
    useHistory
  
  } from "react-router-dom";
const Login = (props) => {
    let history = useHistory();
    const {setLoginUser} = props;
    const [user,setUser] = useState({
        email:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user ,
    [name]:value
    })
    }
    const login =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:3001/api/users/login",user)
        .then(res => {
            // alert(res.data.message);
            //  alert("id"+res.data.email);
        // setLoginUser(res.data.user)
            localStorage.setItem("userID", res.data.id);
            localStorage.setItem("email", res.data.email);
            setLoginUser({_id:res.data.id});
            history.goBack();
        })
        .catch(error => {
            alert(error.response.data.message)
        });
    }
    return (
        <main className="">
            <section className="main">
                <h1>Login</h1>
                <form action="#" autoComplete="off">
                    <label name="Email">Email</label>
                    <input type="text" name="email" value={user.email}  onChange={handleChange} />
   
                    <br />
                    <label name="Password">Password</label>
                    <input type="password" name="password" value={user.password}  onChange={handleChange} />
                    <br />
                    {/* <section className="">{error}</section> */}
                    <button type="submit"onClick={login} >Login</button><br/><br/>
                    Don't have an account? 
                    <Link to="/Register">Register </Link>
                    {/* <Route path="/Register"><Register/></Route> */}
                </form>
            </section>
        </main>
    );
}
export default Login;