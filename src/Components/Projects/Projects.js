
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import useAuth from '../../hooks/useAuth'
import './Projects.css'

const Projects = () => {
    const {user} = useAuth()
    const [projects, setProjects] = useState([])
    // const [inProject, setInProject] = useState([])
    const history = useHistory()
    useEffect(()=>{
        fetch(`https://thawing-cove-39806.herokuapp.com/projects`)
        .then(res => res.json())
        .then(data => setProjects(data))  
    },[]) 
    
    
    
        var inProject = projects.filter(pr => user.email === pr.member1 || user.email === pr.member2 || user.email === pr.member3 )
     

        const deleteProject = id =>{
         
            fetch(`https://thawing-cove-39806.herokuapp.com/projects/${id}`,{
            method: "DELETE"
        }).then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
            {
                alert("Project Deleted!")
                history.go(0)
            }
        })
        

        }
        

  return (
    <div>
        <div className="head-div mx-auto">
         <h3>All Projects</h3>
        </div>

          <div className='mt-5'>
          
                    
                         
                             <div className="row mx-auto w-75">
                             <div className="col-md-3"> 
                                 <h5 className='py-1' style={{border: "2px solid grey"}}> <b> Project Name  </b></h5>
                                 {
                                     inProject.map(pr => <p className='p-name'> {pr.projectName} </p>)
                                 }
                            </div>
                            <div className="col-md-5 ">
                                        <h5 className='py-1 fw-bold' style={{border: "2px solid grey"}}>  Git Repo </h5> 

                                        {
                                            inProject.map(pr => <p> <a style={{textDecoration:'none'}} href={pr.gitRepo} target="_blank" > {pr.gitRepo.slice(0,38)}.... </a></p>)
                                        }             
                            </div>
                                 
                                 {/* <div className="col-md-2 ">
                                 <h5  className='py-1 fw-bold' style={{border: "2px solid grey"}}>Edit Activity</h5>
                                   
                                  {
                                       inProject.map(pr => <p style={{fontSize:'15px'}}><Link target="_blank" to={`/sprint/${pr._id}`}><button className='px-1 btn-pr '>  <i className="fas fa-edit"></i></button></Link> </p>)
                                  }
                                   
                                
                                 </div> */}
                                 <div className="col-md-2 ">
                                 <h5  className='py-1 fw-bold' style={{border: "2px solid grey"}}>Workspace</h5>
                                   
                                  {
                                       inProject.map(pr => <p style={{fontSize:'15px'}}><Link  to={`/project/${pr._id}`}><button className='px-1 btn-pr '> Go to Sprint</button></Link> </p>)
                                  }
                                   
                                
                                 </div>
                                 

                                 <div className="col-md-2">
                                    <h5  className='py-1 fw-bold' style={{border: "2px solid grey"}}>Delete</h5>

                                    {
                                       inProject.map(pr => <p style={{fontSize:'14px'}}><button onClick={()=>deleteProject(pr._id)}  className='px-1  '> <i class="fas fa-trash"></i> </button></p>)
                                  }
                                   
                                 </div>
                            
                         
                     </div>
          </div>
    </div>
  )
}

export default Projects