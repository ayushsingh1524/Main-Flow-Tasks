import React from 'react';

function Button({ label, className,width }) {

  const buttonStyle={
    width:`${width}px`,
    padding:'6px',
    borderRadius:'20px',
    backgroundColor:'black',
    color:"white",
    fontFamily:'Roboto',
    fontSize:'15px',
    cursor:'Pointer'
  }
  return (
    <button className={className} style={buttonStyle}>
      {label}
    </button>
  );
}

export default Button;