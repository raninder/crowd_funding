import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom"
const Login = (props) => {
const history = useHistory()
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
console.log("hiii",props);
    const login =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:3001/api/users/Login",user)
        .then(res=>{alert(res.data.message)
        // setLoginUser(res.data.user)
        setLoginUser({_id:res.data.user})
    history.push("/")})
    .catch(error => console.log(error));
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
                    <button type="submit"onClick={login} >Login</button>
                </form>
            </section>
        </main>
    );
}
export default Login;