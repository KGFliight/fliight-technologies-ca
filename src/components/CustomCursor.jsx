import React from 'react';
import '../App.css'

const CustomCursor = ({ position }) => {
  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return <div className="custom-cursor max-lg:hidden" style={style}></div>;
};

export default CustomCursor;
