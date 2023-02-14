import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { MdPlace } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { FiMoreVertical } from "react-icons/fi";
import Sky from "/src/assets/sky.png";
import Mars from "/src/assets/mars.png";
import './profile.scss';


function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img className="cover" src={Sky} />
        <img className="profilePic" src={Mars} />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <AiOutlineFacebook />
            </a>
            <a href="http://instagram.com">
              <AiOutlineInstagram />
            </a>
            <a href="http://linkedin.com">
              <AiOutlineLinkedin />
            </a>
            <a href="http://pinterest.com">
              <ImPinterest2 />
            </a>
          </div>
          <div className="center">
            <span> John Doe </span>
            <div className="info">
              <div className="item">
                <MdPlace  />
                <span>USA</span>
              </div>
              <div className="item">
                <GrLanguage  />
                <span>John</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <TfiEmail />
            <FiMoreVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;