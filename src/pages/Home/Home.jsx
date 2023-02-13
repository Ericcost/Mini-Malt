import { Observer } from "mobx-react";
import { NewPostForm } from "../../components/NewPostForm/NewPostForm";
import { usePostsStore } from "../../context/postContext";
import "./Home.scss";

function Home() {
  const postsStore = usePostsStore();

  return (
    <Observer>
      {() => 
        <div className="home">
          <div className="posts">
            {postsStore.posts.map(post => (
              <div key={post.id}>
                {post.text}
              </div>
            ))}
          </div>
          <NewPostForm />
        </div>
      }
    </Observer>
    
  )
}

export default Home;