import { Link, NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function Header() {
  return (
    <header className="w-full bg-ft-black">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex w-full h-20 justify-between items-center pl-12">
      {/* Home Logo */}
      <Link to="/" className="w-48 h-8">
        <img src="https://via.placeholder.com/189x31" alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <nav className="flex-1 space-x-12 inline-flex justify-center items-center text-center ml-[-3rem]">
        <NavLink to="/drones" activeClassName="text-ft-white">Drones</NavLink>
        <NavLink to="/solutions" activeClassName="text-ft-white">Solutions</NavLink>
        <NavLink to="/about" activeClassName="text-ft-white">About</NavLink>
        <NavLink to="/contact" activeClassName="text-ft-white">Contact</NavLink>
      </nav>

      {/* Request a Demo */}
      <div className="h-20 w-52 bg-rose-700 flex items-center justify-center">
        <Link to="/request-demo" className="text-lg font-rajdhani font-semibold uppercase text-zinc-100">Request a Demo</Link>
      </div>

      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>

      {/* Underline */}
      <div className="absolute bottom-0 left-0 w-full border-t border-zinc-100 opacity-20"></div>
    </header>
  );
}

export default Header;
