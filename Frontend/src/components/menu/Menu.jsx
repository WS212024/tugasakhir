import { Link } from "react-router-dom";
import Data from './Data.jsx'
import { CiLogout } from "react-icons/ci";

const Menu = () => {
  return (
    <div className='hidden flex-col sm:flex justify-end gap-10 py-3 px-2'>
        <div className='flex flex-col '>
          {Data.map((item) =>(
            <Link key={item.id} to={item.url} className='group'>
              <div className='flex gap-4 px-3 py-7 items-center border-b-2 border-b-[#b3d6f9] cursor-pointer  group-hover:bg-[#758ba5] duration-500 '>
                {item.icon}
                <span className='font-raleway font-medium text-[#223A59] group-hover:text-white '>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Menu