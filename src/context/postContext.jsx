import React from 'react';
import { createPostsStore } from '../stores/postStore';
import { useLocalObservable } from 'mobx-react';

const PostContext = React.createContext(null);

export const PostProvider = ({ children }) => {
  const postsStore = useLocalObservable(createPostsStore);


  return (
    <PostContext.Provider value={postsStore}>
      {children}
    </PostContext.Provider>
  )
};

export const usePostsStore = () => React.useContext(PostContext);