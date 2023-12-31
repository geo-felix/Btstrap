import React from "react";
import { Button, Card } from 'react-bootstrap';
import flower from './images/flower.jpg';



const divStyle={
    display:'flex',
    height: '100vh',
    justifyContent:'center',
    alignItems: 'center'
  
  }

const Rbst01=()=>{
    return(
        <div style={divStyle}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flower} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Rbst01