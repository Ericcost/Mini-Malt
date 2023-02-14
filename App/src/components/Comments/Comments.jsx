import "./comments.scss";

const Comments = () => {
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      name: "John Doe",
      userId: 1,
      profilePic: "src/assets/atr.png",
    },

    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      name: "Jasmine Doe",
      userId: 2,
      profilePic: "src/assets/mars.png",
    }
  ]

  return (
    <div className="comments">
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt={comment.name} />
          <div className="info">  
            <span>{comment.name} </span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments;
