import React, { useEffect, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const SprintCompleted = ({sp}) => {
    const [user, setUser] = useState([])
    const history = useHistory()

    useEffect(()=>{
        fetch(`https://thawing-cove-39806.herokuapp.com/user/${sp.tasker}`)
        .then(res => res.json())
        .then(data => setUser(data))
      },[])



  return (
    <div>
    <Col className="my-2">
      <Card style={{backgroundColor:'greenyellow'}}>
        <Card.Body>
          <Card.Title>{sp.sprintName}  <img style={{borderRadius:'350px'}} className='mx-1' src={`data:image/jpeg;base64,${user.image}`} width="40" height="20"/>  </Card.Title>
          <Card.Text>
             <p><i class="fas fa-clock">  </i> {sp.startDate} - {sp.endDate} </p> 
             <p className='text-success fw-bold'> {user.displayName} has successfully completed the task! </p>
             
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
    </div>
  )
}

export default SprintCompleted