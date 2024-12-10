import { Link } from 'react-router-dom';
import '../App.css';

function DropdownMenu({ title, items, isOpen, setIsOpen }) {

  const headerClasses = {
    background: 'bg-[#272B3A]',
    textColor: 'text-ft-white',
    hoverColor:  'hover:bg-ft-grey',
    hoverTextColor:  'hover:text-ft-black',
  };

  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 mt-[18px] custom-border rounded ${
        isOpen ? 'block' : 'hidden'
      } ${headerClasses.background} ${headerClasses.textColor} shadow-md`}
      onClick={() => setIsOpen(!isOpen)}
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
          className={`block px-4 py-2 text-sm w-44 whitespace-nowrap overflow-hidden text-ellipsis ${headerClasses.textColor} text-left leading-loose tracking-widest ${headerClasses.hoverColor} ${headerClasses.hoverTextColor} transition duration-200`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default DropdownMenu;