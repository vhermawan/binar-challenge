
import React, { useState } from 'react';
import { Button, Col, Container, Row } from "reactstrap";
import CarImage from '../../../assets/img/img_car.png'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

export default function Faq(props){

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };


    return(

        <Container>
            <br></br>
            <br></br>
            
            <Row>
                <Col>
                    <div>
                    <h4>Frequently Asked Question</h4>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </Col>
                <Col>
                <div>
        <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Apa saja syarat yang dibutuhkan?</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Berapa hari minimal sewa mobil lepas kunci?</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Berapa hari sebelumnya sabaiknya booking sewa mobil?</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Apakah Ada biaya antar-jemput?</AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Bagaimana jika terjadi kecelakaan</AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
      
                </Col>
            </Row>
        <br></br>
        <br></br>
        <br></br>
        </Container>
         
    );
}