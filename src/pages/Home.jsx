import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import CustomCursor from '../components/CustomCursor';

function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <CustomCursor position={cursorPosition} />
      <Header/>
      <div className="flex-1 flex items-center justify-center">
      <Landing/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;