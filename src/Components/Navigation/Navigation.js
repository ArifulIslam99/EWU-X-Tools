import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../src/images/logo2.png'
import plus from '../../../src/images/plus-solid.svg'
import useAuth from '../../hooks/useAuth'
export const Navigation = () => {
   
  const {user, logout} = useAuth();
  const [userInfo, setUserInfo] = useState(null)

    useEffect(()=>{
      fetch(`https://thawing-cove-39806.herokuapp.com/user/${user.email}`)
      .then(res => res.json())
      .then(data => setUserInfo(data))  
  },[])
  return (
    <div>
        <Navbar  collapseOnSelect expand="lg" style={{backgroundColor:'#5F6537'}} variant="dark">
  <Container>
    {
      (!user.uid)? 
      <Navbar.Brand  as={Link}  to='/'> <img className='w-50' src={logo} alt="" /> </Navbar.Brand>
      :
      <Navbar.Brand  as={Link}  to='/profile'> <img className='w-50' src={logo} alt="" /> </Navbar.Brand>
    }
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      <Nav.Link as={Link} to='/profile'>User Profile</Nav.Link>
      <Nav.Link as={Link} to='/newproject'> <img style={{display:'inline', width:'20px'}} src={plus} alt="" /> Create</Nav.Link>
    

    </Nav>

    <Nav>
      

         {
        (user.uid) && <p style={{color:'white', marginTop:'3px'}}>
           { (user.photoURL) && <span> <img style={{width:'35px', height:'35px'}}
        src={user.photoURL} alt="" /></span> }
           {(user.displayName) && <span> Welcome, {user.displayName} </span>}
         <Button  variant='danger' onClick={logout}> logout </Button> </p>
      }
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
