import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import FirstIma from '../../assets/slider-banner-1.jpg'
import SecondIma from '../../assets/slider-banner-2.jpg'
import ThirdIma from '../../assets/slider-banner-3.jpg'
// import './slider.css';
import CustomButton from '../../common/CustomButton'

function Slider() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => { setIndex(selectedIndex); }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={8000}>
        <img className="d-block w-100" src={FirstIma} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <CustomButton text="Botón 1" link="" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img className="d-block w-100" src={SecondIma} alt="Second slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <CustomButton text="Botón 1" link="" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img className="d-block w-100" src={ThirdIma} alt="Third slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <CustomButton text="Botón 1" link="" />
        </Carousel.Caption>
        {/* <div className="carousel-description">
          <h1>Lorem ipsum dolor sit amet</h1>
          <h2>Neva</h2>
          <CustomButton text="Botón 3" link="" />
        </div> */}
      </Carousel.Item>
    </Carousel>
  )
}



export default Slider;