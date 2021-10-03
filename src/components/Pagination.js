import React from 'react';

const Pagination = (props) => {
  const { postsPerPage, totalPosts } = props;
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <nav className="pagination">
      {pageNums.map((num) => {
        return (
          <li key={num} className="page-item">
            <a href="!#" className="page-link">
              {num}
            </a>
          </li>
        );
      })}
    </nav>
  );
};

export default Pagination;
