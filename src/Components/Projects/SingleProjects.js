import React, { useEffect, useState } from 'react'
import { Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './SingleProjects.css'
import Sprint from './Sprint'
import SprintCompleted from './sprintCompleted'
import SprintProgress from './SprintProgress'
import BarChart from 'react-bar-chart';

const SingleProjects = () => {
    const {id} = useParams()
    const [users, setUsers] = useState([])
    const [project, setProject] = useState([]);

    const [sprints, setSprints] = useState([])
    const m1 = sprints.filter(a => a.tasker === project.member1);
    const m2 = sprints.filter(a => a.tasker === project.member2);
    const m3 = sprints.filter(a => a.tasker === project.member3);

    const data = [
      {text: project.member1, value: m1.length}, 
      {text: project.member2, value: m2.length},
      {text: project.member3, value: m3.length} 
    ];
     

    
    const margin = {top: 40, right: 20, bottom: 60, left: 40};

    useEffect(()=>{
      fetch(`https://thawing-cove-39806.herokuapp.com/projects/${id}`)
      .then(res => res.json())
      .then(data => setProject(data))
    },[])

    useEffect(()=>{
      fetch(`https://thawing-cove-39806.herokuapp.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
    },[])

    useEffect(()=>{
      fetch(`https://thawing-cove-39806.herokuapp.com/sprints/${id}`)
      .then( res => res.json())
      .then(data => setSprints(data))
    },[])

    const handleBarClick =(element, id)=>{ 
      
    }
     

    
    if(users && project){
      var members = users.filter(user => project.member1 === user.email || project.member2 === user.email || project.member3 === user.email)

    } 

    if(sprints){
      var todo = sprints.filter(sp => sp.status == "todo")
      var inProgress =  sprints.filter(sp => sp.status == "inProgress")
      var complete = sprints.filter(sp => sp.status == "completed")
      
    }

    if(!project && !sprints && !members){return <Spinner animation="border" />}
  return (
    <div style={{width:'90%', margin:'auto'}}>
        <div className='pr-header row text-white my-2 '>
            <div className='col-lg-4 my-auto head-element '>
                  <h4>{project.projectName}</h4>
            </div>
            <div className='col-lg-3 my-auto head-element'>
                  {
                    members.map(member =>  <img style={{borderRadius:'350px'}} className='mx-1' src={`data:image/jpeg;base64,${member.image}`} width="45" height="30"/> )
                  }
            </div>
            
            <div className='col-lg-3 my-auto head-element'>
                  <p className='pt-2'>{project.courseTitle}</p>
            </div>
            <div className='col-lg-2 my-auto'>
            <Link target="_blank" to={`/edit/${id}`}><button className='px-1 btn-pr '> Edit Sprint</button></Link>
            </div>
        </div> 

        <div className='row my-3'>
              <section className='col-lg-4'>

                <h2 style={{border:'2px solid orangered', backgroundColor:'orangered', color: "white"}}>To Do</h2>
                {
                  <Row xs={1} md={1} >
                      {
                        todo.map( sp => <Sprint key={sp._id}  sp={sp}></Sprint>)
                      }
                  </Row>
                }
              </section>
              <section className='col-lg-4'>
              <h2 style={{border:'2px solid orangered', backgroundColor:'orangered', color: "white"}}>In Progress</h2>

              {
                  <Row xs={1} md={1} >
                      {
                        inProgress.map( sp => <SprintProgress key={sp._id} sp={sp}></SprintProgress>)
                      }
                  </Row>
                }
              </section>
              <section className='col-lg-4'>
              <h2 style={{border:'2px solid orangered', backgroundColor:'orangered', color: "white"}}>Completed</h2>
              {
                  <Row xs={1} md={1} >
                      {
                        complete.map( sp => <SprintCompleted key={sp._id} sp={sp}></SprintCompleted>)
                      }
                  </Row>
                }
              </section>
        </div>

        {
          (sprints.length > 0) && 

          <div style={{marginTop:'300px'}}>
           <h4 className="text-danger fs-1 fw-bold m-4">Project Analysis for {project.projectName}</h4>

             <BarChart ylabel='Assigned Tasks'
                  
                  width={700}
                  height={550}
                  margin={margin}
                  data={data}
                  color="red"
                  onBarClick={handleBarClick}/>
          

        </div>
        }
    </div>
  )
}

export default SingleProjects