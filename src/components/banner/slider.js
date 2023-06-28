import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import FirstIma from '../../assets//slidercentrado_1.jpg'
import SecondIma from '../../assets/slider-banner-2.jpg'
import ThirdIma from '../../assets/slider-banner-3.jpg'
import Custombutton from '../../common/cusbutton'
import './slider.css'

function Slider() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => { setIndex(selectedIndex); }

  return (
    <Carousel name='home' className="carousel-top" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={8000}>
        <img className="d-block w-100" src={FirstIma} alt="First slide" />
        <div className="position-absolute top-50 start-0 translate-middle-y text-white p-4 ps-5">
          <h1 className='pb-4'>Descubre nuestra nueva colección</h1>
          <h3 className='pb-4'>Neva vuelve de un viaje mágico con gente muy especial</h3>
          <Custombutton text="Ver Colección" link="products" />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img className="d-block w-100" src={SecondIma} alt="Second slide" />
        <div className="position-absolute top-50 start-0 translate-middle-y text-white p-4 ps-5">
        <h1 className='pb-4'>Experimenta los beneficios de Neva</h1>
          <h3 className='pb-4'>Descubre cómo nuestras gorras pueden mejorar tu estilo de vida</h3>
          <Custombutton text="Ver Beneficios" link="services" />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img className="d-block w-100" src={ThirdIma} alt="Third slide" />
        <div className="position-absolute top-50 start-0 translate-middle-y text-white p-4 ps-5">
        <h1 className='pb-4'>Para más información</h1>
          <h3 className='pb-4'>Estamos para responder tus preguntas y brindarte el mejor servicio</h3>
          <Custombutton text="Contáctanos Aquí" link="contact" />
        </div>
      </Carousel.Item>
    </Carousel>
  )
}



export default Slider;