import React from 'react';
import { Button, Col, Container, Row, img } from "reactstrap";
import CarImage from '../../../assets/img/img_car.png'
import Frame98 from '../../../assets/img/Frame 98.png'
import Frame99 from '../../../assets/img/Frame 99.png'
import Frame100 from '../../../assets/img/Frame 100.png'
import Frame101 from '../../../assets/img/Frame 101.png'

export default function WhyUs(){
  return (
    
    <Container>
        <br></br>
        <br></br>
        <br></br>

        <h1 className="hero-section-text-title">Why Us</h1>
        <p style={{fontWeight: 'bold'}}>Mengapa harus pilih Binar Car Rental?</p>
        <Row style={{gap: 16}}>
            <Col>
                <img src={Frame98} alt="desc" style={{width: 240}}/>
            </Col>
            <Col>
                <img src={Frame99} alt="desc" style={{width: 240}}/>
            </Col>
            <Col>
                <img src={Frame100} alt="desc" style={{width: 240}}/>
            </Col>
            <Col>
                <img src={Frame101} alt="desc" style={{width: 240}}/>
            </Col>
    </Row>
    <br></br>
        <br></br>
        <br></br> 
        <br></br>     

    </Container>

   

  )
}