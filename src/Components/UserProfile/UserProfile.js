import React from "react"
import "./UserProfile.css"
import ProfileImage from "../../images/image.png"
export const UserProfile =()=>{
    return (
        <div className="profile_body">
            <div class="container">
         <div class="main">
              <div class="topbar">
                  <a href="">logout</a>
                  <a href="">Support</a>
                  <a href="">Home</a>
                  <a href="">Work</a>
              </div>

              <div class="row">
                 <div class="col-md-4 mt-1">
                     <div class="card text-center sidebar">

                         <div class="card_body">
                             <img src = {ProfileImage} class ="profile_image" width="150" height="100"/>
                             <div class="mt-3">
                                 <h1> Hello Burt!</h1>
                                 <br></br>
                                 <a href="">Home</a>
                                 <a href="">Work</a>
                                 <a href="">Support</a>
                                 <a href="">Settings</a>
                                 <a href=""> Signout</a>
                                
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
                                     Burt Macklin
                                 </div>
                             </div>
                             <hr></hr>
                             <div class="row">
                                 <div class="col-md-3">
                                     <h5><b>Email</b></h5>
                                 </div>
                                 <div class="col-md-9 text-secondary">
                                     abc@gmail.com
                                 </div>
                             </div>
                             <hr></hr>
                             <div class="row">
                                 <div class="col-md-3">
                                     <h5><b>Phone Number</b></h5>
                                 </div>
                                 <div class="col-md-9 text-secondary">
                                     01987654321
                                 </div>
                             </div>
                             <hr></hr>
                             <div class="row">
                                 <div class="col-md-3">
                                     <h5><b>Address</b></h5>
                                 </div>
                                 <div class="col-md-9 text-secondary">
                                     Street no.7, House 31/32
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