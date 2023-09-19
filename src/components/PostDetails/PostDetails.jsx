import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const postData = useLoaderData();
  const {postId} = useParams();
  const { id, title, body } = postData;

  console.log(postId);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <h3>Post details Id: {id}</h3>
      <h4>Title: {title}</h4>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetails;
