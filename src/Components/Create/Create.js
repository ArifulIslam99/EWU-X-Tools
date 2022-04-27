import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../hooks/useAuth";
import "./Create.css";

const Create=()=>{
   
   const [projectName, setProjectName] = useState("");
   const [gitRepo, setGitRepo] = useState("");
   const [member1, setMember1] = useState("");
   const [member2, setMember2] = useState("");
   const [member3, setMember3] = useState("");
   const [courseTitle, setCourseTitle] = useState("");
   const {user} = useAuth()
   const history = useHistory()
   const handleFormSubmit=e=>{
     e.preventDefault()
     const member1 = user.email;
     const data ={projectName, gitRepo, member1 , member2, member3, courseTitle};

     fetch('https://thawing-cove-39806.herokuapp.com/projects',{
        method: "POST",
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .then(data => {
        alert("Project Created Successfully")
        history.replace("/profile")
      })
   }
return(
   <div style={{padding:'3%'}} className="create-box">
      <div className="create-container mx-auto ">
    <div className="title text-start">Create a New Project</div>
    <div className="content">
      <form onSubmit={handleFormSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Project Name</span>
            <input onChange={e => setProjectName(e.target.value)} type="text" placeholder="Enter your project name" required/>
          </div>
          <div className="input-box">
            <span className="details">Project Git Repository</span>
            <input onChange={e => setGitRepo(e.target.value)} type="text" placeholder="Enter your git repository link" required/>
          </div>
          <div className="input-box">
            <span className="details"> Email(Project Manager)</span>
            <input  value={user.email}  type="text" placeholder="Enter project Maneger email" required/>
          </div>
          <div className="input-box">
            <span className="details"> Email(Person 2)</span>
            <input onChange={e => setMember2(e.target.value)} type="text" placeholder="Enter first person Email" required/>
          </div>
          <div className="input-box">
            <span className="details">Email(Person 3)</span>
            <input onChange={e => setMember3(e.target.value)} type="text" placeholder="Enter second person Email" required/>
          </div>
          <div className="input-box">
            <span className="details">Course Title</span>
            <input onChange={e => setCourseTitle(e.target.value)} type="text" placeholder="Course Title" required/>
          </div>
        </div>
        
        <div className="button">
          <input type="submit" value="Create"/>
        </div>
      </form>
    </div>
  </div>
   </div>
)
}

export default Create;

