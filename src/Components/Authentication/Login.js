import React from 'react'
import "./Login.css"

export const Login = () => {
  return (
    
        <div class="background-main">
    <div class="container-main">
        <div class="mycard">
            <div class="row">
                <div class="col-md-6">
                    <div class="myLeftCtn">
                    <form class="myForm text-center ">
                       <header><p class="mx-auto">Login</p></header> 



                        <div class="form-group">
                            <i class="fas fa-envelope"></i>
                            <input class="myInput" type="text" placeholder="Email" id="email" required/>
                          
                        </div>

                        <div class="form-group">
                            <i class="fas fa-lock"></i>
                            <input class="myInput" type="password" placeholder="Password" id="password" required/>
                          
                        </div>

                       
                        <input type="submit" class="butt" value="SUBMIT"/>

                        
                   </form> 

                    </div>

                </div>

                

        </div>
    
    </div>
</div>

    </div>
  )
}
