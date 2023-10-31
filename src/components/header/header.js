import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./header.css";





const Header = (props) => {

  // const title = props.title;
  // const parts = title.split(' ');

  return (
    <>
   
      <Navbar expand="lg" >
          <Navbar.Brand href="#">
            <Image  
              src="assets/images/Lakhan2.png"
              width="150"
              height="auto"
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
              rounded 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='custom-toggle-button ' />
          <Navbar.Offcanvas id={"offcanvasNavbar"} aria-labelledby={`offcanvasNavbarLabel`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel`} className="text-light">
                <Image  src="/assets/images/Lakhan-removebg-preview.png"
                  width="150"
                  height="auto"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                  rounded 
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5 ">
                <Nav.Link href="#action1" className='me-5 text-light'>HOME</Nav.Link>
                <Nav.Link href="#action2" className='me-5 text-light'>ABOUT</Nav.Link>
                <Nav.Link href="#action3" className='me-5 text-light'>SKILLS</Nav.Link>
                <Nav.Link href="#action4" className='me-5 text-light'>PORTFOLIO</Nav.Link>
                <Nav.Link href="#action5" className='me-5 text-light'>HIRE ME</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        
      </Navbar>
      
    
    </>

  );
};

export default Header;