import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      console.log('x', response.data);
      setPosts(response.data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="container">
      <Posts posts={posts} loading={isLoading} />
    </div>
  );
}

export default App;
