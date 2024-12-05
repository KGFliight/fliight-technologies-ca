import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faTimes,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import fliightLogo from '../assets/images/fliight-logo-white.png'
import fliightLogoBlack from '../assets/images/fliight-logo-black.png'
import { useContext } from 'react'
import { MobileMenuContext } from './MobileMenuContext'

const MobileMenu = () => {
  const { setIsMobileMenuOpen } = useContext(MobileMenuContext)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [techDropdownOpen, setTechDropdownOpen] = useState(false)
  const location = useLocation()

  // Full screen menu transition
  const menuTransition = useTransition(isMenuOpen, {
    from: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
    config: {
      tension: 280,
      friction: 30,
    },
  })

  // Tech dropdown transition
  const techDropdownTransition = useTransition(techDropdownOpen, {
    from: {
      opacity: 0,
      height: 0,
      transform: 'translateY(-20px)',
      overflow: 'hidden',
    },
    enter: {
      opacity: 1,
      height: 'auto',
      transform: 'translateY(0px)',
      overflow: 'visible',
    },
    leave: {
      opacity: 0,
      height: 0,
      transform: 'translateY(-20px)',
      position: 'absolute',
      pointerEvents: 'none',
    },
    config: {
      tension: 300,
      friction: 20,
      duration: 200,
    },
  })

  // Static menu items transition
  const staticMenuItemsTransition = useTransition(!techDropdownOpen, {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(20px)',
      pointerEvents: 'none',
    },
    config: {
      tension: 300,
      friction: 20,
      duration: 200,
    },
  })

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      setIsMobileMenuOpen(!prev) // Update global context
      return !prev
    })
  }

  const toggleTechDropdown = () => {
    setTechDropdownOpen((prev) => !prev)
  }

  const handleMenuItemClick = () => {
    setMenuOpen(false)
    setTechDropdownOpen(false)
  }

  const getHeaderClass = () => {
    const platformPaths = [
      '/platforms/deltaquad-pro',
      '/platforms/deltaquad-evo',
      '/platforms/arace-griffin',
      '/platforms/arace-angel',
    ]

    if (platformPaths.includes(location.pathname)) {
      return {
        background: 'bg-white',
        textColor: 'text-ft-black',
        image: fliightLogoBlack,
        menuIconColor: 'text-ft-black',
      }
    }
    return {
      background: 'bg-ft-black',
      textColor: 'text-ft-white',
      image: fliightLogo,
      menuIconColor: 'text-ft-white',
    }
  }

  const headerClasses = getHeaderClass()

  return (
    <div
      className={`w-full h-16 px-6 pt-6 pb-5 ${headerClasses.background} ${headerClasses.textColor} flex justify-between items-center`}
    >
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

      {menuTransition(
        (menuStyle, isMenuVisible) =>
          isMenuVisible && (
            <animated.div
              style={menuStyle}
              className="fixed inset-0 bg-ft-black bg-opacity-99 z-50 h-full"
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

                  {techDropdownTransition((dropdownStyle, dropdownItem) =>
                    dropdownItem ? (
                      <animated.div
                        style={dropdownStyle}
                        className="flex flex-col gap-1.5 mt-2 mb-4"
                      >
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

                {!techDropdownOpen &&
                  staticMenuItemsTransition(
                    (style, item) =>
                      item && (
                        <animated.div style={style}>
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
                      )
                  )}

                <div className="absolute bottom-16 flex flex-col items-center w-full py-8 gap-4">
                  <p className="uppercase text-3xl leading-10 text-ft-white text-center tracking-wide">
                    Ready for takeoff?
                  </p>
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
            </animated.div>
          )
      )}
    </div>
  )
}

export default MobileMenu
