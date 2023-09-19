import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website, username } = user;
  return (
    <div>
      <h2>User about user: {name}</h2>
      <h3>Username: { username}</h3>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;