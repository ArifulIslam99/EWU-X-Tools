import React, { useEffect, useState } from "react"
import "./UserProfile.css"
import {Link} from 'react-router-dom'
import ProfileImage from "../../images/image.png"
import useAuth from "../../hooks/useAuth"
import { Button, Modal, Spinner } from "react-bootstrap"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Project from "./Project"
    const UserProfile =()=>{


    const {user,logout} = useAuth()
    const [fbUrl, setFbUrl] = useState('')
    const [gitUrl, setGitUrl] = useState('')
    const [projects, setProjects] = useState([])
    const [linkedInUrl, setLinkedInUrl] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()
    
    const [userInfo, setUserInfo] = useState(null)

    useEffect(()=>{
      fetch(`https://thawing-cove-39806.herokuapp.com/user/${user.email}`)
      .then(res => res.json())
      .then(data => setUserInfo(data))  
  },[]) 

  useEffect(()=>{
    fetch(`https://thawing-cove-39806.herokuapp.com/project/${user.email}`)
    .then(res => res.json())
    .then(data => setProjects(data))  
},[]) 


    


    const handleSocialChange = e =>{
        e.preventDefault()
        const info = {git: gitUrl, facebook: fbUrl, linkedIn: linkedInUrl}
        fetch(`https://thawing-cove-39806.herokuapp.com/user/${user.email}`,{
            method: "PUT",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
        
    }

    
    window.contactNumber = function(){
        var z = document.getElementById("contact_no").value;
        const data = {phone: z}
        fetch(`https://thawing-cove-39806.herokuapp.com/user/${user.email}`,{
            method: "PUT",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            alert("Updated Successfully")
            history.go(0)
        })
        
    }

    window.addressNumber = function(){
        var z = document.getElementById("address").value;
        const data = {address: z}
        console.log(data)

        fetch(`https://thawing-cove-39806.herokuapp.com/user/${user.email}`,{
            method: "PUT",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
            
        })
        .then(res => res.json())
            .then(data => {
             alert("Updated Successfully")
             history.go(0)
        })
        
    }

    window.uploadPhoto = function () {
        var y = document.getElementById('photo_id').files[0];
        if(y.size > 300000){
            alert("Image Size To Large. (Maximum 300Kb)")
        }
        else{
            const formData = new FormData();
            formData.append("img", y )

            fetch(`https://thawing-cove-39806.herokuapp.com/user/${user.email}`,{
            method: "PUT",
            body: formData
            
        })
        .then(res => res.json())
            .then(data => {
             alert("Updated Successfully")
             history.go(0)
        })
        }
    }

    function handleContactAddress() {
        const element = document.getElementById("contact_address");
        element.innerHTML = `<input type="text" id="address"/> <button onClick= "addressNumber()">change</button>`
    }
    
    const handleContactNumber = () =>{
        const element = document.getElementById('contact_id');
        element.innerHTML = `<input id="contact_no" type="tel"></input> <button onClick = "contactNumber()" >change</button>`;
    }


    const photoUpload = () =>{
        const element = document.getElementById('photo_upload')
        element.innerHTML = `<input id="photo_id" accept='image/*' type='file'></input> <button onClick = "uploadPhoto()" type="button" className="btn btn-success">upload</button>`;
    }

    if(!userInfo){return <Spinner animation="border" />}
    return (
       <>
         <div className="profile_body">
            <div className="container">
         <div className="main">
              <div className="topbar">
                  <a onClick={logout} href="" >logout</a>
                  <Link to='explore'>Explore</Link>
                  {/* <a href="">Mail</a> */}
                  <Link to='projects'>Projects</Link>
              </div>

              <div className="row">
                 <div className="col-md-4 mt-1">
                     <div className="card text-center sidebar">

                         <div className="card_body">
                             {(!userInfo.img) ? <img src={`data:image/jpeg;base64,${userInfo.image}`} class ="profile_image" width="120" height="100"/> : <img src={ProfileImage} class ="profile_image" width="120" height="100"/> }
                             
                             
                             <div className="mt-3">

                             <span style={{color:'black'}}>Edit photo <button onClick={photoUpload}><i className="fas fa-edit"></i></button> </span>
                             <span style={{width:'20%',marginLeft:'2px', color:'blue'}} id='photo_upload'></span>


                                 <h1 style={{color:'red'}}> Hello { user.displayName && <span> {user.displayName.split(" ")[0]} </span> } !</h1>
                                 <br/><br/>
                                 <Link to="/create"> <i className="fab fa-creative-commons-share"></i> Create</Link>
                                 <a target='blank' href={userInfo.facebook}><i className="fab fa-facebook"> </i> Facebook </a>
                                 <a target='blank' href={userInfo.git}><i className="fab fa-github"> </i> GitHub</a>
                                 <a target='blank' href={userInfo.linkedIn}> <i className="fab fa-linkedin"> </i> LinkedIn</a>

                                 {/* <Button><i className="fas fa-edit"></i> Edit Social Media</Button> */}
                                 <Button variant="primary" onClick={handleShow}>
                                 <i className="fas fa-edit"></i> Edit Social Media
                                </Button>
                             </div>
                         </div>
                     </div>



                 </div>
                 <div className="col-md-8 mt-1">
                     <div className="card mb-3 content">
                         <h1 class = "m-3 p-3 text-center">User Information</h1>
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-md-3">
                                     <h5 ><b>Full Name</b></h5>
                                 </div>
                                 <div className="col-md-9 text-secondary">
                                     {
                                         user.displayName ? 

                                         <p>{user.displayName.toUpperCase()}</p> :
                                         
                                         <p>Will be available Soon</p>
                                     }
                                     
                                 </div>
                             </div>
                             <hr></hr>
                             <div className="row">
                                 <div className="col-md-3">
                                     <h5><b>Email</b></h5>
                                 </div>
                                 <div className="col-md-9 text-secondary">
                                     {user.email}
                                 </div>
                             </div>
                             <hr></hr>
                             <div className="row">
                                 <div className="col-md-3">
                                     <h5><b>Phone Number</b></h5>
                                    
                                 </div>
                                 <div className="col-md-9 text-secondary">
                                     {userInfo.phone ? <span>{userInfo.phone}</span> : <span>Empty</span>} <button className='mx-2' onClick={handleContactNumber}><i className="fas fa-edit"></i></button>
                                     <span id='contact_id'></span>
                                 </div>
                             </div>
                             <hr></hr>
                             <div className="row">
                                 <div className="col-md-3">
                                     <h5><b>Address</b></h5>
                                 </div>
                                 <div className="col-md-9 text-secondary">
                                 {userInfo.address ? <span>{userInfo.address}</span> : <span>Empty</span>} <button className='mx-2' onClick={handleContactAddress}><i className="fas fa-edit"></i></button>
                                     <span id='contact_address'></span>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="card mb-3 content">
                         <h1 class ="m-3 text-center">Recent Projects</h1>
                         <div className="card-body">
                             <div className="row">
                             <div className="col-md-4"> 
                                 <h5 style={{border: "2px solid grey"}}> <b> Project Name  </b></h5>
                                 {
                                     projects.map(pr => <p> {pr.projectName} </p>)
                                 }
                            </div>
                            <div className="col-md-7 ">
                                        <h5 style={{border: "2px solid grey"}}>  Git Repo </h5> 

                                        {
                                            projects.map(pr => <p> <a href={pr.gitRepo} target="_blank" rel="noopener noreferrer"> {pr.gitRepo} </a></p>)
                                        }             
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

         {/* MOdal For Social */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Info </Modal.Title>
        </Modal.Header>
         <form onSubmit={handleSocialChange}>
         <Modal.Body>
             <input onBlur={e => setFbUrl(e.target.value)} className="mx-auto px-auto" style={{width:'80%', borderRadius:'5px', textAlign:'center'}} type="text" placeholder="Enter Your Facebook Url" /> <br /> <br />
             <input onBlur={e => setGitUrl(e.target.value)} className="mx-auto px-auto" style={{width:'80%', borderRadius:'5px', textAlign:'center'}} type="text" placeholder="Enter Your Github Url" /> <br /> <br />
             <input onBlur={e => setLinkedInUrl(e.target.value)} className="mx-auto px-auto" style={{width:'80%', borderRadius:'5px', textAlign:'center'}} type="text" placeholder="Enter Your LinkedIn Url" />
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit"  variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
         </form>
      </Modal>
        


       </>
       
    )
}

export default UserProfile;