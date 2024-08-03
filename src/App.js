import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import { fetchPosts, createPost } from './services/api';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPostDetail, setShowPostDetail] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const handlePostClick = (postId) => {
    const post = posts.find(post => post.id === postId);
    setSelectedPost(post);
    setShowPostDetail(true);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleCreatePost = async (post) => {
    try {
      const newPost = await createPost(post);
      setPosts([newPost, ...posts]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    setShowPostDetail(false);
  };

  return (
    <div>
      <Header />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {showPostDetail ? (
        <div>
        <PostDetail post={selectedPost} />
        <button onClick={handleBackToList}>Back to List</button>
        </div>
      ) : (
        <div>
        <CreatePost onCreatePost={handleCreatePost} />
        <PostList posts={posts} onPostClick={handlePostClick} onDeletePost={handleDeletePost} />
        </div>
      )}
    </div>
  );
};

export default App;
