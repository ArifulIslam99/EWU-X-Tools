
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import "./Login.css"
import loginbg from "../../../images/loginbg.jpeg"

export const Login = () => {

  const loginStyle={
    background :   `url(${loginbg})`,
    backgroundSize :'cover',
    width: '100%',
    backgroundRepeat:'no-repeat',
    height:'870px',
   

}

  return (
    <div>
      <div style={loginStyle} >
            
            </div>
            <div className="mx-auto p-4 login" style={{border: '2px solid gray',
                        
    
                        marginTop:'-600px',
                        borderRadius:'30px'
                          }}>


               <h4 className="fw-bold">Login</h4>
               <form>
                   
                   <input 
                    style={{width: '60%'}}
                   className="my-2"
                   required
                   id="standard-basic" 
                   placeholder='Enter Email'
                   name="email"
                   type="email"/> <br />

                   <input
                    style={{width: '60%'}}
                    required
                   className="my-2"
                   id="standard-basic" 
                   placeholder="Enter Password"
                   type="password" 
                   name="password"/> <br />
                   

                   <Button className="my-2" type="submit">Submit</Button> <br />
                   
                   <p className='fw-bold'>New user ? <span ><Link
                   style={{textDecoration:'none'}}
                   to="/register"> Please Register</Link></span></p>
                   
                      </form> 
                      <p>-------------------</p>
                      <p className='fw-bold'>Sign in with</p>
                      <Button className='me-1' variant="danger"><i class="fab fa-google"></i></Button>
                      <Button variant="secondary"><i class="fab fa-github"></i></Button>
                
            </div>

        
    </div>
  )
}
