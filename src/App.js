import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      setPosts(response.data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const getIndexOfLastPost = currentPage * postsPerPage;
  const getIndexOfFirstPost = getIndexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(getIndexOfFirstPost, getIndexOfLastPost);

  const switchPageHandler = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">The Blog</h2>
      <Posts posts={currentPosts} loading={isLoading} />
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        onSwitchPage={switchPageHandler}
      />
    </div>
  );
}

export default App;
