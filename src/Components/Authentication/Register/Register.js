import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap'

import loginbg from "../../../images/loginbg.jpeg"
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
export const Register =( )=>{
  
    const [registerData, setRegisterData] = useState({})
    const {registerUser, loading, error, googleLogIn, githubLogin} = useAuth()
    const history = useHistory()

    const handleOnChange = e =>{
    const field = e.target.name ;
    const value = e.target.value ;
    const newRegisterData = {...registerData};
    newRegisterData[field] = value
    setRegisterData(newRegisterData)
  }


const handleRegisterSubmit = e =>{
    if(registerData.password !== registerData.password2){
        alert("Password did not match")
    }

    registerUser(registerData.email, registerData.password, history)
    e.preventDefault()

}

const handleGoogleSignIn = () =>{
    googleLogIn(history)
  }

  const handleGithubLogin = () =>{
    githubLogin(history)
  }


    const registerStyle={
        background :   `url(${loginbg})`,
        backgroundSize :'cover',
        width: '100%',
        backgroundRepeat:'no-repeat',
        height:'870px',
       
    
    }
    return( 
        
        <div>
             <div style={registerStyle} >
            
            </div>
            <div className="mx-auto p-4 login" style={{border: '2px solid gray',
                        marginTop:'-730px',
                        borderRadius:'30px'
                          }}>


               <h4 className="fw-bold">Register Now</h4>
                

                       { (!loading) ? <form onSubmit={handleRegisterSubmit}>
                   
                       <input 
                       style={{width: '60%'}}
                       required
                       className="my-2"
                       id="standard-basic" 
                       placeholder="Enter Full Name" 
                       name="name"
                       type="text"
                       onChange={handleOnChange}
                      /> <br />

                       <input 
                       style={{width: '60%'}}
                       required
                       className="my-2"
                       id="standard-basic" 
                       placeholder="Enter Email" 
                       name="email"
                       type="email"
                       onChange={handleOnChange}
                      /> <br />

                       <input 
                       required
                        style={{width: '60%'}}
                       className="my-2"
                       id="standard-basic" 
                       placeholder="Enter Password"
                       type="password" 
                       name="password"
                       onChange={handleOnChange}
                      /> <br />

                       <input
                       required 
                        style={{width: '60%'}}
                       className="my-2"
                       id="standard-basic" 
                       placeholder="Re-Enter Password"
                       type="password" 
                       name="password2"
                       onChange={handleOnChange}
                      /> <br />
                      
     
                       <Button className="my-2" type="submit">Register</Button> <br />
                        
                     
                        <br />
                        <p className='fw-bold'>Already a user ? <span ><Link
                   style={{textDecoration:'none'}}
                   to="/"> Please Login</Link></span></p>

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
