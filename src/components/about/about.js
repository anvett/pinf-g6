import React from 'react';
import './about.css';

function About() {
  return (
    <div name='about' className='py-5 my-5'>
      <div className="row py-5 my-5">
        <div className='col border-about'></div>
        <div className="col-7">
          <h2>Belleza en todo lo que te rodea</h2>
          <h2 className='subtittle-title pb-4'>Vive en Modo Neva</h2>
          <p>Neva más que una marca es un estilo de vida, somos códigos y costumbres cotidianas que les acompañan en lo interno y externo en su modus vivendi, vivimos de un modo y es en modo neva. Nos ha caído colección de otro planeta, vuelven las Astro 🛸 con diferentes combinaciones de colores. Elaboradas en textil corduroy de la más alta calidad, no te quede sin la tuya!</p>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}

export default About;