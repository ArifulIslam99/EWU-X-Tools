
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap'
import "./Login.css"
import loginbg from "../../../images/loginbg.jpeg"
import useAuth from '../../../hooks/useAuth'
import { useHistory } from "react-router-dom";
const axios = require('axios');

  const  Login = () => {
  const [loginData, setLoginData] = useState({})
  
  const history = useHistory()
  const {loginUser, loading, googleLogIn, error, githubLogin, resetPassword} = useAuth()

  const handleOnChange = e =>{

    const field = e.target.name ;
    const value = e.target.value ;
    const newLoginData = {...loginData};
    newLoginData[field] = value
    setLoginData(newLoginData)
  
  
  }

  const handleGoogleSignIn = () =>{
    googleLogIn(history)
  }

  const handleGithubLogin = () =>{
    githubLogin(history)
  }


const handleLoginSubmit = e =>{
    loginUser(loginData.email, loginData.password, history)
    e.preventDefault()
}

const loginStyle={
  background :   `url(${loginbg})`,
  backgroundSize :'cover',
  width: '100%',
  backgroundRepeat:'no-repeat',
  height:'870px',
 
} 

const  handleForgotPassword = () => {
  if(loginData.email===null){
    alert("Enter a valid Email")
  }
  else{
    resetPassword(loginData.email)
  }
}

  return (
    <div>
      <div style={loginStyle} >
            
            </div>
            <div className="mx-auto p-4 login" style={{border: '2px solid gray',
                        marginTop:'-700px',
                        borderRadius:'30px'
                          }}>


               <h4 className="fw-bold">Login</h4>
               {
                 (!loading) ? 

                 <form onSubmit={handleLoginSubmit}>
                   
                   <input 
                    style={{width: '60%'}}
                   className="my-2"
                   required
                   id="standard-basic" 
                   placeholder='Enter Email'
                   name="email"
                   onChange={handleOnChange}
                   type="email"/> <br />

                   <input
                    style={{width: '60%'}}
                    required
                   className="my-2"
                   id="standard-basic" 
                   placeholder="Enter Password"
                   type="password" 
                   onChange={handleOnChange}
                   name="password"/> <br />
                   
                   <p className='reset' onClick={handleForgotPassword}>Forgot Password?</p>
                    
                   <Button className="my-2" type="submit">Submit</Button> <br />
                   
                   <p className='fw-bold'>New user ? <span ><Link
                   style={{textDecoration:'none'}}
                   to="/register"> Please Register</Link></span></p>
                   
                      </form> :

                    <Spinner animation="grow" />
               }

                      <p>-------------------</p>
                      <p className='fw-bold'>Sign in with</p>
                      <Button onClick={handleGoogleSignIn} className='me-1' variant="danger"><i class="fab fa-google"></i></Button>
                      <Button onClick={handleGithubLogin} variant="secondary"><i class="fab fa-github"></i></Button> <br />

                      {
                          (error) && 
                          <p style={{color:'red'}}> {error} </p>
                      }
                
                
            </div>

        
    </div>
  )
}

export default Login;
