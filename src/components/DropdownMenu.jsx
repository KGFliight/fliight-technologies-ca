import { Link } from 'react-router-dom';
import '../App.css';

function DropdownMenu({ title, items, isOpen, setIsOpen }) {
  const isDeltaQuadPath = location.pathname === '/drones/deltaquad-pro' || location.pathname === '/drones/deltaquad-evo'

  

  const headerClasses = {
    background: isDeltaQuadPath ? 'bg-ft-grey' : 'bg-[#272B3A]',
    textColor: isDeltaQuadPath ? 'text-ft-black' : 'text-ft-white',
    hoverColor: isDeltaQuadPath ? 'hover:bg-ft-white' : 'hover:bg-ft-grey',
    hoverTextColor: isDeltaQuadPath ? 'hover:text-ft-black' : 'hover:text-ft-black', // Update this as needed
  };

  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 mt-[18px] custom-border rounded ${
        isOpen ? 'block' : 'hidden'
      } ${headerClasses.background} ${headerClasses.textColor} shadow-md`}
      onClick={() => setIsOpen(!isOpen)} // Toggle on click for tablets
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`px-4 py-2 mt-2 text-xs font-thin ${headerClasses.textColor} text-left leading-6 tracking-widest uppercase`}
      >
       {title}
      </div>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`block px-4 py-2 text-sm w-40 ${headerClasses.textColor} text-left leading-loose tracking-widest ${headerClasses.hoverColor} ${headerClasses.hoverTextColor} transition duration-200`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default DropdownMenu;
