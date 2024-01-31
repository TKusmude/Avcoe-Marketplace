import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from './assets/first.jpg';
import SecondImage from './assets/second.jpg';
import ThirdImage from './assets/third.jpg';

const Slider = () => {

    return(
    <Carousel>
      <Carousel.Item>
        <FirstImage text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <SecondImage text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ThirdImage text="Third slide" />
      </Carousel.Item>
    </Carousel>
    )
    
}

    

export default Slider
