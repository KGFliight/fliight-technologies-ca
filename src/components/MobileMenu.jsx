import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faTimes,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fliightLogo from '../assets/images/fliight-logo-white.png';
import fliightLogoBlack from '../assets/images/fliight-logo-black.png';

const MobileMenu = ({ isMenuOpen, setMenuOpen }) => {
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const location = useLocation();

  const dropdownHeight = techDropdownOpen ? 'auto' : '0px';

  const transitions = useTransition(techDropdownOpen, {
    from: { 
      opacity: 0, 
      height: '0px',
      transform: 'translateY(-20px)',
      position: 'absolute',
      pointerEvents: 'none'
    },
    enter: { 
      opacity: 1, 
      height: dropdownHeight,
      transform: 'translateY(0px)',
      position: 'relative',
      pointerEvents: 'auto'
    },
    leave: { 
      opacity: 0, 
      height: '0px',
      transform: 'translateY(-20px)',
      position: 'absolute',
      pointerEvents: 'none'
    },
    config: { 
      tension: 300,
      friction: 20,
      duration: 200 
    },
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleTechDropdown = () => {
    setTechDropdownOpen(!techDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const getHeaderClass = () => {
    if (
      location.pathname === '/platforms/deltaquad-pro' ||
      location.pathname === '/platforms/deltaquad-evo' ||
      location.pathname === '/platforms/arace-griffin' ||
      location.pathname === '/platforms/arace-angel'
    ) {
      return {
        background: 'bg-white',
        textColor: 'text-ft-black',
        image: fliightLogoBlack,
        menuIconColor: 'text-ft-black',
      };
    }
    return {
      background: 'bg-ft-black',
      textColor: 'text-ft-white',
      image: fliightLogo,
      menuIconColor: 'text-ft-white',
    };
  };

  const headerClasses = getHeaderClass();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`w-full h-16 px-6 pt-6 pb-5 ${headerClasses.background} ${headerClasses.textColor} flex justify-between items-center`}>
      <Link to="/" className="w-32 h-5 z-50">
        <img src={headerClasses.image} alt="Mobile Logo" />
      </Link>

      <button
        className="w-5 h-6 flex flex-col justify-between cursor-pointer"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={`text-2xl ${headerClasses.menuIconColor}`}
        />
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-ft-black bg-opacity-99 z-50 h-full"
          data-aos="fade-right"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-delay="0"
        >
          <div className="absolute top-5 right-5 text-white text-3xl cursor-pointer">
            <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} />
          </div>
          
          <div className="flex flex-col my-14 mx-12 gap-2 justify-start h-full text-left uppercase text-4xl tracking-widest relative">
            <div className="relative">
              <Link
                to=""
                className="text-white py-2 block"
                onClick={toggleTechDropdown}
              >
                <span className="flex items-center">
                  Platforms
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`text-2xl ml-2 transform transition-transform duration-200 ${
                      techDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </span>
              </Link>
              
              {transitions((style, item) =>
                item ? (
                  <animated.div 
                    style={style}
                    className="flex flex-col gap-1.5 mt-2 mb-4"
                  >
                    {/*<span className="text-ft-grey text-2xl">Aerial:</span>*/}
                    <Link
                      to="/platforms/deltaquad-pro"
                      className="text-ft-grey py-1 pl-2 text-2xl hover:text-white transition-colors"
                      onClick={handleMenuItemClick}
                    >
                      DeltaQuad Pro
                    </Link>
                    <Link
                      to="/platforms/deltaquad-evo"
                      className="text-ft-grey py-1 pl-2 text-2xl hover:text-white transition-colors"
                      onClick={handleMenuItemClick}
                    >
                      DeltaQuad Evo
                    </Link>
                    <Link
                      to="/platforms/arace-griffin"
                      className="text-ft-grey py-1 pl-2 text-2xl hover:text-white transition-colors"
                      onClick={handleMenuItemClick}
                    >
                      Arace Griffin Pro
                    </Link>
                    <Link
                      to="/platforms/arace-angel"
                      className="text-ft-grey py-1 pl-2 text-2xl hover:text-white transition-colors"
                      onClick={handleMenuItemClick}
                    >
                      Arace Angel
                    </Link>
                  </animated.div>
                ) : null
              )}
            </div>
            <animated.div
              style={{
                transform: techDropdownOpen ? 'translateY(0px)' : 'translateY(0px)',
                transition: 'transform animation-delay-1000 0.2s ease-in-out'
              }}
              className="space-y-4"
            >
            <Link
              to="/about"
              className="text-white py-2 block"
              onClick={handleMenuItemClick}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white py-2 block"
              onClick={handleMenuItemClick}
            >
              Contact
            </Link>
            </animated.div>
          </div>

          <div className="absolute bottom-10 flex flex-col items-center w-full p-8 justify-center gap-4">
            <p className="uppercase text-3xl leading-10 text-ft-white">Ready for takeoff?</p>
            <Link
              to="/contact"
              className="bg-red-700 uppercase rounded-3xl py-3 w-80 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest text-center text-ft-white"
              onClick={handleMenuItemClick}
            >
              Contact Us
            </Link>
            <Link
              to="/request-demo"
              className="bg-gray-700 uppercase rounded-3xl py-3 w-80 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest text-center text-ft-white"
              onClick={handleMenuItemClick}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;