import React from 'react'
import './custombutton.css'

function Custombutton({ text, link }) {
  
    return (
      <a href={link} className="custom-button">{text}</a>
    );
    }

  export default Custombutton;