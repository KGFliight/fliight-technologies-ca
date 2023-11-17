import { Link } from 'react-router-dom'
import { useState } from 'react'
import fliightLogo from '../assets/images/fliight-logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [techDropdownOpen, setTechDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleTechDropdown = () => {
    setTechDropdownOpen(!techDropdownOpen)
  }
  return (
    <div className="w-full h-16 px-6 pt-6 pb-5 bg-ft-black flex justify-between items-center">
      {/* Mobile Logo */}
      <Link to="/" className="w-32 h-5 z-50">
        <img src={fliightLogo} alt="Mobile Logo" />
      </Link>

      {/* Hamburger Menu Icon */}
      <div
        className="w-5 h-6 flex flex-col justify-between cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="h-0.5 bg-ft-white"></div>
        <div className="h-0.5 bg-ft-white"></div>
        <div className="h-0.5 bg-ft-white"></div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-ft-black bg-opacity-99 z-50">
          <div className="flex flex-col my-20 mx-12 gap-8 justify-start h-full text-left uppercase text-5xl">
            <Link
              to=""
              className="text-white py-2 flex items-center"
              onClick={toggleTechDropdown}
            >
              Technology &nbsp;
              <FontAwesomeIcon icon={faChevronDown} className="text-2xl " />
            </Link>
            {techDropdownOpen && (
              <div className="flex flex-col gap-4">
                <Link
                  to="/drones/deltaquad-pro"
                  className="text-ft-grey py-1 pl-2 text-3xl"
                >
                  DeltaQuad Pro
                </Link>
                <Link
                  to="/drones/deltaquad-evo"
                  className="text-ft-grey py-1 pl-2 text-3xl"
                >
                  DeltaQuad Evo
                </Link>
              </div>
            )}
            <Link to="/about" className="text-white py-2">
              About
            </Link>
            <Link to="/contact" className="text-white py-2">
              Contact
            </Link>
          </div>
          <div className="absolute bottom-10 flex flex-col items-center w-full p-8 justify-center  gap-4">
            <Link
              to="/contact"
              className="bg-red-700 uppercase rounded-3xl py-3 w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/request-demo"
              className="bg-gray-700 uppercase rounded-3xl py-3 w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest text-center"
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
