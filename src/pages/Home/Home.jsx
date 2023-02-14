import { Observer } from "mobx-react";
import { NewPostForm } from "../../components/NewPostForm/NewPostForm";
import Post from "../../components/Post/Post";
import Stories from "../../components/Stories/Stories";
import { usePostsStore } from "../../context/postContext";
import "./home.scss";

function Home() {
  const postsStore = usePostsStore();

  return (
    <Observer>
      {() => 
        <div className="home">
          <Stories />
            {postsStore.posts.map(post => (
              <div key={post.id}  className="posts">
                <Post post={post}/>
              </div>
            ))}
          <NewPostForm />
        </div>
      }
    </Observer>
    
  )
}

export default Home;