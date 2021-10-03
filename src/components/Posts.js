import React from 'react';

const Posts = (props) => {
  const { loading, posts } = props;

  if (loading) {
    return <h3>Loading...</h3>;
  }

  console.log(posts);

  return (
    <ul className="list-group mb-5 mt-5">
      {posts.map((p) => {
        return (
          <li className="list-group-item" key={posts.id}>
            {p.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
