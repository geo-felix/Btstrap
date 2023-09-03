import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/box-seam.svg'
import move from './images/moving-van.jpg'

const Rbst02 =()=>{
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} style={{height:'30px'}} alt="logo image"/>Move It</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <NavDropdown title="Services" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Postcode"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Check</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="px-4 pt-5 my-5 text-center border-bottom">
                <h1 class="display-4 fw-bold text-body-emphasis">Move With Joy</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Welcome to our website, where we are on a mission to provide exceptional 
                    moving services to customers in the US. As a startup, we believe that moving doesn't have to be
                     stressful or complicated, and we are passionate about making the process as seamless and enjoyable 
                     as possible.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Get a Quote</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact US</button>
                    </div>
                </div>
                <div class="overflow-hidden" style={{maxHeight: '30vh'}}>
                    <div class="container px-5">
                        <img src={move} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" style={{width:"700", height:"500"}} loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rbst02