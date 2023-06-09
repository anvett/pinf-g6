import React from 'react';
import './footer.css';
import Imalogo from './assets/135321382_1541252649399166_3805080622442541819_n.jpg';



const footer = () => {
  return (
    <div className='d-flex justify-content-between align-items-center footer p-5'>
        <p>© 2023. Todos los derechos reservados.</p>
      <img src={Imalogo} alt="Logo" className="logo" />
    </div>
  )
}




export default footer;
