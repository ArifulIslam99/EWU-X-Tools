import React from "react"
export const Register = () =>{
    return(
      
       <div>
        <div class="container-main">
        <div class="mycard">
            <div class="row">
                <div class="col-md-6">
                    <div class="myLeftCtn">
                    <form class="myForm text-center">
                        <header>Create New account</header>

                        <div class="form-group">
                            <i class="fas fa-user"></i>
                            <input class="myInput" type="text" placeholder="Firstname" id="firstname" required/>
                            

                        </div>
                        <div class="form-group">
                            <i class="fas fa-user"></i>
                            <input class="myInput" type="text" placeholder="Lastname" id="lastrname" required/>
                            

                        </div>

                        {/* <div class="form-group">
                            <i class="fas fa-user"></i>
                            <input class="myInput" type="text" placeholder="Username" id="username" required/>
                            

                        </div> */}


                        <div class="form-group">
                            <i class="fas fa-envelope"></i>
                            <input class="myInput" type="text" placeholder="Email" id="email" required/>
                          
                        </div>

                        <div class="form-group">
                            <i class="fas fa-lock"></i>
                            <input class="myInput" type="password" placeholder="Password" id="password" required/>
                          
                        </div>

                        <div class="form-group">
                            <label>
                                <input id="check_1" name="check_1" type="checkbox" required>
                                <small>I read and agree to Terms & Conditions</small></input>
                         

                            </label>
                        </div>

                        <input type="submit" class="butt" value="CREATE ACCOUNT"/>

                        
                   </form> 

                    </div>

                </div>

                <div class="col-md-6">
                    <div class="myRightCtn">
                        <div class="box"><header>Welcome To EWU X-Tool</header>
                        <p>iuhbjgfhhbvhhbnb kjkkkkkkkkkkkkkkkkkkkkkgighugjhbnbbmhhhhh</p>
                             <input type="button" class="butt_out" value="Learn More"/>
                        </div>
                    </div>
                </div>

        </div>
    
    </div>
   
       </div>
       </div>
    )
}