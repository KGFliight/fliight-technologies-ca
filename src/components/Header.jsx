import { Link, NavLink } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import fliightLogo from '../assets/images/fliight-logo-white.png'

function Header() {
  return (
    <header className="fixed-top h-16 w-full bg-ft-black">
      {/* Desktop Navigation */}
      <div className="hidden border-b border-ft-dark-gray lg:flex md:flex w-full h-16 justify-between items-center pl-12">
        {/* Home Logo */}
        <Link
          to="/"
          className="z-50 transition-all duration-300 lg:w-48 lg:h-8 md:w-36 md:h-6"
        >
          <img src={fliightLogo} alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <nav className="flex-1 lg:space-x-12 md:space-x-8 inline-flex justify-center items-center text-center lg:ml-[-3rem]">
          <NavLink to="/drones" activeClassName="text-ft-white">
            Drones
          </NavLink>
          <NavLink to="/solutions" activeClassName="text-ft-white">
            Solutions
          </NavLink>
          <NavLink to="/about" activeClassName="text-ft-white">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="text-ft-white">
            Contact
          </NavLink>
        </nav>

        {/* Request a Demo */}
        <div className="h-16 w-52 bg-rose-700 flex items-center justify-center">
          <Link
            to="/request-demo"
            className="text-lg font-rajdhani font-semibold uppercase text-zinc-100"
          >
            Request a Demo
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden h-16 transition-all duration-300">
        <MobileMenu />
      </div>

      {/* Underline 
      <div className="absolute bottom-0 left-0 w-full border-t border-zinc-100 opacity-20"></div>*/}
    </header>
  )
}

export default Header
