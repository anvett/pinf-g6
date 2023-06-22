import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FirstIma from '../../assets/slider-banner-1.jpg'
import SecondIma from '../../assets/slider-banner-2.jpg'
import ThirdIma from '../../assets/slider-banner-3.jpg'
import './slider.css';

const slider = () => {
    return (
      <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={FirstIma} alt="First slide"/>
        <Carousel.Caption>
          <h3>Neva</h3>
          <p>Neva</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SecondIma} alt="Second slide"/>
        <Carousel.Caption>
        <h3>Neva</h3>
          <p>Neva</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ThirdIma} alt="Third slide"/>
        <Carousel.Caption>
        <h3>Neva</h3>
          <p>Neva</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default slider;