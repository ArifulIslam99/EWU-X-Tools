
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'

const EditSprint = () => {
    const {id} = useParams()
    const history = useHistory()
    const [project, setProject] = useState([]);
    const [sprintName, setSprintName] = useState("")
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [tasker, setTasker] = useState("")
    const sprint = {
      unId : id, sprintName, startDate, endDate, tasker, status: 'todo'
    }
      
    const submitSprint = e =>{
      e.preventDefault()
      fetch(`https://thawing-cove-39806.herokuapp.com/sprints/${id}`,{
            method: "POST",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(sprint)
        })
        .then(res => res.json())
        .then(data => {
            alert("Updated Successfully")
            history.go(0)
        })
    }

    console.log(sprint)
    useEffect(()=>{
      fetch(`https://thawing-cove-39806.herokuapp.com/projects/${id}`)
      .then(res => res.json())
      .then(data => setProject(data))
    },[])
  return (
    <div>
        <section style={{border:"3px solid black", borderRadius:'15px', backgroundColor:'#F4A9ED '}} className='mt-5 w-75  py-4  mx-auto'>
        <h4 className='my-4'>Edit Sprint Log :: {project.projectName} </h4>
       <div>
         <form  onSubmit={submitSprint}>
            
            
            <label className='me-3 fw-bold'>Sprint Name: </label>
           <input onBlur={e => setSprintName(e.target.value)} placeholder='Sprint Name' type="text" /> <br /> <br />
            <label className='me-3 fw-bold'>Start Date: </label>
           <input onBlur={e => setStartDate(e.target.value)} placeholder='Sprint Name' type="date" /> <br /> <br />
           <label className='me-3 fw-bold'>End Date: </label>
           <input onBlur={e => setEndDate(e.target.value)} placeholder='Sprint Name' type="date" />  <br /> <br />

           <label  className='me-3 fw-bold'>Assigned To: </label>
          <input onBlur={e => setTasker(e.target.value)} type="email" placeholder='Enter Email'/>  <br /> <br />

          <Button type="submit">Assign Task</Button>  <Button onClick={e => history.push(`/project/${id}`)}> Back </Button>
         </form>
       </div>
        </section>
    </div>
  )
}

export default EditSprint