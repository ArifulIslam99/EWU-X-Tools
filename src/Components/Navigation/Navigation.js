import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../src/images/logo2.png'
import plus from '../../../src/images/plus-solid.svg'
export const Navigation = () => {
  return (
    <div>
        <Navbar  collapseOnSelect expand="lg" style={{backgroundColor:'#5F6537'}} variant="dark">
  <Container>
  <Navbar.Brand  as={Link} to='/'> <img className='w-50' src={logo} alt="" /> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      <Nav.Link as={Link} to='/profile'>User Profile</Nav.Link>
      <Nav.Link as={Link} to='/newprojct'> <img style={{display:'inline', width:'20px'}} src={plus} alt="" /> Create</Nav.Link>
    

    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
