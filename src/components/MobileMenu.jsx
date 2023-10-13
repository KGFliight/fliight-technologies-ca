import { Link } from 'react-router-dom';

function MobileMenu() {
  return (
    <div className="w-full h-16 px-6 pt-6 pb-5 bg-ft-black flex justify-between items-center">
      {/* Mobile Logo */}
      <Link to="/" className="w-32 h-5">
        <img src="https://via.placeholder.com/134x22" alt="Mobile Logo" />
      </Link>

      {/* Hamburger Menu Icon */}
      <div className="w-5 h-6 flex flex-col justify-between cursor-pointer">
        <div className="h-0.5 bg-ft-white"></div>
        <div className="h-0.5 bg-ft-white"></div>
        <div className="h-0.5 bg-ft-white"></div>
      </div>
    </div>
  );
}

export default MobileMenu;
