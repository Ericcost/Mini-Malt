import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GiRapidshareArrow } from "react-icons/gi";
import { BsChatRightText } from "react-icons/bs";

import "./post.scss";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { useState } from "react";

function Post({post}) {

  const [commentOpen, setCommentOpen] = useState(false);


  //Temporary
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.img} alt={post.name} key={post.name}/>
            <div className="details">
              <Link to={`/profile/${post.id}`} style={{textDecoration: "none", color:"inherit"}}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <BiDotsHorizontalRounded />
        </div>
        <div className="content">
          <p>{post.text}</p>
          <img src={post.img} alt={post.name} />
        </div>
        <div className="info">
          <div className="item">
            { liked ?  <AiFillHeart/> :  <AiOutlineHeart /> }
            12 Likes
          </div>
          <div className="item">
            <BsChatRightText onClick={() => setCommentOpen(!commentOpen)}/> 
            12 Comments
          </div>
          <div className="item">
            <GiRapidshareArrow /> 
            Share
          </div>
        </div>  
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post;