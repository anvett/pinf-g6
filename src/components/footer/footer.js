import React from 'react';
import './footer.css';
import Imalogo from './assets/logoPrueba.png';



const footer = () => {
  return (
    <div className='d-flex justify-content-between align-items-center footer p-5'>
        <p>© 2023. Todos los derechos reservados.</p>
      <img src={Imalogo} alt="Logo" className="logo" />
    </div>
  )
}




export default footer;
