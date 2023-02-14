import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import "./stories.scss";

function Stories() {

  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: 'src/assets/atr.png'
    },
    {
      id: 2,
      name: "John Doe",
      img: 'src/assets/atr.png'
    },
    {
      id: 3,
      name: "John Doe",
      img: 'src/assets/atr.png'
    },
    {
      id: 4,
      name: "John Doe",
      img: 'src/assets/atr.png'
    }
  ]

  return (
    <div className="stories">
      <div className="story" key={currentUser.id}>
        <img src={currentUser.profilePic} alt="Vision d'une partie de la surface de la planète Mars" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => ( 
        <div className="story" key={story.id}>
          <img src={story.img} alt={story.name} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories;