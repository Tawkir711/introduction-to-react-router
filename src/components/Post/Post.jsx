import React from 'react';

import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
  const { id, title } = post;


  const navigate = useNavigate();
  
  const handleDetails = () => {
    navigate(`/post/${id}`);
  }
  return (
    <div className='post'>
      <h3>Post of id: { id}</h3>
      <p>Title: {title}</p>
      <Link to={`/post/${id}`}>
      <button onClick={handleDetails}>Post Details</button>
      </Link>
    </div>
  );
};

export default Post;