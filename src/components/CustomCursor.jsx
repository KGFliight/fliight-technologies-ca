import React from 'react';
import '../App.css'

const CustomCursor = ({ position }) => {
  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return <div className="custom-cursor" style={style}></div>;
};

export default CustomCursor;
