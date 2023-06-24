import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './products.css'
import FiIma from '../../assets/product1.jpg'
import SeIma from '../../assets/product2.jpg'

function Products() {
  return (
    <div className="container-fluid bg-colors">
      <div className="row py-5">
        <div className="col">
        </div>
        <div className="col-10 py-5">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={FiIma} alt="Second slide" />
              <div className="position-absolute bottom-0 end-0 text-start p-4 bg-dark bg-opacity-25">
                <h3>Diseño ligero con perfil bajo</h3>
                <h2>ASTRO ELIO</h2>
                <h3>Five panel en tejido impermeable de la más alta calidad.🎨 Beige y verde.</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={SeIma} alt="Second slide" />
              <div className="position-absolute bottom-0 end-0 text-start p-4 bg-dark bg-opacity-25">
              <h3>Diseño ligero con perfil bajo</h3>
                <h2>ASTRO BONE</h2>
                <h3>Five panel en tejido impermeable de la más alta calidad.🎨-Beige y verde. Diseño ligero con perfil bajo</h3>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col">
        </div>
      </div >
    </div >
  )
}

export default Products;