
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";

import "../../../styles/styles.css";
import { Card, CardText, Button, CardBody , CardTitle, CardSubtitle } from "reactstrap";
import img_photo from '../../../assets/img/img_photo.png';
import Rate from '../../../assets/img/Rate.png';
import { text } from "@fortawesome/fontawesome-svg-core";


export default function Testimony() {
  const swiperRef = useRef();
  return (
        <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card
          body color=""  className="holder" 
          >
          <img alt="Sample" src={img_photo} style={{width: '80px'}}/>
        <CardBody>
          <CardTitle>
            <img src={Rate} style={{width: '80px'}}/>
        </CardTitle>
              <CardSubtitle>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
              </CardSubtitle>
        <CardText>
          <p>John Dee 32, Bromo</p>
        </CardText>
        </CardBody>
        </Card>
        </SwiperSlide>

        <SwiperSlide>
        <Card
          body color=""  className="bgColor_holder"
          >
          <img alt="Sample" src={img_photo} style={{width: '80px'}}/>
        <CardBody>
          <CardTitle>
            <img src={Rate} style={{width: '80px'}}/>
        </CardTitle>
              <CardSubtitle>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
              </CardSubtitle>
        <CardText>
          <p>John Dee 32, Bromo</p>
        </CardText>
        </CardBody>
        </Card>
        </SwiperSlide>

        <SwiperSlide>
        <Card
          body color=""  className="bgColor_holder"
          >
          <img alt="Sample" src={img_photo} style={{width: '80px'}}/>
        <CardBody>
          <CardTitle>
            <img src={Rate} style={{width: '80px'}}/>
        </CardTitle>
              <CardSubtitle>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
              </CardSubtitle>
        <CardText>
          <p>John Dee 32, Bromo</p>
        </CardText>
        </CardBody>
        </Card>
        </SwiperSlide>

      </Swiper>
        <br></br>
      <button onClick={() => swiperRef.current.slideNext()}>
        <p>Slide next</p>
      </button>
    </>
  );
}






