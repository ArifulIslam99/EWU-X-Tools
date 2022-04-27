import React, { useEffect, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const SprintProgress = ({sp}) => {
    const [user, setUser] = useState([])
    const history = useHistory()

    useEffect(()=>{
        fetch(`https://thawing-cove-39806.herokuapp.com/user/${sp.tasker}`)
        .then(res => res.json())
        .then(data => setUser(data))
      },[])

      const updateProject = id =>{

        const status = {
            status: 'completed'
        }
        fetch(`https://thawing-cove-39806.herokuapp.com/sprint/${id}`,{
            method: "PUT",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(status)
            
        })
        .then(res => res.json())
        .then(data => {
            alert("Updated Successfully")
            history.go(0)
        })
      }


  return (
    <div>
    <Col className="my-2">
      <Card style={{backgroundColor:'magenta'}}>
        <Card.Body>
          <Card.Title>{sp.sprintName}  <img style={{borderRadius:'350px'}} className='mx-1' src={`data:image/jpeg;base64,${user.image}`} width="40" height="20"/>  </Card.Title>
          <Card.Text>
             <p><i class="fas fa-clock">  </i> {sp.startDate} - {sp.endDate} </p>
             <Button onClick={()=>updateProject(sp._id)} variant='success'>Mark as Completed</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
    </div>
  )
}

export default SprintProgress