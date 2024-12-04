import { useState, useEffect } from 'react';
import '../App.css'

const CustomCursor = ({ position }) => {
  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Functions to toggle hover state
    const addHover = () => setIsHovered(true);
    const removeHover = () => setIsHovered(false);

    // Select clickable elements
    const clickables = document.querySelectorAll('a, button, input[type="submit"], input[type="button"], [role="button"]');

    // Add event listeners to clickable elements
    clickables.forEach(el => {
      el.addEventListener('mouseover', addHover);
      el.addEventListener('mouseout', removeHover);
    });

    // Cleanup function to remove event listeners
    return () => {
      clickables.forEach(el => {
        el.removeEventListener('mouseover', addHover);
        el.removeEventListener('mouseout', removeHover);
      });
    };
  }, []);

  // Apply dynamic styles including hover state
  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    // Add transition or other effects if needed
    transition: 'transform 0.2s ease-out', // Example: smooth transition for the hover effect
  };

  return (
    <div
      className={`custom-cursor max-lg:hidden ${isHovered ? 'custom-cursor-hover' : ''}`}
      style={style}
    ></div>
  );
};
export default CustomCursor;
