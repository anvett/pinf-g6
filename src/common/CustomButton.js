import React from 'react'

function CustomButton({ text, link }) {
    const buttonStyles = {
      border: '1px solid #19ab19',
      borderRadius: '25px',
      color: 'white',
      backgroundColor: '#19ab19',
      transition: '1s',
      padding: '5px 20px',
    };
  
    return (
      <a href={link} style={buttonStyles}>
        {text}
      </a>
    );
  }
  
  export default CustomButton;
  