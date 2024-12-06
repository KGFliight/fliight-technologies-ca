import { Link, NavLink, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import fliightLogo from '../assets/images/fliight-logo-white.png'
import fliightLogoBlack from '../assets/images/fliight-logo-black.png'
import ScrollToTop from '../utilities/ScrollToTop'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { useContext } from 'react'
import { MobileMenuContext } from './MobileMenuContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../App.css'

// for TEMPLATE insertion, see lines 28, 69. Can use solutions if wanting separate dropdown items around line 128

function Header() {
  const [isDronesDropdownOpen, setIsDronesDropdownOpen] = useState(false)
  //const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false)
  const { isMobileMenuOpen, setIsMobileMenuOpen } =
    useContext(MobileMenuContext)

  const location = useLocation()

  const getHeaderClass = () => {
    if (
      location.pathname === '/platforms/deltaquad-pro' ||
      location.pathname === '/platforms/deltaquad-evo' ||
      location.pathname === '/platforms/arace-griffin-pro' ||
      location.pathname === '/platforms/arace-angel'
      // TEMPLATE if adding product can add here, be sure to also include || on the above line (27) if adding a new location.pathname. Location.pathname to match url on app.jsx
      // this changes the colour of the header to match background
    ) {
      return {
        background: 'bg-white',
        textColor: 'text-ft-black',
        image: `${fliightLogoBlack}`,
        borderColor: 'border-ft-white',
      }
    } else {
      return {
        background: 'bg-ft-black',
        textColor: 'text-ft-white',
        image: `${fliightLogo}`,
        borderColor: 'border-ft-dark-grey',
      } // Default color
    }
  }
  const headerClasses = getHeaderClass()

  let closeTimeoutId

  const toggleDropdown = (setDropdownState, currentState) => {
    clearTimeout(closeTimeoutId)
    setDropdownState(!currentState) // Toggle state
  }

  const openDropdown = (setDropdownState) => {
    clearTimeout(closeTimeoutId)
    setDropdownState(true)
  }

  const closeDropdown = (setDropdownState) => {
    closeTimeoutId = setTimeout(() => {
      setDropdownState(false)
    }, 100) // Adjust delay as needed
  }

  const dronesDropdownItems = [
    { name: 'Arace Angel', path: '/platforms/arace-angel' },
    { name: 'Arace Griffin Pro', path: '/platforms/arace-griffin-pro' },
    { name: 'DeltaQuad Evo', path: '/platforms/deltaquad-evo' },
    { name: 'DeltaQuad Pro', path: '/platforms/deltaquad-pro' },

    //template product could go here, following the same configuration as the ones above. Be sure to adjust the path correctly
  ]

  // relating to line 128 (or so). can be uncommented and adjusted for template items if preferred
  //const solutionsDropdownItems = [
  //  { name: 'Aerowhere', path: '/solutions/aerowhere' },
  //  { name: 'Argus', path: '/solutions/argus' },
  //]

  AOS.init()

  return (
    <header className={`fixed-top h-16 w-full ${headerClasses.background}`}>
      {/* Desktop Navigation */}
      <div
        className={`hidden border-b ${headerClasses.borderColor} lg:flex md:flex w-full h-16 justify-between items-center pl-12 `}
      >
        {/* Home Logo */}
        <Link
          to="/"
          className="z-50 transition-all duration-300 lg:w-48 lg:h-8 md:w-36 md:h-6 hover:opacity-80 "
          onClick={<ScrollToTop />}
        >
          <img src={headerClasses.image} alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <nav className="flex-1 md:space-x-8 lg:space-x-24 inline-flex justify-center items-center text-center font-['Inter'] text-base font-light leading-7 ">
          <div
            className="relative group"
            onMouseEnter={() => openDropdown(setIsDronesDropdownOpen)}
            onMouseLeave={() => closeDropdown(setIsDronesDropdownOpen)}
            onClick={() =>
              toggleDropdown(setIsDronesDropdownOpen, isDronesDropdownOpen)
            }
          >
            <NavLink
              to=""
              className={`hover:opacity-80 ${headerClasses.textColor} transition duration-200`}
            >
              Platforms
            </NavLink>
            {/* Dropdown Menu props */}
            <DropdownMenu
              title="Aerial"
              items={dronesDropdownItems}
              isOpen={isDronesDropdownOpen}
              setIsOpen={setIsDronesDropdownOpen}
            />
          </div>

          {/*
          COMMENTED OUT 'SOLUTIONS' DROPDOWN MENU. CAN UNCOMMENT OR ADJUST FOR PRODUCTS. IF WANTING TO JUST HAVE SINGLE LINK, FOLLOW SAME CONFIGURATION AS 'ABOUT' NAVLINK BELOW
          <div
            className="relative group"
            onMouseEnter={() => openDropdown(setIsSolutionsDropdownOpen)}
            onMouseLeave={() => closeDropdown(setIsSolutionsDropdownOpen)}
            onClick={() =>
              toggleDropdown(
                setIsSolutionsDropdownOpen,
                isSolutionsDropdownOpen
              )
            }
          >
            <NavLink
              to="/solutions"
              className={`hover:opacity-80 ${headerClasses.textColor}`}
            >
              Solutions
            </NavLink>
            <DropdownMenu
              title="Solutions"
              items={solutionsDropdownItems}
              isOpen={isSolutionsDropdownOpen}
              setIsOpen={setIsSolutionsDropdownOpen}
            />
          </div>*/}

          <NavLink
            to="/about"
            className={`hover:opacity-80 ${headerClasses.textColor} transition duration-200`}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={`hover:opacity-80 ${headerClasses.textColor} transition duration-200`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Request a Demo */}
        <div
          className={`h-16 w-48 lg:w-[240px] bg-ft-red border-b ${headerClasses.borderColor} flex items-center justify-center hover:bg-[#5b172c] hover:opacity-90  transition duration-300  active:bg-ft-dark-grey text-ft-white`}
        >
          <Link
            to="/request-demo"
            className="text-lg font-rajdhani font-semibold uppercase text-ft-white"
          >
            Request a Demo
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden h-16 transition-all duration-300">
        <MobileMenu
          isMenuOpen={isMobileMenuOpen}
          setMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      {/* Underline 
      <div className="absolute bottom-0 left-0 w-full border-t border-zinc-100 opacity-20"></div>*/}
    </header>
  )
}

export default Header
