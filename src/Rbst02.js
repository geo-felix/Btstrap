import React from "react";
import {Button,Carousel} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/box-seam.svg'
import move from './images/moving-van.jpg'
import briefcase from './images/briefcase.svg'
import bus from './images/bus-front.svg'
import heart from './images/chat-square-heart.svg'
import arrowRight from './images/chevron-right.svg'
import couple from './images/couple.jpg'
import family from './images/family.jpg'
import dog from './images/dog.jpg'
const featureIcon={
    width: '4rem',
    height: '4rem',
    borderRadius: '0.75rem',
    
  }
const divStyle={
    alignItems:'start !important'
}

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
            <div  class="container px-4 py-5" id="featured-3">
                <h2  className="pb-2 border-bottom ">Why Move With Us?</h2>
                <div style={divStyle} class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div  class="feature col">
                        <div style={featureIcon} class="d-inline-flex align-items-center justify-content-center
                         text-bg-primary bg-gradient fs-2 mb-3">
                            <img src={briefcase} style={{height:'30px'}} alt="logo image"/>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Professional</h3>
                        <p>Our team of professional movers are trained to prioritize efficiency, 
                            organization, and attention to detail. We understand that your possessions 
                            are more than just objects - they are a reflection of your life, memories, 
                            and experiences. That's why we take extra care to ensure that everything is packed 
                            and transported with the utmost care and attention.
                        </p>
                        <a href="#" class="icon-link">
                        Get a quote
                        <img src={arrowRight} style={{height:'20px'}} alt="logo image"/>
                        </a>
                    </div>
                    <div class="feature col">
                        <div style={featureIcon} class=" d-inline-flex align-items-center justify-content-center
                         text-bg-primary bg-gradient fs-2 mb-3">
                            <img src={bus} style={{height:'30px'}} alt="bus image"/>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Countrywide</h3>
                        <p>We offer a range of services to suit your individual needs, whether you're moving locally or across the country. Our team can handle everything from packing and loading to unloading and unpacking, so you can focus on settling into your new home. And with our transparent pricing and no hidden fees, you can trust that you're getting a fair and competitive rate for our services.
                        </p>
                        <a href="#" class="icon-link">
                        Get a quote
                            <img src={arrowRight} style={{height:'20px'}} alt="logo image"/>
                        </a>
                    </div>
                    <div class="feature col">
                        <div style={featureIcon} class=" d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <img src={heart} style={{height:'30px'}} alt="logo image"/>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Personal Touch</h3>
                            <p>At our core, we believe that moving should be an exciting and positive experience, not a stressful one. By providing exceptional moving services in the US, we hope to revolutionize the way people think about moving and provide a better, more personalized experience for our customers. Contact us today to learn more about how we can help you with your next move.
                            </p>
                        <a href="#" class="icon-link">
                        Get a quote
                            <img src={arrowRight} style={{height:'20px'}} alt="logo image"/>
                        </a>
                    </div>
                </div>
            </div>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img src={couple} style={{ maxHeight: '600px', width:'100%'  }}  alt="couple image"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={dog}  style={{ maxHeight: '600px', width:'100%'  }}alt="dog image"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={family} style={{ maxHeight: '600px', width:'100%' }} alt="family image"/>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}
export default Rbst02