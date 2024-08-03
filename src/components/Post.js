import React from 'react';

const Post = ({ post, onPostClick, onDeletePost }) => {
  return (
    <div>
      <h2 onClick={() => onPostClick(post.id)}>{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p>
      <button onClick={() => onDeletePost(post.id)}>Delete</button>
    </div>
  );
};

export default Post;
