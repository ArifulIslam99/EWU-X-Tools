import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import loginbg from "../../../images/loginbg.jpeg"
export const Register =( )=>{
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
                        marginTop:'-700px',
                        borderRadius:'30px'
                          }}>


               <h4 className="fw-bold">Register Now</h4>
                

                       <form>
                   
                       <input 
                       style={{width: '60%'}}
                       required
                       className="my-2"
                       id="standard-basic" 
                       placeholder="Enter Name" 
                       name="name"
                       type="text"
                      
                      /> <br />

                       <input 
                       style={{width: '60%'}}
                       required
                       className="my-2"
                       id="standard-basic" 
                       placeholder="Enter Email" 
                       name="email"
                       type="email"
                       
                      /> <br />

                       <input 
                       required
                        style={{width: '60%'}}
                       className="my-2"
                       id="standard-basic" 
                       placeholder="Enter Password"
                       type="password" 
                       name="password"
                      
                      /> <br />

                       <input
                       required 
                        style={{width: '60%'}}
                       className="my-2"
                       id="standard-basic" 
                       placeholder="Re-Enter Password"
                       type="password" 
                       name="password2"
                      
                      /> <br />
                      
     
                       <Button className="my-2" type="submit">Register</Button> <br />
                        
                     
                        <br />
                        <p className='fw-bold'>Already a user ? <span ><Link
                   style={{textDecoration:'none'}}
                   to="/"> Please Login</Link></span></p>

                          </form> 

                        
                   

                  
                      <p>-------------------</p>
                      <p className='fw-bold'>Sign in with</p>
                      <Button className='me-1' variant="danger"><i class="fab fa-google"></i></Button>
                      <Button variant="secondary"><i class="fab fa-github"></i></Button>

                     
                
            </div>

            
        </div>
    )
}