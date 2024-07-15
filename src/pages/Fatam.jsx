import React, { useState, useEffect } from 'react';

function Fatam() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // 768px is a common breakpoint for tablets
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    handleResize(); // Check initial screen size

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-ft-black bg-opacity-50 z-50">
          <div className="bg-ft-white p-4 rounded shadow-lg text-center w-[80%]">
            <p className="text-ft-black">
              Please note that this is not optimised for mobile, please access on PC for a better experience.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-ft-dark-grey text-ft-white rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="flex-grow">
        <iframe
          src="https://glitch.com/embed/#!/embed/firetech-fatam-1-2?path=&previewSize=100"
          title="firetech-fatam-1-2 on Glitch"
          allow="geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"
          allowFullScreen
          style={{ height: '100vh', width: '100%', border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}

export default Fatam;
