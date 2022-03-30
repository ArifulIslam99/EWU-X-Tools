import React from "react";
import "./Create.css"

const Create=()=>{
return(
   <div style={{padding:'6%'}} className="create-box">
      <div class="create-container mx-auto ">
    <div class="title text-start">Create a New Project</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Project Name</span>
            <input type="text" placeholder="Enter your project name" required/>
          </div>
          <div class="input-box">
            <span class="details">Project Git Repository</span>
            <input type="text" placeholder="Enter your git repository link" required/>
          </div>
          <div class="input-box">
            <span class="details"> Email(Project Manager)</span>
            <input type="text" placeholder="Enter project Maneger email" required/>
          </div>
          <div class="input-box">
            <span class="details"> Email(Person 1)</span>
            <input type="text" placeholder="Enter first person Email" required/>
          </div>
          <div class="input-box">
            <span class="details">Email(Person 2)</span>
            <input type="text" placeholder="Enter second person Email" required/>
          </div>
          <div class="input-box">
            <span class="details">Course Title</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
        </div>
        
        <div class="button">
          <input type="submit" value="Create"/>
        </div>
      </form>
    </div>
  </div>
   </div>
)
}

export default Create;

