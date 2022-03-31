import React from 'react'

const Project = ({project}) => {

    const {projectName, gitRepo} = project;

    console.log(project)
  return (
    <div>
        {/* <div className="col-md-4"> 
            <h5 style={{color:'black'}}> <b> {projectName} </b></h5>
        </div>
        <div className="col-md-7 text-secondary">
                    <p>  {gitRepo} </p>              
         </div> */}
    </div>
  )
}

export default Project