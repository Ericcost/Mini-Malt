import { Link } from 'react-router-dom';

//icons
import { AiTwotoneHome } from "react-icons/ai";
import { RiMoonLine, RiAppsLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { BsPersonFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <span>Mini-Malt</span>
        </Link>
        
        <AiTwotoneHome />
        <RiMoonLine />
        <RiAppsLine />
        <div className='search'>
          <SlMagnifier />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <BsPersonFill />
        <MdMailOutline />
        <TbBell />
        <div className='user'>
          <img src="/src/assets/atr.png" alt="John Doe fait l'arbre droit dans les chaînes du puy de dôme sur un manteau de neige" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;