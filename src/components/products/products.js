import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './products.css'
import FiIma from '../../assets/product1.jpg'
import SeIma from '../../assets/product2.jpg'

function Products() {
  return (
    <div name='products' className="container-fluid bg-colors py-5">
      <div className="row py-5">
        <div className="col-md-1 offset-ms-2">
        </div>
        <div className="col-md-10 col-sm-12 py-5">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={FiIma} alt="Second slide" />
              <div className="position-absolute bottom-0 end-0 text-start p-4 bg-dark bg-opacity-75 w-100">
                <h3 className="py-2">Diseño ligero con perfil bajo</h3>
                <h2 className="py-2">ASTRO ELIO</h2>
                <h3 className="py-2">Five panel en tejido impermeable de la más alta calidad.🎨 Beige y verde.</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={SeIma} alt="Second slide" />
              <div className="position-absolute bottom-0 end-0 text-start p-4 bg-dark bg-opacity-75 w-100">
              <h3 className="py-2">Diseño ligero con perfil bajo</h3>
                <h2 className="py-2">ASTRO BONE</h2>
                <h3 className="py-2">Five panel en tejido impermeable de la más alta calidad. Diseño ligero con perfil bajo</h3>
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