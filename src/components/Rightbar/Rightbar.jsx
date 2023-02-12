import "./rightbar.scss";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="container"> 
        <div className="item">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/mars.png" alt="photo de profil de John Doe"/>
              <span>John Doe</span>
            </div>
          
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/mars.png" alt="photo de profil de John Doe"/>
              <span>John Doe</span>
            </div>
          
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/mars.png" alt="photo de profil de John Doe"/>
              <p>
                <span>John Doe</span> changed their cover
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/mars.png" alt="photo de profil de John Doe"/>
              <div className="online" />
              <span>John Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/mars.png" alt="photo de profil de John Doe"/>
              <div className="online" />
              <span>John Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/mars.png" alt="photo de profil de John Doe"/>
              <div className="online" />
              <span>John Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/mars.png" alt="photo de profil de John Doe"/>
              <div className="online" />
              <span>John Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="src/assets/mars.png" alt="photo de profil de John Doe"/>
              <div className="online" />
              <span>John Doe</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar;