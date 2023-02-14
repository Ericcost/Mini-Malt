import { nanoid } from 'nanoid';

export function createPostsStore() {
  return {
    posts: [],
    addPost(text){
      this.posts.push({
        text, 
        id: nanoid(),
        name: 'John Doe',
        img: 'src/assets/sky.png'
      })
    },

    removePost(id) {
      this.posts = this.posts.filter(post => post.id!== id);
    }
  }
};