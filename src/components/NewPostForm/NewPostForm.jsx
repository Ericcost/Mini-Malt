import React from 'react';
import { usePostsStore } from '../../context/postContext';
import './newpostform.scss'

export const NewPostForm = () => {
  const [postText, setPostText] = React.useState('');
  const postsStore = usePostsStore();

  return (
    <>
      <input type="text" placeholder="Write a post..." value={postText} onChange={(e) => setPostText(e.target.value)}/>
      <button onClick={() => postsStore.addPost(postText)}>New Post</button>
    </>
  )
}