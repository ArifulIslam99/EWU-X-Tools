import React, { useEffect, useState } from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'

 const Explore = () => {

  const [users, setUsers] = useState([])
  const [searchInput, setSearchInput] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [buttonValue, setButtonValue] = useState([])
  
  useEffect(()=>{
    fetch(`https://thawing-cove-39806.herokuapp.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  const handleSearchButton = e =>{
            setButtonValue(1)
            e.preventDefault()
            const filteredResult = users.find(user => user.email.toLowerCase()===(searchInput.toLowerCase()))
            setUserInfo(filteredResult)
  } 

  if(userInfo === null){return <Spinner animation="border" />}
  return (
    <div style={{backgroundColor:'grey', height:'90vh'}}>
        <h2 className="py-4 text-warning" >Explore Your Friends</h2> 

        

            <input
            placeholder='Write Email to Search'
            onBlur={e => setSearchInput(e.target.value)}
            className='me-2'
            data-testid="search-box"
            style={{width:'40%', height:'40px',border:'1px solid orange', borderRadius:'10px', textAlign:"center"}}
            type="text" name="" id="" /> 
            
            <Button data-testid="search-button" onClick={handleSearchButton} className='mb-2' variant="danger">Search</Button>

            {
              (userInfo!=null & buttonValue===1) ?

              <div 
              className='my-3 mx-auto row py-4'
              style={{width:'80%', backgroundColor:'#F9E4F7', borderRadius:'20px'}}
              > 

              <div className='col-lg-4'>
                 <img 
                style={{height:'200px', width:'200px', borderRadius:'20px'}}
                src={`data:image/jpeg;base64,${userInfo.image}`} alt="" /> 
              </div>
              <div className='col-lg-8 row text-start '>
                  <div className='col-lg-6 py-5'>
                  <p><span className='fw-bold'>Name:</span>  {userInfo.displayName} </p>
                  <p><span className='fw-bold'>Email:</span> {userInfo.email} </p>
                  <p><span className='fw-bold'>Role:</span> {userInfo.role} </p>
                  
                  </div>
                  <div className='col-lg-6 py-5'>
                  <p><span className='fw-bold'>Phone:</span>: {userInfo.phone}</p>
                  <p><span className='fw-bold'>Address:</span> {userInfo.address}</p> 
                  <a className="mx-1 fs-5" target='blank' href={userInfo.facebook}><i className="fab fa-facebook"> </i></a>
                  <a className="mx-1 fs-5" target='blank' href={userInfo.git}><i className="fab fa-github"> </i></a>
                  <a className="mx-1 fs-5" target='blank' href={userInfo.linkedIn}><i className="fab fa-linkedin"> </i></a>

                  </div>
              </div>
             
              </div> 

               :

              (buttonValue === 1)?

              <p id="extraText">No User With This Email</p>
              :
              <div></div>
             
            }
            
        
    </div>
  )
}

export default Explore;
