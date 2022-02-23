import React from "react"
import "./UserProfile.css"

import ProfileImage from "../../images/putin.webp"
import useAuth from "../../hooks/useAuth"
import { Button, Spinner } from "react-bootstrap"
export const UserProfile =()=>{
    const {user,logout} = useAuth()
    return (
        <div className="profile_body">
            <div class="container">
         <div class="main">
              <div class="topbar">
                  <a onClick={logout}  href="">logout</a>
                  <a href="">Explore</a> 
                  <a href="">Mail</a>
                  <a href="">Projects</a>
              </div>

              <div class="row">
                 <div class="col-md-4 mt-1">
                     <div class="card text-center sidebar">

                         <div class="card_body">
                             <img src={ProfileImage} class ="profile_image" width="120" height="100"/>
                             <div class="mt-3">
                                 <h1 style={{color:'red'}}> Hello { user.displayName && <span> {user.displayName.slice(0,6)} </span> } !</h1>
                                 <br/><br/>
                                 <a href=""> <i class="fab fa-creative-commons-share"></i> Create</a>
                                 <a href=""><i class="fab fa-facebook"> </i> Facebook</a>
                                 <a href=""><i class="fab fa-github"> </i> GitHub</a>
                                 <a href=""> <i class="fab fa-linkedin"> </i> LinkedIn</a>

                                 <Button><i class="fas fa-edit"></i> Edit Social Media</Button>
                                
                             </div>
                         </div>
                     </div>



                 </div>
                 <div class="col-md-8 mt-1">
                     <div class="card mb-3 content">
                         <h1 class = "m-3 p-3 text-center">User Information</h1>
                         <div class="card-body">
                             <div class="row">
                                 <div class="col-md-3">
                                     <h5><b>Full Name</b></h5>
                                 </div>
                                 <div class="col-md-9 text-secondary">
                                     {
                                         user.displayName ? 

                                         <p>{user.displayName.toUpperCase()} <i class="fas fa-edit"></i></p> :
                                         
                                         <p>Will be available later <i class="fas fa-edit"></i></p>
                                     }
                                     
                                 </div>
                             </div>
                             <hr></hr>
                             <div class="row">
                                 <div class="col-md-3">
                                     <h5><b>Email</b></h5>
                                 </div>
                                 <div class="col-md-9 text-secondary">
                                     {user.email} <i class="fas fa-edit"></i>
                                 </div>
                             </div>
                             <hr></hr>
                             <div class="row">
                                 <div class="col-md-3">
                                     <h5><b>Phone Number</b></h5>
                                 </div>
                                 <div class="col-md-9 text-secondary">
                                     01987654321 <i class="fas fa-edit"></i>
                                 </div>
                             </div>
                             <hr></hr>
                             <div class="row">
                                 <div class="col-md-3">
                                     <h5><b>Address</b></h5>
                                 </div>
                                 <div class="col-md-9 text-secondary">
                                     Street no.7, House 31/32 <i class="fas fa-edit"></i>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="card mb-3 content">
                         <h1 class ="m-3 text-center">Recent Projects</h1>
                         <div class="card-body">
                             <div class="row">
                                 <div class="col-md-3">
                                     <h5> <b>Project Name</b></h5>
                                 </div>
                                 <div class="col-md-9 text-secondary">
                                      Project Description 
                                 </div>
                             </div>
                             <hr></hr>
                         </div>
                     </div>
                 </div>



              </div>



         </div>


    </div>
        </div>
       
    )
}