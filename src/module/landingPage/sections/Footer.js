import React from "react";
import logo from '../../../assets/img/logo.png';
import {Col, Container, Row, List, ListInlineItem} from "reactstrap";
import SocialFollow from "./SocialFollow";

export default function Footer(){
    return(
       <Container>
        <br></br>
        <br></br>
        <br></br>
            <Row>
            <Col>
			<p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
			<p>binarcarrental@gmail.com</p>
			<p>081-233-334-808</p>
            </Col>
            <Col>
			<List type="unstyled">
				<li><a href="#our service" style={{color: "black", textDecorationLine: "none"}}>Our Service</a></li>
				<li><a  href="#Why Us" style={{color: "black", textDecorationLine: "none"}}>Why Us</a></li>
				<li><a  href="#Testimonial" style={{color: "black", textDecorationLine: "none"}}>Link</a></li>    
				<li><a  href="#FAQ" style={{color: "black", textDecorationLine: "none"}}>FAQ</a></li>    
		  	</List>
              </Col>
              <Col>
			<List type="inline">
                <ListInlineItem><SocialFollow/></ListInlineItem>    	
			</List>
              </Col>
              <Col>
                <p>Copyright Binar 2022</p>
		        <a href="#"><img src={logo} alt="logoImage"/></a>
              </Col>
	  
      </Row>
    </Container>

    )
}