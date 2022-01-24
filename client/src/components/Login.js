import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom"
import './Login.css';
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
            <div className='mainLogin'>   
            <form className='loginForm'>
                <div className='form-inner'>
                <h1>Login</h1>
                    <div className='form-group'>
                        <label name="Email">Email</label>
                        <input type="email" name="email" value={user.email}  onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label name="Password">Password</label>
                        <input type="password" name="password" value={user.password}  onChange={handleChange} />
                    </div>
                    
                    <button type="submit"onClick={login} >Login</button>
                    
                </div>
            </form>
            </div> 
        );
}
export default Login;