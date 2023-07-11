import React from 'react';
import { Button, Col, Container, Row, img } from "reactstrap";
import ImgService from '../../../assets/img/img_service.png'
import Desc from '../../../assets/img/desc.png'


export default function OurServices(){

    
    return(
  
    <Container>
        <br></br>
        <br></br>
        <br></br>

        <Row>
            <Col>
                <img src={ImgService} width="459px" alt="Happy Girl image"  height="428px"/>
            </Col>
            <Col>
                <img src={Desc} width="468px" height="376px" alt="desc"/>
            </Col>
        </Row>
    </Container>
        
    )

}