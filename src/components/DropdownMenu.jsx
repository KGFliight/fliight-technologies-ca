import { Link } from 'react-router-dom'
import '../App.css'

function DropdownMenu({ title, items, isOpen, setIsOpen }) {
  return (
    <div className={`absolute left-1/2 transform -translate-x-1/2 mt-[18px] custom-border rounded ${isOpen ? 'block' : 'hidden'} bg-ft-dark-grey shadow-md`}
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}>
      <div className="px-4 py-2 text-sm font-regular text-ft-grey text-left leading-6 tracking-widest">
        {title}
      </div>
      {items.map((item, index) => (
        <Link key={index} to={item.path} className="block px-4 py-2 text-sm hover:bg-ft-grey w-40 text-ft-white text-left leading-loose tracking-widest">
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default DropdownMenu