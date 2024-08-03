import React, { useState } from 'react';
import Post from './Post';

const PostList = ({ posts, onPostClick, onDeletePost }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 10;

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {currentPosts.map(post => (
        <Post key={post.id} post={post} onPostClick={onPostClick} onDeletePost={onDeletePost} />
      ))}
      <div>
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostList;
