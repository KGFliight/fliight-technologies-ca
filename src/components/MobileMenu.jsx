import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import fliightLogo from '../assets/images/fliight-logo-white.png'
import fliightLogoBlack from '../assets/images/fliight-logo-black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faTimes,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MobileMenu({ isMenuOpen, setMenuOpen }) {
  const [techDropdownOpen, setTechDropdownOpen] = useState(false)

  const transitions = useTransition(techDropdownOpen, {
    from: { opacity: 0, transform: 'translateY(-50%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-50%)' },
    reverse: techDropdownOpen,
    delay: 80,
    config: { duration: 200 },
  })

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const toggleTechDropdown = () => {
    setTechDropdownOpen(!techDropdownOpen)
    //AOS.refresh();
  }

  const handleMenuItemClick = () => {
    setMenuOpen(false) // Close the menu
  }

  //const techDropdownAnimation = techDropdownOpen ? "fade-down" : "fade-up";

  const getHeaderClass = () => {
    if (
      location.pathname === '/aerial-platforms/deltaquad-pro' ||
      location.pathname === '/aerial-platforms/deltaquad-evo'
    ) {
      return {
        background: 'bg-white',
        textColor: 'text-ft-black',
        image: `${fliightLogoBlack}`,
        menuIconColor: 'text-ft-black',
      }
    } else {
      return {
        background: 'bg-ft-black',
        textColor: 'text-ft-white',
        image: `${fliightLogo}`,
        menuIconColor: 'text-ft-white',
      } // Default color
    }
  }

  const headerClasses = getHeaderClass()

  useEffect(() => {
    AOS.init() // Initialize AOS on component mount
  }, [])

  return (
    <div
      className={`w-full h-16 px-6 pt-6 pb-5 ${headerClasses.background} ${headerClasses.textColor} flex justify-between items-center`}
    >
      {/* Mobile Logo */}
      <Link to="/" className="w-32 h-5 z-50">
        <img src={headerClasses.image} alt="Mobile Logo" />
      </Link>

      {/* Hamburger Menu Icon */}
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
          <div className="flex flex-col my-20 mx-12 gap-8 justify-start h-full text-left uppercase text-4xl tracking-widest">
            <Link
              to=""
              className="text-white py-2"
              onClick={toggleTechDropdown}
            >
              <span className="">
                Aerial Platforms&nbsp;
                <FontAwesomeIcon icon={faChevronDown} className="text-2xl" />
              </span>
            </Link>
            {transitions((style, item) =>
              item ? (
                <animated.div style={style} className="flex flex-col gap-4">
                  <Link
                    to="/aerial-platforms/deltaquad-pro"
                    className="text-ft-grey py-1 pl-2 text-3xl"
                    onClick={handleMenuItemClick}
                  >
                    DeltaQuad Pro
                  </Link>
                  <Link
                    to="/aerial-platforms/deltaquad-evo"
                    className="text-ft-grey py-1 pl-2 text-3xl"
                    onClick={handleMenuItemClick}
                  >
                    DeltaQuad Evo
                  </Link>
                </animated.div>
              ) : (
                ''
              )
            )}
            <Link
              to="/about"
              className="text-white py-2"
              onClick={handleMenuItemClick}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white py-2"
              onClick={handleMenuItemClick}
            >
              Contact
            </Link>
          </div>
          <div className="absolute bottom-10 flex flex-col items-center w-full p-8 justify-center  gap-4">
            <p className="uppercase text-4xl leading-10">Ready for takeoff?</p>
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
  )
}

export default MobileMenu
